import { FOCUS_GENERAL_INFORMATION } from "../../constants"
import GeneralInformationPage from "../../html/GeneralInformationPage"
import useMainStore from "../../store/useMainStore"

const Monitor = ({ nodes, materials }) => {
    
    // get the state and setter from the store
    const focusTarget = useMainStore.useFocusTarget()
    return (
        <>
            <mesh
                geometry={nodes.monitor_base.geometry}
                material={materials.monitor_base}
                position={[-0.539, 1.1, 2.297]}
                rotation={[0, Math.PI / 2, 0]}
            />
            <mesh
                geometry={nodes.monitor_pole.geometry}
                material={materials.monitor_base}
                position={[-0.539, 1.18, 2.331]}
                rotation={[0, Math.PI / 2, 0]}
            />
            <group position={[-0.539, 1.312, 2.297]} rotation={[0, Math.PI / 2, 0]}>
                <mesh
                    geometry={nodes.Plane005.geometry}
                    material={materials.monitor_base}
                />
                <mesh
                    geometry={nodes.Plane005_1.geometry}
                    material={materials.monitor_light}
                />
            </group>
            {focusTarget === FOCUS_GENERAL_INFORMATION && <GeneralInformationPage />}
        </>
    )
}

export default Monitor