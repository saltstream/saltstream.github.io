import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from "../../components/layout"
import Img from "gatsby-image"

const Testimonials = (props) => {
  const testimonials = props.data.allMarkdownRemark.edges;
  return (
    <Layout>
      <div className="page-testimonials">
      <div className="intro">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>Testimonials</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="container pb-6">
        <div className="row">
          {testimonials.map(edge => (
            <div key={edge.node.frontmatter.path} className="col-12 col-md-4 mb-1">
              <div className="card testimonial testimonial-teaser">
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
      </div>
    </Layout>
  );
};

export const query = graphql`
  query TestimonialsQuery {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/testimonials/" } }
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

export default Testimonials;
