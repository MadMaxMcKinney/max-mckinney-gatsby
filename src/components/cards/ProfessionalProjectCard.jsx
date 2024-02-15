import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Pill from "../pills/Pill";
import ReadMoreButton from "../buttons/ReadMoreButton";
import PropTypes from "prop-types";
import { MBody, MHeading02 } from "../typography";

const ProfessionalProjectCard = (props) => {
    return (
        <div>
            {/* Preview Image */}
            <div className="rounded-lg max-w-7xl h-96 border border-white/20 overflow-hidden mx-auto md:h-[650px]">
                <GatsbyImage className="object-fill h-full" image={getImage(props.data.frontmatter.thumb)} alt={"Project image for portfolio item " + props.data.frontmatter.title} />
            </div>

            {/* Card Content */}
            <div className="contained-content mt-12 flex flex-col gap-6 items-start">
                {/* Pills */}
                <div className="inline-grid grid-flow-col gap-3">
                    <Pill type="primary" text={props.data.frontmatter.projectRole} />
                </div>

                {/* Words */}
                <div className="flex flex-col gap-4">
                    <MHeading02>{props.data.frontmatter.title}</MHeading02>
                    <MBody className="text-zinc-400 flex-1">{props.data.frontmatter.projectShortBrief}</MBody>
                </div>

                <div id="ProjectActions">
                    <ReadMoreButton accent={props.data.frontmatter.accentColor} link={props.data.fields.slug}>
                        View case study
                    </ReadMoreButton>
                </div>
            </div>
        </div>
    );
};

ProfessionalProjectCard.propTypes = {
    /** A markdown object that contains professional project details */
    data: PropTypes.shape({
        thumb: PropTypes.any,
        projectRole: PropTypes.string,
        title: PropTypes.string,
        accentColor: PropTypes.string,
        fields: PropTypes.object,
    }),
};

export default ProfessionalProjectCard;
