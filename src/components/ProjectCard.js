import React from 'react'
import {Link} from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'

const ProjectCard = (props) => {
  return (
	<Link to={props.data.fields.slug}>
		<ProjectCardContainer>
			<Img className="project-card-image" fluid={props.data.frontmatter.image.childImageSharp.fluid} alt="Project Image"/>
			<ProjectCardContent>
				<h4>{props.data.frontmatter.title}</h4>
				<p>{props.data.frontmatter.projectShortBrief}</p>
				<ReadMore theme={props.data.frontmatter.accentColor}>Read more about it</ReadMore>
			</ProjectCardContent>
		</ProjectCardContainer>
	</Link>
  )
}

// TODO: Create a style component wrapper for the gatsby-image component

const ReadMore = styled.span`
	margin-top: 8px;
	font-weight: 500;
	color: white;
	display: inline-block;
	opacity: 1;
	border-bottom: 1px solid #cecece;
	position: relative;
	transition: opacity 0.3s;
	--accent-color: ${props => props.theme};
	&:after {
		content: '';
		position: absolute;
		background: var(--accent-color);
		left: 0;
		right: 100%;
		bottom: -1px;
		height: 1px;
		transition: all 0.3s;
	}
`;

const ProjectCardContent = styled.div`
	grid-column: 2;
	padding: 40px 32px;
	align-self: center;
`;

const ProjectCardContainer = styled.div`
	display: grid;
    width: 100%;
    background: #171717;
    border-radius: 4px;
	grid-template-columns: 40% 1fr;
	overflow: hidden;
	height: 300px;
	.recent-project-content {
		grid-column: 2;
		padding: 40px 32px;
		align-self: center;
	}
	.project-card-image {
		grid-column: 1;
		padding: 0;
		height: 100%;
		object-fit: cover;
		margin: 0;
	}
	h4 {
		display: inline-block;
		line-height: 32px;
		font-weight: 600;
	}
	p {
		margin-top: 8px;
		margin-bottom: 0px;
		opacity: 0.70;
	}
	&:hover {
		opacity: 1;
	}
	/* This syntax is used to reference another styled component */
	&:hover ${ReadMore}:after, &:focus ${ReadMore}:after, &:active ${ReadMore}:after {
		right: 0;
	}
	@media(max-width: 500px) {
		grid-template-columns: 10% 1fr;
	}
`;

export default ProjectCard;
