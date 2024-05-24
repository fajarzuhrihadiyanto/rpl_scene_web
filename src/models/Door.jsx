const Door = ({ nodes, materials }) => {
    return (
        <>
            <mesh
                geometry={nodes.door_left_body.geometry}
                material={materials['Material.010']}
                position={[3.982, 0, 3.004]}
                rotation={[Math.PI / 2, 0, -Math.PI / 2]}
                scale={[0.5, 1, 1.125]}
            />
            <group position={[4.037, 1.138, 2.154]} rotation={[0, Math.PI / 2, 0]}>
                <mesh
                    geometry={nodes.Cylinder003.geometry}
                    material={materials.door_handle_base}
                />
                <mesh
                    geometry={nodes.Cylinder003_1.geometry}
                    material={materials.door_handle_light}
                />
                <mesh
                    geometry={nodes.Cylinder003_2.geometry}
                    material={materials['Material.011']}
                />
            </group>
            <mesh
                geometry={nodes.door_right_body.geometry}
                material={materials['Material.010']}
                position={[3.982, 0, 1.004]}
                rotation={[Math.PI / 2, 0, Math.PI / 2]}
                scale={[0.5, 1, 1.125]}
            />
            <group position={[4.037, 1.138, 1.854]} rotation={[0, Math.PI / 2, 0]}>
                <mesh
                    geometry={nodes.Cylinder005.geometry}
                    material={materials.door_handle_base}
                />
                <mesh
                    geometry={nodes.Cylinder005_1.geometry}
                    material={materials.door_handle_light}
                />
                <mesh
                    geometry={nodes.Cylinder005_2.geometry}
                    material={materials['Material.011']}
                />
            </group>
            <mesh
                geometry={nodes.door_frame.geometry}
                material={materials['Material.012']}
                position={[4.007, 2.325, 2.004]}
                rotation={[0, Math.PI / 2, 0]}
                scale={[1, 0.075, 0.1]}
            />
            <group position={[3.977, 1.138, 2.154]} rotation={[0, -1.571, 0]}>
                <mesh
                    geometry={nodes.Cylinder006.geometry}
                    material={materials.door_handle_base}
                />
                <mesh
                    geometry={nodes.Cylinder006_1.geometry}
                    material={materials.door_handle_light}
                />
                <mesh
                    geometry={nodes.Cylinder006_2.geometry}
                    material={materials['Material.011']}
                />
            </group>
            <group position={[3.977, 1.138, 1.854]} rotation={[0, -1.571, 0]}>
                <mesh
                    geometry={nodes.Cylinder007.geometry}
                    material={materials.door_handle_base}
                />
                <mesh
                    geometry={nodes.Cylinder007_1.geometry}
                    material={materials.door_handle_light}
                />
                <mesh
                    geometry={nodes.Cylinder007_2.geometry}
                    material={materials['Material.011']}
                />
            </group>
        </>
    )
}

export default Door