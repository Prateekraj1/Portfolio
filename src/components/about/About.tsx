import CTA from "../Cta";
import AboutHero from "./AboutHero";
import ExperienceSection from "./Experience";
import ResumeViewer from "./ResumeViewer";
import SkillsSection from "./SkillSection";

const About = () => (
  <section className='max-w-5xl mx-auto sm:p-16 pb-12 !pt-[126px] px-8 min-h-[calc(100vh-80px)]'>
    <AboutHero />
    <SkillsSection />
    <ExperienceSection />
    <ResumeViewer />
    <hr className='border-slate-200' />
    <CTA />
  </section>
);

export default About;
