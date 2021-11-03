import styled from 'styled-components'

const YouTubeButton = styled.a`
    background: #FF4C3E;
    border-radius: 64px;
    padding: 8px 16px;

    font-weight: 400;
    font-size: 18px;
    
    display: inline-grid;
    grid-gap: 8px;
    grid-auto-flow: column;
    place-content: center;
    place-items: center;

    transition: all 0.2s;

    &:hover {
        box-shadow: 0px 7px 32px 0px rgba(250, 32, 32, 0.4);
        transform: translateY(-2px);
    }

    &:hover:active, &:focus {
        transform: translateY(0px);
        background: #CD372C;
        box-shadow: none;
    }
`

export default YouTubeButton