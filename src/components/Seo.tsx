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
      <link
        key="preconnect-google-fonts"
        rel="preconnect"
        href="https://fonts.googleapis.com"
        crossOrigin="anonymous"
      />
      <link
        key="preconnect-fonts-gstatic"
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link
        key="google-fonts"
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"
        rel="stylesheet"
      />
    </Helmet>
  )
}
