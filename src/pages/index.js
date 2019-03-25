import React from "react"
import { graphql } from 'gatsby';
import Head from "../components/head"
import Layout from "../components/layout"
import Featurette from "../components/featurette"
import Logo from '../images/logo.svg';

const Home = (props) => {
  const features = props.data.allFeaturesJson.edges;
  return (
    <>
      <Head />
      <Layout>
        {features.map(edge => (
          <Featurette feature={edge.node} />
        ))}        
      </Layout>
    </>
  )
}

export const query = graphql`
  query {
    allFeaturesJson {
      edges {
        node {
          title
          description
          image {
            childImageSharp {
              fluid(
                maxWidth: 500
              ) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`;

export default Home
