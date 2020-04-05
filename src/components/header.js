import React from 'react'
import {Link} from 'gatsby'
import styled from 'styled-components'
import {fadeIn} from '../animations/m-styled-animations'

import logo from './../assets/img/max-white.png'

import {FaLinkedin} from 'react-icons/fa'
import {FaMedium} from 'react-icons/fa'
import {FaDribbble} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'
import {IoIosCamera} from 'react-icons/io'

const iconSize = 17;

const Header = () => (
	<Navmenu>
		<SiteLogoContainer>
			<Link to="/">
				<SiteLogo
					src={logo}
				/>
			</Link>
		</SiteLogoContainer>

		<SiteSocial>
            <li>
				<a href="https://dribbble.com/MaxMcKinney" target="_blank" rel="noopener noreferrer">
					<FaDribbble size={iconSize}/>
				</a>
			</li>
			<li>
				<a href="https://github.com/MaxMcKinney" target="_blank" rel="noopener noreferrer">
					<FaGithub size={iconSize}/>
				</a>
			</li>
			<li>
				<a href="https://www.linkedin.com/in/mckinneymax" target="_blank" rel="noopener noreferrer">
					<FaLinkedin size={iconSize}/>
				</a>
			</li>
			<li>
				<a href="https://medium.com/@maxmckinney" target="_blank" rel="noopener noreferrer">
					<FaMedium size={iconSize}/>
				</a>
			</li>
			<li>
				<a href="https://twitter.com/madmaxmckinney" target="_blank" rel="noopener noreferrer">
					<FaTwitter size={iconSize}/>
				</a>
			</li>
			<li>
				<a href="https://maxmckinneyphoto.com/" rel="noopener noreferrer">
					<PillNavItem>
                        <IoIosCamera size={iconSize+6}/>
                        <p>Photography</p>
                    </PillNavItem>
				</a>
			</li>
		</SiteSocial>
	</Navmenu>
)

const SIZE_MOBILE = "715px";

const Navmenu = styled.div`
	width: 100%;
	display: flex;
	height: 60px;
	margin-top: 18px;
	padding: 10px 20px;
	align-items: center;
	position: absolute;
	top: 0;
	z-index: 2;
	animation: ${fadeIn} 1.3s;

    @media(max-width: ${SIZE_MOBILE}) {
        margin-top: 16px;
    }
`

const SiteSocial = styled.ul`
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
	align-items: center;
	list-style: none;
	text-transform: uppercase;
	font-size: 0.7rem;
	font-weight: 500;
	letter-spacing: 1px;
	margin-right: 40px;
	margin-left: 0px;
	margin-bottom: 0px;
	/*width: 100%;*/
	li {
		margin: 0;
		padding: 0px 20px;
		a {
			font-size: 0.7rem;
			font-weight: 500;
			text-decoration: none;
			color: white;
			transition: all 0.6s;
			&:hover {
				opacity: 0.6;
			}
		}
	}
	@media(max-width: 1155px) {
		margin-right: 0;
	}
	@media(max-width: ${SIZE_MOBILE}) {
        li:not(:last-child) {
		    display: none;
        }
        li {
            padding: 0;
        }
	}
`

const PillNavItem = styled.div`
    display: grid;
    grid-auto-flow: column;
    align-items: center;
    grid-gap: 8px;
    justify-content: center;
    padding: 8px 16px;
    border: 2px solid white;
    border-radius: 100px;
    transition: all 0.4s;

    p {
        margin: 0;
        font-weight: 500;
        font-size: 14px;
    }

    &:hover {
        background: white;
        color: black;
    }

    @media(max-width: ${SIZE_MOBILE}) {
        padding: 4px 8px;
        
        p {
            font-size: 12px;
        }
    }
`

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
    width: 100%;
	flex-grow: 1;
	padding: 20px 50px;
	@media (max-width: 1155px) {
		padding: 0px;
	}
`

export default Header;
