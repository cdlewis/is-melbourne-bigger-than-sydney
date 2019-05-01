import * as React from "react"
import Chart from "chart.js"
import {
  projections,
  historicalLabels,
  projectionLabels,
  melbourneHistorical,
  sydneyHistorical,
} from "../population-data"
import { colours } from "../theme"
import useAnnotationPlugin from "../chart/annotation-plugin"
import arrowAsset from "../static/arrow.svg"

function getProjection(projectionID) {
  const [sydney, melbourne] = projections[projectionID]
  const melbournePoints = historicalLabels.map(x => null).concat(melbourne)
  const sydneyPoints = historicalLabels.map(x => null).concat(sydney)

  let intersectionPoint = 0
  for (let i = 0; i < melbourne.length; i++) {
    if (melbourne[i] >= sydney[i]) {
      intersectionPoint = historicalLabels.length + i
      break
    }
  }

  return [sydneyPoints, melbournePoints, intersectionPoint]
}

const labels = historicalLabels.concat(projectionLabels)
const [sydneyPoints, melbournePoints, intersectionPoint] = getProjection("B")

const config = {
  // The type of chart we want to create
  type: "line",

  // The data for our dataset
  data: {
    labels: labels,
    datasets: [
      {
        label: "Melbourne",
        backgroundColor: "transparent",
        borderColor: colours.blue,
        data: melbourneHistorical,
        pointBorderColor: "transparent",
      },
      {
        label: "Melbourne (Projected)",
        backgroundColor: "transparent",
        borderColor: colours.blue,
        data: melbournePoints,
        pointBorderColor: "transparent",
        borderDash: [10, 5],
      },
      {
        label: "Sydney",
        backgroundColor: "transparent",
        borderColor: colours.red,
        data: sydneyHistorical,
        pointBorderColor: "transparent",
      },
      {
        label: "Sydney (Projected)",
        backgroundColor: "transparent",
        borderColor: colours.red,
        data: sydneyPoints,
        pointBorderColor: "transparent",
        borderDash: [10, 5],
      },
    ],
  },

  // Configuration options go here
  options: {
    legend: {
      display: false,
      position: "left",
      labels: {
        generateLabels: () => [
          {
            text: "Melbourne",
            index: 0,
            fillStyle: colours.blue,
          },
          {
            text: "Sydney",
            index: 1,
            fillStyle: colours.red,
          },
        ],
      },
    },
    intersectionPoint: {
      datasetIndex: 1,
      dataIndex: intersectionPoint,
      dataLabel: labels[intersectionPoint],
    },
    tooltips: {
      enabled: true,
      mode: "index",
      position: "nearest",
      intersect: false,
      callbacks: {
        label: function(tooltipItem, data) {
          let label = data.datasets[tooltipItem.datasetIndex].label || ""

          if (label) {
            label = label.replace(/ \(Projected\)/, "") + ": "
          }
          label += tooltipItem.yLabel.toLocaleString()

          return label
        },
      },
    },
    scales: {
      xAxes: [
        {
          display: true,
          ticks: {
            maxTicksLimit: 10,
          },
          gridLines: {
            display: false,
          },
        },
      ],
      yAxes: [
        {
          gridLines: {
            display: false,
          },
          scaleLabel: {
            display: true,
            labelString: "Population (millions)",
          },
          ticks: {
            max: 14 * 1000 * 1000, // 14 million
            callback: function(value, index, values) {
              return value / 1000 / 1000
            },
          },
        },
      ],
    },
  },
}

const updateProjection = (config, projection) => {
  const [sydneyPoints, melbournePoints, intersectionPoint] = getProjection(
    projection
  )
  for (let dataset of config.data.datasets) {
    if (dataset.label === "Sydney (Projected)") {
      dataset.data = sydneyPoints
    } else if (dataset.label === "Melbourne (Projected)") {
      dataset.data = melbournePoints
    }
  }

  config.options.intersectionPoint.dataIndex = intersectionPoint
  config.options.intersectionPoint.dataLabel = labels[intersectionPoint]
}

export default ({ projection }) => {
  const canvasRef = React.useRef()
  const arrowRef = React.useRef()
  const chartRef = React.useRef()

  useAnnotationPlugin(Chart, arrowRef)

  React.useEffect(() => {
    if (!canvasRef.current) {
      return
    }

    updateProjection(config, projection)

    if (!chartRef.current) {
      chartRef.current = new Chart(canvasRef.current, config)
    }

    chartRef.current.update()
  }, [projection])

  return (
    <>
      <canvas ref={canvasRef} />
      <img src={arrowAsset} ref={arrowRef} style={{ display: "none" }} alt="" />
    </>
  )
}
