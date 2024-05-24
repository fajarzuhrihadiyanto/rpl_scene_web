/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'
import { useThree } from '@react-three/fiber'
import gsap from 'gsap'

import Room from './Room'
import DeskArea from './desk area/DeskArea'
import TableArea from './table area/TableArea'
import DecorationArea from './decoration area/DecorationArea'
import LogoArea from './logo area/LogoArea'
import QuoteArea from './quote area/QuoteArea'
import HighChairArea from './high chair area/HighChairArea'
import BookArea from './book area/BookArea'
import ArchiveArea from './archive area/ArchiveArea'
import useMainStore from '../store/useMainStore'
import { addVector3 } from '../utils'
import { ControlsContext } from '../context/ControlsContext'

const Lab = (props) => {
  const { nodes, materials } = useGLTF(process.env.REACT_APP_MODEL_URL)

  // get the state and setter from the store
  const focusTarget = useMainStore.useFocusTarget()
  const cameraPosition = useMainStore.useCameraPosition()
  const controlsTargetOffset = useMainStore.useControlsTargetOffset()

  const controlsTarget = addVector3(cameraPosition, controlsTargetOffset)

  const { controls } = React.useContext(ControlsContext)

  const { camera } = useThree()

  React.useEffect(() => {
    if (controls.current) {
      if (focusTarget !== null) {

        // animate camera to focus target
        gsap.to(controls.current.target, {duration: 1, ease: 'power4.inOut', x: controlsTarget[0], y: controlsTarget[1], z: controlsTarget[2]})
        gsap.to(camera.position, {duration: 1, ease: 'power4.inOut', x: cameraPosition[0], y: cameraPosition[1], z: cameraPosition[2]})
        
      } else {
        // enable rotate and set rotate speed back to default
        controls.current.enableRotate = true
        controls.current.rotateSpeed = -.5

        // animate back camera to original position 
        gsap.to(camera.position, {duration: 1, x: cameraPosition[0], y: cameraPosition[1], z: cameraPosition[2]})
        gsap.to(controls.current.target, {duration: 1, x: controlsTarget[0], y: controlsTarget[1], z: controlsTarget[2]})
      }
    }

  }, [focusTarget, cameraPosition, controlsTarget])

  console.log(materials)
  return (
    <group {...props} dispose={null}>
      <Room nodes={nodes} materials={materials} />
      <DeskArea nodes={nodes} materials={materials} />
      <TableArea nodes={nodes} materials={materials} />
      <LogoArea nodes={nodes} materials={materials} />
      <DecorationArea nodes={nodes} materials={materials} />
      <QuoteArea nodes={nodes} materials={materials} />
      <HighChairArea nodes={nodes} materials={materials} />
      <BookArea nodes={nodes} materials={materials} />
      <ArchiveArea nodes={nodes} materials={materials} />
      
    </group>
  )
}

useGLTF.preload(process.env.REACT_APP_MODEL_URL)

export default Lab