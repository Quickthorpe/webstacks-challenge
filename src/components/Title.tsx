import React from "react"
import { Link } from "gatsby"

import Data from "../interfaces/Data"

export default function Title({
  data,
  startText,
}: {
  data: Data["contentfulTitleText"]
  startText: Data["allContentfulNavBarLinks"]
}) {
  return (
    <div>
      <h4>{data?.topTag}</h4>
      <h1>{data?.mainTag}</h1>
      <p>{data?.bottomTag}</p>
      <div>
        {startText.nodes.map(({ linkText }) => (
          <Link key={linkText} to="#">
            {linkText}
          </Link>
        ))}
        <Link to="#">{data?.demoButton}</Link>
      </div>
    </div>
  )
}
