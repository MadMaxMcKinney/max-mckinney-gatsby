import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import ProjectCard from '../components/ProjectCard';

import {fadeInDown} from './../animations/m-styled-animations'

const IndexPage = ({data}) => (
  <React.Fragment>
	  <PageGrid>
		<HeaderTitle>Fullstack <br/> Web Dev / Designer</HeaderTitle>
		<HeaderSubtitle>I’m <strong>Max McKinney,</strong> currently contracting in ATX. My background is in <strong>computer science, UI/UX design, and creative problem solving</strong>. I build cars on the side as well.</HeaderSubtitle>

		<ProjectCardGrid>

			{data.allMarkdownRemark.edges.map(({node}) => (
				<ProjectCard data={node} key={node.key}></ProjectCard>
			))}

		</ProjectCardGrid>
	</PageGrid>
  </React.Fragment>
)

const PageGrid = styled.div`
	display: grid;
	grid-template-columns: [start] minmax(24px, 1fr) [center] minmax(auto, 1100px) [end] minmax(24px, 1fr);
	& > * {
		grid-column: center;
	}
`

const HeaderTitle = styled.h1`
	font-size: 36px;
	margin-bottom: 24px;
	max-width: 400px;
	margin-top: 170px;
	color: white;
	font-weight: 600;
	animation: ${fadeInDown} 1s;
	@media(max-width: 425px) {
		margin-top: 130px;
	}
`;

const HeaderSubtitle = styled.h3`
	margin-bottom: 170px;
	max-width: 350px;
	font-size: 21px;
	color: #c3c3c3;
	font-weight: 400;
	line-height: 34px;
	animation: ${fadeInDown} 1.5s;
	@media(max-width: 425px) {
		margin-bottom: 110px;
	}
`;

const ProjectCardGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(490px, 1fr));
	grid-gap: 40px;
	animation: ${fadeInDown} 1.8s;
	@media (max-width: 500px) {
		grid-template-columns: 1fr;
	}
`;

export default IndexPage

export const query = graphql`
query ProjectQuery {
	allMarkdownRemark(sort: {fields: [frontmatter___sortDate], order: DESC}) {
		edges {
		  node {
			fields {
				slug
			}
			frontmatter {
			  title
			  projectShortBrief
			  themeColor
			  accentColor
			  image {
				childImageSharp {
				  sizes(maxWidth: 900) {
					...GatsbyImageSharpSizes
				  }
				}
			  }
			}
		  }
		}
	  }
  }
`