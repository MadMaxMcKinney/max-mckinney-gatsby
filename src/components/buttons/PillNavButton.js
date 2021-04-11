import React from 'react'
import styled from 'styled-components'

const PillNavButton = (props) => {
    return (
      <PillNavButtonContainer isActivePage={props.isActivePage} className="grid grid-flow-col gap-2 text-sm font-bold uppercase rounded-full transition-all items-baseline justify-center px-3 py-1 bg-blueblack-500 hover:bg-white hover:text-black md:text-base">
          {props.children}
      </PillNavButtonContainer>
    )
}

const PillNavButtonContainer = styled.div`
    border: ${props => props.isActivePage ? `1px solid white` : `1px solid transparent`};

    &:active {
        transform: scale(0.97);
    }
`

export default PillNavButton