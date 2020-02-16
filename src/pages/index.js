import React from 'react'
import { graphql } from "gatsby"
import styled from 'styled-components'
import DetailedProjectCard from '../components/DetailedProjectCard';

import {fadeInDown} from './../animations/m-styled-animations'

const IndexPage = ({data}) => (
  <React.Fragment>
	  <PageGrid>

		<HeaderTitle>Fullstack <br/> Web Dev / Designer</HeaderTitle>
		<HeaderSubtitle>I’m <strong>Max McKinney,</strong> currently full-time in ATX. My background is in <strong>computer science, UI/UX design, and creative problem solving</strong>. I build cars on the side as well.</HeaderSubtitle>

        {/*<FilterContainer>
            <span className="active">BOTH</span>
            <span>DESIGN</span>
            <span>DEVELOPMENT</span>
        </FilterContainer>*/}

		<ProjectCardGrid>
			{data.allMarkdownRemark.edges.map(({node}) => (
				<DetailedProjectCard data={node} key={node.key}></DetailedProjectCard>
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
	grid-template-columns: 1fr;
	grid-gap: 110px;
	animation: ${fadeInDown} 2.2s;
	@media (max-width: 500px) {
		grid-template-columns: 1fr;
	}
`;

const FilterContainer = styled.div`
    width: 100%;
    display: grid;
    grid-auto-flow: column;
    grid-gap: 24px;
    justify-content: flex-end;
    align-items: center;
    animation: ${fadeInDown} 1.7s;
    margin-bottom: 48px;

    span {
        font-family: "Source Sans Pro", sans-serif;
        text-transform: uppercase;
        font-size: 0.8rem;
        font-weight: bold;
        letter-spacing: 1px;
        color: #C3C3C3;
        margin: 0;
        padding: 0;
    }
    
    span.active {
        color: white;
    }
    span.active::before {
        content:'[';
        padding-right: 6px;
        color: #C3C3C3;
    }
    span.active::after {
        content:']';
        padding-left: 6px;
        color: #C3C3C3;
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
				  fluid(maxWidth: 900) {
					...GatsbyImageSharpFluid
				  }
				}
              }
              categories
			}
		  }
		}
	  }
  }
`