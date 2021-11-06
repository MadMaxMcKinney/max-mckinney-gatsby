import React from 'react'

const PageSubtitle = (props) => {
    return (
        <p className={`mb-8 text-gray-400 font-semibold text-2xl max-w-3xl ${props.className}`}>{props.children}</p>
    )
}

export default PageSubtitle