import React from 'react'

const PageHeaderTitle = (props) => {
    return (
        <h1 className={`text-3xl text-white font-bold animate-fade-in-fast md:text-5xl ${props.className}`}>{props.children}</h1>
    )
}

export default PageHeaderTitle