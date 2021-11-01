import React from 'react'
import { graphql } from "gatsby"
import Img from 'gatsby-image'
import { StaticImage } from 'gatsby-plugin-image';
import ProjectCard from '../components/cards/ProjectCard';

import { SocialColorButton } from '../components/buttons/SocialButton';

const IndexPage = ({data}) => (
  <React.Fragment>
	  <div className="px-4">

        <div className="flex items-end relative h-header" id="Header">
            <div className="contained-content z-10 pb-32">
                <StaticImage className="h-auto w-52 mb-8 animate-fade-in-fast" src={"../assets/img/max_transition_shapes.png"} alt="Max Shape Logo"/>
                <h1 className="font-bold text-9xl text-white mb-5 animate-fade-in">Designer.</h1>
                <h1 className="font-bold text-9xl text-white mb-5 animate-fade-in-slow">Leader.</h1>
                <h1 className="font-bold text-9xl text-white animate-fade-in-very-slow">Nerd.</h1>
            </div>
            <Img style={{position: 'absolute', top: 0, left: '-16px', right: '-16px', height: `100%`}} fluid={data.maxBG.childImageSharp.fluid} className="bg-bottom animate-fade-in-very-slow"/>
        </div>
		

        <div className="contained-content mt-24 animate-fade-in-slow" id="BioDescription">

            <div className="font-semibold text-gray-400 text-xl sm:text-3xl sm:leading-10">
                <p className="mb-6">Hi, I’m Max McKinney. I’m currently a design lead at IBM working in the cyber security space. I run a design centric YouTube channel, do automotive photography, and build cars.</p>

                <p className="mb-6">I specialize in design architecture and thrive in undefined problem spaces. My experience is in UX design, user interfaces, design systems, and design leadership.</p>

                <p>To support my designs I enjoy creating end-to-end experiences via frontend web development with a focus in React and CSS component systems.</p>
            </div>
        </div>

        {/* Project Card Grid */}
		<div id="ProjectGrid" className="animate-fade-in-slow mt-48 grid grid-cols-1 gap-16 lg:gap-32">
			{data.allMarkdownRemark.edges.map(({node}) => (
				<ProjectCard data={node} key={node.key}></ProjectCard>
			))}
		</div>

	</div>
  </React.Fragment>
)

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
				  fluid(maxWidth: 1920) {
					...GatsbyImageSharpFluid
				  }
				}
              }
              thumb {
				childImageSharp {
				  fluid(maxWidth: 1920) {
					...GatsbyImageSharpFluid
				  }
				}
              }
              categories
			}
		  }
		}
	}
    maxBG: file(relativePath: { eq: "img/max-helmet.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 2400) {
            ...GatsbyImageSharpFluid
          }
    	}
    }
}
`