import React from 'react'
import {Link} from 'gatsby'
import styled from 'styled-components'
import {PulseRight} from './Animations'

const ReadMoreButton = (props) => {
  return (
	<ButtonContainer to={props.link}>
        <span>Read more about it</span><i className="fal fa-sm fa-arrow-right"></i>
	</ButtonContainer>
  )
}

const ButtonContainer = styled(Link)`
    background: #0F0F0F;
    border: 1px solid #FFFFFF33;
    padding: 8px 16px;
    border-radius: 4px;
    font-size: 18px;
    line-height: 160%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s;

    span {
        margin-right: 16px;
    }

    &:hover, &:active, &:focus {
        border-color: #ffffff;
    }

    &:hover i {
        animation: ${PulseRight} 0.3s;
        animation-iteration-count: infinite;
        animation-direction: alternate;
    }
`;

export default ReadMoreButton;
