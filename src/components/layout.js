import React from 'react'
import styled from 'react-emotion'
import { MDXProvider } from '@mdx-js/react'
import ThemeProvider from './themeProvider'
import mdxComponents from './mdxComponents'
import Sidebar from './sidebar'
import RightSidebar from './rightSidebar'

const Wrapper = styled('div')`
  background: #fff;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 767px) {
    display: block;
  }
`

const Content = styled('main')`
  display: flex;
  flex-grow: 1;
  padding: 3rem 1rem;
`

const MaxWidth = styled('div')`
  @media only screen and (max-width: 50rem) {
    width: 100%;
    position: relative;
  }
`

const LeftSideBarWidth = styled('div')`
  width: 298px;
`

const RightSideBarWidth = styled('div')`
  width: 224px;
`
const Layout = ({ children, location }) => (
  <ThemeProvider location={location}>
    <MDXProvider components={mdxComponents}>
      <Wrapper>
        <LeftSideBarWidth>
          <Sidebar location={location} />
        </LeftSideBarWidth>
        <Content>
          <MaxWidth>{children}</MaxWidth>
        </Content>
        <RightSideBarWidth>
          <RightSidebar location={location} />
        </RightSideBarWidth>
      </Wrapper>
    </MDXProvider>
  </ThemeProvider>
)

export default Layout
