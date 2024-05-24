const Folder = ({ nodes, materials, ...props }) => {
    return (
        <group {...props}>
            <group >
                <mesh
                    geometry={nodes.Cube022.geometry}
                    material={materials.folder_cover}
                />
                <mesh
                    geometry={nodes.Cube022_1.geometry}
                    material={materials.folder_paper}
                />
            </group>

            <group scale={[-1, 0, 0]}>
                <mesh
                    geometry={nodes.Cube022.geometry}
                    material={materials.folder_cover}
                />
                <mesh
                    geometry={nodes.Cube022_1.geometry}
                    material={materials.folder_paper}
                />
            </group>
        </group>
    )
}

export default Folder