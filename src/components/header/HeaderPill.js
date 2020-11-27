import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types';

import MaxProfileImg from '../../assets/img/maxmckinney-profile-small.png';
import IBMBee from '../../assets/img/ibm-bee.png';

const HeaderPill = (props) => (
    <HeaderPillContainer className="inline-grid grid-flow-col gap-2 place-items-center align-middle px-2 mx-1 rounded font-bold text-base">
        {props.showProfile && <img src={MaxProfileImg} alt="Max McKinney Profile"/>}
        {props.type==="computer" && <i class="fad fa-computer-classic" style={{color: '#37FF63'}} />}
        {props.type==="uiux" && <i class="fad fa-ruler-triangle" style={{color: '#B468FF'}} />}
        {props.type==="problem" && <i class="fad fa-lightbulb" style={{color: '#B468FF'}} />}
        {props.type==="development" && <i class="fad fa-brackets-curly" style={{color: '#FCC067'}} />}
        {props.type==="experience" && <i class="fad fa-window" style={{color: '#66B6FF'}} />}
        {props.type==="ibm" && <img src={IBMBee} style={{width: 24, height: 'auto'}} alt="IBM Bee Logo"/>}
        {props.title}
    </HeaderPillContainer>
)

const HeaderPillContainer = styled.span`
    background: #111321;

    i {
        margin-top: 3px;
    }

    img {
        width: 30px;
        height: 30px;
        object-fit: fill;
        border-radius: 100%;
    }
`;

HeaderPill.propTypes = {
    type: PropTypes.oneOf(['computer', 'uiux', 'problem', 'development'])
}

export default HeaderPill
