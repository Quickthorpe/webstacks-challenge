import * as React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Data from "../interfaces/index"
// import Img from "gatsby-image"
import { StaticImage, getImage } from "gatsby-plugin-image"
import { BgImage } from "gbimage-bridge"

import "../styles/global.scss"
import * as styles from "../styles/index.module.scss"
// import BackgroundImage from "gatsby-background-image"

// import Seo from "../components/seo"

const query = `query {
  navBarLinksCollection {
    items {
      linkText
      isStart
    }
  }
  titleText(id: "1yZLJ3q8tT5SkmV7bRxUFp") {
    topTag
    mainTag
    bottomTag
    demoButton
  }
  contentBoxesCollection {
    items {
      contentTitle
      contentDesc
      contentImg {
        title
        url
      }
    }
  }
}`

const access_token = process.env.CONTENTFUL_ACCESS_CODE
const spaceID = process.env.CONTENTFUL_SPACE_ID

export default function IndexPage() {
  const { backgroundImg } = useStaticQuery(graphql`
    query {
      backgroundImg: file(relativePath: { eq: "hero-background.png" }) {
        childImageSharp {
          gatsbyImageData(width: 2000)
        }
      }
    }
  `)

  const image = getImage(backgroundImg)

  const [data, setData] = React.useState<Data>()

  React.useEffect(() => {
    fetch(
      `https://graphql.contentful.com/content/v1/spaces/${spaceID}?access_token=${access_token}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query }),
      }
    )
      .then(res => res.json())
      .then(json => setData(json.data))
  }, [])

  return (
    <main className={styles.main}>
      <BgImage image={image}>
        <nav>
          <StaticImage src="../images/brackets-logo.svg" alt="Brackets Logo" />
          {data?.navBarLinksCollection.items
            .reverse()
            .map(({ linkText, isStart }) => (
              <Link
                key={linkText}
                className={isStart ? "startLink" : "link"}
                to="#"
              >
                {linkText}
              </Link>
            ))}
        </nav>
        <div className="title-section">
          <h4>{data?.titleText.topTag}</h4>
          <h1>{data?.titleText.mainTag}</h1>
          <p>{data?.titleText.bottomTag}</p>
          <div>
            {data &&
              data.navBarLinksCollection.items.map(
                ({ linkText, isStart }) =>
                  isStart && (
                    <Link key={linkText} to="#">
                      {linkText}
                    </Link>
                  )
              )}
            <Link to="#">{data?.titleText.demoButton}</Link>
          </div>
        </div>
        <div className="content-boxes">
          {data?.contentBoxesCollection.items.map(
            ({ contentTitle, contentDesc, contentImg }) => (
              <div key={contentTitle}>
                <h4>{contentTitle}</h4>
                <p>{contentDesc}</p>
                <img src={contentImg.url} alt={contentImg.title} />
              </div>
            )
          )}
        </div>
      </BgImage>
    </main>
  )
}
