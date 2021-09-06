import { graphql, useStaticQuery } from "gatsby"
import { BgImage } from "gbimage-bridge"
import { getImage } from "gatsby-plugin-image"
import * as React from "react"

import ContentBoxes from "../components/ContentBoxes"
import Layout from "../components/Layout"
import Title from "../components/Title"
import Data from "../interfaces/Data"

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
      allContentfulContentBoxes(sort: {fields: createdAt}) {
        nodes {
          contentful_id
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
    // <BgImage image={image}>
    <>
      <Layout pageTitle="Home">
        <Title
          data={contentfulTitleText}
          startText={allContentfulNavBarLinks}
        />
        <ContentBoxes data={allContentfulContentBoxes} />
      </Layout>
      {/* </BgImage> */}
    </>
  )
}
