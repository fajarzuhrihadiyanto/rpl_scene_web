import React from "react"
import { Select } from "@react-three/postprocessing"
import { useCursor } from "@react-three/drei"

import Desk from "./Desk"
import Laptop from "./Laptop"
import MapPin from "../MapPin"
import useMainStore from "../../store/useMainStore"
import { FOCUS_COMMUNITY_SERVICE } from "../../constants"
import Tooltip from "../../components/Tootlip"
import CommunnityServicePage from "../../html/CommunityServicePage"
import { useResponsiveScreen } from "../../utils"

const CommunityServiceArea = ({ nodes, materials }) => {

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
            const cameraPosition = isMobile ? [-0.868, 0.7, -1.35] : [-0.991, 0.7, -1.547]
            setIsHovered(false)
            setFocusTarget(FOCUS_COMMUNITY_SERVICE)
            setCameraPosition(cameraPosition)
            setControlsTargetOffset([-.104, 0, -.16])
        }
    }, [focusTarget])

    useCursor(isHovered)
    return (
        <>
            <Select enabled={isHovered}>
                <group onPointerOver={onPointerOver} onPointerOut={onPointerOut} onClick={onClick}>
                    <Desk nodes={nodes} materials={materials} position={[-1.167, 0.3, -1.861]}/>
                    <Laptop nodes={nodes} materials={materials} position={[-1.095, 0.61, -1.707]} rotation={[Math.PI, -Math.PI / 6, 0]} isOpen={focusTarget === FOCUS_COMMUNITY_SERVICE}>
                        <CommunnityServicePage isShow={focusTarget === FOCUS_COMMUNITY_SERVICE} />
                    </Laptop>
                    <MapPin nodes={nodes} materials={materials} position={[-1.095, 1, -1.707]} rotation={[0, Math.PI / 2, 0]} isVisible={focusTarget !== FOCUS_COMMUNITY_SERVICE} />
                </group>
            </Select>
            <Tooltip position={[-1.095, 1.5, -1.707]} opacity={Number(isHovered)} scale={Number(isHovered)}>
                <p style={{
                    fontSize: '4pt',
                    margin: 0
                }}>Pengabdian Masyarakat</p>
            </Tooltip>
        </>
    )
}

export default CommunityServiceArea