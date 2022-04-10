import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import { graphql } from "gatsby"
import DynamicLink from '../components/utils/DynamicLink'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {SIZE_MOBILE_LARGE} from '../components/CONSTANTS'

import metaFeaturedImage from './../assets/img/website-meta-share-personal.jpg'

import PageLink from '../components/links/PageLink'
import { MBodyXL, MHeading01, MBody, MHeading03, MBodyLight } from '../components/typography'


const description = "These are some of my personal projects. They are all over the place but you might find some things you enjoy!"

const SideProjectsPage = ({data}) => (
    <div className="page-grid">

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

        <div id="SideProjectGrid" className="grid grid-cols-1 gap-6 mt-12 sm:grid-cols-2 sm:gap-8 md:gap-14 sm:mt-24 animate-fade-in-slow">
            {data.personal.edges.map(({node}) => {
                
                // Determine if the project is linking to something external or an internal page
                // If there is no externalLink frontmatter then use the generated slug for internal page
                const processedLink = node.frontmatter.externalLink ? node.frontmatter.externalLink : node.fields.slug

                return (
                <SideProjectCard to={processedLink} accent={node.frontmatter.accent}>
                    <GatsbyImage id="SideImage" className="w-24 h-24 rounded-3xl mb-8" image={getImage(node.frontmatter.image)} />
                    <h2 className="text-xl md:text-2xl font-bold">{node.frontmatter.title}</h2>
                    <MBody className="text-gray-400 mt-4 flex-1">{node.frontmatter.description}</MBody>
                    <MBodyLight className="mt-6 text-[color:var(--accent-color)]">{node.frontmatter.locationText}</MBodyLight>
                </SideProjectCard>
                )
            })}
        </div>

    </div>
)

const SideProjectCard = styled(DynamicLink)`
    --accent-color: ${props => props.accent};
    
    display: flex;
    flex-direction: column;
    position: relative;
    padding: 32px;

    border-radius: 24px;
    border: 2px solid transparent;

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
              externalLink
              image {
                childImageSharp {
                  gatsbyImageData(width: 200)
                }
              }
            }
          }
        }
    }
}
`