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
    },
    {
      title: "Sale",
    },
  ],
}