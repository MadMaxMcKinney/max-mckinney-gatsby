module.exports = {
	siteMetadata: {
		title: 'Max McKinney',
		description: 'I’m a developer and designer with a focus in web technolagies and native mobile development. I build cars on the side.'
	},
	plugins: [
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-styled-components',
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		'gatsby-image',
		{
			resolve: 'gatsby-transformer-remark',
			options: {
				plugins: [
					{
						resolve: 'gatsby-remark-images',
						options: {
							maxWidth: 1000,
							backgroundColor: 'transparent'
						}
					},
					`gatsby-remark-responsive-iframe`,
				],
			}
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				path: `${__dirname}/src/pages`,
				name: 'pages',
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				path: `${__dirname}/src/projects`,
				name: 'projects',
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				path: `${__dirname}/src/assets/img`,
				name: 'img',
			},
		},
		`gatsby-plugin-react-next`,
	],
}