import React from 'react'
import Tree from './tree'
import { StaticQuery, graphql } from 'gatsby'
import Link from '../link'
import styled from 'react-emotion'
import '../styles.css'
import config from '../../../config'

const Sidebar = styled('nav')`
  padding-top: 2rem;
  position: sticky;
  top: 0;

  .navbar-brand {
    color: #4a5568;
    display: inline-block;
    font-size: 1.5rem;
    line-height: inherit;
    white-space: nowrap;
    text-decoration: none;
  }
`

const List = styled('ul')`
  list-style: none;
  padding: 1.5rem 0;

  ul {
    list-style: none;
    padding: 0;

    li {
      margin-bottom: 0.25rem;

      &.active a {
        background: rgba(178, 245, 234, 0.25);
        color: #319795;
        border-radius: 0.25rem;
      }
    }
  }

  a {
    color: #718096;
    font-size: 0.875rem;
    line-height: 1.5;
    text-decoration: none;
    padding: 0.25rem 0.5rem;
    margin-left: -0.5rem;
    transition: all 0.2s ease;
    display: inline-block;
    position: relative;
    width: 100%;
    word-wrap: break-word

    &:hover {
      color: #1a202c;
    }
  }
`

// eslint-disable-next-line no-unused-vars
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
    font-weight: ${({ level }) => (level === 0 ? 700 : 400)};
    padding: 0.45rem 0 0.45rem ${props => 2 + (props.level || 0) * 1}rem;
    display: block;
    position: relative;

    &:hover {
      color: rgb(116, 76, 188) !important;
    }

    ${props =>
      props.active &&
      `
      color: #663399;
      border-color: rgb(230,236,241) !important;
      border-style: solid none solid solid;
      border-width: 1px 0px 1px 1px;
      background-color: #fff;
    `} // external link icon
    svg {
      float: right;
      margin-right: 1rem;
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
                title
              }
            }
          }
        }
      }
    `}
    render={({ allMdx }) => {
      return (
        <Sidebar>
          <Link to="/" className={'navbar-brand'}>
            Test Docs
          </Link>
          <List>
            <Tree edges={allMdx.edges} />
            {config.sidebar.links.map((link, key) => {
              if (link.link !== '' && link.text !== '') {
                return (
                  <ListItem key={key} to={link.link}>
                    {link.text}
                  </ListItem>
                )
              }
            })}
          </List>
        </Sidebar>
      )
    }}
  />
)

export default SidebarLayout
