import React from 'react';
import PropTypes from 'prop-types'
import { useComponentVisible } from '../hooks/useComponentVisible';


const DropdownButton = (props) => {

    const {ref, isComponentVisible, setIsComponentVisible} = useComponentVisible(false)

    return (
        <div className="relative flex place-items-center">
            {/* Trigger */}
            <div className="text-xl text-gray-400 transition-colors cursor-pointer hover:text-white" onClick={() => setIsComponentVisible(true)}>
                <i className="fa-solid fa-sparkles"></i>
            </div>
            
            {/* Dropdown. Use cloneElement to add the ref prop */}
            {isComponentVisible && 
            <div className="w-[440px] bg-[#12141B] rounded p-6 absolute right-0 top-10 animate-dropdown-in" ref={ref}>
                {/** Close action */}
                <div id="CloseAction" className="absolute top-4 right-4 text-gray-400 transition-colors cursor-pointer hover:text-white" onClick={() => setIsComponentVisible(false)}>
                    <i className="fa-solid fa-xmark text-2xl"/>
                </div>
    
                {/** Content */}
                {props.children}
            </div>
            }
        </div>
    )
}

DropdownButton.propTypes = {
    /** The dropdown element used when clicking the dropdown button */
    children:PropTypes.node
}

export default DropdownButton;