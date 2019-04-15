const path = require('path');

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
  {
    blogs: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/blogs/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            relPath
            date(formatString: "DD MMMM YYYY")
          }
          excerpt
        }
      }
    }
    services: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/services/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            relPath
            date(formatString: "DD MMMM YYYY")
          }
          excerpt
        }
      }
    }
}
`).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    result.data.blogs.edges.forEach(({ node }) => {
      const component = path.resolve('src/templates/blog.js');
      createPage({
        path: node.frontmatter.relPath,
        component,
        context: {
          id: node.id,
        }
      })
    })
    result.data.services.edges.forEach(({ node }) => {
      const component = path.resolve('src/templates/service.js');
      createPage({
        path: node.frontmatter.relPath,
        component,
        context: {
          id: node.id,
        }
      })
    })
  })
}
