import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import {fadeIn} from './../animations/m-styled-animations'

import logo from './../assets/img/max-white.png'

import {FaLinkedin} from 'react-icons/fa'
import {FaMedium} from 'react-icons/fa'
import {Fa500px} from 'react-icons/fa'
import {FaDribbble} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'

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

		<SitePages>
			<li>
				<a href="https://www.linkedin.com/in/mckinneymax" target="_blank">
					<FaLinkedin size={iconSize}/>
				</a>
			</li>
			<li>
				<a href="https://medium.com/@maxmckinney" target="_blank">
					<FaMedium size={iconSize}/>
				</a>
			</li>
			<li>
				<a href="https://500px.com/maxmckinney" target="_blank">
					<Fa500px size={iconSize}/>
				</a>
			</li>
			<li>
				<a href="https://dribbble.com/MaxMcKinney" target="_blank">
					<FaDribbble size={iconSize}/>
				</a>
			</li>
			<li>
				<a href="https://twitter.com/timmaxmckinney" target="_blank">
					<FaTwitter size={iconSize}/>
				</a>
			</li>
			<li>
				<a href="https://github.com/MaxMcKinney" target="_blank">
					<FaGithub size={iconSize}/>
				</a>
			</li>
		</SitePages>
	</Navmenu>
)

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
`

const SitePages = styled.ul`
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
	width: 100%;
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
	@media(max-width: 715px) {
		display: none;
	}
`
const SiteLogo = styled.img`
	width: 45px;
    height: auto;
    margin-right: 17px;
	display: block;
	padding-top: 30px;
	paddding-bottom: 30px;
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

export default Header
