import React from "react"

const SectionHeading = (props) => {
    return (
        <div>
        <h2>{props.text}</h2>
        <a className="external" href="#top">Top</a>
    </div>

    )
}

export default SectionHeading