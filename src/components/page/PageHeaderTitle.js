import React from 'react'

const PageHeaderTitle = ({children}) => {
    return (
        <h1 className="text-3xl mb-6 text-white font-bold animate-fade-in-fast md:text-4xl">{children}</h1>
    )
}

export default PageHeaderTitle