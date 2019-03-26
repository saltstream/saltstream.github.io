import React from "react"
import Img from "gatsby-image"
//import Image from "../components/image"

const Featurette = props => (
  <div className="container marketing">
    <hr className="featurette-divider" />

    <div className="row featurette align-items-center">
      <div
        className={props.feature.reversed ? "col-md-7 order-md-2" : "col-md-7"}
      >
        <h2 className="featurette-heading">
          {props.feature.title}
          <span className="text-muted"> {props.feature.description}</span>
        </h2>
        <p className="lead">{props.feature.text} </p>
      </div>
      <div
        className={props.feature.reversed ? "col-md-5 order-md-1" : "col-md-5"}
      >
        <Img
          title={props.feature.title}
          alt={props.feature.title}
          fluid={props.feature.image.childImageSharp.fluid}
        />
      </div>
    </div>
  </div>
)

export default Featurette
