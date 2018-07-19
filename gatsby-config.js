module.exports = {
	siteMetadata: {
		title: 'Max McKinney',
	},
	plugins: [
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-styled-components',
		'gatsby-transformer-remark',
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
				path: `${__dirname}/src/assets/img`,
				name: 'img',
			},
		},
		`gatsby-plugin-react-next`,
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		'gatsby-image'
	],
}
