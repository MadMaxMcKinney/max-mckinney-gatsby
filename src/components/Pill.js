import React from 'react'
import styled from 'styled-components'

export default (props) => {
  return (
	<PillContainer>
		<span>{props.text}</span>
	</PillContainer>
  )
}

const PillContainer = styled.div`
	display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px 10px;
	border-radius: 100px;
    background: #222222;

    span {
        color: white;
        text-transform: uppercase;
        letter-spacing: 1px;
        font-size: 14px;
        font-family: "Source Sans Pro", sans-serif;
        font-weight: 600;
        font-variant: small-caps;
        line-height: 165%;
    }
`;