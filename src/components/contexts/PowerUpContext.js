import React, {useState} from 'react'

const PowerUpContext = React.createContext()

function PowerUpProvider({children}) {
    // Define states for power-ups
    const [isCustomCursorActive, setCustomCursorActive] = useState(false)

    // Combine states into one object to pass down to consumers
    const powerups = {
        isCustomCursorActive, 
        setCustomCursorActive
    }

    return <PowerUpContext.Provider value={powerups}>{children}</PowerUpContext.Provider>
}

export {PowerUpProvider, PowerUpContext}