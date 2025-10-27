import globe from "@/public/services/branding/globe.webp";
import pulse from "@/public/services/branding/iterationschart.svg";
import avatar from "@/public/services/branding/commsavatar.svg";
import commstext from "@/public/services/branding/commstext.svg";

export const restoBrandingExpectationContent = {
  title: "And These Inspiring\nBenefits Await You",
  subtitle: "To turn your ideas into impactful solutions",
  partnerCard: {
    title: "Partner with Creativity",
    gradient: {
      from: "#ff0000",
      to: "#a90909",
    },
    backgroundColor: "#ae0404",
  },
  typewriterPhrases: ["Transparent Communication & Collaboration", "Holistic Brand Strategy Implementation", "User Experience Research"],
  buildingCard: {
    image: globe,
    title: "Building",
    subtitle: "For Future",
  },
  supportCard: {
    avatar: avatar,
    textImage: commstext,
    title: "Reliable 24h Support",
    subtitle: "This means just as much to us, reach us anytime",
  },
  iterationsCard: {
    image: pulse,
    title: "Iterations",
    subtitle: "As many needed to achieve excellence",
  },
  services: ["Product Design", "Social Media", "Landing Pages", "Logos", "Brand Guidelines", "Icons", "Branding", "Slide Decks", "Visual Identity", "Restaurant Menu Design"],
};
