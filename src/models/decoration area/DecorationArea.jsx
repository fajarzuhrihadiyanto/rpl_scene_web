import CancelArea from "./CancelArea"
import MenuArea from "./MenuArea"

const DecorationArea = ({ nodes, materials }) => {
    return (
        <>
            <MenuArea nodes={nodes} materials={materials} />
            <CancelArea nodes={nodes} materials={materials} />
        </>
    )
}

export default DecorationArea