import { Link, useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import { Menu, useMediaQuery } from "@material-ui/core"

import Arrow from "../assets/arrow.svg"
import Hamburger from "../assets/hamburger.svg"
import Data from "../interfaces/Data"

import * as styles from "../styles/components/navbar.module.scss"

export default function NavBar() {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement>()
  const isDesktop = useMediaQuery("(min-width: 768px)")

  // ideally, would have parameter for sorting, but createdAt works for now in the interest of time
  const { allContentfulNavBarLinks: data } = useStaticQuery<Data>(graphql`
    query {
      allContentfulNavBarLinks(sort: { fields: createdAt }) {
        nodes {
          linkText
          isStart
        }
      }
    }
  `)

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(e.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(undefined)
  }

  return (
    <nav className={styles.navbar_container}>
      <div className={styles.navbar}>
        <Link to="/">
          <StaticImage src="../images/brackets-logo.svg" alt="Brackets Logo" />
        </Link>
        {isDesktop ? (
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
        ) : (
          <div className={styles.nav_links}>
            <button onClick={handleClick} className={styles.menu_button}>
              <Hamburger />
            </button>
            <Menu
              open={!!anchorEl}
              onClose={handleClose}
              anchorEl={anchorEl}
              transitionDuration={0}
              className={styles.menu}
            >
              {data?.nodes.map(({ linkText, isStart }) => (
                <Link
                  key={linkText}
                  className={`${styles.menu_item} ${
                    isStart ? styles.start : undefined
                  }`}
                  to="#"
                >
                  <p>
                    {linkText}
                    {isStart && <Arrow />}
                  </p>
                </Link>
              ))}
            </Menu>
          </div>
        )}
      </div>
    </nav>
  )
}
