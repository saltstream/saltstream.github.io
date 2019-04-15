import React from "react"
import { graphql } from "gatsby"
import Head from "../components/head"
import Layout from "../components/layout"
import Featurette from "../components/featurette"

const Home = props => {
  const features = props.data.allFeaturesJson.edges
  var isOdd = Boolean(1)
  return (
    <div className='homepage'>
      <Head />
      <Layout>
        <h3 className='homepage-heading'>
          This site and all it's content is under construction.
        </h3>
        <h3 className='homepage-heading'>
          It largely serves as a playground for the time being as I experiment and learn.
        </h3>
        {features.map(edge => {
          isOdd = !isOdd
          edge.node.reversed = isOdd
          return <Featurette feature={edge.node} />
        })}
      </Layout>
    </div>
  )
}

export const query = graphql`
  query {
    allFeaturesJson {
      edges {
        node {
          title
          description
          text
          relPath
          image {
            childImageSharp {
              fluid(maxWidth: 500) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`

export default Home
