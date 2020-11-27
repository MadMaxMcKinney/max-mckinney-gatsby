import React from 'react'
import styled, { keyframes } from 'styled-components'
import Img from 'gatsby-image'
import Pill from '../pills/Pill'
import ReadMoreButton from '../buttons/ReadMoreButton'

const ProjectCard = (props) => {
  return (
    <ProjectCardContainer data-filter={props.data.frontmatter.categories} className="bg-gray-900 hidden w-full rounded active flex-col lg:flex-row">
        
        {/* Preview Image */}
        <div className="block w-full lg:hidden">
            <Img fluid={props.data.frontmatter.thumb.childImageSharp.fluid} alt="Project Image"/>
        </div>

        {/* Card Content */}
        <div className="p-8 flex flex-col items-start w-full h-full lg:w-5/12 lg:px-11 lg:py-8">
            {/* Pills */}
            <div className="inline-grid grid-flow-col gap-3 pb-8">
                {props.data.frontmatter.categories && props.data.frontmatter.categories.map(category => {
                    return <Pill text={category}/>
                })}
            </div>
            
            {/* Words */}
            <h1 className="text-3xl font-bold">{props.data.frontmatter.title}</h1>
            <p className="text-lg pt-6 pb-8 flex-1">{props.data.frontmatter.projectShortBrief}</p>
            
            {/* Read More */}
            <ReadMoreButton accent={props.data.frontmatter.accentColor} link={props.data.fields.slug}>
                Read more about it
            </ReadMoreButton>
        </div>
        
        {/* Preview Image (Desktop) */}
        <div className="hidden w-7/12 lg:block">
            <Img className="object-fill h-full" fluid={props.data.frontmatter.thumb.childImageSharp.fluid}/>
        </div>

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
    transition: all 0.4s;
    overflow: hidden;

    &.active {
        display: flex;
        opacity: 1;
        animation: ${fadeIn} 0.3s;
    }
`;

export default ProjectCard;
