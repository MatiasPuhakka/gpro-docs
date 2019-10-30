import React from 'react'
import styled from 'react-emotion'
import { MDXProvider } from '@mdx-js/react'
import ThemeProvider from './themeProvider'
import mdxComponents from './mdxComponents'
import Sidebar from './sidebar'
import Contents from './contents'

const ContainerFluid = styled('div')`
  width: 100%;
  padding-top: 1rem;
  padding-right: 1rem;
  padding-left: 1rem;
  margin-right: auto;
  margin-left: auto;
`

const Row = styled('div')`
  display: flex;
  flex-wrap: wrap;
  margin-right: -1rem;
  margin-left: -1rem;
`

const Col3 = styled('div')`
  position: relative;
  width: 100%;
  padding-right: 1rem;
  padding-left: 1rem;
  flex: 0 0 25%;
  max-width: 25%;
`

const Col7 = styled('main')`
  position: relative;
  width: 100%;
  padding-right: 1rem;
  padding-left: 1rem;
  flex: 0 0 58.333333%;
  max-width: 58.333333%;
`

const Col2 = styled('div')`
  position: relative;
  width: 100%;
  padding-right: 1rem;
  padding-left: 1rem;
  flex: 0 0 16.666667%;
  max-width: 16.666667%;
`

const Layout = ({ children, location }) => (
  <ThemeProvider location={location}>
    <MDXProvider components={mdxComponents}>
      <ContainerFluid>
        <Row>
          <Col3>
            <Sidebar location={location} />
          </Col3>
          <Col7>{children}</Col7>
          <Col2>
            <Contents location={location} />
          </Col2>
        </Row>
      </ContainerFluid>
    </MDXProvider>
  </ThemeProvider>
)

export default Layout
