import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import styled from "@emotion/styled"
import GrowthChart from "./growth-chart"
import GrowthChartLegend from "./growth-chart-legend"
import OtherOptions from "./other-options"

const Answer = styled.span`
  color: #f67019;
`

const Title = styled.h1`
  margin-top: 0px;
  margin-bottom: 24px;
`

const BodyText = styled.p`
  font-size: 16px;
  line-height: 24px;
`

const ChartWrapper = styled.div`
  position: relative;
  margin-top: 24px;
  margin-left: -26px;
`

const IndexPage = () => {
  const [projection, setProjection] = React.useState("B")

  return (
    <Layout>
      <Title>
        Is Melbourne bigger than Sydney yet? <Answer>No</Answer>
      </Title>
      <BodyText>
        We all know Melbourne is better than Sydney. Population trends also
        reflect this fact. Within the next twenty years Melbourne is projected
        to overtake Sydney and become Australia's biggest/best city 🎉
      </BodyText>
      <ChartWrapper>
        <GrowthChartLegend />
        <GrowthChart projection={projection} />
      </ChartWrapper>
      <OtherOptions projection={projection} setProjection={setProjection} />
    </Layout>
  )
}

export default IndexPage
