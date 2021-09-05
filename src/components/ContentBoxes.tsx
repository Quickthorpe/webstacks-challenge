import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Data from "../interfaces/Data"

export default function ContentBoxes({
  data,
}: {
  data: Data["allContentfulContentBoxes"]
}) {
  return (
    <div className="content-boxes">
      {data.nodes.map(({ contentTitle, contentDesc, contentImg }) => {
        const image = getImage(contentImg.gatsbyImageData)

        return (
          <div key={contentTitle}>
            <h4>{contentTitle}</h4>
            <p>{contentDesc}</p>
            {image && <GatsbyImage image={image} alt={contentImg.title} />}
          </div>
        )
      })}
    </div>
  )
}
