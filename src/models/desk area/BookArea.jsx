import React from "react"
import { Select } from "@react-three/postprocessing"
import { useCursor } from "@react-three/drei"

import Desk from "./Desk"
import Laptop from "./Laptop"
import MapPin from "../MapPin"
import useMainStore from "../../store/useMainStore"
import { FOCUS_BOOKS } from "../../constants"
import Tooltip from "../../components/Tootlip"
import BookPage from "../../html/BookPage"
import { useResponsiveScreen } from "../../utils"

const BookArea = ({ nodes, materials }) => {
    const [isHovered, setIsHovered] = React.useState(false)

    // Get state and setter from the store
    const focusTarget = useMainStore.useFocusTarget()
    const setFocusTarget = useMainStore.useSetFocusTarget()
    const setCameraPosition = useMainStore.useSetCameraPosition()
    const setControlsTargetOffset = useMainStore.useSetControlsTargetOffset()
    const {isMobile} = useResponsiveScreen()

    const onPointerOver = React.useCallback(() => {
        if (focusTarget === null) setIsHovered(true)
    }, [focusTarget])

    const onPointerOut = React.useCallback(() => {
        if (focusTarget === null) setIsHovered(false)
    }, [focusTarget])

    const onClick = React.useCallback(() => {
        if (focusTarget === null) {
            const cameraPosition = isMobile ? [1.235, 0.7, -2.415] : [1.358, 0.7, -2.615]
            setIsHovered(false)
            setFocusTarget(FOCUS_BOOKS)
            setCameraPosition(cameraPosition)
            setControlsTargetOffset([.104, 0, -.16])
        }
    }, [focusTarget])

    useCursor(isHovered)

    return (
        <>
            <Select enabled={isHovered}>
                <group onPointerOver={onPointerOver} onPointerOut={onPointerOut} onClick={onClick}>
                    <Desk nodes={nodes} materials={materials} position={[1.558, 0.3, -2.915]}/>
                    <Laptop nodes={nodes} materials={materials} position={[1.462, 0.61, -2.775]} rotation={[Math.PI, Math.PI / 6, 0]} isOpen={focusTarget === FOCUS_BOOKS}>
                        <BookPage isShow={focusTarget === FOCUS_BOOKS} />
                    </Laptop>
                    <MapPin nodes={nodes} materials={materials} position={[1.462, 1, -2.775]} rotation={[0, Math.PI / 2, 0]} isVisible={focusTarget !== FOCUS_BOOKS} />
                </group>
            </Select>
            <Tooltip position={[1.462, 1.5, -2.775]} opacity={Number(isHovered)} scale={Number(isHovered)}>
                <p style={{
                    fontSize: '4pt',
                    margin: 0
                }}>Buku</p>
            </Tooltip>
        </>
    )
}

export default BookArea