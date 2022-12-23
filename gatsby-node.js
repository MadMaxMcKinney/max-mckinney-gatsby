const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

// Look at every node when it is created
exports.onCreateNode = ({node, getNode, actions}) => {
	// Check for markdown nodes
	const { createNodeField } = actions;
	if(node.internal.type === 'MarkdownRemark') {
        if(node.frontmatter.postType === "personal-project") {
            const slug = createFilePath({
                node,
                getNode,
                basePath: 'personal'
            });
            // Add the newly created slug to the node itself
            createNodeField({
                node,
                name: 'slug',
                value: `/personal${slug}`
            });
        } else if(node.frontmatter.postType === "professional-project") {
            // Create a slug out of the markdown filepath name
            const slug = createFilePath({
                node,
                getNode,
                basePath: 'professional'
            });
            // Add the newly created slug to the node itself
            createNodeField({
                node,
                name: 'slug',
                value: `/professional${slug}`
            });
        }
    }
};

exports.createPages = async ({ graphql, actions }) => {

	const { createPage } = actions

    const queryResult = await graphql(`
    {
        personal: allMarkdownRemark(filter: {frontmatter: {postType: {eq: "personal-project"}}}) {
            nodes {
                fields {
                    slug
                }
            }
        }
        professional: allMarkdownRemark(filter: {frontmatter: {postType: {eq: "professional-project"}}}) {
            nodes {
                fields {
                    slug
                }
            }
        }
    }
    `)

    queryResult.data.personal.nodes.forEach((node) => {
        createPage({
            path: node.fields.slug,
            component: path.resolve(`./src/templates/personalproject.js`),
            context: {
                // Data passed to context is available in page queries as GraphQL variables
                slug: node.fields.slug,
            },
        })
    })

    queryResult.data.professional.nodes.forEach((node) => {
        createPage({
            path: node.fields.slug,
            component: path.resolve(`./src/templates/professionalproject.js`),
            context: {
                // Data passed to context is available in page queries as GraphQL variables
                slug: node.fields.slug,
            },
        })
    })

};