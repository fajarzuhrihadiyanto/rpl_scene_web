const Bug = ({ nodes, materials }) => {
    return (
        <group
            position={[4, 1.285, -3.254]}
            rotation={[Math.PI / 4, 0, Math.PI / 2]}
            scale={[0.277, 0.014, 0.277]}>
            <mesh
                geometry={nodes.Cylinder002.geometry}
                material={materials['Material.006']}
            />
            <mesh
                geometry={nodes.Cylinder002_1.geometry}
                material={materials['Material.007']}
            />
        </group>
    )
}

export default Bug