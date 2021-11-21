import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import {SIZE_MOBILE_LARGE} from '../components/CONSTANTS'

import metaFeaturedImage from './../assets/img/website-meta-share-personal.jpg'

import PageLink from '../components/links/PageLink'
import { MBodyXL, MHeading01, MBody, MHeading03, MBodySmall } from '../components/typography'


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
        
        <MHeading03 className="text-white mt-28 mb-12 animate-fade-in-slow">design stuff from <PageLink className="text-max-pink-300" href="https://dribbble.com/MadMaxMcKinney">dribbble</PageLink></MHeading03>

        <DribbbleGrid className="animate-fade-in-slow">
            {data.allDribbbleShot.edges.map(({node}) => (
                <a href={node.url}>
                    <DribbblePost>
                        <img src={node.localCover.publicURL}/>
                    </DribbblePost>
                </a>
            ))}
        </DribbbleGrid>

        <MHeading03 className="text-white mt-28 mb-12 animate-fade-in-slow">writing stuff from <PageLink className="text-max-yellow-300" href="https://maxmckinney.medium.com/">medium</PageLink></MHeading03>

        <MediumPostGrid className="animate-fade-in-slow">
            {data.allMediumPost.edges.map(({node}) => (
                <MediumPost href={"https://maxmckinney.medium.com/" + node.slug + "-" + node.medium_id}>
                    <div>
                        <img src={`https://miro.medium.com/max/1000/${node.virtuals.previewImage.imageId}`} alt="Article preview image"/>
                    </div>
                    <div className="grid">
                        <MBody><strong>{node.title}</strong></MBody>
                        <MBodySmall>{node.virtuals.subtitle}</MBodySmall>
                    </div>
                </MediumPost>
            ))}
        </MediumPostGrid>
        

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

const SideProjectCard = styled(Link)`
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

const SideProjectLink = styled(MBodySmall)`
    color: var(--accent-color);
`

const DribbbleGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
    grid-gap: 24px;

    a {
        line-height: 0;
    }

    @media(max-width: ${SIZE_MOBILE_LARGE}) {
        grid-template-columns: 10px; /* Explicit grid, defining the first item */
        grid-auto-flow: column;
        grid-auto-columns: 75%; /* Implicit grid, defining the remaining items */
        overflow-x: scroll;
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

const DribbblePost = styled.div`
    --border-radius: 4px;

    border-radius: var(--border-radius);
    background: var(--blueblack-500);
    padding: 4px;

    position: relative;

    transition-property: all;
    transition-duration: 0.15s;

    img {
        width: 100%;
    }

    // Hover
    &:hover {
        transform: scale(1.03);
        background: white;
        color: black;
    }

    // Active (Pressed)
    &:active {
        transform: scale(1);
    }

    @media(max-width: ${SIZE_MOBILE_LARGE}) {
        &:hover {
            transform: scale(1);
        }
        &:active {
            transform: scale(0.98);
        }
    }
`

const MediumPostGrid = styled.div`
    display: grid;
    grid-auto-flow: row;
    grid-gap: 32px;
    align-items: flex-start;

    @media(max-width: ${SIZE_MOBILE_LARGE}) {
        margin-bottom: 32px;
    }
`

const MediumPost = styled.a`
    display: grid;
    grid-template-columns: 175px 1fr;
    grid-gap: 24px;
    font-size: 1rem;
    border-radius: 4px;
    height: 100%;

    position: relative;
    border: 1px solid transparent;

    transition: all 0.1s;

    p {
        margin: 0;
        max-width: 650px;
        font-weight: 400;
    }
    
    img {
        width: 100%;
        height: 100px;
        border-radius: 4px;
    }

    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: -8px;
        border-radius: 4px;
        border: 1px solid transparent;

        transition: border 0.1s;
    }

    &:hover&::after {
        border: 1px solid white;
    }

    &:active {
        transform: scale(0.99);
    }

    @media(max-width: 710px) {
        grid-template-columns: 1fr;
        grid-gap: 16px;

        img {
            object-fit: cover;
            height: 200px;
        }
    }
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
    allDribbbleShot(limit: 9) {
        edges {
            node {
                url
                localCover {
                  publicURL
                }
                title
            }
        }
    }
    allMediumPost(sort: { fields: [createdAt], order: DESC }, limit: 4) {
        edges {
          node {
            id
            title
            virtuals {
              subtitle
              previewImage {
                imageId
              }
            }
            medium_id
            slug
          }
        }
    }
}
`