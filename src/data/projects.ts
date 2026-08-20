import artWithAmanda from "../assets/images/artwithamanda.png";
import saveTears from "../assets/images/savetears.png";

export interface Project {
  image: string;
  name: string;
  description: string;
  technologies: string[];
  liveSite: string;
}

export const projects: Project[] = [
    {
        image: saveTears,
        name: "Save Tears UK",
        description: "Smart Water & Greywater Monitoring Platform ",
        technologies: ["FastAPI", "Python", "Vue.js", "SQLite", "ThingSpeak"],
        liveSite: "https://save-tears-uk-frontend.onrender.com/"
    },
    {
        image: artWithAmanda,
        name: "Art With Amanda",
        description: "Full-Stack E-commerce Website for my art",
        technologies: ["Django", "Python", "Stripe", "AWS S3", "Bootstrap", "PostgreSQL"],
        liveSite: "https://artwithamanda.onrender.com"
    },
];