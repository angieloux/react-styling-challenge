import React from "react"

const LinkTo = (props) => {
    return (
        <a className={props.external ? "external" : "internal"} href={props.href}>{props.text}</a>
    )
}

export default LinkTo

