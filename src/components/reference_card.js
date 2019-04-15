import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

const Reference = props => (
  <div className="container marketing">
    <div className="row align-items-center">
      <h2 className="reference-heading">
        <Link to={props.reference.relPath}>{props.reference.title}</Link>
        <span className="text-muted"> {props.reference.description}</span>
      </h2>
      <p className="lead">{props.reference.text} </p>
      <Img
        className="reference-image"
        title={props.reference.title}
        alt={props.reference.title}
        fluid={props.reference.image.childImageSharp.fluid}
      />
    </div>
  </div>
)

export default Reference
