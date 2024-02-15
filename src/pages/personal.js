import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import PersonalProjectCard from "../components/cards/PersonalProjectCard";

import metaFeaturedImage from "./../assets/img/website-meta-share-personal.jpg";

import { MBodyXL, MHeading01, MBody, MHeading03, MBodyLight } from "../components/typography";
import Pill from "../components/pills/Pill";

const description = "These are some of my personal projects. They span through web-based projects, iOS projects, design education, and other projects I used to try new tech.";

const SideProjectsPage = ({ data }) => (
    <div className="page-grid">
        <Helmet title={data.site.siteMetadata.title + " | Personal "}>
            <meta itemprop="name" content={data.site.siteMetadata.title + " | Personal "} />
            <meta name="description" content={description} />
            <meta itemprop="description" content={description} />
            <meta name="image" content={data.site.siteMetadata.siteUrl + metaFeaturedImage} />
            <meta itemprop="image" content={data.site.siteMetadata.siteUrl + metaFeaturedImage} />

            <meta name="twitter:title" content={data.site.siteMetadata.title + " | Personal"} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={data.site.siteMetadata.siteUrl + metaFeaturedImage} />

            <meta name="og:title" content={data.site.siteMetadata.title + " | Personal"} />
            <meta name="og:description" content={description} />
            <meta name="og:image" content={data.site.siteMetadata.siteUrl + metaFeaturedImage} />
        </Helmet>

        <MHeading01 className="mb-6 mt-32 sm:mt-56 animate-fade-in-fast text-white">hello.</MHeading01>

        <MBodyXL className="mb-8 text-zinc-400 max-w-3xl animate-fade-in">These are some of my personal projects.</MBodyXL>

        <MBodyXL className="mb-8 text-zinc-400 max-w-3xl animate-fade-in-slow">
            They span through web-based projects, iOS projects, design education, and other projects I used to try new tech.
        </MBodyXL>

        <div id="SideProjectGrid" className="grid grid-cols-1 gap-6 mt-12 sm:grid-cols-2 sm:gap-8 md:gap-14 sm:mt-24 animate-fade-in-slow">
            {data.personal.edges.map(({ node }) => {
                // Determine if the project is linking to something external or an internal page
                // If there is no externalLink frontmatter then use the generated slug for internal page
                const processedLink = node.frontmatter.externalLink ? node.frontmatter.externalLink : node.fields.slug;

                /* TODO: Remove external link options from personal projects, make everything a page */
                return (
                    <PersonalProjectCard to={processedLink} accent={node.frontmatter.accent} key={node.fields.slug}>
                        <GatsbyImage id="SideImage" className="w-24 h-24" imgStyle={{ borderRadius: "1.5rem" }} image={getImage(node.frontmatter.icon)} alt="" />
                        <div className="flex flex-col gap-2">
                            <MHeading03>{node.frontmatter.title}</MHeading03>
                            <MBody className="text-zinc-400 flex-1">{node.frontmatter.description}</MBody>
                        </div>
                        <div className="flex">
                            <Pill type="themed" theme={node.frontmatter.accent} text={node.frontmatter.projectType} />
                        </div>
                    </PersonalProjectCard>
                );
            })}
        </div>
    </div>
);

export default SideProjectsPage;

export const query = graphql`
    query personalProjectQuery {
        site {
            siteMetadata {
                title
                siteUrl
            }
        }
        personal: allMarkdownRemark(sort: { frontmatter: { sortDate: DESC } }, filter: { fileAbsolutePath: { regex: "/personalprojects/.*.md$/" } }) {
            edges {
                node {
                    fields {
                        slug
                    }
                    frontmatter {
                        title
                        description
                        accent
                        projectType
                        locationText
                        externalLink
                        icon {
                            childImageSharp {
                                gatsbyImageData(width: 200)
                            }
                        }
                    }
                }
            }
        }
    }
`;
