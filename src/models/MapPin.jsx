import React from "react"
import gsap from "gsap"

const MapPin = ({ nodes, materials, isVisible, ...props }) => {
    const ref = React.useRef()

    React.useEffect(() => {
      if (ref.current) {
        gsap.to(ref.current.rotation, {duration: 2, y: Math.PI * 5 / 2, repeat: -1, ease: "none"})
        gsap.to(ref.current.position, {duration: .5, y: ref.current.position.y + .1, yoyo: true, repeat: -1})
      }
    }, [])


    return (
        <mesh
          visible={isVisible}
          ref={ref}
          geometry={nodes.map_pin.geometry}
          material={materials['map pin']}
          scale={[.2,1,1]}
          {...props}
      />
    )
}

export default MapPin