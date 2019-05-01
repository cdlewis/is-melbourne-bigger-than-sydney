import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"
import Header from "./header"
import "./layout.css"

const Wrapper = styled.div`
  font-family: "Montserrat", sans-serif;
  display: flex;
  justify-content: center;
  margin: 40px 50px;
`

const Content = styled.main`
  max-width: 1000px;
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <Wrapper>
        <Content>{children}</Content>
      </Wrapper>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
