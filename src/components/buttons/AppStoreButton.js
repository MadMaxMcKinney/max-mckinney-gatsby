import styled from 'styled-components'

const AppStoreButton = styled.a`
    background: #2094FA;
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
        box-shadow: 0px 7px 32px rgba(32, 148, 250, 0.44);
        transform: translateY(-2px);
    }

    &:hover:active, &:focus {
        transform: translateY(0px);
        background: #0259A6;
        box-shadow: none;
    }
`

export default AppStoreButton