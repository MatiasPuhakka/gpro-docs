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

const Left = styled('div')`
  position: relative;
  width: 100%;
  padding-right: 1rem;
  padding-left: 1rem;
  flex: 0 0 25%;
  max-width: 25%;

  @media (min-width: 992px) {
    flex: 0 0 20%;
    max-width: 20%;
  }
`

const Main = styled('main')`
  position: relative;
  width: 100%;
  padding-right: 1rem;
  padding-left: 1rem;
  flex: 0 0 75%;
  max-width: 75%;

  @media (min-width: 768px) {
    flex: 0 0 55%;
    max-width: 55%;
  }

  @media (min-width: 992px) {
    flex: 0 0 60%;
    max-width: 60%;
  }
`

const Right = styled('div')`
  display: none;

  @media (min-width: 768px) {
    display: block;
    position: relative;
    width: 100%;
    padding-right: 1rem;
    padding-left: 1rem;
    flex: 0 0 20%;
    max-width: 20%;
  }
`

const Layout = ({ children, location }) => (
  <ThemeProvider location={location}>
    <MDXProvider components={mdxComponents}>
      <Wrapper>
        <Left>
          <Sidebar location={location} />
        </Left>
        <Main>{children}</Main>
        <Right>
          <Contents location={location} />
        </Right>
      </Wrapper>
    </MDXProvider>
  </ThemeProvider>
)

export default Layout
