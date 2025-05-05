import CTA from "../Cta";
import ProjectList from "./ProjectList";

const Project = () => (
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

    <ProjectList />

    <hr className="border-slate-200" />

    <CTA />
  </section>
);

export default Project;
