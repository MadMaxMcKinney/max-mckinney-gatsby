const path = require("path");

module.exports = {
    siteMetadata: {
        title: "Max McKinney",
        description: "I’m Max McKinney, a design leader building for empathy and humanizing technology. I specialize in web experiences and thrive in undefined problem spaces.",
        siteUrl: "https://maxmckinney.com",
    },
    plugins: [
        "gatsby-plugin-react-helmet",
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        `gatsby-plugin-layout`,
        "gatsby-plugin-image",
        "gatsby-plugin-postcss",
        {
            resolve: "gatsby-transformer-remark",
            options: {
                plugins: [
                    {
                        resolve: "gatsby-remark-images",
                        options: {
                            maxWidth: 1600,
                            backgroundColor: "transparent",
                            linkImagesToOriginal: false,
                        },
                    },
                    {
                        resolve: `gatsby-remark-images-medium-zoom`,
                    },
                    `gatsby-remark-responsive-iframe`,
                ],
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                path: `${__dirname}/work`,
                name: "work",
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                path: `${__dirname}/personal`,
                name: "personal",
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `assets`,
                path: path.join(__dirname, `src`, `assets`),
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Max McKinney`,
                short_name: `Max McKinney`,
                description: `I’m Max McKinney, a design leader building for empathy and humanizing technology. I specialize in web experiences and thrive in undefined problem spaces.`,
                start_url: `/`,
                background_color: `#000000`,
                display: `standalone`,
                icon: `src/assets/img/max_transition_shapes.png`,
            },
        },
    ],
};
