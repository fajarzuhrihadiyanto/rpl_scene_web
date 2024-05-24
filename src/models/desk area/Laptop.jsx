import React from "react"
import gsap from "gsap"

const Laptop = ({ nodes, materials, isOpen, children, ...props}) => {

    const ref = React.useRef()

    React.useEffect(() => {
        if (ref.current) {
            if (isOpen) {
                gsap.to(ref.current.rotation, {duration: 1, x: -Math.PI/2})
            } else {
                gsap.to(ref.current.rotation, {duration: 1, x: 0})
            }
        }
    }, [isOpen])

    return (
        <group {...props}>
            <group rotation={[Math.PI*2, 0, -Math.PI]}>
                <mesh
                    geometry={nodes.Cube_1.geometry}
                    material={materials.laptop_base}
                />
                <mesh
                    geometry={nodes.Cube_2.geometry}
                    material={materials.laptop_keyboard}
                />
                <mesh
                    geometry={nodes.Cube_3.geometry}
                    material={materials.laptop_screen}
                />
            </group>
            <group ref={ref}>
                <mesh
                    geometry={nodes.Cube001.geometry}
                    material={materials.laptop_base}
                />
                <mesh
                    geometry={nodes.Cube001_1.geometry}
                    material={materials.laptop_logo}
                />
                <mesh
                    geometry={nodes.Cube001_2.geometry}
                    material={materials.laptop_screen}
                />
                {children}
            </group>
        </group>
    )
}

export default Laptop