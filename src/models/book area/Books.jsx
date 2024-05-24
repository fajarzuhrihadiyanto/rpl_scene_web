import { RandomBook } from "./Book"
import React from "react"

const Books = ({ nodes, materials, ...props }) => {

    const [heights, setHeights] = React.useState([])
    const [colorHues, setColorHues] = React.useState([])

    React.useEffect(() => {
        setHeights(Array(30).fill().map(() => Math.random() * .5 + .5))
        setColorHues(Array(30).fill().map(() => Math.round(Math.random() * 360)))
    }, [])

    return (
        <group {...props}>
            {Array(30).fill().map((_, i) => {
                const colorHue = colorHues[i]
                const height = heights[i]
                return (
                <RandomBook nodes={nodes} materials={materials} position={[0 + i * .05, - ((1-height) * .4 / 2), 0]} scale={[1,height,1]} color={`hsl(${colorHue}, 50%, 30%)`}/>
            )})}
        </group>
    )
}

export default Books