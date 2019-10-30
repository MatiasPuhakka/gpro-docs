import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'react-emotion'
import './styles.css'
import config from '../../config'

const Sidebar = styled('nav')`
  overflow: auto;
  position: sticky;
  top: 0;
  padding-top: 2rem;

  @media only screen and (max-width: 50rem) {
    width: 100%;
    position: relative;
  }
`

const Ul = styled('ul')`
  color: #718096;
  border-left: 1px solid #edf2f7;

  h6 {
    font-size: 0.675rem;
    line-height: 1;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1.2px;
    padding-left: 0.5rem;
    margin-bottom: 0.5rem;
    color: #a0aec0;
  }
`

const ListItem = styled(({ className, active, level, ...props }) => {
  return (
    <li className={className}>
      <a href={props.to} {...props} />
    </li>
  )
})`
  list-style: none;

  a {
    color: #718096;
    text-decoration: none;
    display: block;
    position: relative;

    font-size: 0.75rem;
    font-weight: 500;
    line-height: 1.5;
    padding-left: 0.5rem;
    margin-bottom: 0.5rem;

    &:hover {
      color: #319795;
    }
  }
`

const SidebarLayout = ({ location }) => (
  <StaticQuery
    query={graphql`
      query {
        allMdx {
          edges {
            node {
              fields {
                slug
              }
              tableOfContents
            }
          }
        }
      }
    `}
    render={({ allMdx }) => {
      let navItems = []
      let finalNavItems
      if (allMdx.edges !== undefined && allMdx.edges.length > 0) {
        const navItems = allMdx.edges.map((item, index) => {
          let innerItems
          if (item !== undefined) {
            if (item.node.fields.slug === location.pathname || config.gatsby.pathPrefix + item.node.fields.slug === location.pathname) {
              if (item.node.tableOfContents.items) {
                innerItems = item.node.tableOfContents.items.map((innerItem, index) => {
                  const itemId = innerItem.title ? innerItem.title.replace(/\s+/g, '').toLowerCase() : '#'
                  return (
                    <ListItem key={index} to={`#${itemId}`} level={1}>
                      {innerItem.title}
                    </ListItem>
                  )
                })
              }
            }
          }
          if (innerItems) {
            finalNavItems = innerItems
          }
        })
      }

      if (finalNavItems && finalNavItems.length) {
        return (
          <Sidebar>
            <Ul>
              <h6>Sisällysluettelo</h6>
              {finalNavItems}
            </Ul>
          </Sidebar>
        )
      } else {
        return (
          <Sidebar>
            <Ul></Ul>
          </Sidebar>
        )
      }
    }}
  />
)

export default SidebarLayout
