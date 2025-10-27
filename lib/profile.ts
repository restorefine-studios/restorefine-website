import type { StaticImageData } from "next/image";
import rohit from "@/public/staffpotrait_rohit_ii.webp";
import harpreet from "@/public/staffportrait_hapreet.webp";

export interface TeamMember {
  name: string;
  position: string;
  image: StaticImageData;
  profile: string;
  bio: string;
}

export const teamMembers: TeamMember[] = [
  {
    name: "Rohit Archaya",
    position: "Head Of Sales",
    image: rohit,
    profile: "https://www.linkedin.com/in/acharya-rohit/",
    bio: "Hi, I'm Rohit Acharya, foodie by passion and tech geek by profession. I don't just love trying new food spots; I critique them like a seasoned inspector (thank my 6+ years in hospitality for that). From uniforms to menus, websites to social media, I can't help but spot what's working and what's not.\n\nAs cofounder of RestoRefine Studios, I manage operations, project management, sales, client relationships, and lead the tech team. It's all part of the dynamic life of a startup.\n\nOn the academic side, I hold a Bachelor's in Engineering and a Master's in Business Management from the University of Strathclyde, Glasgow. With experience in hospitality, sales, leadership, and advisory roles, I'm passionate about helping businesses grow and thrive.\n\nCurious or just hungry for a good chat? Feel free to reach out!",
  },
  {
    name: "Harpreet Singh",
    position: "Creative Director",
    image: harpreet,
    profile: "https://www.linkedin.com/in/harpreet00/",
    bio: "Hi, I'm Harpreet Singh, a Computer Science graduate who swapped lines of code for the pursuit of a bigger dream—building something extraordinary that truly makes an impact. For me, being an entrepreneur isn't just about running a business, it's about embracing a purpose and creating things that make people stop, think, and say, 'Wow.'\n\nWith over seven years of photography experience, I've learned to see the world through a unique lens. It's not just about capturing moments but telling stories and offering fresh perspectives. These skills shape how I approach every project and vision I work on, combining creativity with precision to deliver something meaningful.\n\nI believe in chasing bold ideas, taking risks, and turning passion into results that make a difference. For me, it's all about creating work that inspires and brings value, one step at a time.",
  },
];
