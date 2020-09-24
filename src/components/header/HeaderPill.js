import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types';

import MaxProfileImg from '../../assets/img/maxmckinney-profile-small.png';

const HeaderPill = (props) => (
    <HeaderPillContainer>
        {props.showProfile && <img src={MaxProfileImg} alt="Max McKinney Profile"/>}
        {props.type==="computer" && <i class="fad fa-computer-classic" style={{color: '#37FF63'}} />}
        {props.type==="uiux" && <i class="fad fa-ruler-triangle" style={{color: '#B468FF'}} />}
        {props.type==="problem" && <i class="fad fa-lightbulb" style={{color: '#B468FF'}} />}
        {props.type==="development" && <i class="fad fa-brackets-curly" style={{color: '#FCC067'}} />}
        {props.type==="experience" && <i class="fad fa-window" style={{color: '#66B6FF'}} />}
        {props.title}
    </HeaderPillContainer>
)

const HeaderPillContainer = styled.span`
    display: inline-grid;
    grid-auto-flow: column;
    gap: 8px;
    place-items: center;
    vertical-align: middle;

    background: #111321;
    padding: 0px 8px;
    margin: 0 2px;
    border-radius: 6px;
    font-weight: 600;

    img {
        width: 30px;
        height: 30px;
        object-fit: fill;
        border-radius: 100%;
    }

    @media(max-width: 500px) {
        font-size: 0.8rem;
    }
`;

HeaderPill.propTypes = {
    type: PropTypes.oneOf(['computer', 'uiux', 'problem', 'development'])
}

export default HeaderPill
