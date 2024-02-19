const path = require(`path`);

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;

    // Templates
    const personalProjectTemplate = path.resolve(`./src/templates/TemplatePersonalProject.js`);
    const workProjectTemplate = path.resolve(`./src/templates/TemplateWorkProject.js`);

    // Get all markdown projects, personal and work
    const markdownQuery = await graphql(`
        {
            personalProjects: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/personal/" } }) {
                nodes {
                    id
                    parent {
                        ... on File {
                            name
                        }
                    }
                }
            }
            workProjects: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/work/" } }) {
                nodes {
                    id
                    parent {
                        ... on File {
                            name
                        }
                    }
                }
            }
        }
    `);

    // Create the pages
    const projects = markdownQuery.data.personalProjects.nodes;
    if (projects.length > 0) {
        projects.forEach((project) => {
            createPage({
                path: `/personal/${project.parent.name}`,
                component: personalProjectTemplate,
                context: {
                    id: project.id,
                },
            });
        });
    }

    const workProjects = markdownQuery.data.workProjects.nodes;
    if (workProjects.length > 0) {
        workProjects.forEach((project) => {
            createPage({
                path: `/work/${project.parent.name}`,
                component: workProjectTemplate,
                context: {
                    id: project.id,
                },
            });
        });
    }
};
