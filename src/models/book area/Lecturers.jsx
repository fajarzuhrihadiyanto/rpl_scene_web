import React from "react"
import { useCursor } from "@react-three/drei"
import { Select } from "@react-three/postprocessing"

import useMainStore from "../../store/useMainStore"
import Book from "./Book"
import { FOCUS_LECTURER, FOCUS_LECTURER_DETAIL } from "../../constants"
import Tooltip from "../../components/Tootlip"
import { LecturerPagesLeft, LecturerPagesRight } from "../../html/LecturerPages"
import { useResponsiveScreen } from "../../utils"
import useDataStore from "../../store/dataStore"

const Lecturers = ({ nodes, materials }) => {

    // Get state and setter from the store
    const focusTarget = useMainStore.useFocusTarget()
    const setFocusTarget = useMainStore.useSetFocusTarget()
    const setCameraPosition = useMainStore.useSetCameraPosition()
    const setControlsTargetOffset = useMainStore.useSetControlsTargetOffset()
    const professors = useDataStore.useProfessors()
    const {isMobile} = useResponsiveScreen()

    console.log(professors)

    // =====| SINGLE BOOK AREA |=====
    // State wether the book is hovered or not, and wether the book is clicked or not
    const [hoveredBookId, setHoveredBookId] = React.useState(-1)
    const [clickedBookId, setClickedBookId] = React.useState(-1)

    // book hover function
    const onBookOver = React.useCallback((e, id) => {
        // only set hover state while on subject view
        if (focusTarget === FOCUS_LECTURER) {
            // stop propagation make sure only the first hit object will rise the event
            e.stopPropagation()
            setHoveredBookId(id)
        }
    }, [focusTarget])

    // book unhove function
    const onBookOut = React.useCallback(() => {
        // only set hover state while on subject view
        if (focusTarget === FOCUS_LECTURER) {
            setHoveredBookId(-1)
        }
    }, [focusTarget])

    // book click function
    const onBookClick = React.useCallback((e, id) => {
        // book only clickable while on subject view
        if (focusTarget === FOCUS_LECTURER) {
            e.stopPropagation()
            setFocusTarget(FOCUS_LECTURER_DETAIL)

            if (isMobile) {
                const cameraPosition = [-2.1, 1.225, -.95], controlsTargetOffset = [-.01,0,0]
                
                setCameraPosition(cameraPosition)
                setControlsTargetOffset(controlsTargetOffset)
            }

            // reset hovered book id
            setHoveredBookId(-1)

            // prevent bug when other book can be clicked while on a book view
            if (clickedBookId === -1) setClickedBookId(id)
        }
    }, [focusTarget, clickedBookId])

    const back = React.useCallback(() => {
        // set focus back to subject
        setFocusTarget(FOCUS_LECTURER)

        if (isMobile) {
            const cameraPosition = [-1, 1.225, -.925], controlsTargetOffset = [-.01,0,0]
            
            setCameraPosition(cameraPosition)
            setControlsTargetOffset(controlsTargetOffset)
        }
        
        // reset clicked book id
        setClickedBookId(-1)
    }, [])
    // =====| SINGLE BOOK AREA |=====

    // set cursor to pointer if either any or all subject books are hovered, and not focused on book detail
    useCursor((hoveredBookId !== -1) && focusTarget !== FOCUS_LECTURER_DETAIL)

    return (
        <group position={[-3.573, 1.22, -0.211]} rotation={[0, Math.PI / 2, 0]}>
            {professors.map((professor, i) => {
                // status hovered if the book is hovered and the focus target is on subject and no book is clicked
                const hovered = hoveredBookId === i && focusTarget === FOCUS_LECTURER && clickedBookId === -1

                // status shown if the book is clicked
                const shown = clickedBookId === i
                
                return (
                    <>
                    <Select enabled={hovered}>
                        <Book
                            nodes={nodes}
                            materials={materials}
                            position={[0 + i * .06, 0, 0]}
                            shown={shown}
                            index={i}
                            onPointerOver={(e) => {onBookOver(e, i)}}
                            onPointerOut={onBookOut}
                            onClick={(e) => {onBookClick(e, i)}}
                            >
                                {shown &&
                                <>
                                    <LecturerPagesLeft photo={professor.photo_url} name={professor.fullname} isHeadLab={professor.is_head_lab}/>
                                    <LecturerPagesRight backFn={back} lecturer={professor} />
                                </>
                                }
                        </Book>
                    </Select>
                    {focusTarget === FOCUS_LECTURER && <Tooltip position={[i * .06 + 0,.3,.01]} htmlProps={{scale: hovered ? [.1,.1,.1] : [0,0,0]}} scale={Number(hovered)} opacity={Number(hovered)}>
                        <p
                            style={{
                                margin: 0,
                                fontSize: '8pt',
                                textAlign: 'center'
                            }}
                        >
                            {professor.fullname}
                        </p>
                    </Tooltip>}
                    </>
            )})}
        </group>
    )
}

export default Lecturers