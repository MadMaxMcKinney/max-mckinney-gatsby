import React, {useContext, useState} from 'react'

const PowerUpContext = React.createContext({
    customCursor: false
})

function PowerUpProvider({children}) {
    // Define states for power-ups
    const [isCustomCursorActive, setCustomCursorActive] = useState(false)

    // Combine states into one object to pass down to consumers
    const value = {isCustomCursorActive, setCustomCursorActive}

    return <PowerUpContext.Provider value={value}>{children}</PowerUpContext.Provider>
}

export {PowerUpProvider}