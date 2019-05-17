import React from 'react';
import { graphql, StaticQuery } from "gatsby"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Logo from "../../images/logo.svg"
import PropTypes from 'prop-types';
import styles from './Footer.module.css';

const FooterComp = ({ title }) => (
  <div className={styles.root}>
    <Navbar>
      <Navbar.Brand href="/">
        <Logo />
      </Navbar.Brand>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="policy">Privacy</Nav.Link>
          <span className="navbar-text">
            © {new Date().getFullYear()} {FooterComp.title}
          </span>
        </Nav>
        <Nav className="justify-content-end">
          <Nav.Link href="#home">Back to the top</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </div>
);

const Footer = ({ title }) => (
  <StaticQuery
    query={query}
    render={({
      site: {
        siteMetadata: {
          defaultTitle
        },
      },
    }) => <FooterComp title={defaultTitle} /> }
  />
);

export default Footer;

Footer.defaultProps = {
  title: null
}

Footer.propTypes = {
  title: PropTypes.string
}

const query = graphql`
  query Footer {
    site {
      siteMetadata {
        defaultTitle: title
      }
    }
  }
`
