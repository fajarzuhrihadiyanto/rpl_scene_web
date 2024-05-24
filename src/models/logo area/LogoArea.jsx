import LogoImage from "./LogoImage"
import LogoText from "./LogoText"

const LogoArea = ({ nodes, materials }) => {
    return (
        <>
            <LogoText nodes={nodes} materials={materials} />
            <LogoImage nodes={nodes} materials={materials} />
        </>
    )
}

export default LogoArea