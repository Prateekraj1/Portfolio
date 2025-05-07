import Link from "next/link";
import { Arrow, Github } from "../icons";
import { FC } from "react";

type ProjectProps = {
  name: string;
  description: string[];
  iconUrl: FC<{ className?: string }>;
  theme: string;
  live_link?: string;
  github_link?: string;
};

const ProjectCard = ({ project }: { project: ProjectProps }) => {
  return (
    <div className="lg:w-[400px] w-full bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 p-6 space-y-4">
      {/* Icon Section */}
      <div className="relative w-11 h-11 [perspective:500px]">
        <div
          className={`btn-back absolute inset-0 rounded-xl ${project.theme}`}
        />
        <div className="btn-front relative z-10 flex items-center justify-center w-full h-full rounded-xl bg-white shadow-inner">
          <project.iconUrl />
        </div>
      </div>

      {/* Content Section */}
      <div className="space-y-2">
        <h4 className="text-xl font-semibold text-gray-900">{project.name}</h4>
        <ol className="list-disc ml-5 text-[15px] text-slate-600 space-y-1">
          {project.description.map((item, index) => (
            <li key={index} className="text-justify leading-relaxed">
              {item}
            </li>
          ))}
        </ol>
      </div>

      {/* Links Section */}
      <div className="flex items-center gap-5 pt-2 text-sm font-medium justify-between">
        {project.live_link && (
          <Link
            href={project.live_link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-blue-600 hover:text-blue-700 transition-colors"
          >
            <div className="flex gap-[12px] items-center justify-center">
              <span className="w-[5px] h-[5px] rounded-[50%] bg-red-600 animate-ping" />
              Live
            </div>
          </Link>
        )}

        {project.github_link && (
          <Link
            href={project.github_link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-gray-700 hover:text-black transition-colors"
          >
            <Github className="w-4 h-4" />
            <span>GitHub</span>
          </Link>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
