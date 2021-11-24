import React, { useState } from 'react'
import PropType from 'prop-types'
import { MHeading05 } from '../typography'

const PowerUpCard = (props) => {

    // TODO: Figure out longterm state. Redux? Something to keep this info stored.
    const [isActive, setIsActive] = useState(false)

    return (
        <div className="px-4 py-6 bg-gray-800 flex place-items-center rounded border border-transparent transition-colors cursor-pointer hover:border-white hover:bg-gray-700" onClick={() => {setIsActive(!isActive)}}>
            <div className="flex flex-1 place-items-center gap-3">
                {props.icon}
                <MHeading05>{props.title}</MHeading05>
            </div>
            <div className="text-2xl">
                {isActive && <div><i className="fa-solid fa-square-check text-white"/></div>}
                {!isActive && <div><i className="fa-solid fa-square-dashed text-gray-600"/></div>}
            </div>
        </div>
    )
}

PowerUpCard.propTypes = {
    /** Title of the power-up */
    title: PropType.string.isRequired,
    icon: PropType.node.isRequired,
}

export default PowerUpCard