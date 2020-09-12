import React from 'react'
import styled from 'styled-components'
import {fadeIn} from '../animations/m-styled-animations'

const Footer = () => {
  return (
	<PageFooter>
		<EmailLink href="mailto:maxmckinney@hey.com">maxmckinney@hey.com</EmailLink>

		<FooterSocialLinks>
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
			<li>
				<SocialButton href="https://twitter.com/madmaxmckinney" target="_blank" rel="noopener noreferrer">
                    <i class="fab fa-twitter"></i>
				</SocialButton>
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

    &:hover {
        background: #1c2030;
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