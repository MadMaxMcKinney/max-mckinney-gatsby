import styled from 'styled-components'
import {SIZE_MOBILE} from './CONSTANTS'

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
    transition: all 0.4s;

    p {
        margin: 0;
        font-weight: 700;
        font-size: 15px;
    }

    &:hover {
        background: white;
        color: black;
    }

    @media(max-width: ${SIZE_MOBILE}) {
        padding: 4px 8px;
        
        p {
            font-size: 12px;
        }
    }
`

export default PillNavButton