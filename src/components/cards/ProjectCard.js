import React from 'react'
import styled, { keyframes } from 'styled-components'
import Img from 'gatsby-image'
import Pill from '../pills/Pill'
import ReadMoreButton from '../buttons/ReadMoreButton'
import {MaxH1} from '../typography'

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
            <MaxH1>{props.data.frontmatter.title}</MaxH1>
            <p>{props.data.frontmatter.projectShortBrief}</p>

            <ReadMoreButton accent={props.data.frontmatter.accentColor} link={props.data.fields.slug}>
                Read more about it
            </ReadMoreButton>
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
    }
    to {
        opacity: 1;
    }
`


const ProjectCardContainer = styled.div`
    --border-radius: 4px;
    width: 100%;
    min-height: 400px;
    display: none;
    position: relative;
    background: var(--blueblack-500);
    border-radius: var(--border-radius);
    grid-template-columns: 1fr 1.2fr;
    transition: all 0.4s;
    overflow: hidden;

    ${MaxH1} {
        max-width: 320px;
    }
    p {
        font-weight: 400;
        margin-top: 16px;
        margin-bottom: 0px;
        padding-bottom: 24px;
        flex: 1;
        max-width: 360px;
    }

    &.active {
        display: grid;
        opacity: 1;
        animation: ${fadeIn} 0.3s;
    }

    @media(max-width: 1000px) {
        padding: 0px;
        grid-template-columns: 1fr;

        ${MaxH1}, p {
            max-width: 100%;
        }
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
        padding: 24px;
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
