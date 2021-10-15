import React from 'react'

const PageHeaderSubtitle = (props) => {
    return (
        <h2 className="text-white text-2xl animate-fade-in max-w-3xl">{props.children}</h2>
    )
}

export default PageHeaderSubtitle