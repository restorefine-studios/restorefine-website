import React from "react";
import Image from "next/image";

interface ClientData {
  id: string;
  category: string;
  element: React.ReactElement;
}

// Responsive image size based on screen width
const w = typeof window !== "undefined" && window.innerWidth < 768 ? 150 : 150;

export const data: ClientData[] = [
  // Branding Projects
  {
    id: "masala",
    category: "Branding",
    element: <Image key="masala" src="/clients/masala-moves-logo.svg" width={w} height={w} alt="masala" style={{ borderRadius: "50%", objectFit: "cover", aspectRatio: "1/1" }} />,
  },
  {
    id: "quiknest",
    category: "Branding",
    element: <Image key="quiknest" src="/clients/quiknest-logo.svg" width={w} height={w} alt="quiknest" style={{ borderRadius: "50%", objectFit: "cover", aspectRatio: "1/1" }} />,
  },
  {
    id: "bigbites",
    category: "Menus",
    element: <Image key="bigbites" src="/clients/big-bites-logo.webp" width={w} height={w} alt="bigbites" style={{ borderRadius: "50%", objectFit: "cover" }} />,
  },
  {
    id: "everestinn",
    category: "Menus",
    element: <Image key="everestinn" src="/clients/everest-inn-logo.svg" width={w} height={w} alt="everestinn" style={{ borderRadius: "50%", objectFit: "cover" }} />,
  },
  {
    id: "firangi",
    category: "Menus",
    element: <Image key="firangi" src="/clients/firangi-logo.svg" width={w} height={w} alt="firangi" style={{ borderRadius: "50%", objectFit: "cover" }} />,
  },
  {
    id: "gurhkaexpress",
    category: "Menus",
    element: <Image key="gurhkaexpress" src="/clients/gurhka-express-logo.png" width={w} height={w} alt="gurhkaexpress" style={{ borderRadius: "50%", objectFit: "cover" }} />,
  },
  {
    id: "himalayandineinn",
    category: "Menus",
    element: <Image key="himalayandineinn" src="/clients/himalayan-dine-in-logo-1.png" width={w} height={w} alt="himalayandineinn" style={{ borderRadius: "50%", objectFit: "cover" }} />,
  },

  // Media Projects
  {
    id: "indianbynature",
    category: "Menus",
    element: <Image key="indianbynature" src="/clients/indian-by-nature-logo.svg" width={w} height={w} alt="indianbynature" style={{ borderRadius: "50%", objectFit: "cover" }} />,
  },
  {
    id: "mannis",
    category: "Branding",
    element: <Image key="mannis" src="/clients/mannis-logo.svg" width={w} height={w} alt="mannis" style={{ borderRadius: "50%", objectFit: "cover" }} />,
  },
  {
    id: "momohub",
    category: "Media",
    element: <Image key="momohub" src="/clients/momo-hub-logo.svg" width={w} height={w} alt="momohub" style={{ borderRadius: "50%", objectFit: "cover" }} />,
  },

  // Menus
  {
    id: "ourhq",
    category: "Media",
    element: <Image key="ourhq" src="/clients/our-hq-logo.svg" width={w} height={w} alt="ourhq" style={{ borderRadius: "50%", objectFit: "cover" }} />,
  },
  {
    id: "itspadel",
    category: "Web & Mobile",
    element: <Image key="itspadel" src="/clients/itspadel-logo.svg" width={w} height={w} alt="itspadel" style={{ borderRadius: "50%", objectFit: "cover" }} />,
  },
  {
    id: "pulp",
    category: "Menus",
    element: <Image key="pulp" src="/clients/pulp-logo.svg" width={w} height={w} alt="pulp" style={{ borderRadius: "50%", objectFit: "cover" }} />,
  },
  {
    id: "saladclub",
    category: "Branding",
    element: <Image key="saladclub" src="/clients/salad-club-logo.svg" width={w} height={w} alt="saladclub" style={{ borderRadius: "50%", objectFit: "cover" }} />,
  },
  {
    id: "spudkingz",
    category: "Menus",
    element: <Image key="spudkingz" src="/clients/spud-kingz-logo.svg" width={w} height={w} alt="spudkingz" style={{ borderRadius: "50%", objectFit: "cover" }} />,
  },
  {
    id: "yewtreeinn",
    category: "Menus",
    element: <Image key="yewtreeinn" src="/clients/yew-tree-inn-logo.svg" width={w} height={w} alt="yewtreeinn" style={{ borderRadius: "50%", objectFit: "cover" }} />,
  },

  
];
