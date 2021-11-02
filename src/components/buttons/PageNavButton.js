import React from 'react'
import styled from 'styled-components'

const PillNavButton = (props) => {
    return (
      <PageNavButtonContainer isActivePage={props.isActivePage} className="grid grid-flow-col gap-2 text-sm font-bold place-items-center transition-all group hover:opacity-70">
          {props.children} <i class="mr-2 fa-solid fa-caret-right transform translate-y-px group-hover:animate-pulse-right"></i>
      </PageNavButtonContainer>
    )
}

const PageNavButtonContainer = styled.div`
    color: ${props => props.isActivePage ? `white` : `#9CA3AF`};
`

export default PillNavButton