import Folder from "./Folder"

const Folders = ({ nodes, materials, ...props }) => {
    return (
        <group {...props}>
            {Array(3).fill().map((_, i) => (
                <Folder nodes={nodes} materials={materials} position={[- i * 0.02, 0, 0]}/>
            ))}
        </group>
    )
    
    
}

export default Folders