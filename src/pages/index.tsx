import * as React from "react"
import { Link } from "gatsby"
import Data from "../interfaces/index"
// import { StaticImage } from "gatsby-plugin-image"

// import Layout from "../components/layout"
// import Seo from "../components/seo"
// import { useStaticQuery, graphql } from "gatsby"

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

const access_token = "7-ewF0O2_aSRwWizFUj9y3ntG8cq6lsQzgEB0UEquM8"
const spaceID = "1fookciohp77"

export default function IndexPage() {
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

  console.log(data)

  return (
    <main>
      <nav>
        {data?.navBarLinksCollection.items
          .reverse()
          .map(({ linkText, isStart }) => (
            <Link key={linkText} className={isStart ? "startLink" : "link"} to="#">
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
    </main>
  )
}
