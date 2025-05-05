"use client";
import { motion } from "framer-motion";
import { skills } from "@/constants/index";

type SkillProps = {
  name: string;
  imageUrl: any;
  type: string;
};

const SkillsSection = () => {
  return (
    <div className="block-container py-10 flex flex-col">
      <h3 className="font-semibold sm:text-3xl text-xl font-poppins">
        My Skills
      </h3>

      <div className="mt-16 flex flex-wrap gap-12">
        {skills.map((skill: SkillProps) => (
          <motion.div
            key={skill.name}
            className="relative w-20 h-20 [perspective:500px]"
            initial="rest"
            whileHover="hover"
            animate="rest"
            transition={{ type: "spring", stiffness: 250, damping: 30 }}
          >
            <div
              className={`btn-back absolute z-[-1] w-[inherit] h-[inherit] inset-0 shadow-[16px_0_40px_#e4e4e4] rounded-xl btn-back-${skill.type}`}
              style={{ transformStyle: "preserve-3d", transformOrigin: "bottom right" }}
            />
            <motion.div
              className="btn-front absolute z-[1] w-[inherit] h-[inherit] bg-[#ffffff33] backdrop-blur-[20px] [-webkit-backdrop-filter: blur(20px)] overflow-hidden inset-0 rounded-xl flex justify-center items-center"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
            >
              <img
                src={skill.imageUrl?.src}
                alt={skill.name}
                className="w-1/2 h-1/2 object-contain"
              />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
