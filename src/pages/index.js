import React, { useState, useEffect } from "react";
import { graphql } from "gatsby";
import ProfessionalProjectCard from "../components/cards/ProfessionalProjectCard";
import { MHeadingHero, MBodyLead } from "../components/typography";
import Lottie from "react-lottie";
import * as animationData from "../assets/lottie/max-shape.json";

const IndexPage = ({ data }) => {
    const [isPlayingShapes, setIsPlayingShapes] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsPlayingShapes(true);
        }, 800);
    }, []);

    return (
        <>
            <div className="px-6">
                <div className="flex items-end relative pt-32 pb-8 md:pt-52 md:pb-16" id="Header">
                    <div className="contained-content z-10 flex flex-col gap-3 items-start">
                        <div className="mb-2 animate-shapes-in">
                            <Lottie
                                options={{ loop: false, autoplay: isPlayingShapes, rendererSettings: { preserveAspectRatio: "xMidYMid slice" }, animationData: animationData.default }}
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
                            I’m <span className="text-transparent bg-gradient-to-r from-orange-500 via-purple-500  to-red-500 bg-clip-text bg-300% animate-flow-background">Max McKinney</span>. I’m
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
                    {data.allMarkdownRemark.nodes.map((node) => (
                        <ProfessionalProjectCard data={node} key={node.id}></ProfessionalProjectCard>
                    ))}
                </div>
            </div>
        </>
    );
};

export default IndexPage;

export const query = graphql`
    query ProjectQuery {
        allMarkdownRemark(sort: { frontmatter: { sortDate: DESC } }, filter: { fileAbsolutePath: { regex: "/work/.*.md$/" } }) {
            nodes {
                id
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
                parent {
                    ... on File {
                        name
                    }
                }
            }
        }
    }
`;
