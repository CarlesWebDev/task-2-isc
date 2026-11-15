import { motion } from "framer-motion";
import { skills } from "../data/skills";

export default function Skills() {
  const safeSkills = Array.isArray(skills) ? skills : [];
  const allSkills = safeSkills.flatMap((group) => group?.items || []);
  const half = Math.ceil(allSkills.length / 2);
  const row1 = allSkills.slice(0, half);
  const row2 = allSkills.slice(half);

  const duplicatedRow1 = [...row1, ...row1, ...row1];
  const duplicatedRow2 = [...row2, ...row2, ...row2];

  return (
    <section id="skills" className="py-20 md:py-32 overflow-hidden border-b border-gray-200 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-6 mb-12 md:mb-16 text-center">
        <h2 data-aos="fade-down" className="font-mono text-xs md:text-sm uppercase tracking-widest text-green-600 dark:text-[#c8ff3d] mb-3 md:mb-4">
          Tech Stack
        </h2>
        <h3 data-aos="fade-down" className="font-display text-4xl md:text-5xl lg:text-6xl text-gray-900 dark:text-white tracking-tight">
          Ekosistem & <br className="block md:hidden" /> Lingkungan Kerja.
        </h3>
      </div>

      <div className="relative flex flex-col gap-4 md:gap-6 w-full max-w-[100vw] mx-auto overflow-hidden mask-image-fade">
        <div className="absolute inset-y-0 left-0 w-1/6 md:w-1/4 bg-gradient-to-r from-gray-50 dark:from-[#0a0a0a] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-1/6 md:w-1/4 bg-gradient-to-l from-gray-50 dark:from-[#0a0a0a] to-transparent z-10 pointer-events-none"></div>

        <motion.div className="flex gap-4 md:gap-6 w-max" animate={{ x: ["0%", "-50%"] }} transition={{ ease: "linear", duration: 45, repeat: Infinity }}>
          {duplicatedRow1.map((skill, index) => (
            <div key={`row1-${skill?.name || index}-${index}`} className="flex items-center gap-2 md:gap-3 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 px-4 py-3 md:px-6 md:py-4 rounded-xl hover:bg-gray-100 dark:hover:bg-white/10 transition-colors shadow-sm dark:shadow-none">
              <span className="text-xl md:text-3xl text-gray-700 dark:text-gray-300">{skill?.icon}</span>
              <span className="font-mono text-xs md:text-sm text-gray-700 dark:text-gray-300 whitespace-nowrap">{skill?.name}</span>
            </div>
          ))}
        </motion.div>

        <motion.div className="flex gap-4 md:gap-6 w-max" animate={{ x: ["-50%", "0%"] }} transition={{ ease: "linear", duration: 45, repeat: Infinity }}>
          {duplicatedRow2.map((skill, index) => (
            <div key={`row2-${skill?.name || index}-${index}`} className="flex items-center gap-2 md:gap-3 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 px-4 py-3 md:px-6 md:py-4 rounded-xl hover:bg-gray-100 dark:hover:bg-white/10 transition-colors shadow-sm dark:shadow-none">
              <span className="text-xl md:text-3xl text-gray-700 dark:text-gray-300">{skill?.icon}</span>
              <span className="font-mono text-xs md:text-sm text-gray-700 dark:text-gray-300 whitespace-nowrap">{skill?.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}