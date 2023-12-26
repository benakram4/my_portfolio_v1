import projects from "./projectsList.js";
import Project from "@/components/Projects/Project";

export default function Projects() {
  return (
    <div id="projects" className="container my-24 mx-auto md:px-6">
      <section className="mb-32 text-center">
        <h2 className="mb-12 pb-4 text-center text-3xl font-bold text-stone-900 dark:text-stone-100">
          Projects I Am Proud Of
        </h2>
        <div className="grid gap-6 lg:grid-cols-3 xl:gap-x-12">
          {projects.map((project) => (
            <Project
              title={project.title}
              description={project.description}
              imgSrc={project.image}
              tags={project.tags}
              key={project.title}
              repo={project?.repo}
              live={project?.live}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
