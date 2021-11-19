import React from 'react'

// Headings \\
export const MHeadingHero = ({children, className}) => {
    return (
        <h1 className={`font-bold text-6xl text-white sm:text-7xl md:text-9xl ${className}`}>{children}</h1>
    )
}

export const MHeading1 = ({children, className}) => {
    return (
        <h1 className={`font-bold text-3xl sm:text-5xl ${className}`}>{children}</h1>
    )
}

export const MHeading2 = ({children, className}) => {
    return (
        <h2 className={`font-bold text-3xl ${className}`}>{children}</h2>
    )
}

export const MHeading3 = ({children, className}) => {
    return (
        <h3 className={`font-bold text-2xl ${className}`}>{children}</h3>
    )
}

export const MHeading4 = ({children, className}) => {
    return (
        <h4 className={`font-bold text-xl ${className}`}>{children}</h4>
    )
}

export const MHeading5 = ({children, className}) => {
    return (
        <h5 className={`font-bold text-base ${className}`}>{children}</h5>
    )
}
//////

// Body \\
export const MBody2XLarge = ({children, className}) => {
    return (
        <p className={`font-semibold text-2xl sm:text-3xl sm:leading-10 ${className}`}>{children}</p>
    )
}

export const MBodyXLarge = ({children, className}) => {
    return (
        <p className={`font-semibold text-xl sm:text-2xl ${className}`}>{children}</p>
    )
}

export const MBodyLarge = ({children, className}) => {
    return (
        <p className={`font-medium text-lg ${className}`}>{children}</p>
    )
}

export const MBodyRegular = ({children, className}) => {
    return (
        <p className={`font-normal text-base ${className}`}>{children}</p>
    )
}

export const MBodySmall = ({children, className}) => {
    return (
        <p className={`font-bold text-sm leading-5 ${className}`}>{children}</p>
    )
}

export const MBodyUtility = ({children, className}) => {
    return (
        <p className={`font-semibold text-sm uppercase tracking-wide ${className}`}>{children}</p>
    )
}
//////