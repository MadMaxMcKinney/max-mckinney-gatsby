import React from 'react'
import {Link} from 'gatsby'
import styled from 'styled-components'
import { MHeading05 } from '../typography'
import {ChevronDoubleRightIcon} from '@heroicons/react/20/solid'

const ReadMoreButton = (props) => {
  return (
	<ButtonContainer to={props.link} accent={props.accent} className="flex w-fit gap-2 group bg-gray-600 items-center justify-center rounded px-4 py-2 border border-solid border-transparent filter transition transform hover:brightness-110 hover:border-white active:scale-95">
        <MHeading05>{props.children}</MHeading05><ChevronDoubleRightIcon className="w-4 h-4 group-hover:animate-pulse-right"></ChevronDoubleRightIcon>
	</ButtonContainer>
  )
}

const ButtonContainer = styled(Link)`
    &:hover{
        background: ${props => props.accent};
    }
`;

export default ReadMoreButton;
