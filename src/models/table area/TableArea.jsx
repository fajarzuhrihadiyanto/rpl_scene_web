import React from "react"
import { Select } from "@react-three/postprocessing"
import { useCursor } from "@react-three/drei"

import Tooltip from "../../components/Tootlip"
import MapPin from "../MapPin"
import Monitor from "./Monitor"
import Table from "./Table"
import { FOCUS_GENERAL_INFORMATION } from "../../constants"
import useMainStore from "../../store/useMainStore"

const TableArea = ({ nodes, materials }) => {
    // Get state and setter from the store
    const focusTarget = useMainStore.useFocusTarget()
    const setFocusTarget = useMainStore.useSetFocusTarget()
    const setCameraPosition = useMainStore.useSetCameraPosition()
    const setControlsTargetOffset = useMainStore.useSetControlsTargetOffset()

    const [isHovered, setIsHovered] = React.useState(false)

    const onPointerOver = React.useCallback(() => {
        if (focusTarget === null) setIsHovered(true)
    }, [focusTarget])

    const onPointerOut = React.useCallback(() => {
        if (focusTarget === null) setIsHovered(false)
    }, [focusTarget])

    const onClick = React.useCallback(() => {
        if (focusTarget === null) {
            setIsHovered(false)
            setFocusTarget(FOCUS_GENERAL_INFORMATION)
            setCameraPosition([-0.539, 1.312, 2])
            setControlsTargetOffset([0, 0, .01])
        }
    }, [focusTarget])

    useCursor(isHovered)

    return (
        <>
            <Select enabled={isHovered}>
                <group onPointerOver={onPointerOver} onPointerOut={onPointerOut} onClick={onClick}>
                    <Table nodes={nodes} materials={materials} />
                    <Monitor nodes={nodes} materials={materials} />
                    <MapPin 
                        nodes={nodes}
                        materials={materials} 
                        position={[-0.581, 1.953, 2.327]}
                        rotation={[0, Math.PI / 2, 0]} />
                </group>
            </Select>
            <Tooltip position={[-0.581, 2.5, 2.327]} rotation={[0,Math.PI,0]} opacity={Number(isHovered)} scale={Number(isHovered)}>
                <p style={{
                    fontSize: '4pt',
                    margin: 0
                }}>Informasi Umum</p>
            </Tooltip>
        </>
    )
}

export default TableArea