import React from 'react'
import {Link} from 'gatsby'
import styled from 'styled-components'

import PillNavButton from '../buttons/PillNavButton'
import {SocialButton, SocialLinkButton} from '../buttons/SocialButton'
import logo from '../../assets/img/max-white.png'

const Header = (props) => (
	<Navmenu className="animate-fade-in-fast">
		{/* Site Logo Container */}
        <div className="flex flex-row items-center justify-start xl:py-5 xl:px-12">
			<Link to="/">
				<SiteLogo src={logo} />
			</Link>
		</div>

		<div className="grid grid-flow-col gap-2 justify-end items-center list-none md:gap-4 md:mr-6">
            {/* Page Tabs */}
            <li id="professionalProjects">
				<Link to="/">
					<PillNavButton isActivePage={props.location.pathname === "/" ? true : false}>
                        <i class="fas fa-layer-group"></i>
                        <p>Professional</p>
                    </PillNavButton>
				</Link>
			</li>
            <li id="personalProjects">
				<Link to="/personal">
					<PillNavButton isActivePage={RegExp("\/personal.?").test(props.location.pathname) ? true : false}>
                        <i class="fas fa-gem"></i>
                        <p>Personal</p>
                    </PillNavButton>
				</Link>
			</li>

            {/* Social Tabs */}
            <li className="hidden md:block">
				<SocialButton href="https://dribbble.com/MadMaxMcKinney" target="_blank" rel="noopener noreferrer">
                    <i class="fab fa-dribbble"></i>
				</SocialButton>
			</li>
			<li className="hidden md:block">
				<SocialButton href="https://github.com/MadMaxMcKinney" target="_blank" rel="noopener noreferrer">
                    <i class="fab fa-github"></i>
				</SocialButton>
			</li>
			<li className="hidden md:block">
				<SocialButton href="https://www.linkedin.com/in/mckinneymax" target="_blank" rel="noopener noreferrer">
                    <i class="fab fa-linkedin-in"></i>
				</SocialButton>
			</li>
            <li className="hidden md:block">
				<SocialButton href="http://youtube.com/maxmckinney" target="_blank" rel="noopener noreferrer">
                    <i class="fab fa-youtube"></i>
				</SocialButton>
			</li>
			<li className="hidden md:block">
				<SocialButton href="https://photography.maxmckinney.com/" target="_blank" rel="noopener noreferrer">
                    <i class="fas fa-camera-alt"></i>
				</SocialButton>
			</li>
            <li className="hidden md:block">
                <SocialLinkButton to="/supporters">
                    <i class="fas fa-gift"></i>
                </SocialLinkButton>
			</li>
            
		</div>
	</Navmenu>
)

const Navmenu = styled.div`
	width: 100%;
    display: flex;
	height: 60px;
	margin-top: 16px;
	padding: 10px 20px;
    align-items: center;
    justify-content: space-between;
	position: absolute;
	top: 0;
	z-index: 2;
`

const SiteLogo = styled.img`
    width: 40px;
    height: auto;
`

export default Header;
