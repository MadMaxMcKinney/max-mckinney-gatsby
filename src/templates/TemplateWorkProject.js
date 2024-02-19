import React from "react";
import { graphql } from "gatsby";
import Helmet from "react-helmet";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { MBodyLight, MHeading03 } from "../components/typography";
import BodyColorizer from "../components/utils/BodyColorizer";

export default function Template({ data }) {
    return (
        <>
            <Helmet title={data.site.siteMetadata.title + " | " + data.markdownRemark.frontmatter.title}>
                <meta name="theme-color" content={data.markdownRemark.frontmatter.themeColor} />

                <meta name="description" content={data.markdownRemark.frontmatter.projectShortBrief} />
                <meta name="image" content={data.site.siteMetadata.siteUrl + getImage(data.markdownRemark.frontmatter.thumb)} />
                <meta itemprop="name" content={data.site.siteMetadata.title + " | " + data.markdownRemark.frontmatter.title} />
                <meta itemprop="description" content={data.markdownRemark.frontmatter.projectShortBrief} />
                <meta itemprop="image" content={data.site.siteMetadata.siteUrl + getImage(data.markdownRemark.frontmatter.thumb)} />

                <meta name="twitter:card" content="summary" />
                <meta name="twitter:title" content={data.site.siteMetadata.title + " | " + data.markdownRemark.frontmatter.title} />
                <meta name="twitter:description" content={data.markdownRemark.frontmatter.projectShortBrief} />
                <meta name="twitter:site" content="@madmaxmckinney" />
                <meta name="twitter:image" content={data.site.siteMetadata.siteUrl + getImage(data.markdownRemark.frontmatter.thumb)} />

                <meta name="og:title" content={data.site.siteMetadata.title + " | " + data.markdownRemark.frontmatter.title} />
                <meta name="og:description" content={data.markdownRemark.frontmatter.projectShortBrief} />
                <meta name="og:image" content={data.site.siteMetadata.siteUrl + getImage(data.markdownRemark.frontmatter.thumb)} />
                <meta name="og:site_name" content="Max McKinney" />

                <meta name="msapplication-TileColor" content={data.markdownRemark.frontmatter.themeColor} />
            </Helmet>

            <BodyColorizer hex={data.markdownRemark.frontmatter.themeColor} />

            <div
                style={{ "--themeColor": data.markdownRemark.frontmatter.themeColor }}
                className="h-[430px] flex justify-center items-center relative px-6 md:h-[800px] after:absolute after:inset-0 after:bg-gradient-to-b from-black/0 to-[var(--themeColor)]"
            >
                <GatsbyImage className="animate-fade-in" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: `100%` }} image={getImage(data.markdownRemark.frontmatter.image)} />
                <h1 className="font-bold text-center text-4xl z-10 md:text-6xl animate-fade-in-slow">{data.markdownRemark.frontmatter.title}</h1>
            </div>

            <div className="page-grid page-grid-sm text-white animate-fade-in-up">
                <div className="flex gap-6 lg:gap-12">
                    <div>
                        <MHeading03 className="mb-1">Role</MHeading03>
                        <MBodyLight className="mb-4">{data.markdownRemark.frontmatter.projectRole}</MBodyLight>
                    </div>
                    <div>
                        <MHeading03 className="mb-1">Client</MHeading03>
                        <MBodyLight className="mb-4">{data.markdownRemark.frontmatter.projectClient}</MBodyLight>
                    </div>
                    <div>
                        <MHeading03 className="mb-1">Date</MHeading03>
                        <MBodyLight className="mb-4">{data.markdownRemark.frontmatter.projectDate}</MBodyLight>
                    </div>
                </div>

                <div>
                    <MHeading03 className="mb-1">Brief</MHeading03>
                    <MBodyLight className="mb-4">{data.markdownRemark.frontmatter.projectBrief}</MBodyLight>
                </div>

                <MHeading03 className="mt-14 mb-1 animate-fade-in-up">Case Study</MHeading03>

                <div className="prose prose-lg text-white max-w-none animate-fade-in-up" dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
            </div>
        </>
    );
}

export const query = graphql`
    query Work($id: String!) {
        site {
            siteMetadata {
                title
                siteUrl
            }
        }
        markdownRemark(id: { eq: $id }) {
            frontmatter {
                title
                projectClient
                projectDate
                projectRole
                projectBrief
                projectShortBrief
                themeColor
                accentColor
                thumb {
                    childImageSharp {
                        gatsbyImageData(width: 512)
                    }
                }
                image {
                    childImageSharp {
                        gatsbyImageData(width: 1600)
                    }
                }
            }
            html
            id
        }
    }
`;
