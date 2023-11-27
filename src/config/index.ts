export const PRODUCT_CATEGORIES = [
  {
    label: "UI Kits",
    value: "ui_kits" as const,
    featured: [
      {
        name: "Editors picks",
        href: "#",
        imgSrc: "/nav/ui-kits/mixed.jpg",
        value: "editor_pick",
      },
      {
        name: "New Arrivals",
        href: "#",
        imgSrc: "/nav/ui-kits/blue.jpg",
        value: "new_arrivals",
      },
      {
        name: "Best sellers",
        href: "#",
        imgSrc: "/nav/ui-kits/purple.jpg",
        value: "best_sellers",
      },
    ],
  },
  {
    label: "Icons",
    value: "icons" as const,
    featured: [
      {
        name: "Favorite Icon Picks",
        href: "#",
        imgSrc: "/nav/icons/picks.jpg",
        value: "favorite_pick",
      },
      {
        name: "New Arrivals",
        href: "#",
        imgSrc: "/nav/icons/new.jpg",
        value: "new_arrivals",
      },
      {
        name: "Bestselling Icons",
        href: "#",
        imgSrc: "/nav/icons/bestsellers.jpg",
        value: "selling_icons",
      },
    ],
  },
];
