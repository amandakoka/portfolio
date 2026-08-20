import type { Project }  from "../data/projects";

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <section className=" text-center rounded overflow-hidden shadow-lg mb-6">
      <a
        href={project.liveSite}
        target="_blank"
        rel="noopener noreferrer"
        className="font-bold"
      >
        <img className="w-full" src={project.image} alt={project.name}></img>
      </a>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{project.name}</div>
        <p className="text-gray-700 text-base">{project.description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        {project.technologies.map((tech) => (
          <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {tech}
          </span>
        ))}
      </div>
      <div className="px-6 py-4">
        <p className="text-gray-700 text-sm">
          Live Site:{" "}
          <a
            href={project.liveSite}
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold"
          >
            Here
          </a>
        </p>{" "}
      </div>
    </section>
  );
}

export default ProjectCard;
