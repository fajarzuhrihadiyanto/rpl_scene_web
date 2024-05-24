const Table = ({ nodes, materials }) => {
    return (
        <group position={[1.029, 0.5, 3.3]} rotation={[0, Math.PI / 2, 0]}>
            <mesh
                geometry={nodes.Cube006.geometry}
                material={materials.table_main}
            />
            <mesh
                geometry={nodes.Cube006_1.geometry}
                material={materials.table_top}
            />
        </group>
    )
}

export default Table