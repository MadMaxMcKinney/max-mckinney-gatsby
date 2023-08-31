import React from "react";
import { SocialColorButton } from "../../components/buttons/SocialButton";
import PageLink from "../links/PageLink";

const Footer = () => {
    return (
        <div className="flex flex-col justify-between mt-20 mb-16 px-6 animate-fade-in-slow mx-auto w-full sm:mb-10 sm:mt-40 sm:flex-row md:mt-32 xl:max-w-8xl">
            {/* Social */}
            <div className="grid grid-flow-col gap-6 items-center list-none mb-8 animate-fade-in-slow sm:mb-0 sm:justify-start">
                <SocialColorButton
                    className="hover:text-max-blue-300"
                    href="https://twitter.com/MadMaxMcKinney"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i className="fab fa-twitter"></i>
                </SocialColorButton>
                <SocialColorButton
                    className="hover:text-max-red-300"
                    href="https://dribbble.com/MadMaxMcKinney"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i className="fab fa-dribbble"></i>
                </SocialColorButton>
                <SocialColorButton
                    className="hover:text-max-blue-300"
                    href="https://github.com/MadMaxMcKinney"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i className="fab fa-github"></i>
                </SocialColorButton>
                <SocialColorButton
                    className="hover:text-max-purple-300"
                    href="http://youtube.com/maxmckinney"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i className="fab fa-youtube"></i>
                </SocialColorButton>
                <SocialColorButton
                    className="hover:text-max-yellow-300"
                    href="https://photos.maxmckinney.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i className="fas fa-aperture"></i>
                </SocialColorButton>
                <SocialColorButton
                    className="hover:text-max-green-300"
                    href="https://www.linkedin.com/in/mckinneymax"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i className="fab fa-linkedin-in"></i>
                </SocialColorButton>
            </div>

            {/* Email */}
            <PageLink
                className="text-xl text-center font-bold md:text-2xl md:text-left"
                href="mailto:hello@maxmckinney.com"
            >
                hello@maxmckinney.com
            </PageLink>
        </div>
    );
};

export default Footer;
