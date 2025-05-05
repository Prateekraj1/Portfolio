import ProjectCard from "./ProjectCard";
import { projects } from "@/constants/index";
type ProjectProps = {
  name: string;
  description: string[];
  iconUrl: string;
  theme: string;
  link: string;
};
const ProjectList = () => {
  return (
    <div className="flex flex-wrap my-20 gap-16 block-container">
      {projects.map((project: ProjectProps) => (
        <ProjectCard key={project.name} project={project} />
      ))}
    </div>
  );
};

export default ProjectList;
