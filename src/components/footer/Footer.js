import React from 'react'
import styled from 'styled-components'
import {SocialButton, SocialLinkButton} from '../buttons/SocialButton'

const Footer = () => {
  return (
	<div className="animate-fade-in-slow px-6 mt-10 mb-10 mx-auto flex flex-col justify-center md:mx-auto md:flex-row md:justify-end md:mt-32 xl:px-28">

        {/* Email */}
		<div className="text-xl text-center mb-10 font-bold md:text-2xl md:text-left md:mb-0" href="mailto:max@maxmckinney.com">max@maxmckinney.com</div>

        {/* Social Links */}
		<div className="inline-grid grid-cols-3 gap-3 list-none justify-center md:hidden">
            <li>
				<SocialButton href="https://dribbble.com/MadMaxMcKinney" target="_blank" rel="noopener noreferrer">
                    <i class="fab fa-dribbble"></i>
				</SocialButton>
			</li>
			<li>
				<SocialButton href="https://github.com/MaxMaxMcKinney" target="_blank" rel="noopener noreferrer">
                    <i class="fab fa-github"></i>
				</SocialButton>
			</li>
			<li>
				<SocialButton href="https://www.linkedin.com/in/mckinneymax" target="_blank" rel="noopener noreferrer">
                    <i class="fab fa-linkedin-in"></i>
				</SocialButton>
			</li>
            <li>
				<SocialButton href="http://youtube.com/maxmckinney" target="_blank" rel="noopener noreferrer">
                    <i class="fab fa-youtube"></i>
				</SocialButton>
			</li>
			<li>
				<SocialButton href="https://photography.maxmckinney.com/" target="_blank" rel="noopener noreferrer">
                    <i class="fas fa-camera-alt"></i>
				</SocialButton>
			</li>
            <li>
                <SocialLinkButton to="/supporters">
                    <i class="fas fa-gift"></i>
                </SocialLinkButton>
			</li>
		</div>

	</div>
  )
}

export default Footer;