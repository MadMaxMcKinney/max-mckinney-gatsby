import React from 'react'
import { MHeading05 } from '../typography'
import {ArrowRightIcon} from '@heroicons/react/20/solid'

const PersonalProjectLinkButton = (props) => {
  return (
	<ButtonContainer to={props.link} accent={props.accent} className="flex w-fit gap-2 group bg-gray-600 items-center justify-center rounded px-4 py-2 border border-solid border-transparent transition transform hover:brightness-110 hover:border-white active:scale-95">
        <MHeading05>{props.children}</MHeading05><ArrowRightIcon className="w-4 h-4 group-hover:animate-pulse-right"></ArrowRightIcon>
	</ButtonContainer>
  )
}

export default PersonalProjectLinkButton;
