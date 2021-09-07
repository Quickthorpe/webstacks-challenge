import React from "react"

import Layout from "../components/Layout"
import * as styles from "../styles/layout.module.scss"

export default function NotFoundPage() {
  return (
    <Layout pageTitle="Page Not found">
      <div className={styles.not_found}>
        <h1>404: Not Found</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </div>
    </Layout>
  )
}
