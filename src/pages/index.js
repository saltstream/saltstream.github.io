import React from "react"
import { graphql } from 'gatsby';
import Head from "../components/head"
import Layout from "../components/layout"
import Featurette from "../components/featurette"

const Home = (props) => {
  const features = props.data.allFeaturesJson.edges;
  var isOdd = Boolean(1);
  return (
    <>
      <Head />
      <Layout>
        {features.map(edge => {
          isOdd = !isOdd;
          edge.node.reversed = isOdd;
          return (
            <Featurette feature={edge.node} />
          )
        })}        
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
