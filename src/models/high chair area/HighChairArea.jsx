import React from "react"
import { useCursor } from "@react-three/drei"
import { Select } from "@react-three/postprocessing"

import MapPin from "../MapPin"
import Laptop from "../desk area/Laptop"
import useMainStore from "../../store/useMainStore"
import { FOCUS_FACILITIES } from "../../constants"
import Tooltip from "../../components/Tootlip"
import FacilityPage from "../../html/FacilityPage"
import { useResponsiveScreen } from "../../utils"

const Chair = ({ nodes, materials, ...props}) => {
    return (
        <group {...props}>
            <mesh
                geometry={nodes.Cylinder008.geometry}
                material={materials.tall_chair_frame}
            />
            <mesh
                geometry={nodes.Cylinder008_1.geometry}
                material={materials['tall chair_base']}
            />
        </group>
    )
}

const HighChairArea = ({ nodes, materials }) => {
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
            const cameraPosition = isMobile ? [1.117, 1.135, -5.4] : [1.117, 1.135, -5.626]
            setIsHovered(false)
            setFocusTarget(FOCUS_FACILITIES)
            setCameraPosition(cameraPosition)
            setControlsTargetOffset([0, 0, -.01])
        }
    }, [focusTarget])

    useCursor(isHovered)
    return (
        <>
            {Array(4).fill().map((_, i) => (
                <Chair nodes={nodes} materials={materials} position={[2.993 - i * 3 * 0.599037, 0.775, -5.003]}/>
            ))}
            <mesh
                geometry={nodes.Cube.geometry}
                material={materials['high table']}
                position={[0, 1, -5.75]}
            />
            <Select enabled={isHovered}>
                <group onPointerOver={onPointerOver} onPointerOut={onPointerOut} onClick={onClick}>
                    <Laptop nodes={nodes} materials={materials} position={[1.117, 1.035, -5.826]} rotation={[Math.PI, 0, 0]} isOpen={focusTarget === FOCUS_FACILITIES}>
                        <FacilityPage isShow={focusTarget === FOCUS_FACILITIES} />
                    </Laptop>
                    <MapPin nodes={nodes} materials={materials} position={[1.117, 1.4, -5.826]} rotation={[0, Math.PI / 2, 0]} isVisible={focusTarget !== FOCUS_FACILITIES}/>
                </group>
            </Select>
            <Tooltip position={[1.117, 1.9, -5.826]} opacity={Number(isHovered)} scale={Number(isHovered)}>
                <p style={{
                    fontSize: '4pt',
                    margin: 0
                }}>Fasilitas</p>
            </Tooltip>
        </>
    )
}

export default HighChairArea