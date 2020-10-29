import React from 'react'
import styled from 'styled-components'
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"

import PageHeaderTitle from '../components/page/PageHeaderTitle'
import PageHeaderSubtitle from '../components/page/PageHeaderSubtitle'
import {MaxH1} from '../components/typography'

import {fadeInDown} from '../animations/m-styled-animations'
import ReadMoreButton from '../components/buttons/ReadMoreButton'


const SideProjectsPage = ({data}) => (
    <PageGrid>


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
        
        <DribbbleSectionSeperator>
            <MaxH1>Dribbble</MaxH1>
            <a href="https://dribbble.com/MaxMcKinney">
                <i className="far fa-external-link-alt"></i>
            </a>
        </DribbbleSectionSeperator>

        <DribbbleGrid>
            {data.allDribbbleShot.edges.map(({node}) => (
                <a href={node.url}>
                    <DribbblePost>
                        <img src={node.localCover.publicURL}/>
                    </DribbblePost>
                </a>
            ))}
        </DribbbleGrid>
        
        <DribbbleReadMoreButton>
            <ReadMoreButton accent="#FF3672" link="https://dribbble.com/MaxMcKinney">
                More on Dribbble
            </ReadMoreButton>
        </DribbbleReadMoreButton>
        
        

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
        grid-template-columns: 1fr;
        margin-top: 64px;
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

const DribbbleSectionSeperator = styled.div`
    margin-top: 100px;
    display: inline-grid;
    grid-auto-flow: column;
    grid-gap: 16px;
    justify-self: flex-start;

    animation: ${fadeInDown} 3.1s;

    a {
        display: flex;
        justify-content: center;
        align-items: center;
        color: #FF3672;

        &:hover {
            opacity: 0.7;
        }
        &:active {
            opacity: 1;
        }
    }
`

const DribbbleGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(315px, 1fr));
    grid-gap: 24px;

    margin-top: 48px;
    margin-bottom: 56px;

    animation: ${fadeInDown} 2.7s;

    a {
        line-height: 0;
    }

    @media(max-width: 600px) {
        grid-template-columns: 1fr;
        grid-gap: 16px;
    }
`

const DribbblePost = styled.div`
    border-radius: 16px;
    border: 2px solid transparent;

    position: relative;

    transition-property: border border-radius transform;
    transition-duration: 0.15s;

    overflow: hidden;

    img {
        width: 100%;
    }

    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border: 4px solid transparent;
        border-radius: 12px;

        transition: border 0.2s;
    }
    // Hover
    &:hover {
        border: 2px solid white;
        transform: scale(1.03);
    }

    &:hover::after {
        border: 4px solid black;
    }

    // Active (Pressed)
    &:active {
        border: 2px solid transparent;
        transform: scale(1);
    }

    &:active::after {
        border: 4px solid transparent;
    }
`

const DribbbleReadMoreButton = styled.div`
    justify-self: flex-start;
    animation: ${fadeInDown} 3.2s;
`

export default SideProjectsPage

export const query = graphql`
query personalProjectQuery {
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
    allDribbbleShot(limit: 12) {
        edges {
            node {
                url
                localCover {
                  publicURL
                }
            }
        }
      }
}
`