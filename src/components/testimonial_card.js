import React from "react"
import Img from "gatsby-image"

const NonStretchedImage = props => {
  let normalizedProps = props
  if (props.fluid && props.fluid.presentationWidth) {
    normalizedProps = {
      ...props,
      style: {
        ...(props.style || {}),
        maxWidth: props.fluid.presentationWidth,
        margin: "0 auto", // Used to center the image
      },
    }
  }

  return <Img {...normalizedProps} />
}

const Card = props => (
  <div class="col-sm-4">
    <div class="card">
      <NonStretchedImage 
        className="card-img-top"
        title={props.testimonial.title}
        alt={props.testimonial.title}
        fluid={props.testimonial.image.childImageSharp.fluid}
      />
      <div class="card-body">
        <h5 class="card-title">{props.testimonial.name}</h5>
        <span className="text-muted"> {props.testimonial.title}</span>
        <span className="text-muted"> {props.testimonial.company}</span>
        <p class="card-text">{props.testimonial.text} </p>
      </div>
    </div>
  </div>
)

export default Card
