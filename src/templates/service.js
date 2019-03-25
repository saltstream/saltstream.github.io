import React from "react"
import { graphql } from 'gatsby';
import Layout from "../components/layout"
import Logo from '../images/logo.svg';

const Service = ({ data }) => {
  const { title } = data.markdownRemark.frontmatter;
  const { html } = data.markdownRemark;
  return (
    <Layout>
      <h1 className="title">{title}</h1>
      <div className="content" dangerouslySetInnerHTML={{ __html: html }} />
      <Logo />
      <Logo />
      <Logo />
      <Logo />
      <Logo />
      <Logo />
      <Logo />
      <Logo />
    </Layout>
  );
};

export const query = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
      }
      html
    }
  }
`;

export default Service;
