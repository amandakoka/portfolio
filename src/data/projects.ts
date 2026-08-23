import artWithAmanda from "../assets/images/artwithamanda.png";
import saveTears from "../assets/images/savetears.png";
import java from "../assets/images/java.png";
import bookWish from "../assets/images/bookwish.png";

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
        image: java,
        name: "Java Board Game Application",
        description: "Based on Snakes and Ladders",
        technologies: ["Java", "Spring Boot", "OOP", "Design Patterns", "Clean Architecture"],
        liveSite: "https://github.com/amandakoka/java-board-game-showcase"
    },
    {
        image: artWithAmanda,
        name: "Art With Amanda",
        description: "Full-Stack E-commerce Website for my art",
        technologies: ["Django", "Python", "Stripe", "AWS S3", "Bootstrap", "PostgreSQL"],
        liveSite: "https://artwithamanda.onrender.com"
    },
    {
        image: bookWish,
        name: "BookWish",
        description: "Flask Web Application for Book Wishlist Management",
        technologies: ["Flask", "Python", "Bootstrap", "CRUD"],
        liveSite: "https://bookwish-kq4j.onrender.com"
    },
];