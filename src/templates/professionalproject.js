import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import Img from 'gatsby-image'
import {fadeInDown, fadeInUp, fadeInScaleDown} from '../animations/m-styled-animations'

import LiveContentCard from '../components/cards/LiveContentCard'
import { MBodyLight, MHeading03 } from '../components/typography'

export default function Template({ data }) {
	return (
		<React.Fragment>

		<Helmet title={data.site.siteMetadata.title + ' | ' + data.markdownRemark.frontmatter.title}>
            <meta name="theme-color" content={data.markdownRemark.frontmatter.themeColor}/>

            <meta name="description" content={data.markdownRemark.frontmatter.projectShortBrief} />
            <meta name="image" content={data.site.siteMetadata.siteUrl + data.markdownRemark.frontmatter.thumb.childImageSharp.fixed.src}/>
            <meta itemprop="name" content={data.site.siteMetadata.title + ' | ' + data.markdownRemark.frontmatter.title}/>
            <meta itemprop="description" content={data.markdownRemark.frontmatter.projectShortBrief}/>
            <meta itemprop="image" content={data.site.siteMetadata.siteUrl + data.markdownRemark.frontmatter.thumb.childImageSharp.fixed.src}/>

            <meta name="twitter:card" content="summary"/>
            <meta name="twitter:title" content={data.site.siteMetadata.title + ' | ' + data.markdownRemark.frontmatter.title}/>
            <meta name="twitter:description" content={data.markdownRemark.frontmatter.projectShortBrief}/>
            <meta name="twitter:site" content="@madmaxmckinney"/>
            <meta name="twitter:image" content={data.site.siteMetadata.siteUrl + data.markdownRemark.frontmatter.thumb.childImageSharp.fixed.src}/>

            <meta name="og:title" content={data.site.siteMetadata.title + ' | ' + data.markdownRemark.frontmatter.title}/>
            <meta name="og:description" content={data.markdownRemark.frontmatter.projectShortBrief}/>
            <meta name="og:image" content={data.site.siteMetadata.siteUrl + data.markdownRemark.frontmatter.thumb.childImageSharp.fixed.src}/>
            <meta name="og:url" content={data.site.siteMetadata.siteUrl + data.markdownRemark.fields.slug}/>
            <meta name="og:site_name" content="Max McKinney"/>

            <meta name="msapplication-TileColor" content={data.markdownRemark.frontmatter.themeColor}/>

        </Helmet>

		<ProjectHeader themeColor={data.markdownRemark.frontmatter.themeColor}>
			<Img style={{position: 'absolute', top: 0, left: 0, width: '100%', height: `100%`}} fluid={data.markdownRemark.frontmatter.image.childImageSharp.fluid}/>
			<ProjectPostTitle>{data.markdownRemark.frontmatter.title}</ProjectPostTitle>
		</ProjectHeader>

		<ProjectContentGrid>
			<ProjectDetails>
				<div>
					<MHeading03 className="mb-1">Role</MHeading03>
					<MBodyLight className="mb-4">{data.markdownRemark.frontmatter.projectRole}</MBodyLight>
				</div>
				<div>
					<MHeading03 className="mb-1">Client</MHeading03>
					<MBodyLight className="mb-4">{data.markdownRemark.frontmatter.projectClient}</MBodyLight>
				</div>
				<div>
					<MHeading03 className="mb-1">Agency</MHeading03>
					<MBodyLight className="mb-4">{data.markdownRemark.frontmatter.projectAgency}</MBodyLight>
				</div>
				<div>
					<MHeading03 className="mb-1">Date</MHeading03>
					<MBodyLight className="mb-4">{data.markdownRemark.frontmatter.projectDate}</MBodyLight>
				</div>
				<div>
					<MHeading03 className="mb-1">Brief</MHeading03>
					<MBodyLight className="mb-4">{data.markdownRemark.frontmatter.projectBrief}</MBodyLight>
				</div>
			</ProjectDetails>

			<MHeading03 className="mb-1">Case Study</MHeading03>

			<div className="prose prose-lg text-white max-w-none" dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />

			{data.markdownRemark.frontmatter.showLiveContent && 
				<LiveContentCard thumbnail={data.markdownRemark.frontmatter.image.childImageSharp.fluid.src} title={data.markdownRemark.frontmatter.title} url={data.markdownRemark.frontmatter.url} themeColor={data.markdownRemark.frontmatter.accentColor}/>
			}
			

		</ProjectContentGrid>

		<BackgroundColor themeColor={data.markdownRemark.frontmatter.themeColor}/>
		</React.Fragment>
	)
}

const ProjectHeader = styled.div`
	height: 800px;
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	padding: 0px 24px;

	& img {
		animation: ${fadeInDown} 1s;
	}

	&:after {
		position: absolute;
		content: '';
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: linear-gradient(to bottom, rgba(0,0,0,0) 0%, ${props => props.themeColor} 100%);
	}

	@media (max-width: 715px) {
		height: 430px;
	}
`;

const ProjectPostTitle = styled.h1`
	font-weight: 600;
	text-align: center;
	font-size: 3.7rem;
	z-index: 5;
	animation: ${fadeInScaleDown} 1.5s ease-out;

	@media(max-width: 715px) {
		font-size: 2.2rem;
		line-height: 1;
	}
`;

const ProjectContentGrid = styled.div`
	display: grid;
	grid-template-columns: [start] minmax(24px, 1fr) [center] minmax(auto, 900px) [end] minmax(24px, 1fr);
	animation: ${fadeInUp} 1.8s;

	& > * {
		grid-column: center;
	}
	p {
		opacity: 0.85;
	}
`;

const ProjectDetails = styled.div`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	margin-bottom: 50px;
	margin-top: 20px;
	background: transparent;

	div {
		padding-right: 35px;
	}

	@media(max-width: 1155px) {
		padding: 0px;
    	margin-bottom: 0px;

		div {
			padding-right: 0px;
			padding-bottom: 20px;
			width: 49%;
		}
		div:last-child {
			width: 100%;
		}
	}
`;

const BackgroundColor = styled.div`
	position: fixed;
	z-index: -10;
	top: 0;
	right: 0;
	left: 0;
	bottom: 0;
	width: 100%;
	height: 100%;
	background-color: ${props => props.themeColor};
`;

export const query = graphql`
	query ProjectBySlug($slug: String!) {
		site {
			siteMetadata {
                title
                siteUrl
			}
		}
		markdownRemark(fields: { slug: { eq: $slug } }) {
			frontmatter {
				title
				projectClient
				projectDate
				projectRole
				projectAgency
                projectBrief
                projectShortBrief
				themeColor
				accentColor
				url
                showLiveContent
                thumb {
                    childImageSharp {
                        fixed {
                            src
                        }
                    }
                }
				image {
					childImageSharp {
                        fluid(maxWidth: 1600) {
                            ...GatsbyImageSharpFluid
                        }
                    }
				}
			}
			html
			fields {
				slug
			}
		}
	}
`
