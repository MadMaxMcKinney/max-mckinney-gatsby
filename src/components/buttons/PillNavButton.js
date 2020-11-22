import styled from 'styled-components'
import {SIZE_MOBILE_LARGE} from '../CONSTANTS'

const PillNavButton = styled.div`
    display: grid;
    grid-auto-flow: column;
    align-items: baseline;
    gap: 8px;
    justify-content: center;
    padding: 4px 10px;
    background: var(--blueblack-500);
    border-radius: 100px;
    border: ${props => props.isActivePage ? `1px solid white` : `1px solid transparent`};
    transition: all 0.2s;

    p {
        margin: 0;
        font-weight: 700;
        font-size: 15px;
    }

    i {
        font-size: 14px;
    }

    &:hover {
        background: white;
        color: black;
    }

    &:active {
        transform: scale(0.97);
    }

    @media(max-width: ${SIZE_MOBILE_LARGE}) {
        padding: 4px 8px;
        
        p {
            font-size: 13px;
        }

        i {
            font-size: 13px;
        }
    }
`

export default PillNavButton