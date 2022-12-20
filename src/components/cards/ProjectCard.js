import React from 'react'
import Img from 'gatsby-image'
import Pill from '../pills/Pill'
import ReadMoreButton from '../buttons/ReadMoreButton'
import PropTypes from 'prop-types'
import { MBody, MHeading02 } from '../typography'

const ProjectCard = (props) => {
  return (
    <div>
        {/* Preview Image */}
        <div className="rounded-lg max-w-7xl h-96 overflow-hidden mx-auto md:h-project-image">
            <Img className="object-fill h-full" fluid={props.data.frontmatter.thumb.childImageSharp.fluid}/>
        </div>

        {/* Card Content */}
        <div className="contained-content mt-12">
            {/* Pills */}
            <div className="inline-grid grid-flow-col gap-3 pb-8">
                <Pill text={props.data.frontmatter.projectRole}/>
            </div>
            
            {/* Words */}
            <MHeading02>{props.data.frontmatter.title}</MHeading02>
            <MBody className="text-gray-400 pt-6 pb-8 flex-1">{props.data.frontmatter.projectShortBrief}</MBody>
            
            <div id="ProjectActions">
                <ReadMoreButton accent={props.data.frontmatter.accentColor} link={props.data.fields.slug}>
                    View case study
                </ReadMoreButton>
            </div>
        </div>

    </div>
  )
}

ProjectCard.propTypes = {
    /** A markdown object that contains professional project details */
    data: PropTypes.shape({
        thumb: PropTypes.any,
        projectRole: PropTypes.string,
        title: PropTypes.string,
        accentColor: PropTypes.string,
        fields: PropTypes.object
    })
}

export default ProjectCard;