import {
  Css,
  Express,
  Git,
  Github,
  Html,
  Javascript,
  Mongodb,
  Motion,
  Nextjs,
  Nodejs,
  React,
  Redux,
  Tailwindcss,
  Typescript,
} from "@/components/icons";

import { FC } from "react";
type Skill = {
  imageUrl: FC<{ className?: string }>;
  name: string;
  type:
    | "Frontend"
    | "Backend"
    | "Database"
    | "Version Control"
    | "Animation"
    | "State Management";
};
export const skills: Skill[] = [
  {
    imageUrl: () => <Css className="w-1/2 h-1/2 object-contain" >,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: () => <Express className="w-1/2 h-1/2 object-contain" />,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: () => <Git className="w-1/2 h-1/2 object-contain" />,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: () => <Github className="w-1/2 h-1/2 object-contain" />,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: () => <Html className="w-1/2 h-1/2 object-contain" />,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: () => <Javascript className="w-1/2 h-1/2 object-contain" />,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: () => <Mongodb className="w-1/2 h-1/2 object-contain" />,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: () => <Motion className="w-1/2 h-1/2 object-contain" />,
    name: "Motion",
    type: "Animation",
  },
  {
    imageUrl: () => <Nextjs className="w-1/2 h-1/2 object-contain" />,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: () => <Nodejs className="w-1/2 h-1/2 object-contain" />,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: () => <React className="w-1/2 h-1/2 object-contain" />,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: () => <Redux className="w-1/2 h-1/2 object-contain" />,
    name: "Redux",
    type: "State Management",
  },
  {
    imageUrl: () => <Tailwindcss className="w-1/2 h-1/2 object-contain" />,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: () => <Typescript className="w-1/2 h-1/2 object-contain" />,
    name: "TypeScript",
    type: "Frontend",
  },
];
