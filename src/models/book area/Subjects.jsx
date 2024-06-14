import React from "react"
import { useCursor } from "@react-three/drei"
import { Select } from "@react-three/postprocessing"

import useMainStore from "../../store/useMainStore"
import Book from "./Book"
import { FOCUS_BOOK_DETAIL, FOCUS_SUBJECT } from "../../constants"
import Tooltip from "../../components/Tootlip"
import { SubjectPagesLeft, SubjectPagesRight } from "../../html/SubjectPages"
import { useResponsiveScreen } from "../../utils"
import useDataStore from "../../store/dataStore"

const Subjects = ({ nodes, materials }) => {

    // Get state and setter from the store
    const focusTarget = useMainStore.useFocusTarget()
    const setFocusTarget = useMainStore.useSetFocusTarget()
    const setCameraPosition = useMainStore.useSetCameraPosition()
    const setControlsTargetOffset = useMainStore.useSetControlsTargetOffset()
    const subjects = useDataStore.useSubjects()
    const {isMobile} = useResponsiveScreen()

    // =====| SINGLE BOOK AREA |=====
    // State wether the book is hovered or not, and wether the book is clicked or not
    const [hoveredBookId, setHoveredBookId] = React.useState(-1)
    const [clickedBookId, setClickedBookId] = React.useState(-1)

    // book hover function
    const onBookOver = React.useCallback((e, id) => {
        // only set hover state while on subject view
        if (focusTarget === FOCUS_SUBJECT) {
            // stop propagation make sure only the first hit object will rise the event
            e.stopPropagation()
            setHoveredBookId(id)
        }
    }, [focusTarget])

    // book unhove function
    const onBookOut = React.useCallback(() => {
        // only set hover state while on subject view
        if (focusTarget === FOCUS_SUBJECT) {
            setHoveredBookId(-1)
        }
    }, [focusTarget])

    // book click function
    const onBookClick = React.useCallback((e, id) => {
        // book only clickable while on subject view
        if (focusTarget === FOCUS_SUBJECT) {
            e.stopPropagation()
            setFocusTarget(FOCUS_BOOK_DETAIL)

            if (isMobile) {
                const cameraPosition = [-2.1, 1.725, -.95], controlsTargetOffset = [-.01,0,0]
                
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
        setFocusTarget(FOCUS_SUBJECT)

        if (isMobile) {
            const cameraPosition = [-1, 1.725, -.925], controlsTargetOffset = [-.01,0,0]
            
            setCameraPosition(cameraPosition)
            setControlsTargetOffset(controlsTargetOffset)
        }
        
        // reset clicked book id
        setClickedBookId(-1)
    }, [])
    // =====| SINGLE BOOK AREA |=====

    // set cursor to pointer if either any or all subject books are hovered, and not focused on book detail
    useCursor((hoveredBookId !== -1) && focusTarget !== FOCUS_BOOK_DETAIL)

    return (
        <group position={[-3.573, 1.72, -0.211]} rotation={[0, Math.PI / 2, 0]}>
            {subjects.map((subject, i) => {
                // status hovered if the book is hovered and the focus target is on subject and no book is clicked
                const hovered = hoveredBookId === i && focusTarget === FOCUS_SUBJECT && clickedBookId === -1

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
                                    <SubjectPagesLeft title={subject.name} description={subject.description} mandatory={subject.is_compulsory}/>
                                    <SubjectPagesRight objective={subject.objective} backFn={back} />
                                </>
                                }
                        </Book>
                    </Select>
                    {focusTarget === FOCUS_SUBJECT && <Tooltip position={[i * .06 + 0,.3,.01]} htmlProps={{scale: hovered ? [.1,.1,.1] : [0,0,0]}} scale={Number(hovered)} opacity={Number(hovered)}>
                        <p
                            style={{
                                margin: 0,
                                fontSize: '8pt',
                                textAlign: 'center'
                            }}
                        >
                            {subject.name}
                        </p>
                    </Tooltip>}
                    </>
            )})}
        </group>
    )
}

export default Subjects