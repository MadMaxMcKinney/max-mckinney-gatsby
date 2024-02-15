import React from "react";
import { SocialButton } from "../../components/buttons/SocialButton";
import PageLink from "../links/PageLink";

const Footer = () => {
    return (
        <div className="flex flex-col justify-between mt-20 mb-16 px-6 animate-fade-in-slow mx-auto w-full sm:mb-10 sm:mt-40 sm:flex-row md:mt-32 xl:max-w-8xl">
            {/* Social */}
            <div className="grid grid-flow-col gap-6 items-center list-none mb-8 animate-fade-in-slow sm:mb-0 sm:justify-start">
                <SocialButton href="https://dribbble.com/MadMaxMcKinney" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-dribbble"></i>
                </SocialButton>
                <SocialButton href="https://github.com/MadMaxMcKinney" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github"></i>
                </SocialButton>
                <SocialButton href="http://youtube.com/maxmckinney" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-youtube"></i>
                </SocialButton>
                <SocialButton href="https://photos.maxmckinney.com/" target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-aperture"></i>
                </SocialButton>
                <SocialButton href="https://www.linkedin.com/in/mckinneymax" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin-in"></i>
                </SocialButton>
            </div>

            {/* Email */}
            <PageLink className="text-xl text-center font-bold md:text-2xl md:text-left" href="mailto:hello@maxmckinney.com">
                hello@maxmckinney.com
            </PageLink>
        </div>
    );
};

export default Footer;
