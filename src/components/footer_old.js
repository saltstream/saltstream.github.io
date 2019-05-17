import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Logo from "../images/logo.svg"

const Footer = props => (
  <Navbar
    className="footer"
    collapseOnSelect
    expand="lg"
    bg="primary"
    variant="dark"
  >
    <Navbar.Brand href="/">
      <Logo />
    </Navbar.Brand>
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="policy">Privacy</Nav.Link>
        <span className="navbar-text">
          © {new Date().getFullYear()} {props.data.site.siteMetadata.title}
        </span>
      </Nav>
      <Nav className="justify-content-end">
        <Nav.Link href="#home">Back to top</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default props => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => <Footer data={data} />}
  />
)
