import React, {createContext, useState} from 'react'

// TODO: Not sure if I'll even need context here. I may just use a generic JS approach to add classes based on which type of element is hovered

export const MouseContext = createContext({
    cursorType: "default",
})

export const MouseContextProvider = (props) => {
    const [cursorType, setCursorType] = useState("default")

    return (
        <MouseContext.Provider value={{cursorType: cursorType}}>
            {props.children}
        <MouseContext.Provider/>
    )
}