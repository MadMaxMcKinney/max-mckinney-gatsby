import React from 'react'

const PageHeaderTitle = ({children}) => {
    return (
        <p className="text-3xl mb-6 text-white font-bold animate-fade-in-fast md:text-4xl">{children}</p>
    )
}

export default PageHeaderTitle