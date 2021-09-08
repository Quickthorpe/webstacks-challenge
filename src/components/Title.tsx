import { Link } from "gatsby"
import React from "react"

import Arrow from "../assets/arrow.svg"
import Data from "../interfaces/Data"

import * as styles from "../styles/components/title.module.scss"

export default function Title({
  data,
  startText,
}: {
  data: Data["contentfulTitleText"]
  startText: Data["allContentfulNavBarLinks"]
}) {
  return (
    <div className={styles.title}>
      <h5>{data?.topTag}</h5>
      <h1>{data?.mainTag}</h1>
      <p>{data?.bottomTag}</p>
      <div className={styles.title_links}>
        {startText.nodes.map(({ linkText }) => (
          <Link key={linkText} className={styles.start} to="#">
            {linkText}
            <Arrow />
          </Link>
        ))}
        <Link className={styles.demo} to="#">
          {data?.demoButton}
          <Arrow />
        </Link>
      </div>
    </div>
  )
}
