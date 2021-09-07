import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Arrow from "../assets/arrow.svg"
import Data from "../interfaces/Data"

import * as styles from "../styles/components/boxes.module.scss"

export default function ContentBoxes({
  data,
}: {
  data: Data["allContentfulContentBoxes"]
}) {
  return (
    <div className={styles.boxes}>
      {data.nodes.map(({ contentTitle, contentDesc, contentImg, contentful_id }) => {
        const image = getImage(contentImg.gatsbyImageData)

        // ideally, would have a custom id for each field for targeted styling
        // but contentful_id works in the meantime
        return (
          <div key={contentTitle} className={`${styles.box} ${styles[`_${contentful_id}`]}`}>
            <div className={styles.box_text}>
              <h4>{contentTitle}</h4>
              <p>{contentDesc}</p>
              <Link to="#" className={styles.link}>
                Learn more
                <Arrow />
              </Link>
            </div>
            {image && (
              <GatsbyImage
                image={image}
                alt={contentImg.title}
                className={styles.photo}
              />
            )}
          </div>
        )
      })}
    </div>
  )
}
