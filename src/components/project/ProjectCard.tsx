import Link from "next/link";
import Image from "next/image";
import { Arrow } from "../icons";

type ProjectProps = {
  name: string;
  description: string[];
  iconUrl: any;
  theme: string;
  link: string;
};

const ProjectCard = ({ project }: { project: ProjectProps }) => {
  return (
    <div className="lg:w-[400px] w-full" key={project.name}>
      <div className="relative transition-[250ms] [perspective:500px] w-12 h-12">
        <div className={`btn-back rounded-xl ${project.theme}`} />
        <div className="btn-front rounded-xl flex justify-center items-center">
          <img
            src={project.iconUrl?.src}
            alt="project-icon"
            className="w-1/2 h-1/2 object-contain"
          />
        </div>
      </div>

      <div className="mt-5 flex flex-col">
        <h4 className="text-2xl font-poppins font-semibold">{project.name}</h4>

        {project.description.map((item, index) => (
          <p key={index} className="mt-2 text-slate-500">
            {item}
          </p>
        ))}
        <div className="mt-5 flex items-center gap-2 font-poppins">
          <Link
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-blue-600"
          >
            Live Link
          </Link>
          <Arrow className="w-4 h-4 text-blue-600" />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
