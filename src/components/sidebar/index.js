import React from 'react'
import Tree from './tree'
import { StaticQuery, graphql } from 'gatsby'
import Link from '../link'
import styled from 'react-emotion'
import '../styles.css'
import config from '../../../config'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'

const Sidebar = styled('nav')`
  padding-top: 2rem;
  position: sticky;
  top: 0;

  a {
    color: var(--linkColor);
    font-size: 0.875rem;
    line-height: 1.5;
    text-decoration: none;
    padding: 0.25rem 0.5rem;
    margin-left: -0.5rem;
    transition: all 0.2s ease;
    display: inline-block;
    position: relative;
    width: 100%;
    word-wrap: break-word;

    &:hover {
      color: var(--linkHoverColor);
    }

    &.navbar-brand {
      color: var(--titleColor);
      font-size: 1.5rem;
      line-height: inherit;
    }
  }

  hr {
    border: 1px solid var(--hr);
    margin: 1rem 0;
  }
`

const List = styled('ul')`
  list-style: none;
  margin: 1.5rem 0;

  ul {
    list-style: none;
    padding: 0;

    li {
      margin-bottom: 0.25rem;

      &.active a {
        background: var(--linkBg);
        color: var(--teal);
        border-radius: 0.25rem;
      }
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
          <hr />
          <Link to="https://discord.gg/ErcATyQ">
            <i class="fab fa-discord"></i> Discord
          </Link>
          <ThemeToggler>
            {({ theme, toggleTheme }) => (
              <label>
                <input type="checkbox" onChange={e => toggleTheme(e.target.checked ? 'dark' : '')} checked={theme === 'dark'} /> Dark mode
              </label>
            )}
          </ThemeToggler>
        </Sidebar>
      )
    }}
  />
)

export default SidebarLayout
