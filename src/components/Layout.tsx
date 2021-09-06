import * as React from "react"
import NavBar from "./NavBar"
import Seo from "./Seo"

import "../styles/global.scss"

export default function Layout({
  pageTitle,
  children,
}: React.PropsWithChildren<{pageTitle: string}>) {

  return (
    <main>
      <Seo pageTitle={pageTitle} />
      <NavBar />
      {children}
    </main>
  )
}
