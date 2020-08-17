module.exports = {
	siteMetadata: {
		title: 'Max McKinney',
		description: "I'm a UI/UX designer and developer with a focus in full-stack web technologies. I build cars on the side and take pictures.",
		siteUrl: "https://maxmckinney.com"
	},
	plugins: [
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-styled-components',
		`gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        `gatsby-plugin-layout`,
		'gatsby-image',
		{
			resolve: 'gatsby-plugin-google-analytics',
			options: {
				trackingId: "UA-60484784-4",
				// Puts tracking script in the head instead of the body
				head: true,
			},
		},
		{
			resolve: 'gatsby-transformer-remark',
			options: {
				plugins: [
					{
						resolve: 'gatsby-remark-images',
						options: {
							maxWidth: 1000,
                            backgroundColor: 'transparent',
                            linkImagesToOriginal: false
						}
                    },
                    {
                        resolve: `gatsby-remark-images-medium-zoom`,
                        options: {
                            //...
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
				path: `${__dirname}/src/work`,
				name: 'work',
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				path: `${__dirname}/src/assets`,
				name: 'img',
			},
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
              name: `Max McKinney`,
              short_name: `Max McKinney`,
              description: `I’m a developer and designer with a focus in full-stack web technologies. I build cars on the side and take pictures.`,
              start_url: `/`,
              background_color: `#000000`,
              theme_color: `#000000`,
              display: `standalone`,
              icon: `src/assets/img/max-logo.png`,
            },
        },
	],
}