import React from "react";
import { graphql } from "gatsby";
import ProfessionalProjectCard from "../components/cards/ProfessionalProjectCard";
import { MHeadingHero, MBodyLead } from "../components/typography";
import MaxShapes from "../components/icons/MaxShapes";
import Lottie from "react-lottie";
import * as animationData from "../assets/lottie/max-shape.json";

const IndexPage = ({ data }) => (
    <React.Fragment>
        <div className="px-6">
            <div className="flex items-end relative pt-32 pb-8 md:pt-52 md:pb-16" id="Header">
                <div className="contained-content z-10 flex flex-col gap-3 items-start">
                    <div className="mb-2 animate-fade-in">
                        <Lottie
                            options={{ loop: false, autoplay: true, rendererSettings: { preserveAspectRatio: "xMidYMid slice" }, animationData: animationData.default }}
                            style={{ width: "150px", height: "auto", cursor: "default" }}
                        />
                    </div>
                    <MHeadingHero className="animate-fade-in">Designer.</MHeadingHero>
                    <MHeadingHero className="animate-fade-in-slow">Leader.</MHeadingHero>
                    <MHeadingHero className="animate-fade-in-very-slow">Nerd.</MHeadingHero>
                </div>
            </div>

            <div className="contained-content mt-16 animate-fade-in-slow sm:mt-24" id="BioDescription">
                <div className="text-zinc-400">
                    <MBodyLead className="mb-6">
                        I’m <span className="text-transparent bg-gradient-to-r from-max-red-300 via-max-green-300 to-max-pink-300 bg-clip-text bg-300% animate-flow-background">Max McKinney</span>. I’m
                        currently a Designer at Figma. I love to tinker and build with all things web technology based, extend software, and build classic cars.
                    </MBodyLead>

                    <MBodyLead className="mb-6">
                        I specialize in product design architecture and thrive in undefined problem spaces. My personal background is in user experience, product development, design systems, and
                        design leadership.
                    </MBodyLead>
                </div>
            </div>

            {/* Project Card Grid */}
            <div id="ProjectGrid" className="animate-fade-in-slow mt-24 grid grid-cols-1 gap-16 sm:mt-30 lg:gap-32">
                {data.allMarkdownRemark.edges.map(({ node }) => (
                    <ProfessionalProjectCard data={node} key={node.fields.slug}></ProfessionalProjectCard>
                ))}
            </div>
        </div>
    </React.Fragment>
);

export default IndexPage;

export const query = graphql`
    query ProjectQuery {
        allMarkdownRemark(sort: { frontmatter: { sortDate: DESC } }, filter: { fileAbsolutePath: { regex: "/work/.*.md$/" } }) {
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
`;
