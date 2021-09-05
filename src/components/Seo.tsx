import * as React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

export default function Seo({
  pageDescription = "",
  lang = "en",
  pageTitle,
}: {
  pageDescription?: string
  lang?: string
  pageTitle: string
}) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `
  )

  const siteName = site.siteMetadata.title
  const metaDescription = pageDescription || site.siteMetadata.description

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={pageTitle}
      titleTemplate={`%s | ${siteName}`}
    >
      <meta name="description" content={metaDescription} />
      <meta property="og:title" content={`${pageTitle} | ${siteName}`} />
      <meta property="og:description" content={metaDescription} />
    </Helmet>
  )
}
