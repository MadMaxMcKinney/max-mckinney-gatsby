import React from "react";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";

import metaFeaturedImage from "./../assets/img/website-meta-share-dark.jpg";
import favicon32 from "./../assets/favicon/favicon-32x32.png";
import favicon16 from "./../assets/favicon/favicon-16x16.png";
import faviconApple from "./../assets/favicon/apple-touch-icon.png";
import safariTab from "./../assets/favicon/safari-pinned-tab.svg";

// Component imports
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

require("typeface-rubik");
require("typeface-inter");

const Layout = ({ children, data, location }) => (
    <StaticQuery
        query={graphql`
            query SiteTitleQuery {
                site {
                    siteMetadata {
                        title
                        description
                        siteUrl
                    }
                }
            }
        `}
        render={(data) => (
            <div>
                <Helmet title={data.site.siteMetadata.title}>
                    <meta name="description" content={data.site.siteMetadata.description} />
                    <meta name="image" content={data.site.siteMetadata.siteUrl + metaFeaturedImage} />
                    <meta itemprop="name" content="Max McKinney" />
                    <meta itemprop="description" content={data.site.siteMetadata.description} />
                    <meta itemprop="image" content={data.site.siteMetadata.siteUrl + metaFeaturedImage} />

                    <meta property="twitter:card" content="summary_large_image" />
                    <meta property="twitter:title" content="Max McKinney" />
                    <meta property="twitter:description" content={data.site.siteMetadata.description} />
                    <meta property="twitter:site" content="@madmaxmckinney" />
                    <meta property="twitter:image" content={data.site.siteMetadata.siteUrl + metaFeaturedImage} />

                    <meta name="title" property="og:title" content="Max McKinney" />
                    <meta name="image" property="og:image" content={data.site.siteMetadata.siteUrl + metaFeaturedImage} />
                    <meta name="description" property="og:description" content={data.site.siteMetadata.description} />
                    <meta property="og:site_property" content="Max McKinney" />
                    <meta property="og:locale" content="en_US" />
                    <meta property="og:type" content="website" />

                    <link rel="apple-touch-icon" sizes="180x180" href={faviconApple} />
                    <link rel="icon" type="image/png" sizes="32x32" href={favicon32} />
                    <link rel="icon" type="image/png" sizes="16x16" href={favicon16} />
                    <link rel="mask-icon" href={safariTab} color="#5bbad5" />
                    <meta name="msapplication-TileColor" content="#000000" />
                    <meta name="theme-color" content="#000000" />

                    <script src="https://kit.fontawesome.com/d940246cad.js" crossorigin="anonymous"></script>

                    <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet" />
                </Helmet>

                <Header location={location} />

                {children}

                <Footer />
            </div>
        )}
    />
);

export default Layout;
