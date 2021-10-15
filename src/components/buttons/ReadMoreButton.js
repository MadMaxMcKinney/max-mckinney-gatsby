import React from 'react'
import {Link} from 'gatsby'
import styled from 'styled-components'
import {PulseRight} from '../ANIMATIONS'

const ReadMoreButton = (props) => {
  return (
	<ButtonContainer to={props.link} accent={props.accent} className="flex group bg-gray-700 items-baseline justify-center rounded px-4 py-2 border border-solid border-white text-lg filter transition transform hover:brightness-110 active:scale-95">
        <span className="mr-3">{props.children}</span><i className="far fa-sm fa-arrow-right group-hover:animate-pulse-right"></i>
	</ButtonContainer>
  )
}

const ButtonContainer = styled(Link)`
    &:hover{
        background: ${props => props.accent};
    }
`;

export default ReadMoreButton;
