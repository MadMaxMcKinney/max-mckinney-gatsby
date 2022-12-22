import React from 'react'
import { graphql } from "gatsby"
import { StaticImage } from 'gatsby-plugin-image';
import ProjectCard from '../components/cards/ProjectCard';
import { MHeadingHero, MBodyLead } from '../components/typography';

const IndexPage = ({data}) => (
  <React.Fragment>
	  <div className="px-6">

        <div className="flex items-end relative h-header-mobile md:min-h-870px md:h-header" id="Header">
            <div className="contained-content z-10 pb-16 md:pb-32">
                <StaticImage className="h-auto w-40 mb-8 animate-fade-in-fast md:w-52" src={"../assets/img/max_transition_shapes.png"} loading="eager" alt="Abstract transition shape logo"/>
                <MHeadingHero className="mb-5 animate-fade-in">Designer.</MHeadingHero>
                <MHeadingHero className="mb-5 animate-fade-in-slow">Leader.</MHeadingHero>
                <MHeadingHero className="animate-fade-in-very-slow">Nerd.</MHeadingHero>
            </div>
            <StaticImage style={{position: 'absolute', top: 0, left: '-24px', right: '-24px', height: `100%`}} src={"../assets/img/max-helmet.jpeg"} loading="eager" className="bg-bottom animate-fade-in-slow" alt="Header background image of Max in a racing helment"/>
        </div>
		

        <div className="contained-content mt-16 animate-fade-in-slow sm:mt-24" id="BioDescription">

            <div className="text-gray-400">
                <MBodyLead className="mb-6">Hi. I’m <span className="text-transparent bg-gradient-to-r from-max-red-300 via-max-purple-300 to-max-pink-300 bg-clip-text bg-300% animate-flow-background">Max McKinney</span>. I’m currently a Designer at Figma. I also create educational design content, dabble in smart home technologies, and build cars.</MBodyLead>

                <MBodyLead className="mb-6">I specialize in product design architecture and thrive in undefined problem spaces. My personal background is in user experience, product development, design systems, and design leadership.</MBodyLead>

                <MBodyLead className="mb-6">To support my design projects I enjoy creating end-to-end experiences via frontend web development with a focus in React, Gatsby/Next, and CSS component systems.</MBodyLead>
            </div>
        </div>

        {/* Project Card Grid */}
		<div id="ProjectGrid" className="animate-fade-in-slow mt-24 grid grid-cols-1 gap-16 sm:mt-30 lg:gap-32">
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
	allMarkdownRemark(sort: {frontmatter: {sortDate: DESC}}, filter: {fileAbsolutePath:{regex: "/work/.*.md$/"}}) {
		edges {
		  node {
			fields {
				slug
			}
			frontmatter {
			  title
			  projectShortBrief
              projectRole
			  themeColor
			  accentColor
              thumb {
				childImageSharp {
                  gatsbyImageData(layout: CONSTRAINED)
				}
              }
              categories
			}
		  }
		}
	}
}
`