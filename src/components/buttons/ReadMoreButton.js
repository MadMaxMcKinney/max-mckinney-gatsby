import React from 'react'
import {Link} from 'gatsby'
import styled from 'styled-components'
import {PulseRight} from '../ANIMATIONS'

const ReadMoreButton = (props) => {
  return (
	<ButtonContainer to={props.link} accent={props.accent}>
        <span>Read more about it</span><i className="far fa-sm fa-arrow-right"></i>
	</ButtonContainer>
  )
}

const ButtonContainer = styled(Link)`
    background: ${props => props.accent};
    border: 1px solid transparent;
    padding: 8px 16px;
    border-radius: 4px;
    font-size: 18px;
    font-weight: 400;
    line-height: 160%;
    display: flex;
    justify-content: center;
    align-items: baseline;
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
