"use client";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { experiences } from "@/constants";
import "react-vertical-timeline-component/style.min.css";

const ExperienceSection = () => (
  <div className='py-16'>
    <h3 className='font-semibold sm:text-3xl text-xl font-poppins'>Work Experience.</h3>
    <div className='mt-5 text-slate-500'>
      <p>
        I've worked with all sorts of companies, leveling up my skills and teaming
        up with smart people. Here's the rundown:
      </p>
    </div>
    <div className='mt-12'>
      <VerticalTimeline>
        {experiences.map((experience) => (
          <VerticalTimelineElement
            key={experience.company_name}
            date={experience.date}
            iconStyle={{ background: experience.iconBg }}
            icon={<div className='flex justify-center items-center w-full h-full' />}
            contentStyle={{
              borderBottom: "8px solid " + experience.iconBg,
              boxShadow: "none",
            }}
          >
            <div>
              <h3 className='text-black text-xl font-poppins font-semibold'>
                {experience.title}
              </h3>
              <p className='text-black-500 font-medium text-base' style={{ margin: 0 }}>
                {experience.company_name}
              </p>
            </div>
            <ul className='my-5 list-disc ml-5 space-y-2'>
              {experience.points.map((point, index) => (
                <li
                  key={`experience-point-${index}`}
                  className='text-black-500/50 font-normal pl-1 text-sm'
                >
                  {point}
                </li>
              ))}
            </ul>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  </div>
);
export default ExperienceSection;
