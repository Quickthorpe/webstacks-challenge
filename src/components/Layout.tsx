import * as React from "react"

import NavBar from "./NavBar"

export default function Layout({
  children,
}: React.PropsWithChildren<React.ReactNode>) {

  return (
    <main>
      <NavBar />
      {children}
    </main>
  )
}
