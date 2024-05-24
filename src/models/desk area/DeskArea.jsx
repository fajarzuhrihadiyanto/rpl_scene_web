import React from "react"

import ResearchArea from "./ResearchArea"
import CommunityServiceArea from "./CommunityServiceArea"
import BookArea from "./BookArea"

const DeskArea = ({ nodes, materials }) => {
    

    return (
        <>
            <ResearchArea nodes={nodes} materials={materials} />

            <CommunityServiceArea nodes={nodes} materials={materials} />

            <BookArea nodes={nodes} materials={materials} />
        </>
    )
}

export default DeskArea