import React from "react"
import { Select } from "@react-three/postprocessing"
import { useCursor } from "@react-three/drei"

import Desk from "./Desk"
import Laptop from "./Laptop"
import MapPin from "../MapPin"
import useMainStore from "../../store/useMainStore"
import { FOCUS_RESEARCH } from "../../constants"
import Tooltip from "../../components/Tootlip"
import ResearchPage from "../../html/ResearchPage"

const ResearchArea = ({ nodes, materials }) => {

    const [isHovered, setIsHovered] = React.useState(false)

    // Get state and setter from the store
    const focusTarget = useMainStore.useFocusTarget()
    const setFocusTarget = useMainStore.useSetFocusTarget()
    const setCameraPosition = useMainStore.useSetCameraPosition()
    const setControlsTargetOffset = useMainStore.useSetControlsTargetOffset()

    const onPointerOver = React.useCallback(() => {
        if (focusTarget === null) setIsHovered(true)
    }, [focusTarget])

    const onPointerOut = React.useCallback(() => {
        if (focusTarget === null) setIsHovered(false)
    }, [focusTarget])

    const onClick = React.useCallback(() => {
        if (focusTarget === null) {
            setIsHovered(false)
            setFocusTarget(FOCUS_RESEARCH)
            setCameraPosition([1.37, 0.7, .3])
            setControlsTargetOffset([.104, 0, -.16])
        }
    }, [focusTarget])

    useCursor(isHovered)

    return (
        <>
            <Select enabled={isHovered}>
                <group onPointerOver={onPointerOver} onPointerOut={onPointerOut} onClick={onClick}>
                    <Desk nodes={nodes} materials={materials} position={[1.558, 0.3, -0.028]}/>
                    <Laptop nodes={nodes} materials={materials} position={[1.474, 0.61, 0.14]} rotation={[Math.PI, Math.PI / 6, 0]} isOpen={focusTarget === FOCUS_RESEARCH}>
                        <ResearchPage isShow={focusTarget === FOCUS_RESEARCH} />
                    </Laptop>
                    
                    <MapPin nodes={nodes} materials={materials} position={[1.474, 1, 0.14]} rotation={[0, Math.PI / 2, 0]} isVisible={focusTarget !== FOCUS_RESEARCH} />
                </group>
            </Select>
            <Tooltip position={[1.474, 1.5, 0.14]} rotation={[0,-Math.PI / 2,0]} opacity={Number(isHovered)} scale={Number(isHovered)}>
                <p style={{
                    fontSize: '4pt',
                    margin: 0
                }}>Penelitian</p>
            </Tooltip>
        </>
    )
}

export default ResearchArea