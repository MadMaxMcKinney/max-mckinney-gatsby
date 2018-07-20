import React from 'react'
import Helmet from 'react-helmet'

export default function Template({ data }) {
	return (
		<ProjectHeader background={data.markdownRemark.frontmatter.image} >
			<h1 class="project-post-title"></h1>
		</ProjectHeader>
	)
}

const ProjectHeader = styled.div`
    height: 800px;
    display: flex;
    justify-content: center;
    align-items: center;
	position: relative;
	padding: 0px 24px;
	* {
		z-index: 100;
	}
	@media(max-width: 715px) {
		height: 430px;
	}
`;

export const query = graphql`
	query ProjectBySlug($slug: String!) {
		markdownRemark(fields: { slug: { eq: $slug } }) {
			frontmatter {
				title
				projectClient
				projectDate
				projectRole
				projectAgency
				projectShortBrief
				image {
					sizes(maxWidth: 1600) {
						...GatsbyImageSharpSizes
					}
				}
			}
			html
			fields {
				slug
			}
		}
	}
`;
