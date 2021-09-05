import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Data from "../interfaces/Data"
import { Link, useStaticQuery, graphql } from "gatsby"

export default function NavBar() {
  const { allContentfulNavBarLinks: data } = useStaticQuery<Data>(graphql`
  query {
    allContentfulNavBarLinks {
      nodes {
        linkText
        isStart
      }
    }
  }
`)

  return (
    <nav>
      <StaticImage src="../images/brackets-logo.svg" alt="Brackets Logo" />
      {data?.nodes.reverse().map(({ linkText, isStart }) => (
        <Link key={linkText} className={isStart ? "startLink" : "link"} to="#">
          {linkText}
        </Link>
      ))}
    </nav>
  )
}
