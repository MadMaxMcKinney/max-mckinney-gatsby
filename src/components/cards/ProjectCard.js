import React from 'react'
import Img from 'gatsby-image'
import Pill from '../pills/Pill'
import ReadMoreButton from '../buttons/ReadMoreButton'

const ProjectCard = (props) => {
  return (
    <div data-filter={props.data.frontmatter.categories} className="">

        {/* Preview Image */}
        <div className="rounded-lg max-w-7xl h-96 overflow-hidden mx-auto md:h-project-image">
            <Img className="object-fill h-full" fluid={props.data.frontmatter.thumb.childImageSharp.fluid}/>
        </div>

        {/* Card Content */}
        <div className="contained-content mt-12">
            {/* Pills */}
            <div className="inline-grid grid-flow-col gap-3 pb-8">
                {props.data.frontmatter.categories && props.data.frontmatter.categories.map(category => {
                    return <Pill text={category}/>
                })}
            </div>
            
            {/* Words */}
            <h2 className="text-3xl font-bold">{props.data.frontmatter.title}</h2>
            <p className="text-lg font-medium text-gray-400 pt-6 pb-8 flex-1">{props.data.frontmatter.projectShortBrief}</p>
            
            <div id="ProjectActions">
                <ReadMoreButton accent={props.data.frontmatter.accentColor} link={props.data.fields.slug}>
                    Read more about it
                </ReadMoreButton>
            </div>
        </div>

    </div>
  )
}

export default ProjectCard;
