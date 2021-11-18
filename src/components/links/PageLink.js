import React from 'react'

const PageLink = (props) => {
    return (
        <a className={`transition-all filter hover:brightness-150 underline ${props.className}`} href={props.href}>{props.children}</a>
    )
}

export default PageLink;