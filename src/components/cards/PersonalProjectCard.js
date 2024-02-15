import styled from "styled-components";
import DynamicLink from "../utils/DynamicLink";

const PersonalProjectCard = styled(DynamicLink)`
    --accent-color: ${(props) => props.accent};

    display: flex;
    flex-direction: column;
    gap: 24px;
    position: relative;
    padding: 32px;

    border-radius: 24px;
    border: 1px solid rgba(255, 255, 255, 0.15);

    background: #0c0c12;
    transition: all 0.2s;
    overflow: hidden;

    &:hover {
        border-color: var(--accent-color);
    }

    & > * {
        z-index: 10;
    }

    &::after {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: var(--accent-color);
        opacity: 0;
        transition: all 0.3s;
        z-index: 1;
    }

    &:hover&::after {
        opacity: 0.15;
    }

    &:active {
        transform: scale(0.97);
    }

    @media (max-width: 1015px) {
        padding: 24px;
    }
`;

export default PersonalProjectCard;
