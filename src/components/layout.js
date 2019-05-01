import React from "react"
import styled from "@emotion/styled"
import "./layout.css"

const Wrapper = styled.div`
  font-family: "Montserrat", sans-serif;
  display: flex;
  justify-content: center;
  margin: 40px 50px;
`

const Content = styled.main`
  width: 1000px;
  max-width: 100%;
`

const Layout = ({ children }) => (
  <Wrapper>
    <Content>{children}</Content>
  </Wrapper>
)

export default Layout
