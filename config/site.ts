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
  footerContent: [
    {
      title: "1번줄",
      content: [
        {
          title: "1번 내용",
          href: "1"
        },
        {
          title: "2번 내용",
          href: "2"
        },
        {
          title: "3번 내용",
          href: "3"
        }
      ]
    },
    {
      title: "1번줄",
      content: [
        {
          title: "1번 내용",
          href: "1"
        },
        {
          title: "2번 내용",
          href: "2"
        },
        {
          title: "3번 내용",
          href: "3"
        }
      ]
    },
    {
      title: "1번줄",
      content: [
        {
          title: "1번 내용",
          href: "1"
        },
        {
          title: "2번 내용",
          href: "2"
        },
        {
          title: "3번 내용",
          href: "3"
        }
      ]
    },
  ],
  links: {
    shadcnuiDocs: "https://ui.shadcn.com",
    micInstagram: "https://instagram.com/leejunsibal",
    github: "https://github.com/MicKoreaYoutube/groupfour-chicken"
  },
}
