require('typeface-roboto');
require('typeface-source-sans-pro');

import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import logo from './../assets/img/max-logo.png'
import favicon32 from './../assets/favicon/favicon-32x32.png'
import favicon16 from './../assets/favicon/favicon-16x16.png'
import faviconApple from './../assets/favicon/apple-touch-icon.png'
import safariTab from './../assets/favicon/safari-pinned-tab.svg'

// Component imports
import Header from '../components/header'
import Footer from '../components/footer'
import './index.css'

const Layout = ({ children, data }) => (
	<MainContainer>
		<Helmet title={data.site.siteMetadata.title}>
			<meta name="description" content={data.site.siteMetadata.description} />
			<meta name="image" content={logo}/>
			<meta itemprop="name" content="Max McKinney"/>
			<meta itemprop="description" content={data.site.siteMetadata.description}/>
			<meta itemprop="image" content={data.site.host + "/" + logo}/>

			<meta name="twitter:card" content="summary"/>
			<meta name="twitter:title" content="Max McKinney"/>
			<meta name="twitter:description" content={data.site.siteMetadata.description}/>
			<meta name="twitter:site" content="@timmaxmckinney"/>
			<meta name="twitter:image" content={data.site.host + "/" + logo}/>

			<meta name="og:title" content="Max McKinney"/>
			<meta name="og:description" content={data.site.siteMetadata.description}/>
			<meta name="og:image" content={data.site.host + "/" + logo}/>
			<meta name="og:url" content={data.site.host}/>
			<meta name="og:site_name" content="Max McKinney"/>
			<meta name="og:locale" content="en_US"/>
			<meta name="og:type" content="website"/>

			<link rel="apple-touch-icon" sizes="180x180" href={faviconApple}/>
			<link rel="icon" type="image/png" sizes="32x32" href={favicon32}/>
			<link rel="icon" type="image/png" sizes="16x16" href={favicon16}/>
			<link rel="mask-icon" href={safariTab} color="#5bbad5"/>
			<meta name="msapplication-TileColor" content="#000000"/>
			<meta name="theme-color" content="#ffffff"/>

		</Helmet>

		<Header />

		{children()}

		<Footer />

	</MainContainer>
)

Layout.propTypes = {
	children: PropTypes.func,
}

const MainContainer = styled.div`
	width: 100%;
`

export default Layout

export const query = graphql`
	query SiteTitleQuery {
		site {
			host
			siteMetadata {
				title
				description
			}
		}
	}
`;
