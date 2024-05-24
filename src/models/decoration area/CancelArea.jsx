const CancelArea = ({ nodes, materials }) => {
    return (
        <mesh
            geometry={nodes.decoration_close.geometry}
            material={materials['cancel decoration']}
            position={[-3.875, 1.454, -4.076]}
            rotation={[-2.356, 0, -Math.PI / 2]}
            scale={[0.5, 0.125, 0.025]}
        />
    )
}

export default CancelArea