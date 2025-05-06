const AboutHero = () => (
  <>
    <h1 className="sm:text-5xl text-3xl font-semibold sm:leading-snug font-poppins">
      Hello, I'm{" "}
      <span className="bg-gradient-to-r from-[#00c6ff] to-[#0072ff] bg-clip-text text-transparent font-semibold drop-shadow">
        Prateek Raj
      </span>{" "}
      👋
    </h1>
    <div className="mt-5 flex flex-col gap-3 text-slate-500">
      <p className="text-justify text-lg font-medium">
      Software Engineer based in India, passionate about building scalable web applications and delivering high-impact features. Experienced in full-stack development with a strong foundation in modern frameworks like Next.js, React, and Node.js. Proficient in implementing real-time systems, search optimization with Elasticsearch, and cloud-ready architectures. Enthusiastic about technical problem-solving and continuous learning through hands-on projects and professional experience.
      </p>
    </div>
  </>
);
export default AboutHero;
