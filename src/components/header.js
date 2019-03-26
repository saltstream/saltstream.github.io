import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Logo from "../images/logo.svg"

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      menuActive: false,
    }
  }

  toggleMenu = menuActive => {
    this.setState(prevState => ({
      menuActive: !prevState.menuActive,
    }))
  }

  render() {
    const { menuLinks } = this.props.data.site.siteMetadata
    return (
      <Navbar
        className="header"
        collapseOnSelect
        expand="lg"
        bg="primary"
        variant="dark"
      >
        <Navbar.Brand id="home" href="/">
          <Logo />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            {menuLinks.map(link => (
              <Nav.Link href={link.link}>{link.name}</Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default props => (
  <StaticQuery
    query={graphql`
      query NavItems {
        site {
          siteMetadata {
            menuLinks {
              name
              link
            }
          }
        }
      }
    `}
    render={data => <Header data={data} />}
  />
)
