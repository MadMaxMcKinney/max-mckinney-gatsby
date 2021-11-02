import React from 'react'

const PageHeaderSubtitle = (props) => {
    return (
        <p className="text-gray-400 font-semibold text-2xl animate-fade-in max-w-3xl">{props.children}</p>
    )
}

export default PageHeaderSubtitle