import gsap from "gsap"
import React from "react"
import { Vector3 } from "three"

import { addVector3 } from "../../utils"

const Book = ({ nodes, materials, children, shown, index, ...props }) => {

    const initialPosition = props.position || [0,0,0]

    const bookRef = React.useRef()
    const leftRef = React.useRef()
    const rightRef = React.useRef()

    let leftPage, rightPage

    if (React.Children.toArray(children).length > 0) {
        const pages = React.Children.toArray(children)[0].props.children

        console.log('book pages', pages)

        // show pages itself if there is only one page, or page index 0 if there is 2 pages instead
        leftPage = pages?.[0] || pages
        rightPage = pages?.[1]

    }

    React.useEffect(() => {
        if (bookRef.current) {
            if(shown) {
                let nextPos = addVector3(initialPosition, [0,0,0.5])
                gsap.to(bookRef.current.position, {duration: .5, ease: 'power1.in', x: nextPos[0], y: nextPos[1], z: nextPos[2]})

                nextPos = addVector3(nextPos, [.75 - index*.06,0,-.3])
                // nextPos = addVector3(nextPos, [.75,0,-.3])
                gsap.to(bookRef.current.position, {duration: .5, ease: 'power1.out', delay: .5, x: nextPos[0], y: nextPos[1], z: nextPos[2]})
                gsap.to(bookRef.current.rotation, {duration: .5, ease: 'power1.out', delay: .5, x: 0, y: Math.PI, z: 0})

                nextPos = addVector3(nextPos, [0, 0, .4])
                gsap.to(bookRef.current.position, {duration: .5, ease: 'power1.out', delay: 1, x: nextPos[0], y: nextPos[1], z: nextPos[2]})
                gsap.to(leftRef.current.rotation, {duration: .5, delay: 1, x: 0, y: -Math.PI/2 + .1, z: 0})
                gsap.to(rightRef.current.rotation, {duration: .5, delay: 1, x: Math.PI, y: Math.PI/2 + .1, z: 0})
            } else {

                // if the book is already in the initial position (on a first render) , don't animate
                if (bookRef.current.position.equals(new Vector3(initialPosition[0], initialPosition[1], initialPosition[2]))) {
                    return
                }

                // add .2 to delay to account for the delay in the previous content fading animation
                // NOTE : NO NEED ADDITIONAL .2s DELAY IF USING ON DEMAND RENDERING, CAUSE THERE WILL BE NO FADING ANIMATION
                let nextPos = addVector3(addVector3(initialPosition, [0,0,.3]), [.75 - index*.06,0,-.3])
                gsap.to(leftRef.current.rotation, {duration: .5, delay: 0+.2,  ease: 'power1.in', x: 0, y: 0, z: 0})
                gsap.to(rightRef.current.rotation, {duration: .5, delay: 0+.2,  ease: 'power1.in', x: Math.PI, y: Math.PI, z: 0})
                gsap.to(bookRef.current.position, {duration: .5, delay: 0+.2, ease: 'power1.in', x: nextPos[0], y: nextPos[1], z: nextPos[2]})

                nextPos = addVector3(initialPosition, [0,0,.3])
                gsap.to(bookRef.current.rotation, {duration: .5, delay: .5+.2, ease: 'power1.in', x: 0, y: 0, z: 0})
                gsap.to(bookRef.current.position, {duration: .5, delay: .5+.2, ease: 'power1.in', x: nextPos[0], y: nextPos[1], z: nextPos[2]})

                nextPos = initialPosition
                gsap.to(bookRef.current.position, {duration: .5, delay: 1.2, ease: 'power1.out', x: nextPos[0], y: nextPos[1], z: nextPos[2]})
            }
        }
    }, [shown])

    return (
        <group {...props} ref={bookRef}>
            <group ref={leftRef}>
                <mesh
                    geometry={nodes.Cube015.geometry}
                    material={materials.book_cover}
                />
                <mesh
                    geometry={nodes.Cube015_1.geometry}
                    material={materials.book_page}
                />
                {leftPage}
            </group>
            <group ref={rightRef} rotation={[Math.PI, Math.PI, 0]}>
                <mesh
                    geometry={nodes.Cube016.geometry}
                    material={materials.book_cover}
                />
                <mesh
                    geometry={nodes.Cube016_1.geometry}
                    material={materials.book_page}
                />
                {rightPage}
            </group>
        </group>
    )
}

export const RandomBook = ({ nodes, materials, color, ...props }) => {
    return (
        <group {...props}>
            <group>
                <mesh
                    geometry={nodes.Cube015.geometry}
                    material={materials.book_cover}
                >
                    color && <meshStandardMaterial color={color} />
                </mesh>
                <mesh
                    geometry={nodes.Cube015_1.geometry}
                    material={materials.book_page}
                />
            </group>
            <group rotation={[Math.PI, Math.PI, 0]}>
                <mesh
                    geometry={nodes.Cube016.geometry}
                    material={materials.book_cover}
                >
                    color && <meshStandardMaterial color={color} />
                </mesh>
                <mesh
                    geometry={nodes.Cube016_1.geometry}
                    material={materials.book_page}
                />
            </group>
        </group>
    )
}

export default Book