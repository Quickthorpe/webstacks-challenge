import type { IGatsbyImageData } from "gatsby-plugin-image"

interface navBarLink {
  linkText: string
  isStart: boolean
}

interface TitleText {
  topTag: string
  mainTag: string
  bottomTag: string
  demoButton: string
}

interface contentBox {
  contentful_id: string
  contentTitle: string
  contentDesc: string
  contentImg: {
    title: string
    gatsbyImageData: IGatsbyImageData
  }
}

export default interface Data {
  backgroundImg: {
    childImageSharp: IGatsbyImageData
  }
  allContentfulNavBarLinks: {
    nodes: navBarLink[]
  }
  contentfulTitleText: TitleText
  allContentfulContentBoxes: {
    nodes: contentBox[]
  }
}
