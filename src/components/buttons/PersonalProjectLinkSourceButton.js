import React from "react";
import styled from "styled-components";
import { MBody } from "../typography";
import { CodeBracketIcon } from "@heroicons/react/20/solid";

const PersonalProjectLinkSourceButton = (props) => {
    return (
        <ButtonContainer
            href={props.href}
            accent={props.accent}
            className="flex w-fit gap-2 bg-white text-black items-center justify-center rounded-full px-4 py-2 border border-solid border-transparent transition transform hover:border-white hover:text-white active:scale-95"
        >
            <CodeBracketIcon className="w-5 h-5"></CodeBracketIcon>
            <MBody>View source</MBody>
        </ButtonContainer>
    );
};

const ButtonContainer = styled("a")`
    &:hover {
        background: ${(props) => props.accent};
    }
`;

export default PersonalProjectLinkSourceButton;
