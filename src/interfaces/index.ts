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
  contentTitle: string
  contentDesc: string
  contentImg: {
    title: string
    url: string
  }
}

export default interface Data {
  navBarLinksCollection: {
    items: navBarLink[]
  }
  titleText: TitleText
  contentBoxesCollection: {
    items: contentBox[]
  }
}
