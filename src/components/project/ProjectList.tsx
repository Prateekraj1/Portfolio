import ProjectCard from "./ProjectCard";
import { projects } from "@/constants/projectsLinks";
const ProjectList = () => {
  return (
    <div className="flex flex-wrap my-20 gap-16 block-container">
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  );
};

export default ProjectList;
