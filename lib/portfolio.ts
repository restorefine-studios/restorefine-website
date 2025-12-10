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
]

