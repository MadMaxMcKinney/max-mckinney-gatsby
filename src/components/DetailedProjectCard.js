import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import Pill from './Pill'
import ReadMoreButton from './ReadMoreButton'
import Monitor from './Monitor'
import BackgroundSourceNumbers from '../assets/img/bg-numbers.png'

const ProjectCard = (props) => {
  return (
    <ProjectCardContainer>

        <PreviewContainerMobile>
            <PreviewImage fluid={props.data.frontmatter.image.childImageSharp.fluid} alt="Project Image"/>
        </PreviewContainerMobile>

        <ProjectCardContent>
            <PillList>
                {props.data.frontmatter.categories && props.data.frontmatter.categories.map(category => {
                    return <Pill text={category}/>
                })}
            </PillList>
            <h1>{props.data.frontmatter.title}</h1>
            <p>{props.data.frontmatter.projectShortBrief}</p>

            <ReadMoreButton link={props.data.fields.slug}/>
        </ProjectCardContent>

        <PreviewContainer>
            <Monitor imageSource={props.data.frontmatter.image.childImageSharp.fluid}/>
        </PreviewContainer>

    </ProjectCardContainer>
  )
}

// TODO: Create a style component wrapper for the gatsby-image component

const ProjectCardContainer = styled.div`
    width: 100%;
    min-height: 400px;
    display: grid;
    position: relative;
    background: #171717;
    background-image: url(${BackgroundSourceNumbers});
    background-repeat: repeat-y;
    border-radius: 4px;
    grid-template-columns: 1fr 565px;
    padding: 32px 50px;
    transition: 0.4s;
    border: 1px solid #FFFFFF33;

    h1 {
        display: inline-block;
        line-height: 40px;
        font-weight: 600;
        font-size: 1.6rem;
        max-width: 320px;
    }
    p {
        margin-top: 16px;
        margin-bottom: 0px;
        padding-bottom: 24px;
        opacity: 0.70;
        flex: 1;
        max-width: 360px;
    }

    &:hover {
        opacity: 1;
    }

    @media(max-width: 1000px) {
        padding: 0px;
        grid-template-columns: 1fr;
    }
`;

const PreviewImage = styled(Img)`
    display: block;
`;

const PreviewContainer = styled.div`
    position: relative;

    ${PreviewImage} {
        position: absolute;
        top: 13px;
        left: 13px;
        right: 13px;
        bottom: 17px;
    }

    @media(max-width: 1000px) {
        display: none;
    }
`;

const PreviewContainerMobile = styled.div`
    position: relative;
    display: none;
    margin-bottom: 4px;

    @media(max-width: 1000px) {
        display: block;
    }

    ${PreviewImage} {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        padding: 0px;
        margin: 0px;
        border-bottom: 1px solid #FFFFFF33;
    }
`;

const ProjectCardContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-right: 24px;

    @media(max-width: 1000px) {
        padding: 32px 50px;
    }
`;

const PillList = styled.div`
    display: flex;
    margin-bottom: 32px;
    > * {
        margin-right: 16px
    }
`;

export default ProjectCard;
