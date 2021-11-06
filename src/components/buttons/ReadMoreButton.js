import React from 'react'
import {Link} from 'gatsby'
import styled from 'styled-components'

const ReadMoreButton = (props) => {
  return (
	<ButtonContainer to={props.link} accent={props.accent} className="inline-flex group bg-gray-600 items-baseline justify-center rounded px-4 py-2 border border-solid border-transparent text-lg filter transition transform hover:brightness-110 hover:border-white active:scale-95">
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
