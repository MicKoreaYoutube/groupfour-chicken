export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Next.js Template",
  description:
    "A nextjs template by MicKoreaYoutube based on shadcn-ui",
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
  links: {
    shadcnTwitter: "https://twitter.com/shadcn",
    shadcnGithub: "https://github.com/shadcn/ui",
    shadcnuiDocs: "https://ui.shadcn.com",
    micInstagram: "https://instagram.com/leejunsibal",
    micGithub: "https://github.com/MicKoreaYoutube/mic-next-template",
    github: "https://github.com/MicKoreaYoutube/groupfour-chicken"
  },
}
