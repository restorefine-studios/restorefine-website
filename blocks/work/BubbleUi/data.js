// Responsive image size based on screen width
const w = typeof window !== "undefined" && window.innerWidth < 768 ? 150 : 150;

export const data = [
  // Branding Projects
  {
    id: "masala",
    category: "Branding",
    element: <img key="masala" src="/work/masala/thumbnail.webp" width={w} height={w} alt="Masala Moves By Luna Shree" style={{ borderRadius: "50%", objectFit: "cover", aspectRatio: "1/1" }} />,
  },
  {
    id: "quiknest",
    category: "Branding",
    element: <img key="quiknest" src="/work/quiknest/thumbnail.webp" width={w} height={w} alt="Quiknest Logo Design" style={{ borderRadius: "50%", objectFit: "cover", aspectRatio: "1/1" }} />,
  },
  {
    id: "starbucks",
    category: "Branding",
    element: <img key="starbucks" src="https://logo.clearbit.com/starbucks.com" width={w} height={w} alt="Starbucks" style={{ borderRadius: "50%", objectFit: "cover" }} />,
  },
  {
    id: "mcdonalds",
    category: "Branding",
    element: <img key="mcdonalds" src="https://logo.clearbit.com/mcdonalds.com" width={w} height={w} alt="McDonald's" style={{ borderRadius: "50%", objectFit: "cover" }} />,
  },
  {
    id: "subway",
    category: "Branding",
    element: <img key="subway" src="https://logo.clearbit.com/subway.com" width={w} height={w} alt="Subway" style={{ borderRadius: "50%", objectFit: "cover" }} />,
  },
  {
    id: "kfc",
    category: "Branding",
    element: <img key="kfc" src="https://logo.clearbit.com/kfc.com" width={w} height={w} alt="KFC" style={{ borderRadius: "50%", objectFit: "cover" }} />,
  },
  {
    id: "burgerking",
    category: "Branding",
    element: <img key="burgerking" src="https://logo.clearbit.com/bk.com" width={w} height={w} alt="Burger King" style={{ borderRadius: "50%", objectFit: "cover" }} />,
  },

  // Media Projects
  {
    id: "digital-campaign",
    category: "Media",
    element: <img key="digital-campaign" src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=80&h=80&fit=crop" width={w} height={w} alt="Social Media Campaign" style={{ borderRadius: "50%", objectFit: "cover" }} />,
  },
  {
    id: "netflix",
    category: "Media",
    element: <img key="netflix" src="https://logo.clearbit.com/netflix.com" width={w} height={w} alt="Netflix" style={{ borderRadius: "50%", objectFit: "cover" }} />,
  },
  {
    id: "google",
    category: "Media",
    element: <img key="google" src="https://logo.clearbit.com/google.com" width={w} height={w} alt="Google" style={{ borderRadius: "50%", objectFit: "cover" }} />,
  },

  // Menus
  {
    id: "restaurant-menu",
    category: "Menus",
    element: <img key="restaurant-menu" src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=80&h=80&fit=crop" width={w} height={w} alt="Luxury Restaurant Menu" style={{ borderRadius: "50%", objectFit: "cover" }} />,
  },
  {
    id: "pizzahut",
    category: "Menus",
    element: <img key="pizzahut" src="https://logo.clearbit.com/pizzahut.com" width={w} height={w} alt="Pizza Hut" style={{ borderRadius: "50%", objectFit: "cover" }} />,
  },
  {
    id: "dominos",
    category: "Menus",
    element: <img key="dominos" src="https://logo.clearbit.com/dominos.com" width={w} height={w} alt="Domino's" style={{ borderRadius: "50%", objectFit: "cover" }} />,
  },
  {
    id: "chipotle",
    category: "Menus",
    element: <img key="chipotle" src="https://logo.clearbit.com/chipotle.com" width={w} height={w} alt="Chipotle" style={{ borderRadius: "50%", objectFit: "cover" }} />,
  },
  {
    id: "tacobell",
    category: "Menus",
    element: <img key="tacobell" src="https://logo.clearbit.com/tacobell.com" width={w} height={w} alt="Taco Bell" style={{ borderRadius: "50%", objectFit: "cover" }} />,
  },
  {
    id: "dunkindonuts",
    category: "Menus",
    element: <img key="dunkindonuts" src="https://logo.clearbit.com/dunkindonuts.com" width={w} height={w} alt="Dunkin' Donuts" style={{ borderRadius: "50%", objectFit: "cover" }} />,
  },

  // Web & Mobile
  {
    id: "mobile-app",
    category: "Web & Mobile",
    element: <img key="mobile-app" src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=80&h=80&fit=crop" width={w} height={w} alt="Restaurant Booking App" style={{ borderRadius: "50%", objectFit: "cover" }} />,
  },
  {
    id: "website-redesign",
    category: "Web & Mobile",
    element: <img key="website-redesign" src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=80&h=80&fit=crop" width={w} height={w} alt="Fine Dining Website" style={{ borderRadius: "50%", objectFit: "cover" }} />,
  },
  {
    id: "stripe",
    category: "Web & Mobile",
    element: <img key="stripe" src="https://logo.clearbit.com/stripe.com" width={w} height={w} alt="Stripe" style={{ borderRadius: "50%", objectFit: "cover" }} />,
  },
  {
    id: "dropbox",
    category: "Web & Mobile",
    element: <img key="dropbox" src="https://logo.clearbit.com/dropbox.com" width={w} height={w} alt="Dropbox" style={{ borderRadius: "50%", objectFit: "cover" }} />,
  },
  {
    id: "fedex",
    category: "Web & Mobile",
    element: <img key="fedex" src="https://logo.clearbit.com/fedex.com" width={w} height={w} alt="FedEx" style={{ borderRadius: "50%", objectFit: "cover" }} />,
  },
];
