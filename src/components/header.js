import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const Header = () => (
	<Navmenu>
		<SiteLogoContainer>
			<Link to="/">
				<SiteLogo
					class="site-logo"
					src="<?php echo get_stylesheet_directory_uri(); ?>/img/max-white-v2.png"
				/>
			</Link>
		</SiteLogoContainer>

		<SitePages>
			<li>
				<a href="https://www.linkedin.com/in/mckinneymax" target="_blank">
					<i class="fab fa-lg fa-linkedin" />
				</a>
			</li>
			<li>
				<a href="https://medium.com/@maxmckinney" target="_blank">
					<i class="fab fa-lg fa-medium" />
				</a>
			</li>
			<li>
				<a href="https://500px.com/maxmckinney" target="_blank">
					<i class="fab fa-lg fa-500px" />
				</a>
			</li>
			<li>
				<a href="https://dribbble.com/MaxMcKinney" target="_blank">
					<i class="fab fa-lg fa-dribbble" />
				</a>
			</li>
			<li>
				<a href="https://twitter.com/timmaxmckinney" target="_blank">
					<i class="fab fa-lg fa-twitter" />
				</a>
			</li>
			<li>
				<a href="https://github.com/MaxMcKinney" target="_blank">
					<i class="fab fa-lg fa-github" />
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
		}
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
`

export default Header
