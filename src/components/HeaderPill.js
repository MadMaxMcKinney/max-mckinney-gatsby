import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types';

import MaxProfileImg from '../assets/img/maxmckinney-profile.png';

const HeaderPill = (props) => (
    <HeaderPillContainer>
        {props.showProfile && <img src={MaxProfileImg} alt="Max McKinney Profile Image"/>}
        {props.type==="computer" && <i class="fad fa-computer-classic" style={{color: '#37FF63'}} />}
        {props.type==="uiux" && <i class="fad fa-palette" style={{color: '#66B6FF'}} />}
        {props.type==="problem" && <i class="fad fa-lightbulb" style={{color: '#B468FF'}} />}
        {props.title}
    </HeaderPillContainer>
)

const HeaderPillContainer = styled.span`
    display: inline-grid;
    grid-auto-flow: column;
    gap: 8px;
    place-items: center;
    vertical-align: middle;

    background: var(--blueblack-500);
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
`;

HeaderPill.propTypes = {
    type: PropTypes.oneOf(['computer', 'uiux', 'problem'])
}

export default HeaderPill
