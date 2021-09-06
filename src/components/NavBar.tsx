import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Arrow from "../assets/arrow.svg"
import Data from "../interfaces/Data"

import * as styles from "../styles/components/navbar.module.scss"

export default function NavBar() {
  // ideally, would have parameter for sorting, but createdAt works for now in the interest of time
  const { allContentfulNavBarLinks: data } = useStaticQuery<Data>(graphql`
    query {
      allContentfulNavBarLinks(sort: {fields: createdAt}) {
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
        {data?.nodes.map(({ linkText, isStart }) => (
          <Link
            key={linkText}
            className={isStart ? styles.start : undefined}
            to="#"
          >
            {linkText}
            {isStart && <Arrow />}
          </Link>
        ))}
      </div>
    </nav>
  )
}
