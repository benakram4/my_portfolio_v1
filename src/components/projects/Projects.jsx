import projects from "./projectsList";
import Project from "@/components/projects/Project";

export default function Projects() {
  return (
    <div className="container my-24 mx-auto md:px-6">
      <section className="mb-32 text-center">
        <h2 className="mb-12 pb-4 text-center text-3xl font-bold">
          Projects we are proud of
        </h2>

        {projects.map((project) => (
          <Project
            title={project.title}
            description={project.description}
            imgSrc={project.image}
            tags={project.tags}
            key={project.title}
          />
        ))}
      </section>
    </div>
  );
}
