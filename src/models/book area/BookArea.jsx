import React from "react"
import { Select } from "@react-three/postprocessing"
import { useCursor } from "@react-three/drei"

import MapPin from "../MapPin"
import BookCase from "./BookCase"
import Books from "./Books"
import Subjects from "./Subjects"
import useMainStore from "../../store/useMainStore"
import { FOCUS_LECTURER, FOCUS_SUBJECT } from "../../constants"
import Lecturers from "./Lecturers"
import Tooltip from "../../components/Tootlip"

const BookArea = ({ nodes, materials }) => {

    // Get state and setter from the store
    const focusTarget = useMainStore.useFocusTarget()
    const setFocusTarget = useMainStore.useSetFocusTarget()
    const setCameraPosition = useMainStore.useSetCameraPosition()
    const setControlsTargetOffset = useMainStore.useSetControlsTargetOffset()

    // ### SUBJECT AREA ###
    const [isHovered, setIsHovered] = React.useState(false)

    // subject area hover function
    const onPointerOver = React.useCallback(() => {
        // only set hover state while on main view
        if (focusTarget === null) {
            setIsHovered(true)
        }
    }, [focusTarget])

    // subject area unhove function
    const onPointerOut = React.useCallback(() => {
        // only set hover state while on main view
        if (focusTarget === null) {
            setIsHovered(false)
        }
    }, [focusTarget])

    // subject area click function
    const onClick = React.useCallback(() => {
        // only rise click event while on main view
        if (focusTarget === null) {
            setIsHovered(false)
            setFocusTarget(FOCUS_SUBJECT)
            setCameraPosition([-2.65, 1.725, -.95])
            setControlsTargetOffset([-.01,0,0])
        }
    }, [focusTarget])

    // ### END OF SUBJECT AREA ###

    // ### SUBJECT AREA ###
    const [isLecHovered, setLecIsHovered] = React.useState(false)

    // subject area hover function
    const onLecPointerOver = React.useCallback(() => {
        // only set hover state while on main view
        if (focusTarget === null) {
            setLecIsHovered(true)
        }
    }, [focusTarget])

    // subject area unhove function
    const onLecPointerOut = React.useCallback(() => {
        // only set hover state while on main view
        if (focusTarget === null) {
            setLecIsHovered(false)
        }
    }, [focusTarget])

    // subject area click function
    const onLecClick = React.useCallback(() => {
        // only rise click event while on main view
        if (focusTarget === null) {
            setLecIsHovered(false)
            setFocusTarget(FOCUS_LECTURER)
            setCameraPosition([-2.65, 1.225, -.95])
            setControlsTargetOffset([-.01,0,0])
        }
    }, [focusTarget])

    // ### LECTURERS AREA ###



    // ### END OF LECTURERS AREA ###

    useCursor(isHovered || isLecHovered)

    return (
        <>
            <BookCase nodes={nodes} materials={materials} />
            {focusTarget === null && <MapPin nodes={nodes} materials={materials} position={[-3.573, 2.3, -0.5]} rotation={[0, Math.PI / 2, 0]} />}

            <Select enabled={isHovered}>
                <group onPointerOver={onPointerOver} onPointerOut={onPointerOut} onClick={onClick}>
                    <Subjects nodes={nodes} materials={materials} />
                </group>
            </Select>
            <Tooltip position={[-3.573, 2.3, -0.5]} rotation={[0,Math.PI / 2,0]} opacity={Number(isHovered)} scale={Number(isHovered)}>
                <p style={{
                    fontSize: '4pt',
                    margin: 0
                }}>Mata Kuliah</p>
            </Tooltip>

            <Select enabled={isLecHovered}>
                <group onPointerOver={onLecPointerOver} onPointerOut={onLecPointerOut} onClick={onLecClick}>
                    <Lecturers nodes={nodes} materials={materials} />
                </group>
            </Select>
            <Tooltip position={[-3.573, 1.8, -0.5]} rotation={[0,Math.PI / 2,0]} opacity={Number(isLecHovered)} scale={Number(isLecHovered)}>
                <p style={{
                    fontSize: '4pt',
                    margin: 0
                }}>Dosen</p>
            </Tooltip>

            {/* <Books nodes={nodes} materials={materials} position={[-3.573, 1.72 - .5, -0.211]} rotation={[0, Math.PI / 2, 0]} /> */}
            <Books nodes={nodes} materials={materials} position={[-3.573, 1.72 - 1, -0.211]} rotation={[0, Math.PI / 2, 0]} />
            <Books nodes={nodes} materials={materials} position={[-3.573, 1.72 - 1.5, -0.211]} rotation={[0, Math.PI / 2, 0]} />
        </>
    )
}

export default BookArea