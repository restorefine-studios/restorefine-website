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
    id: "digital-campaign",
    title: "Social Media Campaign",
    description: "A comprehensive digital marketing strategy featuring engaging content, eye-catching visuals, and data-driven campaigns that amplified brand presence across all social platforms.",
    thumbnail: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=900&h=600&fit=crop",
    images: ["https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1600&h=900&fit=crop", "https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?w=1600&h=900&fit=crop"],
    date: "2023-12-20",
    category: "Media",
  },
  {
    id: "restaurant-menu-design",
    title: "Luxury Restaurant Menu",
    description: "An elegant menu design combining traditional aesthetics with modern minimalism, crafted to enhance the dining experience and showcase culinary excellence.",
    thumbnail: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=900&h=600&fit=crop",
    images: ["https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600&h=900&fit=crop", "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1600&h=900&fit=crop"],
    date: "2023-12-15",
    category: "Menus",
  },
  {
    id: "mobile-app",
    title: "Restaurant Booking App",
    description: "A seamless mobile experience that makes table reservations effortless, with intuitive navigation, real-time availability, and personalized recommendations.",
    thumbnail: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=900&h=600&fit=crop",
    images: ["https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1600&h=900&fit=crop", "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1600&h=900&fit=crop"],
    date: "2023-12-10",
    category: "Web & Mobile",
  },
  {
    id: "website-redesign",
    title: "Fine Dining Website",
    description: "A sophisticated web presence featuring stunning photography, smooth animations, and an immersive user experience that captures the essence of luxury dining.",
    thumbnail: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=900&h=600&fit=crop",
    images: ["https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1600&h=900&fit=crop", "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1600&h=900&fit=crop"],
    date: "2023-11-30",
    category: "Web & Mobile",
  },
];
