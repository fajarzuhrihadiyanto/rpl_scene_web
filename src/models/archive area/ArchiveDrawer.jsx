import Folders from "./Folders"

const Drawer = ({ nodes, materials, ...props}) => {
    return (
        <group {...props}>
            <mesh
                geometry={nodes.Cube013.geometry}
                material={materials.archive_1}
            />
            <mesh
                geometry={nodes.Cube013_1.geometry}
                material={materials['archive drawer']}
            />
        </group>
    )
}

const MainDrawer = ({ nodes, materials, ...props }) => {
    return (
        <>
            <Drawer nodes={nodes} materials={materials} {...props} />
            <Folders nodes={nodes} materials={materials} position={[-3.512, 0.538, 0.679]} rotation={[Math.PI, 0, 2.356]} />
        </>
    )
}

const ArchiveDrawer = ({ nodes, materials }) => {
    return (
        <>
            {Array(3).fill().map((_, i) => (
                i < 2 ? <Drawer nodes={nodes} materials={materials} position={[-3.65, 0.12 + i * (0.239054 + .01), 0.688]} rotation={[Math.PI, 0, Math.PI]} />
                : <MainDrawer nodes={nodes} materials={materials} position={[-3.65, 0.12 + i * (0.239054 + .01), 0.688]} rotation={[Math.PI, 0, Math.PI]} />
            ))}
            
            <mesh
                geometry={nodes.archive_frame.geometry}
                material={materials['archive frame']}
                position={[-3.675, 0.365, 0.688]}
                rotation={[Math.PI, 0, Math.PI]}
                scale={[0.325, 0.375, 0.275]}
            />
        </>
    )
}

export default ArchiveDrawer