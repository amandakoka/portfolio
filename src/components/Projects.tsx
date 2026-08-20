import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <section>
      <div className="font-bold text-3xl mb-6">Projects</div>
      <div>
        {projects.map((project) => (
          <ProjectCard project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
