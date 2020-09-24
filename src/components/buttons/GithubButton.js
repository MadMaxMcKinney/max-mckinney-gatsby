import styled from 'styled-components'

const GithubButton = styled.a`
    background: #ffffff;
    color: #000000;
    border-radius: 64px;
    padding: 8px 16px;

    font-weight: 400;
    
    display: grid;
    grid-gap: 8px;
    grid-auto-flow: column;
    place-content: center;
    place-items: center;

    transition: all 0.2s cubic-bezier();

    &:hover {
        box-shadow: 0px 7px 32px rgba(255, 255, 255, 0.3);
        transform: translateY(-2px);
    }

    &:hover:active, &:focus {
        transform: translateY(0px);
        background: #D0D0D1;
        box-shadow: none;
    }
`

export default GithubButton