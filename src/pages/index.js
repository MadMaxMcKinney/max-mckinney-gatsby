import React from 'react'
import { graphql } from "gatsby"
import styled, { keyframes } from 'styled-components'
import ProjectCard from '../components/cards/ProjectCard';

import HeaderPill from '../components/header/HeaderPill'
import HeaderTitle from '../components/header/HeaderTitle'
import { SocialColorButton } from '../components/buttons/SocialButton';

import maxProfileImg from '../assets/img/maxmckinney-profile-transparent.png';

import {fadeInDown} from './../animations/m-styled-animations'

const IndexPage = ({data}) => (
  <React.Fragment>
	  <PageGrid>

		<HeaderTitle className="font-bold text-4xl mb-24 animate-fade-in-fast sm:text-5xl md:text-7xl md:leading-massive">I’m Max McKinney, a design leader building for empathy and humanizing technology.</HeaderTitle>

        <div className="grid grid-cols-1 sm:grid-cols-6 animate-fade-in">

            <div className="col-span-3 order-2 text-xl sm:text-2xl sm:order-1">
                <p className="text-gray-300 mb-6">I’m currently a design lead at <a href="https://ibm.com" className="text-max-blue-300 font-medium underline">IBM</a> working in the cyber security space. I run a design centric <a href="https://www.youtube.com/c/MaxMcKinney" className="text-max-red-300 font-medium underline">YouTube</a> channel, do automotive <a href="https://photography.maxmckinney.com" className="text-max-purple-300 font-medium underline">photography</a>, and build <a href="https://photography.maxmckinney.com/automotive" className="text-max-green-300 font-medium underline">cars</a>.</p>

                <p className="text-gray-300 mb-6">I specialize in design architecture and thrive in undefined problem spaces. My experience is in UX design, user interfaces, design systems, and design leadership.</p>

                <p className="text-gray-300 mb-10">To support my designs I enjoy creating end-to-end experiences via frontend web development with a focus in React and CSS component systems.</p>
            </div>

            <div className="col-span-3 w-full justify-self-center h-36 order-1 relative flex items-center justify-center max-h-72 ml-2 mb-12 animate-fade-in-slow sm:w-auto sm:h-auto sm:mb-0 sm:ml-24 sm:mr-4 sm:order-2 lg:ml-48">
                <div className="absolute w-11/12 h-11/12 border-4 -top-3 -left-3 border-max-green-300 rounded-2xl z-20 animate-fade-in-fast" />
                <img src={maxProfileImg} alt="Max profile image" className="rounded h-full w-52 object-cover m-0 z-10 sm:w-full"/>
                <div className="absolute w-11/12 h-11/12 border-4 -bottom-5 -right-5 border-max-purple-300 rounded-2xl z-0 animate-fade-in" />
            </div>

        </div>

        <div className="grid grid-flow-col gap-6 items-center list-none mb-20 animate-fade-in-slow sm:justify-start">
            <SocialColorButton className="hover:text-max-red-300" href="https://dribbble.com/MadMaxMcKinney" target="_blank" rel="noopener noreferrer">
                <i class="fab fa-dribbble"></i>
            </SocialColorButton>
            <SocialColorButton className="hover:text-max-blue-300" href="https://github.com/MadMaxMcKinney" target="_blank" rel="noopener noreferrer">
                <i class="fab fa-github"></i>
            </SocialColorButton>
            <SocialColorButton className="hover:text-max-purple-300" href="http://youtube.com/maxmckinney" target="_blank" rel="noopener noreferrer">
                <i class="fab fa-youtube"></i>
            </SocialColorButton>
            <SocialColorButton className="hover:text-max-red-300" href="https://photography.maxmckinney.com/" target="_blank" rel="noopener noreferrer">
                <i class="fas fa-aperture"></i>
            </SocialColorButton>
            <SocialColorButton className="hover:text-max-green-300" href="https://www.linkedin.com/in/mckinneymax" target="_blank" rel="noopener noreferrer">
                <i class="fab fa-linkedin-in"></i>
            </SocialColorButton>
		</div>

        <h2 className="text-4xl font-bold animate-fade-in-slow">Professional Work</h2>

        {/* Project Card Grid */}
		<ProjectGrid className="animate-fade-in-slow mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-1 lg:gap-24">
			{data.allMarkdownRemark.edges.map(({node}) => (
				<ProjectCard data={node} key={node.key}></ProjectCard>
			))}
		</ProjectGrid>

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

const appearAnimLeft = keyframes`
    from {
        transform: scale(0.8);
        transform: translateX(10px);
        opacity: 0;
    }
    to {
        transform: scale(1);
        transform: translateX(0px);
        opacity: 1;
    }
`

const appearAnimRight = keyframes`
    from {
        transform: scale(0.8);
        transform: translateX(-10px);
        opacity: 0;
    }
    to {
        transform: scale(1);
        transform: translateX(0px);
        opacity: 1;
    }
`

const ProjectGrid = styled.div`
    min-height: 800px;
`

export default IndexPage

export const query = graphql`
query ProjectQuery {
	allMarkdownRemark(sort: {fields: [frontmatter___sortDate], order: DESC}, filter: {fileAbsolutePath:{regex: "/work/.*.md$/"}}) {
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
              thumb {
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