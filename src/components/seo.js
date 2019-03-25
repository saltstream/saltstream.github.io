import React from "react"
import { Helmet } from "react-helmet"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

const SEO = ({ title, description, lang, siteUrl }) => (
  <StaticQuery
    query={query}
    render={({
      site: {
        siteMetadata: {
          defaultTitle,
          defaultDescription,
          defaultLang,
          defaultUrl,
        },
      },
    }) => {
      const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        lang: lang || defaultLang,
        siteUrl: siteUrl || defaultUrl,
    }
      return (
        <>
          <Helmet title={seo.title}>
            {seo.siteUrl && <meta property="og:url" content={seo.siteUrl} />}
            {seo.title && <meta property="og:title" content={seo.title} />}
            {seo.description && (
              <meta property="og:description" content={seo.description} />
            )}
            {seo.lang && (
              <meta http-equiv="Content-Language" content={seo.lang} />
              )}
          </Helmet>
        </>
      )
    }}
  />
)

export default SEO

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  lang: PropTypes.string,
  siteUrl: PropTypes.string,
}

SEO.defaultProps = {
  title: null,
  description: null,
  lang: `en`,
  siteUrl: null,
}

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        defaultDescription: description
        defaultLang: lang
        defaultUrl: siteUrl
      }
    }
  }
`