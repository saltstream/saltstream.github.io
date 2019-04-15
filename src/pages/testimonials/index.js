import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import Card from "../../components/testimonial_card"

const Testimonials = (props) => {
  const testimonials = props.data.allTestimonialsJson.edges
  return (
    <>
      <Layout>
        <div className="container testimonial">
          { Object.keys(testimonials).length > 0 ? (
            testimonials.map(edge => {
              return <Card testimonial={edge.node} />
            })
          ) : (
            <h2 className="testimonial-heading">References Available Upon Request</h2>
          )}
        </div>  
      </Layout>
    </>
  )
}

export const query = graphql`
  query {
    allTestimonialsJson (
        filter: { view: { ne: "null" } },
        sort: { fields: [date], order: DESC }
      ) {
      edges {
        node {
          name
          title
          company
          phone
          text
          date
          image {
            childImageSharp {
              fluid(maxWidth: 150) {
                ...GatsbyImageSharpFluid
                presentationWidth
              }
            }
          }
        }
      }
    }
  }
`

export default Testimonials
