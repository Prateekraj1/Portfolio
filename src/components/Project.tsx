import { projects } from "../constants";
import { arrow } from "../assets/icons";
import Link from "next/link";
import Image from "next/image";
import CTA from "./Cta";

const Projects = () => {
  return (
    <section className="max-w-5xl mx-auto sm:p-16 pb-12 !pt-[126px] px-8 min-h-[calc(100vh-80px)]">
      <h1 className="sm:text-5xl text-3xl font-semibold sm:leading-snug font-poppins">
        My{" "}
        <span className="bg-gradient-to-r from-[#00c6ff] to-[#0072ff] bg-clip-text text-transparent drop-shadow font-semibold">
          Projects
        </span>
      </h1>

      <p className="text-slate-500 mt-2 leading-relaxed">
        Over the years, I've built several projects that reflect my growth and
        curiosity as a developer. These are the ones I’m most proud of — each
        taught me something new and pushed my limits. If any of them catch your
        interest, I’d love to hear your thoughts or feedback. I’m always open to
        collaboration and new ideas for improvement.
      </p>

      <div className="flex flex-wrap my-20 gap-16">
        {projects.map((project) => (
          <div className="lg:w-[400px] w-full" key={project.name}>
            <div className="relative transition-[250ms] [perspective:500px] w-12 h-12">
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={project.iconUrl}
                  alt="threads"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>

            <div className="mt-5 flex flex-col">
              <h4 className="text-2xl font-poppins font-semibold">
                {project.name}
              </h4>

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
                <Image
                  src={arrow}
                  alt="arrow"
                  className="w-4 h-4 object-contain"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr className="border-slate-200" />

      <CTA />
    </section>
  );
};

export default Projects;
