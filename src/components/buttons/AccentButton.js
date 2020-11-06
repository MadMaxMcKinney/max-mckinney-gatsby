import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'gatsby'
import styled from 'styled-components'
import {PulseRight} from '../ANIMATIONS'

const ReadMoreButton = (props) => {
  return (
	<ButtonContainer to={props.link} accent={props.accent}>
        <span>{props.children}</span><i className="far fa-sm fa-arrow-right"></i>
	</ButtonContainer>
  )
}

const ButtonContainer = styled(Link)`
    background: #0F1015;
    border: 1px solid transparent;
    padding: 8px 16px;
    border-radius: 4px;
    font-size: 18px;
    font-weight: 400;
    line-height: 160%;
    display: flex;
    justify-content: center;
    align-items: baseline;

    color: white;

    transition: all 0.2s;

    span {
        margin-right: 16px;
    }

    &:hover, &:active, &:focus {
        border-color: ${props => props.accent};
    }

    &:hover {
        color: ${props => props.accent};
    }

    &:hover i {
        animation: ${PulseRight} 0.3s;
        animation-iteration-count: infinite;
        animation-direction: alternate;
    }

    &:active {
        transform: scale(0.97);
    }
`;

ButtonContainer.proptypes = {
    to: PropTypes.string.isRequired,
    accent: PropTypes.string.isRequired
}

export default ReadMoreButton;
