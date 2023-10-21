export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "GROUP FOUR CHICKEN",
  description:
    "지금까지 이런 맛은 없었다 이것은 갈비인가 통닭인가",
  mainNav: [
    {
      title: "소개",
      href: "/about"
    },
    {
      title: "메뉴",
      href: "/menu"
    },
    {
      title: "임원",
      href: "/executives"
    },
  ],
  footerContent: [],
  links: {
    shadcnuiDocs: "https://ui.shadcn.com",
    micInstagram: "https://instagram.com/leejunsibal",
    github: "https://github.com/MicKoreaYoutube/groupfour-chicken"
  },
  image: ["eunchae.png", "chaelin.png", "junyoung.png", "seung.png"]
}
