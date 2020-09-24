import React from 'react'
import styled from 'styled-components'

export default (props) => {
  return (
	<PillContainer>
		<span>{renderIcon(props.text)}{props.text}</span>
	</PillContainer>
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
            return <i className="far fa-ruler-triangle"></i>

        case "development":
            return <i className="far fa-brackets-curly"></i> 

        default:
            return ""
    }
}

const PillContainer = styled.div`
	display: flex;
    justify-content: center;
    align-items: center;
    padding: 2px 14px;
	border-radius: 4px;
    background: var(--blueblack-300);

    i {
        padding-right: 6px;
    }

    span {
        color: white;
        text-transform: uppercase;
        letter-spacing: 1px;
        font-size: 14px;
        font-family: "Barlow", sans-serif;
        font-weight: 600;
        font-variant: small-caps;
        line-height: 165%;
    }

    @media(max-width: 1000px) {
        span {
            font-size: 13px;
        }
    }
`;