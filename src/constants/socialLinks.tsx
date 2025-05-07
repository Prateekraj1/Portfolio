import { ContactIcon, Github, LinkedinIcon } from "@/components/icons";
import { FC } from "react";

type socialLinks = {
  socialIcon: FC<{ className?: string }>;
  name: string;
  link: string;
};
export const socialLinks: socialLinks[] = [
  {
    name: "Contact",
    socialIcon: () => <ContactIcon className="w-6 h-6 object-contain" />,
    link: "/contact",
  },
  {
    name: "GitHub",
    socialIcon: () => <Github className="w-6 h-6 object-contain" />,
    link: "https://github.com/Prateekraj1",
  },
  {
    name: "LinkedIn",
    socialIcon: () => <LinkedinIcon className="w-6 h-6 object-contain" />,
    link: "https://www.linkedin.com/in/prateek-raj-729872212/",
  },
];
