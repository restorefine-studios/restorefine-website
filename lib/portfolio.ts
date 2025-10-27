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
  // {
  //   id: "digital-campaign",
  //   title: "Digital Marketing Campaign",
  //   description:
  //     "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  //   thumbnail: "/placeholder.svg?height=600&width=900",
  //   images: [
  //     "/placeholder.svg?height=900&width=1600",
  //     "/placeholder.svg?height=900&width=1600",
  //   ],
  //   date: "2023-12-20",
  //   category: "Media",
  // },
  // {
  //   id: "mobile-app",
  //   title: "Mobile App Design",
  //   description:
  //     "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  //   thumbnail: "/placeholder.svg?height=600&width=900",
  //   images: [
  //     "/placeholder.svg?height=900&width=1600",
  //     "/placeholder.svg?height=900&width=1600",
  //   ],
  //   date: "2023-12-10",
  //   category: "Web & Mobile",
  // },
  // {
  //   id: "website-redesign",
  //   title: "Corporate Website Redesign",
  //   description:
  //     "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  //   thumbnail: "/placeholder.svg?height=600&width=900",
  //   images: [
  //     "/placeholder.svg?height=900&width=1600",
  //     "/placeholder.svg?height=900&width=1600",
  //   ],
  //   date: "2023-11-30",
  //   category: "Web & Mobile",
  // },
];
