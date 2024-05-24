import React from "react"
import useMainStore from "../store/useMainStore"
import { FOCUS_BOOKS, FOCUS_COMMUNITY_SERVICE, FOCUS_FACILITIES, FOCUS_GENERAL_INFORMATION, FOCUS_LECTURER, FOCUS_RESEARCH, FOCUS_SUBJECT  } from "../constants"

const BackButton = () => {
    const focusTarget = useMainStore.useFocusTarget()
    const setFocusTarget = useMainStore.useSetFocusTarget()
    const setCameraPosition = useMainStore.useSetCameraPosition()
    const setControlsTargetOffset = useMainStore.useSetControlsTargetOffset()
    
    const back = () => {

        let controlsTargetOffset = [0,0,0.01], cameraPosition = [0,1.5,0]

        if (focusTarget === FOCUS_RESEARCH) {
            controlsTargetOffset = [0.01,0,0]
        }

        if ([FOCUS_SUBJECT, FOCUS_LECTURER].includes(focusTarget)) {
            controlsTargetOffset = [-0.01,0,0]
        }

        if ([FOCUS_COMMUNITY_SERVICE, FOCUS_BOOKS, FOCUS_FACILITIES].includes(focusTarget)) {
            controlsTargetOffset = [0,0,-.01]
        }

        setFocusTarget(null)
        setCameraPosition(cameraPosition)
        setControlsTargetOffset(controlsTargetOffset)
    }
    
    const ref = React.useRef()

    const isShown = [
        FOCUS_SUBJECT,
        FOCUS_RESEARCH,
        FOCUS_COMMUNITY_SERVICE,
        FOCUS_BOOKS,
        FOCUS_GENERAL_INFORMATION,
        FOCUS_FACILITIES,
        FOCUS_LECTURER
    ].includes(focusTarget)

    React.useEffect(() => {
        if (ref.current) {
            if (isShown) {
                // wait 1s until camera animation is complete to show the button
                setTimeout(() => {
                    ref.current.style.opacity = 1
                    ref.current.style.visibility = 'visible'
                }, 1000)
            } else {
                // immediate fading but wait 300ms until completely hidden to set visibility to hidden
                ref.current.style.opacity = 0
                setTimeout(() => {
                    ref.current.style.visibility = 'hidden'
                }, 300)
            }
        }
    }, [isShown])
    return (
        <button
            ref={ref}
            onClick={back}
            style={{
                // position to top right
                position: 'absolute',
                top: 48,
                right: 48,

                // style
                padding: '16px 32px',
                backgroundColor: 'black',
                color: 'white',
                border: '2px solid white',
                borderRadius: 8,
                fontSize: 24,

                // visibility
                cursor: 'pointer',
                opacity: 0,
                transition: 'opacity .3s'
            }}
            >Back</button>
    )
}

export default BackButton