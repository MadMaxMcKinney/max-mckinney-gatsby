import React from 'react'
import styled, { keyframes } from 'styled-components'
import Img from 'gatsby-image'
import Pill from './Pill'
import ReadMoreButton from './ReadMoreButton'
import BackgroundSourceNumbers from '../assets/img/bg-numbers.png'

const ProjectCard = (props) => {
  return (
    <ProjectCardContainer data-filter={props.data.frontmatter.categories} className="active">

        <PreviewContainerMobile>
            <PreviewImage fluid={props.data.frontmatter.thumb.childImageSharp.fluid} alt="Project Image"/>
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
            <PreviewImage fluid={props.data.frontmatter.thumb.childImageSharp.fluid}/>
        </PreviewContainer>

    </ProjectCardContainer>
  )
}

const fadeIn = keyframes`
    from {
        opacity: 0;
        transform: scale(0.9);
    }
    to {
        opacity: 1;
        transform: scale(1);
    }
`


const ProjectCardContainer = styled.div`
    --border-radius: 4px;
    width: 100%;
    min-height: 400px;
    display: none;
    position: relative;
    background: #171717;
    background-image: url(${BackgroundSourceNumbers});
    background-repeat: repeat-y;
    border-radius: var(--border-radius);
    grid-template-columns: 1fr 1.2fr;
    transition: all 0.4s;
    overflow: hidden;

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

    &::after {
        position: absolute;
        content: '';
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        border: 1px solid #FFFFFF33;
        border-radius: var(--border-radius);;
        z-index: 100;
    }

    &.active {
        display: grid;
        opacity: 1;
        animation: ${fadeIn} 0.3s;
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
    height: 100%;
    object-fit: fill;
`;

const PreviewContainer = styled.div`
    position: relative;

    @media(max-width: 1000px) {
        display: none;
    }
`;

const PreviewContainerMobile = styled.div`
    position: relative;
    display: none;

    @media(max-width: 1000px) {
        display: block;
    }

    ${PreviewImage} {
        border-bottom: 1px solid #FFFFFF33;
    }
`;

const ProjectCardContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 32px 50px;

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
