import Door from "./Door"

const Room = ({ nodes, materials }) => {
    return (
        <>
            <group position={[0, 0, -1]} scale={[1, 1, 0.833]}>
                <mesh
                    geometry={nodes.Plane.geometry}
                    material={materials.room_wall}
                />
                <mesh
                    geometry={nodes.Plane_1.geometry}
                    material={materials.room_floor}
                />
                <mesh
                    geometry={nodes.Plane_2.geometry}
                    material={materials.room_light}
                />
            </group>
            <mesh
                geometry={nodes.glass.geometry}
                material={materials.room_glass}
                position={[-3.995, 1.675, -5.755]}
                rotation={[0, Math.PI / 2, 0]}
                scale={[0.25, 0.65, 0.005]}
            />
            <Door nodes={nodes} materials={materials} />
        </>
    )
}

export default Room