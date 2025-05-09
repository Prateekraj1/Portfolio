"use client";
import { skills } from "@/constants/skills";
import { motion } from "framer-motion";

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

      <div className="mt-16 flex flex-wrap gap-12 max-[575px]:justify-center">
        {skills.map((skill: SkillProps) => (
          <div key={skill.name} className="flex flex-col items-center space-y-2">
            <motion.div
              className="relative w-20 h-20 [perspective:500px]"
              initial="rest"
              whileHover="hover"
              animate="rest"
              transition={{ type: "spring", stiffness: 250, damping: 30 }}
            >
              <div
                className={`btn-back absolute z-[-1] w-[inherit] h-[inherit] inset-0 shadow-[16px_0_40px_#e4e4e4] rounded-xl btn-back-${skill.type}`}
                style={{
                  transformStyle: "preserve-3d",
                  transformOrigin: "bottom right",
                }}
              />
              <motion.div
                className="btn-front absolute z-[1] w-[inherit] h-[inherit] bg-[#ffffff33] backdrop-blur-[20px] [-webkit-backdrop-filter: blur(20px)] overflow-hidden inset-0 rounded-xl flex justify-center items-center"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
              >
                <skill.imageUrl />
              </motion.div>
            </motion.div>
            <span className="text-sm text-center font-medium text-gray-800">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
