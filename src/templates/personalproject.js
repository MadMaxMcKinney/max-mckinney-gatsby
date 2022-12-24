import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import { graphql } from "gatsby"
import {GatsbyImage, getImage} from 'gatsby-plugin-image'
import PersonalProjectLinkButton from '../components/buttons/PersonalProjectLinkButton'
import PersonalProjectLinkSourceButton from '../components/buttons/PersonalProjectLinkSourceButton'
import { MBodyXL, MHeading01 } from '../components/typography'

const SideProjectDetailView = ({data}) => (

    <React.Fragment>
    {/* TODO: Fix meta tags to show the attached image instead of the icon*/}
    <Helmet title={data.site.siteMetadata.title + ' | ' + data.personal.frontmatter.title}>
        <meta name="description" content={data.personal.frontmatter.description} />
        <meta name="image" content={data.site.siteMetadata.siteUrl + getImage(data.personal.frontmatter.seoImage)}/>
        <meta itemprop="name" content={data.site.siteMetadata.title + ' | ' + data.personal.frontmatter.title}/>
        <meta itemprop="description" content={data.personal.frontmatter.description}/>
        <meta itemprop="image" content={data.site.siteMetadata.siteUrl + getImage(data.personal.frontmatter.seoImage)}/>

        <meta name="twitter:card" content="summary"/>
        <meta name="twitter:title" content={data.site.siteMetadata.title + ' | ' + data.personal.frontmatter.title}/>
        <meta name="twitter:description" content={data.personal.frontmatter.description}/>
        <meta name="twitter:site" content="@madmaxmckinney"/>
        <meta name="twitter:image" content={data.site.siteMetadata.siteUrl + getImage(data.personal.frontmatter.seoImage)}/>

        <meta name="og:title" content={data.site.siteMetadata.title + ' | ' + data.personal.frontmatter.title}/>
        <meta name="og:description" content={data.personal.frontmatter.description}/>
        <meta name="og:image" content={data.site.siteMetadata.siteUrl + getImage(data.personal.frontmatter.seoImage)}/>
        <meta name="og:url" content={data.site.siteMetadata.siteUrl + data.personal.fields.slug}/>
        <meta name="og:site_name" content="Max McKinney"/>
    </Helmet>

    <div className='page-grid'>
        <GatsbyImage className="w-24 h-24 mb-4 mt-44 animate-fade-in-fast" imgStyle={{ borderRadius: '1.5rem' }} image={getImage(data.personal.frontmatter.icon)} />
        <MHeading01 className="mb-6 mt-6 w-full text-white animate-fade-in-fast">{data.personal.frontmatter.title}</MHeading01>
        <MBodyXL className="text-gray-400 max-w-3xl animate-fade-in">{data.personal.frontmatter.description}</MBodyXL>

        <div className="flex flex-wrap gap-4 justify-start mt-8 animate-fade-in-very-slow">
        {data.personal.frontmatter.projectLink && 
            <PersonalProjectLinkButton href={data.personal.frontmatter.projectLink} accent={data.personal.frontmatter.accent} />
        }
        {data.personal.frontmatter.sourceLink && 
            <PersonalProjectLinkSourceButton href={data.personal.frontmatter.sourceLink} accent={data.personal.frontmatter.accent} />
        }
        </div>

        <Content className="prose prose-lg max-w-none text-white mt-16 animate-fade-in-very-slow" dangerouslySetInnerHTML={{ __html: data.personal.html }} />

    </div>
    </React.Fragment>
)

const Content = styled.div`
    img {
        border-radius: 2px;
    }

    p {
        opacity: 0.85;
    }
`

export default SideProjectDetailView

export const query = graphql`
    query PersonalProjectBySlug($slug: String!) {
        site {
            siteMetadata {
                title
                siteUrl
            }
        }
        personal: markdownRemark(fields: { slug: { eq: $slug } }) {
            frontmatter {
                title
                description
                locationText
                accent
                seoImage {
                    childImageSharp {
                        gatsbyImageData(width: 512)
                    }
                }
                icon {
                    childImageSharp {
                        gatsbyImageData(width: 200)
                    }
                }
                sourceLink
                projectLink
            }
            html
            fields {
                slug
            }
        }
    }
`;