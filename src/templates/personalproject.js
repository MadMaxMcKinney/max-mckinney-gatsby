import React from 'react'
import styled from 'styled-components'
import { graphql } from "gatsby"
import Img from "gatsby-image"

import PageHeaderTitle from '../components/page/PageHeaderTitle'
import PageHeaderSubtitle from '../components/page/PageHeaderSubtitle'
import AppStoreButton from '../components/buttons/AppStoreButton'
import GithubButton from '../components/buttons/GithubButton'

import {fadeInDown} from '../animations/m-styled-animations'


const SideProjectsPage = ({data}) => (
    <PageGrid>


        <ProjectImg fluid={data.personal.frontmatter.image.childImageSharp.fluid} />
        <PageHeaderTitle>{data.personal.frontmatter.title}</PageHeaderTitle>
        <PageHeaderSubtitle>{data.personal.frontmatter.description}</PageHeaderSubtitle>

        <ButtonHStack>
        {data.personal.frontmatter.appStoreUrl && 
            <AppStoreButton href={data.personal.frontmatter.appStoreUrl}><i class="fab fa-app-store"></i>View on App Store</AppStoreButton>
        }
        {data.personal.frontmatter.githubUrl && 
            <GithubButton href={data.personal.frontmatter.githubUrl}><i class="fab fa-github"></i> View on Github</GithubButton>
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
    border-radius: 24px;

    animation: ${fadeInDown} 0.8s;
`

const ButtonHStack = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 200px));
    grid-gap: 16px;

    margin-top: 32px;

    animation: ${fadeInDown} 1.6s;
`

const Content = styled.div`
    margin-top: 64px;

    animation: ${fadeInDown} 2s;

    img {
        border-radius: 2px;
    }
`

export default SideProjectsPage

export const query = graphql`
query PersonalProjectBySlug($slug: String!) {
    personal: markdownRemark(fields: { slug: { eq: $slug } }) {
        frontmatter {
            title
            description
            locationText
            image {
              childImageSharp {
                fluid(maxWidth: 200) {
                    ...GatsbyImageSharpFluid
                }
              }
            }
            appStoreUrl
            githubUrl
        }
        html
    }
}
`