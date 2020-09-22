import React from 'react'
import {Link} from 'gatsby'
import styled from 'styled-components'
import {fadeIn} from '../animations/m-styled-animations'

import PillNavButton from './PillNavButton'
import logo from './../assets/img/max-white.png'
import {SIZE_MOBILE} from './CONSTANTS'

const Header = (props) => (
	<Navmenu>
		<SiteLogoContainer>
			<Link to="/">
				<SiteLogo
					src={logo}
				/>
			</Link>
		</SiteLogoContainer>

		<SiteLinks>
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
					<PillNavButton isActivePage={props.location.pathname === "/personal" ? true : false}>
                        <i class="fas fa-gem"></i>
                        <p>Personal</p>
                    </PillNavButton>
				</Link>
			</li>

            {/* Social Tabs */}
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
				<SocialButton href="https://maxmckinneyphoto.com/" target="_blank" rel="noopener noreferrer">
                    <i class="fas fa-camera-alt"></i>
				</SocialButton>
			</li>
		</SiteLinks>
	</Navmenu>
)

const Navmenu = styled.div`
	width: 100%;
    display: flex;
	height: 60px;
	margin-top: 18px;
	padding: 10px 20px;
    align-items: center;
    justify-content: space-between;
	position: absolute;
	top: 0;
	z-index: 2;
	animation: ${fadeIn} 1.3s;

    @media(max-width: ${SIZE_MOBILE}) {
        margin-top: 16px;
    }
`

const SiteLinks = styled.ul`
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
	align-items: center;
	list-style: none;
	text-transform: uppercase;
	font-size: 0.7rem;
	font-weight: 500;
	margin-right: 40px;
	margin-left: 0px;
    margin-bottom: 0px;

	li {
		margin: 0;
		padding: 0px 8px;
	}
	@media(max-width: 1155px) {
		margin-right: 0;
	}
	@media(max-width: ${SIZE_MOBILE}) {
        li {
            padding: 0px 4px;
            display: none;
        }
        li#personalProjects, li#professionalProjects {
		    display: initial;
        }
	}
`

const SocialButton = styled.a`
    font-size: 0.7rem;
    font-weight: 500;
    text-decoration: none;
    color: white;
    transition: all 0.6s;
    padding: 11px;
    display: flex;
    place-items: center;
    border-radius: 100%;
    transition: all 0.3s;

    i {
        font-size: 16px;
    }

    &:hover {
        background: var(--blueblack-300);
    }
`;

const SiteLogo = styled.img`
	width: 45px;
    height: auto;
    margin-right: 17px;
	display: block;
	padding-top: 30px;
	padding-bottom: 30px;

    @media(max-width: ${SIZE_MOBILE}) {
        padding: 0;
        margin: 0;
    }
`
const SiteLogoContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
	padding: 20px 50px;
	@media (max-width: 1155px) {
		padding: 0px;
	}
`

export default Header;
