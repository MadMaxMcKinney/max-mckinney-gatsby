import React from 'react';
import { useComponentVisible } from '../hooks';
import { MHeading4 } from '../typography';

const DropdownButton = (props) => {

    const {ref, isComponentVisible, setIsComponentVisible} = useComponentVisible(false)

    return (
        <div className="relative flex place-items-center">
            {/* Icon */}
            <div className="text-xl text-gray-400 transition-colors cursor-pointer hover:text-white" onClick={() => setIsComponentVisible(true)}>
                <i className="fa-solid fa-sparkles"></i>
            </div>
            
            {/* Dropdown */}
            {isComponentVisible && 
            <div className="w-80 bg-gray-900 rounded p-4 absolute right-0 top-10 animate-dropdown-in" ref={ref}>
                <MHeading4>Power-ups</MHeading4>
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