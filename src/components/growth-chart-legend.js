import React from "react"
import styled from "@emotion/styled"
import { colours } from "../theme"

const Wrapper = styled.div`
  position: absolute;
  top: 6px;
  left: 76px;
`

const Row = styled.div`
  font-size: 12px;
  color: #6f6f6f;
  margin-bottom: 6px;
  display: flex;
  align-items: center;
`

const Icon = styled.div`
  width: 40px;
  height: 14px;
  margin-right: 8px;
  background-color: ${props => props.colour};
`

export default function GrowthChartLegend() {
  return (
    <Wrapper>
      <Row>
        <Icon colour={colours.blue} />
        Melbourne
      </Row>
      <Row>
        <Icon colour={colours.red} />
        Sydney
      </Row>
    </Wrapper>
  )
}
