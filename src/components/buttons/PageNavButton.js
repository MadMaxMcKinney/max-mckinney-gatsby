import React from 'react'
import styled from 'styled-components'
import { MHeading06 } from '../typography'
import {ArrowSmallRightIcon} from '@heroicons/react/20/solid'

const PageNavButton = (props) => {
    return (
      <PageNavButtonContainer isActivePage={props.isActivePage} className="grid grid-flow-col gap-2 text-sm font-bold place-items-center transition-all group hover-supported:hover:opacity-70">
          {props.children} <ArrowSmallRightIcon className="w-4 h-4 mr-2 transform translate-y-px hover-supported:group-hover:animate-pulse-right"></ArrowSmallRightIcon>
      </PageNavButtonContainer>
    )
}

const PageNavButtonContainer = styled(MHeading06)`
    color: ${props => props.isActivePage ? `white` : `#9CA3AF`};
`

export default PageNavButton