import React from "react"

import NavBar from "./NavBar"
import Head from "./Head"

import "../styles/global.scss"
import * as styles from "../styles/layout.module.scss"

export default function Layout({
  pageTitle,
  children,
}: React.PropsWithChildren<{ pageTitle: string }>) {
  return (
    <main className={styles.main}>
      <Head pageTitle={pageTitle} />
      <NavBar />
      {children}
    </main>
  )
}
