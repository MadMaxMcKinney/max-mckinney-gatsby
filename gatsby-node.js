const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

// Look at every node when it is created
exports.onCreateNode = ({node, getNode, actions}) => {
	// Check for markdown nodes
	const { createNodeField } = actions;
	if(node.internal.type === 'MarkdownRemark') {
		// Create a slug out of the markdown filepath name
		const slug = createFilePath({
			node,
			getNode,
			basePath: 'projects'
		});
		// Add the newly created slug to the node itself
		createNodeField({
			node,
			name: 'slug',
			value: `/project${slug}`
		});
	}
};

exports.createPages = ({ graphql, actions }) => {
	const { createPage } = actions
	return new Promise((resolve, reject) => {
	  graphql(`
		{
		  allMarkdownRemark {
			edges {
			  node {
				fields {
				  slug
				}
			  }
			}
		  }
		}
	  `).then(result => {
		result.data.allMarkdownRemark.edges.forEach(({ node }) => {
		  createPage({
			path: node.fields.slug,
			component: path.resolve(`./src/templates/project.js`),
			context: {
			  // Data passed to context is available in page queries as GraphQL variables.
			  slug: node.fields.slug,
			},
		  })
		})
		resolve()
	  })
	})
  };