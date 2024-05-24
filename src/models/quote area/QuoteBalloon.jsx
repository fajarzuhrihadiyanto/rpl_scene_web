const QuoteBalloon = ({ nodes, materials }) => {
    return (
        <mesh
            geometry={nodes.quote_balloon.geometry}
            material={materials['Material.005']}
            position={[3.986, 2.415, -1.975]}
            rotation={[Math.PI / 2, 0, Math.PI / 2]}
            scale={0.553}>
            <mesh
                geometry={nodes.quote_text.geometry}
                material={materials.Material}
                position={[-1.481, 0.028, -0.456]}
                scale={0.5}
            />
        </mesh>
    )
}

export default QuoteBalloon