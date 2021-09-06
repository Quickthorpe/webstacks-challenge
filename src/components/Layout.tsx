import * as React from "react"
import NavBar from "./NavBar"
import Head from "./Head"

import "../styles/global.scss"

export default function Layout({
  pageTitle,
  children,
}: React.PropsWithChildren<{pageTitle: string}>) {

  return (
    <main>
      <Head pageTitle={pageTitle} />
      <NavBar />
      {children}
    </main>
  )
}
