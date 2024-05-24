const BookCase = ({ nodes, materials }) => {
    return (
        <>
            <mesh
                geometry={nodes.book_case_inner_structure.geometry}
                material={materials['book case_matte']}
                position={[-3.699, 0, -0.94]}
                scale={[0.3, 1, 0.8]}
            />
            <mesh
                geometry={nodes.book_case_outer_structure.geometry}
                material={materials['book case metal']}
                position={[-3.699, 0, -0.94]}
                scale={[0.3, 1, 0.8]}
            />
            <group position={[-3.747, 0.5, -0.94]}>
                <mesh
                    geometry={nodes.Plane008.geometry}
                    material={materials['book case_matte']}
                />
                <mesh
                    geometry={nodes.Plane008_1.geometry}
                    material={materials.archive_2}
                />
            </group>
        </>
    )
}

export default BookCase