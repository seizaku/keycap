import { productConfig } from "./product";


export type siteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Keycap Store",
  description: "Upgrade your keyboard with our premium keycaps.",
  url: "",
  mainNav: [
    ...productConfig.categories.map((item) => {
      return {
        title: item.name,
        items: [
          ...item.subCategories.map((item) => {
            return {
              title: item.name,
              href: `shop/categories/${item.slug}`,
              description: item.description
            }
          })
        ]
      }
    }),
    {
      title: "Artist",
      href: "artists"
    },
    {
      title: "Community",
      href: "community"
    },
    {
      title: "Sale",
      href: "sale"
    },
  ],
  footer: [
    {
      category: "Legal",
      items: [
        {
          title: "Privacy Policy",
          href: "/"
        },
        {
          title: "Lincensing",
          href: "/"
        },
        {
          title: "Terms & Conditions",
          href: "/"
        },
      ]
    },
    {
      category: "Company",
      items: [
        {
          title: "About",
          href: "/"
        },
        {
          title: "Contact",
          href: "/"
        },
      ]
    },
    {
      category: "Social",
      items: [
        {
          title: "X",
          href: "/"
        },
        {
          title: "Github",
          href: "/"
        },
        {
          title: "Discord",
          href: "/"
        },
      ]
    },
    {
      category: "Lofi",
      items: [
        {
          title: "beats to study to",
          href: "/"
        },
        {
          title: "beats to chill to",
          href: "/"
        },
        {
          title: "a fresh start",
          href: "/"
        },
        {
          title: "coffee to go",
          href: "/"
        },
      ]
    },
  ],
  social_links: {
    github: "https://github.com/seizaku/keycap-shop",
    linked_in: "https://www.linkedin.com/in/landrei-zerna/"
  }
}