import React, { useContext } from 'react'
import { MBody, MHeading04 } from '../typography';
import PowerUpCard from '../cards/PowerUpCard';
import { PowerUpContext } from '../contexts/PowerUpContext';

const DropdownPowerup = () => {

    const {isCustomCursorActive, setCustomCursorActive} = useContext(PowerUpContext)

    return (
        <React.Fragment>
            <MHeading04 className="mb-2">Power-ups</MHeading04>
            <MBody className="text-gray-400 mb-6">I miss when the web was fun, let’s bring some of that back! Below are some of my explorations for fun “power-ups” you can enable for my site. Enjoy!</MBody>

            <PowerUpCard title="Custom cursor" icon={<i className="fa-solid fa-pen-nib"/>} status={isCustomCursorActive} toggle={setCustomCursorActive}/>
        </React.Fragment>
    )
}

export default DropdownPowerup