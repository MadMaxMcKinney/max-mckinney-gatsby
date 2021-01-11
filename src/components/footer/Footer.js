import React from 'react'
import styled from 'styled-components'
import SocialButton from '../buttons/SocialButton'

const Footer = () => {
  return (
	<div className="animate-fade-in-slow px-6 mt-10 mb-10 mx-auto flex flex-col justify-center md:mx-auto md:flex-row md:justify-end md:mt-32 xl:px-28">

        {/* Email */}
		<div className="text-2xl font-bold hidden md:block" href="mailto:maxmckinney@hey.com">maxmckinney@hey.com</div>

        {/* Social Links */}
		<div className="inline-grid grid-flow-col gap-4 list-none justify-center md:hidden">
            <li>
				<SocialButton href="https://dribbble.com/MaxMcKinney" target="_blank" rel="noopener noreferrer">
                    <i class="fab fa-dribbble"></i>
				</SocialButton>
			</li>
			<li>
				<SocialButton href="https://github.com/MaxMcKinney" target="_blank" rel="noopener noreferrer">
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
		</div>

	</div>
  )
}

export default Footer;