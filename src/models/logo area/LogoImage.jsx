const LogoImage = ({ nodes, materials }) => {
    return (
        <group
            position={[-2.873, 2.436, 3.875]}
            rotation={[Math.PI / 2, 0, Math.PI]}
            scale={[0.25, 0.125, 0.25]}>
            <mesh
                geometry={nodes.Cylinder001.geometry}
                material={materials['logo.001']}
            />
            <mesh
                geometry={nodes.Cylinder001_1.geometry}
                material={materials['decoration search']}
            />
        </group>
    )
}

export default LogoImage
