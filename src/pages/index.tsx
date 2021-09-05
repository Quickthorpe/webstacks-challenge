import { graphql, useStaticQuery } from "gatsby"
import { BgImage } from "gbimage-bridge"
import { getImage } from "gatsby-plugin-image"
import * as React from "react"

import ContentBoxes from "../components/ContentBoxes"
import Layout from "../components/Layout"
import Title from "../components/Title"
import Data from "../interfaces/Data"

import "../styles/global.scss" // move to head
// import * as styles from "../styles/index.module.scss"

export default function IndexPage() {
  const {
    backgroundImg,
    allContentfulNavBarLinks,
    contentfulTitleText,
    allContentfulContentBoxes,
  } = useStaticQuery<Data>(graphql`
    query {
      backgroundImg: file(relativePath: { eq: "hero-background.png" }) {
        childImageSharp {
          gatsbyImageData(width: 2000)
        }
      }
      allContentfulNavBarLinks(filter: { isStart: { eq: true } }) {
        nodes {
          linkText
        }
      }
      contentfulTitleText {
        topTag
        mainTag
        bottomTag
        demoButton
      }
      allContentfulContentBoxes {
        nodes {
          contentTitle
          contentDesc
          contentImg {
            title
            gatsbyImageData(width: 200)
          }
        }
      }
    }
  `)

  const image = getImage(backgroundImg.childImageSharp)

  return (
    <BgImage image={image}>
      <Layout>
        <Title
          data={contentfulTitleText}
          startText={allContentfulNavBarLinks}
        />
        <ContentBoxes data={allContentfulContentBoxes} />
      </Layout>
    </BgImage>
  )
}
