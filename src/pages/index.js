import React from "react"
import Layout from "../components/layout"
import styled from "@emotion/styled"
import GrowthChart from "../components/growth-chart"
import GrowthChartLegend from "../components/growth-chart-legend"
import OtherOptions from "../components/other-options"
import SEO from "../components/seo"

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
      <SEO />
      <Title>
        Is Melbourne bigger than Sydney yet? <Answer>No</Answer>
      </Title>
      <BodyText>
        We all know Melbourne is better than Sydney. Population trends also
        reflect this fact. Within the next twenty years Melbourne is projected
        to overtake Sydney and become Australia's biggest/best city{" "}
        <span role="img" aria-label="party emoji">
          🎉
        </span>
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
