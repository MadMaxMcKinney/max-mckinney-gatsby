import React from 'react'

const HeaderTitle = ({children}) => {
    return (
        <h1 className="font-bold text-4xl mb-24 animate-fade-in-fast sm:text-5xl md:text-7xl md:leading-massive">{children}</h1>
    )
}

export default HeaderTitle