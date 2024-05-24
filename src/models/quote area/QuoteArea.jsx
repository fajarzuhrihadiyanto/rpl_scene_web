import Bug from "./Bug"
import QuoteBalloon from "./QuoteBalloon"

const QuoteArea = ({ nodes, materials }) => {
    return (
        <>
            <QuoteBalloon nodes={nodes} materials={materials} />
            <Bug nodes={nodes} materials={materials} />
        </>
    )
}

export default QuoteArea