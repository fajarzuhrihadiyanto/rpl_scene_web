const Chair = ({ nodes, materials, ...props}) => {
    return (
        <mesh
            geometry={nodes.chair.geometry}
            material={materials.chair}
            {...props}
        />
    )
}

const Desk = ({ nodes, materials, ...props}) => {
    return (
        <group {...props}>
            <mesh
                geometry={nodes.Cylinder.geometry}
                material={materials.desk_main}
            />
            <mesh
                geometry={nodes.Cylinder_1.geometry}
                material={materials.desk_accent}
            />

            {Array(6).fill().map((_, i) => (
                <Chair
                    nodes={nodes}
                    materials={materials} 
                    position={[0, -0.1, 0]}
                    rotation={[0, Math.PI / 3 + i * Math.PI / 3, 0]}
                />
            ))}
            
        </group>
    )
}

export default Desk