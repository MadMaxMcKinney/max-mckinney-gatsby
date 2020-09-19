import React from 'react'
import styled from 'styled-components'
import { graphql } from "gatsby"
import Img from "gatsby-image"

import PageHeaderTitle from '../components/PageHeaderTitle'
import PageHeaderSubtitle from '../components/PageHeaderSubtitle'

import {fadeInDown} from '../animations/m-styled-animations'


const SideProjectsPage = ({data}) => (
    <PageGrid>


        <ProjectImg fluid={data.personal.frontmatter.image.childImageSharp.fluid} />
        <PageHeaderTitle>{data.personal.frontmatter.title}</PageHeaderTitle>
        <PageHeaderSubtitle>{data.personal.frontmatter.description}</PageHeaderSubtitle>

        <ButtonHStack>
        {data.personal.frontmatter.appStoreUrl && 
            <AppStoreButton href={data.personal.frontmatter.appStoreUrl}><i class="fab fa-app-store"></i> Get the app</AppStoreButton>
        }
        </ButtonHStack>

        <Content dangerouslySetInnerHTML={{ __html: data.personal.html }} />

    </PageGrid>
)

const PageGrid = styled.div`
	display: grid;
	grid-template-columns: [start] minmax(24px, 1fr) [center] minmax(auto, 1100px) [end] minmax(24px, 1fr);
	& > * {
		grid-column: center;
	}
`

const ProjectImg = styled(Img)`
    width: 100px;
    height: 100px;
    margin-bottom: 16px;

    margin-top: 170px;
    border-radius: 100%;

    animation: ${fadeInDown} 0.8s;
`

const AppStoreButton = styled.a`
    background: #2094FA;
    border-radius: 64px;
    padding: 8px 16px;

    font-weight: 400;
    
    display: grid;
    width: fit-content;
    grid-gap: 8px;
    grid-auto-flow: column;
    place-content: center;
    place-items: center;

    transition: all 0.2s cubic-bezier();

    &:hover {
        box-shadow: 0px 7px 32px rgba(32, 148, 250, 0.44);
        transform: translateY(-2px);
    }
`

const ButtonHStack = styled.div`
    display: grid;
    grid-auto-flow: column;
    grid-gap: 16px;

    margin-top: 32px;
`

const Content = styled.div`
    margin-top: 64px;
`

export default SideProjectsPage

export const query = graphql`
query PersonalProjectBySlug($slug: String!) {
    personal: markdownRemark(fields: { slug: { eq: $slug } }) {
        frontmatter {
            title
            description
            locationText
            url
            image {
              childImageSharp {
                fluid(maxWidth: 200) {
                    ...GatsbyImageSharpFluid
                }
              }
            }
            appStoreUrl
        }
        html
    }
}
`