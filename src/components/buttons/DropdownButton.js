import React from 'react';
import PowerUpCard from '../cards/PowerUpCard';
import { useComponentVisible } from '../hooks';
import { MBody, MHeading04 } from '../typography';

const DropdownButton = (props) => {

    const {ref, isComponentVisible, setIsComponentVisible} = useComponentVisible(false)

    return (
        <div className="relative flex place-items-center">
            {/* Trigger */}
            <div className="text-xl text-gray-400 transition-colors cursor-pointer hover:text-white" onClick={() => setIsComponentVisible(true)}>
                <i className="fa-solid fa-sparkles"></i>
            </div>
            
            {/* Dropdown. TODO: Make the dropdown content dynamic */}
            {isComponentVisible && 
            <div className="w-[440px] bg-[#12141B] rounded p-6 absolute right-0 top-10 animate-dropdown-in" ref={ref}>
                {/** Close action */}
                <div id="CloseAction" className="absolute top-4 right-4 text-gray-400 transition-colors cursor-pointer hover:text-white" onClick={() => setIsComponentVisible(false)}>
                    <i className="fa-solid fa-xmark text-2xl"/>
                </div>

                {/** Content */}
                <i className="fa-solid fa-sparkles text-3xl mb-3"></i>
                <MHeading04 className="mb-2">Power-ups</MHeading04>
                <MBody className="text-gray-400 mb-6">I miss when the web was fun, let’s bring some of that back! Below are some of my explorations for fun “power-ups” you can enable for my site. Enjoy!</MBody>

                <PowerUpCard title="Custom cursor" icon={<i className="fa-solid fa-pen-nib"/>}/>
            </div>
            }
        </div>
    )
}

const DropdownPowerup = (props) => {
    return (
        <div className="w-80 bg-gray-900 rounded p-4 absolute right-0 top-10">
            <p>Content</p>
        </div>
    )
}

export default DropdownButton;