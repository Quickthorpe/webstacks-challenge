import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Data from "../interfaces/Data"

import * as styles from "../styles/components/navbar.module.scss"

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
    <nav className={styles.navbar}>
      <StaticImage src="../images/brackets-logo.svg" alt="Brackets Logo" />
      <div className={styles.nav_links}>
        {data?.nodes.reverse().map(({ linkText, isStart }) => (
          <Link
            key={linkText}
            className={isStart ? styles.start : undefined}
            to="#"
          >
            {linkText}
          </Link>
        ))}
      </div>
    </nav>
  )
}
