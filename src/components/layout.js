import React from 'react'
import styled from 'react-emotion'
import { MDXProvider } from '@mdx-js/react'
import ThemeProvider from './themeProvider'
import mdxComponents from './mdxComponents'
import Sidebar from './sidebar'
import Contents from './contents'

const Wrapper = styled('div')`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`

const Col3 = styled('div')`
  position: relative;
  width: 100%;
  padding-right: 1rem;
  padding-left: 1rem;
  flex: 0 0 25%;
  max-width: 25%;
`

const Col6 = styled('main')`
  position: relative;
  width: 100%;
  padding-right: 1rem;
  padding-left: 1rem;
  flex: 0 0 50%;
  max-width: 50%;
`

const Layout = ({ children, location }) => (
  <ThemeProvider location={location}>
    <MDXProvider components={mdxComponents}>
      <Wrapper>
        <Col3>
          <Sidebar location={location} />
        </Col3>
        <Col6>{children}</Col6>
        <Col3>
          <Contents location={location} />
        </Col3>
      </Wrapper>
    </MDXProvider>
  </ThemeProvider>
)

export default Layout
