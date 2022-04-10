import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import { graphql } from "gatsby"
import Img from "gatsby-image"
import AppStoreButton from '../components/buttons/social/AppStoreButton'
import GithubButton from '../components/buttons/social/GithubButton'
import YouTubeButton from '../components/buttons/social/YouTubeButton'
import {fadeInDown} from '../animations/m-styled-animations'
import { MBodyXL, MHeading01 } from '../components/typography'


const SideProjectDetailView = ({data}) => (

    <React.Fragment>

    <Helmet title={data.site.siteMetadata.title + ' | ' + data.personal.frontmatter.title}>
            <meta name="description" content={data.personal.frontmatter.description} />
            <meta name="image" content={data.site.siteMetadata.siteUrl + data.personal.frontmatter.image.childImageSharp.fluid.src}/>
            <meta itemprop="name" content={data.site.siteMetadata.title + ' | ' + data.personal.frontmatter.title}/>
            <meta itemprop="description" content={data.personal.frontmatter.description}/>
            <meta itemprop="image" content={data.site.siteMetadata.siteUrl + data.personal.frontmatter.image.childImageSharp.fluid.src}/>

            <meta name="twitter:card" content="summary"/>
            <meta name="twitter:title" content={data.site.siteMetadata.title + ' | ' + data.personal.frontmatter.title}/>
            <meta name="twitter:description" content={data.personal.frontmatter.description}/>
            <meta name="twitter:site" content="@madmaxmckinney"/>
            <meta name="twitter:image" content={data.site.siteMetadata.siteUrl + data.personal.frontmatter.image.childImageSharp.fluid.src}/>

            <meta name="og:title" content={data.site.siteMetadata.title + ' | ' + data.personal.frontmatter.title}/>
            <meta name="og:description" content={data.personal.frontmatter.description}/>
            <meta name="og:image" content={data.site.siteMetadata.siteUrl + data.personal.frontmatter.image.childImageSharp.fluid.src}/>
            <meta name="og:url" content={data.site.siteMetadata.siteUrl + data.personal.fields.slug}/>
            <meta name="og:site_name" content="Max McKinney"/>

    </Helmet>

    <div className='page-grid'>
        <ProjectImg className="animate-fade-in-fast" fluid={data.personal.frontmatter.image.childImageSharp.fluid} />
        <MHeading01 className="mb-6 mt-6 w-full text-white animate-fade-in-fast">{data.personal.frontmatter.title}</MHeading01>
        <MBodyXL className="text-gray-400 max-w-3xl animate-fade-in">{data.personal.frontmatter.description}</MBodyXL>

        <div className="flex flex-wrap gap-4 justify-start mt-8 animate-fade-in-very-slow">
        {data.personal.frontmatter.appStoreUrl && 
            <AppStoreButton href={data.personal.frontmatter.appStoreUrl}><i className="fab fa-app-store"></i>View on App Store</AppStoreButton>
        }
        {data.personal.frontmatter.githubUrl && 
            <GithubButton href={data.personal.frontmatter.githubUrl}><i className="fab fa-github"></i> View on Github</GithubButton>
        }
        {data.personal.frontmatter.youtubeUrl && 
            <YouTubeButton href={data.personal.frontmatter.youtubeUrl}><i className="fab fa-youtube"></i> View on YouTube</YouTubeButton>
        }
        </div>

        <Content className="prose prose-lg max-w-none text-white animate-fade-in-very-slow" dangerouslySetInnerHTML={{ __html: data.personal.html }} />

    </div>
    </React.Fragment>
)

const ProjectImg = styled(Img)`
    width: 100px;
    height: 100px;
    margin-bottom: 16px;

    margin-top: 170px;
    border-radius: 24px;
`

const Content = styled.div`
    margin-top: 64px;

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
            image {
              childImageSharp {
                  fixed {
                      src
                  }
                fluid(maxWidth: 200) {
                    ...GatsbyImageSharpFluid
                }
              }
            }
            appStoreUrl
            githubUrl
            youtubeUrl
        }
        html
        fields {
            slug
        }
    }
}
`