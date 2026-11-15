import { motion } from "framer-motion";
import { experiences } from "../data/experience";

export default function Experience() {
  return (
    <section id="experience" className="py-32 border-b border-white/10 ">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h2
              data-aos="fade-right"
              className="font-mono text-sm uppercase tracking-widest text-[#c8ff3d] mb-4 lg:sticky lg:top-32"
            >
              Experience
            </h2>
            <h3
              data-aos="fade-right"
              className="font-display text-4xl md:text-5xl text-white hidden lg:block sticky top-44"
            >
              Jejak langkah & <br /> pembelajaran.
            </h3>
          </motion.div>

          <div className="flex flex-col">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group py-10 first:pt-0 border-b border-white/10 last:border-0 grid sm:grid-cols-[1fr_2fr] gap-4 sm:gap-8 cursor-default"
              >
                <div
                  data-aos="fade-right"
                  className="font-mono text-sm text-gray-500 mt-1 sm:group-hover:text-[#c8ff3d] transition-colors duration-500"
                >
                  {exp.period}
                </div>

                <div>
                  <h3
                    data-aos="fade-right"
                    className="font-display text-3xl text-white mb-2 group-hover:text-[#c8ff3d] transition-colors duration-500"
                  >
                    {exp.role}
                  </h3>
                  <div
                    data-aos="fade-right"
                    className="font-mono text-sm mb-4 uppercase tracking-wider text-gray-400"
                  >
                    {exp.organization}
                  </div>
                  <p
                    data-aos="fade-right"
                    className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-500"
                  >
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
