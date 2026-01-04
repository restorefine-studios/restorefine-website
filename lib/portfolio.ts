import type { StaticImageData } from "next/image";
import quiknest_thumb from "@/public/work/quiknest/thumbnail.webp";
import masala_thumb from "@/public/work/masala/thumbnail.webp";

export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  thumbnail: string | StaticImageData;
  images: string[];
  date: string;
  category: string;
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: "quiknest",
    title: "Quiknest Logo Design",
    description:
      "Lorem ipsum dolor amet, consectetuer adipiscing elit. Accumsan rutrum rhoncus semper magnis justo lorem. Torquent dui hendrerit tortor condimentum per. Magnis lacinia suscipit risus suspendisse congue amet. Volutpat quisque fermentum torquent imperdiet curae. Varius efficitur netus purus habitasse finibus auctor.",
    thumbnail: quiknest_thumb,
    images: [
      "/work/quiknest/docs/Artboard 1@2x-100.webp?height=900&width=1600",
      "/work/quiknest/docs/Artboard 2@2x-100.webp?height=900&width=1600",
      "/work/quiknest/docs/Artboard 3@2x-100.webp?height=900&width=1600",
      "/work/quiknest/docs/Artboard 4@2x-100.webp?height=900&width=1600",
      "/work/quiknest/docs/Artboard 5@2x-100.webp?height=900&width=1600",
      "/work/quiknest/docs/Artboard 6@2x-100.webp?height=900&width=1600",
      "/work/quiknest/docs/Artboard 7@2x-100.webp?height=900&width=1600",
      "/work/quiknest/docs/Artboard 8@2x-100.webp?height=900&width=1600",
      "/work/quiknest/docs/Artboard 9@2x-100.webp?height=900&width=1600",
      "/work/quiknest/docs/Artboard 10@2x-100.webp?height=900&width=1600",
    ],
    date: "2024-01-28",
    category: "Branding",
  },
  {
    id: "masala-moves-by-luna-shree",
    title: "Masala Moves By Luna Shree",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    thumbnail: masala_thumb,
    images: [
      "/work/masala/docs/Artboard 0@2x-100.webp?height=900&width=1600",
      "/work/masala/docs/Artboard 1@2x-100.webp?height=900&width=1600",
      "/work/masala/docs/Artboard 2@2x-100.webp?height=900&width=1600",
      "/work/masala/docs/Artboard 3@2x-100.webp?height=900&width=1600",
      "/work/masala/docs/Artboard 4@2x-100.webp?height=900&width=1600",
      "/work/masala/docs/Artboard 5@2x-100.webp?height=900&width=1600",
      "/work/masala/docs/Artboard 6@2x-100.webp?height=900&width=1600",
      "/work/masala/docs/Artboard 7@2x-100.webp?height=900&width=1600",
      "/work/masala/docs/Artboard 8@2x-100.webp?height=900&width=1600",
      "/work/masala/docs/Artboard 9@2x-100.webp?height=900&width=1600",
    ],
    date: "2024-01-15",
    category: "Branding",
  },
  {
    id: "big-bites",
    title: "Big Bites",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    thumbnail: "/clients/big-bites-logo.webp",
    images: [
      "/work/bigbites/Artboard 2@4x.webp",
      "/work/bigbites/Artboard 1@4x.webp",
    ],
    date: "2024-01-15",
    category: "Menus",
  },
  {
    id: "everest-inn",
    title: "Everest Inn",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    thumbnail: "/clients/everest-inn-logo.webp",
    images: [
      "/work/everestinn/everestinn_menudesign-01.webp",
      "/work/everestinn/everestinn_menudesign-02.webp",
    ],
    date: "2025-08-05",
    category: "Menus",
  },
  {
    id: "firangi",
    title: "Firangi",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    thumbnail: "/clients/firangi-logo.webp",
    images: [
      "/work/firangi/firangi_xmasmenu-02.webp",
      "/work/firangi/firangi_xmasmenu-01.webp",
      "/work/firangi/firangi_drinksmenu-02.webp",
      "/work/firangi/firangi_drinksmenu-01.webp",
    ],
    date: "2025-10-21",
    category: "Menus",
  },
  {
    id: "gurhkaexpress",
    title: "Gurkha Express",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    thumbnail: "/clients/ghurka-express-logo.webp",
    images: [
      "/work/ghurkaexpress/gurkhaexpress_bifold_update5-01.webp",
      "/work/ghurkaexpress/gurkhaexpress_bifold_update5-02.webp",
    ],
    date: "2025-11-19",
    category: "Menus",
  },
  {
    id: "himalayandineinn",
    title: "Himalayan Dine Inn",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    thumbnail: "/clients/himalayan-dine-inn-logo.webp",
    images: [
      "/work/himalayandineinn/himalayandinein-01.webp",
      "/work/himalayandineinn/himalayandinein-02.webp",
    ],
    date: "2024-12-23",
    category: "Menus",
  },
  {
    id: "indianbynature",
    title: "Indian By Nature",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    thumbnail: "/clients/indian-by-nature-logo.webp",
    images: [
      "/work/indianbynature/ibnmenudesign_printwbleed_update11_ibn1.webp",
      "/work/indianbynature/ibnmenudesign_printwbleed_update11_ibn2.webp",
    ],
    date: "2025-09-27",
    category: "Menus",
  },
  {
    id: "mannis",
    title: "Mannis",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    thumbnail: "/clients/mannis-logo.webp",
    images: [
      "/work/mannis/mannis_visualidentity-01.webp",
      "/work/mannis/mannis_visualidentity-02.webp",
      "/work/mannis/mannis_visualidentity-03.webp",
      "/work/mannis/mannis_visualidentity-04.webp",
      "/work/mannis/mannis_visualidentity-05.webp",
      "/work/mannis/mannis_visualidentity-06.webp",
      "/work/mannis/mannis_visualidentity-07.webp",
      "/work/mannis/mannis_visualidentity-08.webp",
    ],
    date: "2025-03-11",
    category: "Branding",
  },
  {
    id: "momohub",
    title: "Momo Hub",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    thumbnail: "/clients/mannis-logo.webp",
    images: [
      "/work/momohub/momohub_businesscard_u3-01.jpg",
      "/work/momohub/momohub_businesscard_u3-02.jpg",
    ],
    date: "2025-04-21",
    category: "Media",
  },
   {
    id: "ourhq",
    title: "Our HQ",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    thumbnail: "/clients/ourhq-logo.webp",
    images: [
      "/work/ourhq/ourhq-post1.webp",
      "/work/ourhq/ourhq-post2.webp",
    ],
    date: "2025-12-22",
    category: "Media",
  },
   {
    id: "pulp",
    title: "Pulp",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    thumbnail: "/clients/pulp-logo.webp",
    images: [
      "/work/pulp/pulpmenudesign-02.webp",
    
    ],
    date: "2025-10-11",
    category: "Menu",
  },
   {
    id: "saladclub",
    title: "Salad Club",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    thumbnail: "/clients/saladclub-logo.webp",
    images: [
      "/work/saladclub/saladclub-logo-prototype-01.webp",
      "/work/saladclub/saladclub-logo-prototype-02.webp",
      "/work/saladclub/saladclub-logo-prototype-03.webp",
      "/work/saladclub/saladclub-logo-prototype-04.webp",
      "/work/saladclub/saladclub-logo-prototype-05.webp",
      "/work/saladclub/saladclub-logo-prototype-06.webp",
    
    ],
    date: "2025-12-12",
    category: "Branding",
  },
]

