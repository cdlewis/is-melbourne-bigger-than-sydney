import { useEffect } from "react"

const lerp = (x, y, t) => x + t * (y - x)
const getImageCoords = model => [model.x - 25, model.y + 10]
const getTextCoords = model => [model.x - 30, model.y + 52 + 20]

export default function useAnnotationPlugin(Chart, assetRef) {
  if (!Chart) {
    return
  }

  useEffect(() => {
    let imgX = null
    let imgY = null
    let textX = null
    let textY = null

    Chart.defaults.global.defaultFontFamily = "'Montserrat', sans-serif"

    Chart.plugins.register({
      afterDraw: function(chartInstance, easingValue) {
        const intersectPoint = chartInstance.config.options.intersectionPoint
        const ctx = chartInstance.chart.ctx

        if (!intersectPoint || !assetRef.current) {
          return
        }

        chartInstance.data.datasets.forEach(function(dataset, dsindex) {
          for (var i = 0; i < dataset.data.length; i++) {
            if (
              dsindex === intersectPoint.datasetIndex &&
              i === intersectPoint.dataIndex
            ) {
              var model =
                dataset._meta[Object.keys(dataset._meta)[0]].data[i]._model

              // animate arrow
              const [newImgX, newImgY] = getImageCoords(model)
              const [newTextX, newTextY] = getTextCoords(model)

              if (easingValue === 1 || imgX === null) {
                imgX = newImgX
                imgY = newImgY
                textX = newTextX
                textY = newTextY
              }

              if (newImgX !== imgX || newImgY !== imgY) {
                ctx.drawImage(
                  assetRef.current,
                  lerp(imgX, newImgX, easingValue),
                  lerp(imgY, newImgY, easingValue),
                  38,
                  52
                )
              } else {
                ctx.drawImage(assetRef.current, newImgX, newImgY, 38, 52)
              }

              ctx.fillStyle = "black"
              ctx.font = "24px Permanent Marker"
              ctx.textAlign = "right"
              if (newTextX !== textX || newTextY !== textY) {
                ctx.fillText(
                  intersectPoint.dataLabel,
                  lerp(textX, newTextX, easingValue),
                  lerp(textY, newTextY, easingValue)
                )
              } else {
                ctx.fillText(intersectPoint.dataLabel, newTextX, newTextY)
              }
            }
          }
        })
      },
    })
  }, [])
}
