const MenuBar = ({ nodes, materials, ...props}) => {
    return (
        <mesh
            geometry={nodes.decoration_menu.geometry}
            material={materials['menu decoration']}
            rotation={[Math.PI / 2, 0, -Math.PI / 2]}
            scale={[0.5, 0.125, 0.025]}
            {...props}
        />
    )
}

const MenuArea = ({ nodes, materials }) => {
    return (
        <>
            {Array(3).fill().map((_, i) => (
                <MenuBar
                    nodes={nodes}
                    materials={materials}
                    position={[-3.875, 1.103 + i * .35, -2.684]}/>
            ))}

            <mesh
                geometry={nodes.decoration_rubics_cube.geometry}
                material={materials['rubiks cube']}
                position={[-3.844, 1.928, -2.718]}
                scale={0.1}
            />
            <group position={[-3.839, 1.228, -2.424]} rotation={[0, 1.571, 0]} scale={[0.1, 0.1, 0.05]}>
                <mesh
                    geometry={nodes.Cube011.geometry}
                    material={materials['jigsaw puzzle_front']}
                />
                <mesh
                    geometry={nodes.Cube011_1.geometry}
                    material={materials['jigsaw puzzle_side']}
                />
            </group>
        </>
    )
}

export default MenuArea