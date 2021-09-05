import * as React from "react"
// import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Data from "../interfaces/index"

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

export default function NavBar() {
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
  )
}
