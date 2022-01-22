import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import { graphql, Link } from "gatsby"
import DynamicLink from '../components/utils/DynamicLink'
import Img from "gatsby-image"
import {SIZE_MOBILE_LARGE} from '../components/CONSTANTS'

import metaFeaturedImage from './../assets/img/website-meta-share-personal.jpg'

import PageLink from '../components/links/PageLink'
import { MBodyXL, MHeading01, MBody, MHeading03, MBodyLight } from '../components/typography'


const description = "These are some of my personal projects. They are all over the place but you might find some things you enjoy!"

const SideProjectsPage = ({data}) => (
    <PageGrid>

        <Helmet title={data.site.siteMetadata.title + ' | Personal '}>
            <meta itemprop="name" content={data.site.siteMetadata.title + ' | Personal '}/>
            <meta name="description" content={description} />
            <meta itemprop="description" content={description}/>
            <meta name="image" content={data.site.siteMetadata.siteUrl + metaFeaturedImage}/>
            <meta itemprop="image" content={data.site.siteMetadata.siteUrl + metaFeaturedImage}/>

            <meta name="twitter:title" content={data.site.siteMetadata.title + ' | Personal'}/>
            <meta name="twitter:description" content={description}/>
            <meta name="twitter:image" content={data.site.siteMetadata.siteUrl + metaFeaturedImage}/>

            <meta name="og:title" content={data.site.siteMetadata.title + ' | Personal'}/>
            <meta name="og:description" content={description}/>
            <meta name="og:image" content={data.site.siteMetadata.siteUrl + metaFeaturedImage}/>
        </Helmet>

        <MHeading01 className="mb-6 mt-32 sm:mt-56 animate-fade-in-fast text-white">hello.</MHeading01>
        
        <MBodyXL className="mb-8 text-gray-400 max-w-3xl animate-fade-in">These are some of my personal projects. They are all over the place, but you might find some things you enjoy!</MBodyXL>

        <MBodyXL className="mb-8 text-gray-400 max-w-3xl animate-fade-in-slow">My projects span everything from iOS apps, education courses, game development, technical writing, and all the stuff inbetween! If you want to stay up-to-date on what I'm doing <PageLink className="text-blue-500" href="https://twitter.com/madmaxmckinney">Twitter</PageLink> is the best place, so follow me there.</MBodyXL>

        <SideProjectGrid className="mt-12 sm:mt-24 animate-fade-in-slow">
            {data.personal.edges.map(({node}) => (
                <SideProjectCard to={node.fields.slug} accent={node.frontmatter.accent}>
                    <SideProjectImage fluid={node.frontmatter.image.childImageSharp.fluid} />
                    <h2 className="text-xl md:text-2xl font-bold">{node.frontmatter.title}</h2>
                    <MBody className="text-gray-400 mt-4 flex-1">{node.frontmatter.description}</MBody>
                    <SideProjectLink className="mt-6">{node.frontmatter.locationText}</SideProjectLink>
                </SideProjectCard>
            ))}
        </SideProjectGrid>

    </PageGrid>
)

const PageGrid = styled.div`
	display: grid;
	grid-template-columns: [start] minmax(24px, 1fr) [center] minmax(auto, 1100px) [end] minmax(24px, 1fr);
	& > * {
		grid-column: center;
	}
`

const SideProjectGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 72px;

    @media(max-width: 1015px) {
        grid-gap: 32px;
    }

    @media(max-width: ${SIZE_MOBILE_LARGE}) {
        grid-template-columns: 10px; /* Explicit grid, defining the first item */
        grid-auto-flow: column;
        grid-auto-columns: 75%; /* Implicit grid, defining the remaining items */
        overflow-x: scroll;
        margin-top: 64px;
        grid-column: 1/4;
        grid-gap: 16px;
        padding-bottom: 16px;
        
        /* This is needed to provide an air gap before and after the items in the horizontally scrolling list */
        &::after, &::before{
            content: '';
            width: 10px;
        }
    }
`

const SideProjectCard = styled(DynamicLink)`
    --accent-color: ${props => props.accent};
    
    display: flex;
    flex-direction: column;
    place-items: center;
    position: relative;
    padding: 24px;

    border-radius: 24px;
    border: 2px solid transparent;

    text-align: center;

    background: var(--blueblack-500);
    transition: all 0.2s;
    overflow: hidden;

    &:hover {
        border-color: var(--accent-color);
    }

    & > * {
        z-index: 10;
    }

    &::after {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: var(--accent-color);
        opacity: 0;
        transition: all 0.3s;
        z-index: 1;
    }

    &:hover&::after {
        opacity: 0.15;
    }

    &:active {
        transform: scale(0.97);
    }

    @media(max-width: 1015px) {
        padding: 20px;
    }

    @media(max-width: ${SIZE_MOBILE_LARGE}) {
        place-items: flex-start;
        text-align: left;
    }

`

const SideProjectImage = styled(Img)`
    width: 100px;
    height: 100px;
    margin-bottom: 32px;
    border-radius: 24px;
`

const SideProjectLink = styled(MBodyLight)`
    color: var(--accent-color);
`

export default SideProjectsPage

export const query = graphql`
query personalProjectQuery {
    site {
        siteMetadata {
            title
            siteUrl
        }
    }
	file(relativePath: {eq: "img/maxmckinney-profile.png"}) {
        childImageSharp {
            fixed(width: 80, height: 80) {
                ...GatsbyImageSharpFixed
            }
        }
    }
    personal: allMarkdownRemark(sort: {fields: [frontmatter___sortDate], order: DESC}, filter: {fileAbsolutePath:{regex: "/personalprojects/.*.md$/"}}) {
        edges {
          node {
            fields {
				slug
			}
            frontmatter {
              title
              description
              accent
              locationText
              url
              image {
                childImageSharp {
                  fluid(maxWidth: 200) {
                      ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
    }
}
`