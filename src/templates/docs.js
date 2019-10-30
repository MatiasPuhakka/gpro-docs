import React, { Component } from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer'
import styled, { injectGlobal } from 'react-emotion'
import { Layout, Link } from '$components'
import '../components/styles.css'
import config from '../../config'

const forcedNavOrder = config.sidebar.forcedNavOrder

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Raleway&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    font-family: 'Raleway', sans-serif;
    font-size: 16px;
  }
`

const H1 = styled('h1')`
  margin-top: 1rem;
`

const Hr = styled('hr')`
  border: 1px solid #edf2f7;
  margin: 2rem 0;
`

export default class MDXRuntimeTest extends Component {
  render() {
    const { data } = this.props
    const {
      allMdx,
      mdx,
      site: {
        siteMetadata: { docsLocation, title }
      }
    } = data

    const navItems = allMdx.edges
      .map(({ node }) => node.fields.slug)
      .filter(slug => slug !== '/')
      .sort()
      .reduce(
        (acc, cur) => {
          if (forcedNavOrder.find(url => url === cur)) {
            return { ...acc, [cur]: [cur] }
          }

          const prefix = cur.split('/')[1]

          if (prefix && forcedNavOrder.find(url => url === `/${prefix}`)) {
            return { ...acc, [`/${prefix}`]: [...acc[`/${prefix}`], cur] }
          } else {
            return { ...acc, items: [...acc.items, cur] }
          }
        },
        { items: [] }
      )

    const nav = forcedNavOrder
      .reduce((acc, cur) => {
        return acc.concat(navItems[cur])
      }, [])
      .concat(navItems.items)
      .map(slug => {
        if (slug) {
          const { node } = allMdx.edges.find(({ node }) => node.fields.slug === slug)

          return { title: node.fields.title, url: node.fields.slug }
        }
      })

    // meta tags
    const metaTitle = mdx.frontmatter.metaTitle
    const metaDescription = mdx.frontmatter.metaDescription
    let canonicalUrl = config.gatsby.siteUrl
    canonicalUrl = config.gatsby.pathPrefix !== '/' ? canonicalUrl + config.gatsby.pathPrefix : canonicalUrl
    canonicalUrl = canonicalUrl + mdx.fields.slug

    return (
      <Layout {...this.props}>
        <Helmet>
          {metaTitle ? <title>{metaTitle}</title> : null}
          {metaTitle ? <meta name="title" content={metaTitle} /> : null}
          {metaDescription ? <meta name="description" content={metaDescription} /> : null}
          {metaTitle ? <meta property="og:title" content={metaTitle} /> : null}
          {metaDescription ? <meta property="og:description" content={metaDescription} /> : null}
          {metaTitle ? <meta property="twitter:title" content={metaTitle} /> : null}
          {metaDescription ? <meta property="twitter:description" content={metaDescription} /> : null}
          <link rel="canonical" href={canonicalUrl} />
        </Helmet>
        <H1>{mdx.fields.title}</H1>
        <Hr />
        <div className={'mainWrapper'}>
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </div>
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query($id: String!) {
    site {
      siteMetadata {
        title
        docsLocation
      }
    }
    mdx(fields: { id: { eq: $id } }) {
      fields {
        id
        title
        slug
      }
      body
      tableOfContents
      parent {
        ... on File {
          relativePath
        }
      }
      frontmatter {
        metaTitle
        metaDescription
      }
    }
    allMdx {
      edges {
        node {
          fields {
            slug
            title
          }
        }
      }
    }
  }
`
