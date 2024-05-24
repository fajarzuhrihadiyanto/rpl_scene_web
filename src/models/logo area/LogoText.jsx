const LogoText = ({ nodes, materials }) => {
    return (
        <>
            <mesh
                geometry={nodes.logo_text.geometry}
                material={materials['decoration input text']}
                position={[2.74, 2.174, 3.95]}
                rotation={[Math.PI / 2, 0, Math.PI]}
                scale={[0.416, 0.2, 0.416]}
            />
            <mesh
                geometry={nodes.decoration_input.geometry}
                material={materials['decoration input box']}
                position={[0.487, 2.32, 3.875]}
                rotation={[Math.PI / 2, 0, Math.PI]}
            />
        </>
    )
}

export default LogoText