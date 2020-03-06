import React from 'react'
import {Link} from 'gatsby'
import styled from 'styled-components'
import {fadeIn} from '../animations/m-styled-animations'

import {FaLinkedin} from 'react-icons/fa'
import {FaMedium} from 'react-icons/fa'
import {FaDribbble} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'
import {IoIosCamera} from 'react-icons/io'

const iconSize = 17;

const Footer = () => {
  return (
	<PageFooter>
		<EmailLink href="mailto:hello@maxmckinney.com">hello@maxmckinney.com</EmailLink>

		<FooterSocialLinks>
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
				<Link to="/photography">
					<IoIosCamera size={iconSize+6}/>
				</Link>
			</li>
		</FooterSocialLinks>

	</PageFooter>
  )
}

const PageFooter = styled.div`
	display: flex;
    padding: 0px 100px;
    margin: 0 auto;
	margin-top: 100px;
	margin-bottom: 30px;
    flex-direction: row;
    align-items: flex-end;
	justify-content: flex-end;
	animation: ${fadeIn} 1.3s;

	@media(max-width: 1155px) {
		padding: 0 24px;
	}
	
	@media(max-width: 715px) {
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-top: 50px;
		padding: 0 24px;
	}

`;

const EmailLink = styled.a`
	font-size: 1.2rem;
	display: block;
	margin-top: 40px;
	font-weight: 600;
`;

const FooterSocialLinks = styled.ul`
	list-style: none;
	margin: 0;
	padding: 0;
	line-height: 1.9;
	font-size: 1.1rem;
	font-weight: 300;
	justify-content: center;
	width: 100%;
	display: none;
	flex-direction: row;
	li {
		padding: 8px 50px;
	}
	@media(max-width: 715px) {
		display: flex;
		margin-top: 24px;
		li {
			padding: 8px 12px;
		}
	}
`;

export default Footer;