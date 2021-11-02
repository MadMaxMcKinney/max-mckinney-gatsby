import React from 'react'

const MLink = (props) => {
    return (
        <a className={`transition-all filter hover:brightness-150 underline ${props.className}`} href={props.href}>{props.children}</a>
    )
}

export default MLink;