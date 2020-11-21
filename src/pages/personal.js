import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"

import metaFeaturedImage from './../assets/img/website-meta-share-personal.png'

import PageHeaderTitle from '../components/page/PageHeaderTitle'
import PageHeaderSubtitle from '../components/page/PageHeaderSubtitle'
import {MaxH1} from '../components/typography'

import {fadeInDown} from '../animations/m-styled-animations'
import AccentButton from '../components/buttons/AccentButton'


const description = "These are some of my personal projects. They're all over the place. You might find some things you enjoy though!"

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

        <Avatar>
            <Img fixed={data.file.childImageSharp.fixed} />
        </Avatar>
        <PageHeaderTitle>Personal Projects</PageHeaderTitle>
        <PageHeaderSubtitle>These are some of my personal projects. They're all over the place. <br/> You might find some things you enjoy though!</PageHeaderSubtitle>

        <SideProjectGrid>
            {data.personal.edges.map(({node}) => (
                <SideProjectCard to={node.fields.slug} accent={node.frontmatter.accent}>
                    <SideProjectImage fluid={node.frontmatter.image.childImageSharp.fluid} />
                    <h1>{node.frontmatter.title}</h1>
                    <SideProjectDetails>{node.frontmatter.description}</SideProjectDetails>
                    <SideProjectLink>{node.frontmatter.locationText}</SideProjectLink>
                </SideProjectCard>
            ))}
        </SideProjectGrid>
        
        <SectionSeperator>
            <i class="fab fa-dribbble" style={{fontSize: 41, marginTop: 6}}></i>
            <MaxH1>Dribbble</MaxH1>
        </SectionSeperator>

        <DribbbleGrid>
            {data.allDribbbleShot.edges.map(({node}) => (
                <a href={node.url}>
                    <DribbblePost>
                        <img src={node.localCover.publicURL}/>
                        <p>{node.title}</p>
                    </DribbblePost>
                </a>
            ))}
        </DribbbleGrid>
        
        <ReadMoreButtonContainer>
            <AccentButton accent="#FF3672" link="https://dribbble.com/MaxMcKinney">
                More on Dribbble
            </AccentButton>
        </ReadMoreButtonContainer>

        <SectionSeperator>
            <i class="fab fa-medium fa-2x" style={{fontSize: 44, marginTop: 9}}></i>
            <MaxH1>Publications</MaxH1>
        </SectionSeperator>

        <MediumPostGrid>
            {data.allMediumPost.edges.map(({node}) => (
                <MediumPost href={"https://maxmckinney.medium.com/" + node.slug + "-" + node.medium_id}>
                    <div>
                        <img src={`https://miro.medium.com/max/1000/${node.virtuals.previewImage.imageId}`} alt="Article preview image"/>
                    </div>
                    <div>
                        <p><strong>{node.title}</strong></p>
                        <p>{node.virtuals.subtitle}</p>
                    </div>
                </MediumPost>
                
            ))}
        </MediumPostGrid>

        <ReadMoreButtonContainer>
            <AccentButton accent="#FFFFFF" link="https://maxmckinney.medium.com/">
                More on Medium
            </AccentButton>
        </ReadMoreButtonContainer>
        
        

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

    margin-top: 150px;

    animation: ${fadeInDown} 1.7s;

    @media(max-width: 1015px) {
        grid-gap: 32px;
    }

    @media(max-width: 600px) {
        grid-template-columns: 10px; /* Explicit grid, defining the first item */
        grid-auto-flow: column;
        grid-auto-columns: 75%; /* Implicit grid, defining the remaining items */
        overflow-x: scroll;
        margin-top: 64px;
        grid-column: 1/4;
        grid-gap: 16px;
        
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

        h1 {
            font-size: 1.1rem;
        }
    }

    @media(max-width: 600px) {
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

const SideProjectDetails = styled.p`
    margin-top: 16px;
    margin-bottom: 0px;
    max-width: 350px;
    padding: 0;
    flex: 1;
`

const SideProjectLink = styled.p`
    color: var(--accent-color);
    margin: 0;
    margin-top: 24px;
    padding: 0;

    @media(max-width: 600px) {
        font-size: 0.8rem;
    }
`

const Avatar = styled.div`
    display: flex;
    width: 90px;
    height: 90px;
    place-items: center;

    background: var(--blueblack-300);
    padding: 6px;
    margin-bottom: 16px;
    margin-top: 170px;

    border-radius: 100%;
    border: 1px solid #40476A;

    animation: ${fadeInDown} 0.7s;

    img {
        width: 100%;
        height: auto;
        border-radius: 100%;
    }
`

const SectionSeperator = styled.div`
    margin-top: 100px;
    
    display: inline-grid;
    grid-auto-flow: column;
    grid-gap: 16px;
    justify-self: flex-start;
    place-items: center;

    color: white;

    animation: ${fadeInDown} 3.1s;
`

const DribbbleGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
    grid-gap: 24px;

    margin-top: 48px;
    margin-bottom: 56px;

    animation: ${fadeInDown} 2.7s;

    a {
        line-height: 0;
    }

    @media(max-width: 600px) {
        grid-template-columns: 10px; /* Explicit grid, defining the first item */
        grid-auto-flow: column;
        grid-auto-columns: 75%; /* Implicit grid, defining the remaining items */
        overflow-x: scroll;
        margin-top: 64px;
        grid-column: 1/4;
        grid-gap: 16px;
        
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

    p {
        margin: 0;
        padding: 6px 8px;
        font-size: 0.8rem;
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

    @media(max-width: 600px) {
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

    margin: 56px 0px;

    animation: ${fadeInDown} 2.7s;
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

    div {
        line-height: 0;
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

const ReadMoreButtonContainer = styled.div`
    justify-self: flex-start;
    animation: ${fadeInDown} 3.2s;
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