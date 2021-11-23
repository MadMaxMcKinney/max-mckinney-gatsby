import React from 'react'
import styled from 'styled-components'
import { MHeading06 } from '../typography'

const PageNavButton = (props) => {
    return (
      <PageNavButtonContainer isActivePage={props.isActivePage} className="grid grid-flow-col gap-2 text-sm font-bold place-items-center transition-all group hover-supported:hover:opacity-70">
          {props.children} <i className="mr-2 fa-solid fa-caret-right transform translate-y-px hover-supported:group-hover:animate-pulse-right"></i>
      </PageNavButtonContainer>
    )
}

const PageNavButtonContainer = styled(MHeading06)`
    color: ${props => props.isActivePage ? `white` : `#9CA3AF`};
`

export default PageNavButton