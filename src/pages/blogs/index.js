import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from "../../components/layout"
import Img from "gatsby-image"

const Blogs = (props) => {
  const blogs = props.data.allMarkdownRemark.edges;
  return (
    <Layout bodyClass="page-blogs">
      <div className="intro">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>Blogs</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="container pb-6">
        <div className="row">
          {blogs.map(edge => (
            <div key={edge.node.frontmatter.path} className="col-12 col-md-4 mb-1">
              <div className="card blog blog-teaser">
                <div className="card-content">
                  <Img
                    title={edge.node.frontmatter.title}
                    alt={edge.node.frontmatter.title}
                    fluid={edge.node.frontmatter.image.childImageSharp.fluid}
                  />
                  <h2>
                    <Link to={edge.node.frontmatter.relPath}>{edge.node.frontmatter.title}</Link>
                  </h2>
                  <p>{edge.node.excerpt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query BlogsQuery {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/blogs/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          excerpt
          frontmatter {
            title
            description
            relPath
            image {
              childImageSharp {
                fluid(maxWidth: 500) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            date
          }
        }
      }
    }
  }
`;

export default Blogs;
