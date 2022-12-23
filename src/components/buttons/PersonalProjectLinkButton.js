import React from "react";
import styled from "styled-components";
import { MBody } from "../typography";
import { RocketLaunchIcon } from "@heroicons/react/20/solid";

const PersonalProjectLinkButton = (props) => {
    return (
        <ButtonContainer
            href={props.href}
            accent={props.accent}
            className={`flex w-fit gap-2 items-center justify-center rounded-full px-4 py-2 border border-solid border-transparent transition transform hover:border-white active:scale-95`}
        >
            <RocketLaunchIcon className="w-5 h-5"></RocketLaunchIcon>
            <MBody>View project</MBody>
        </ButtonContainer>
    );
};

const ButtonContainer = styled("a")`
    background: ${(props) => props.accent};
`;

export default PersonalProjectLinkButton;
