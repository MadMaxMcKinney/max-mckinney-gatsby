import React from 'react'
import { MBodyUtility } from '../typography'

export default (props) => {
  return (
	<div className="flex justify-center items-center py-1 px-2 rounded-sm bg-white text-gray-900">
		<MBodyUtility className="uppercase text-sm font-semibold ">{renderIcon(props.text)}{props.text}</MBodyUtility>
	</div>
  )
}

/**
 * Render a specific icon based on the category title
 *
 * @param {String} categoryTitle
 * @returns
 */
function renderIcon(categoryTitle) {
    switch(categoryTitle.toLowerCase()) {
        case "design":
            return <i className="fas fa-ruler-triangle pr-1"></i>

        case "development":
            return <i className="fas fa-brackets-curly pr-1"></i> 

        case "ui/ux":
            return <i className="fas fa-pen-nib pr-1"></i> 
        
        case "product":
            return <i className="fas fa-browsers pr-1"></i> 
        
        case "strategy":
            return <i className="fas fa-brain-circuit pr-1"></i> 

        case "systems":
            return <i className="fas fa-grid-2 pr-1"></i> 

        case "lead":
            return <i className="fas fa-user-pilot-tie pr-1"></i> 
        
        case "visual":
            return <i className="fas fa-palette pr-1"></i> 

        default:
            return ""
    }
}