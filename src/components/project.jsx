import { motion } from "framer-motion";
import { projects } from "../data/projects";
import { FaGithub } from "react-icons/fa";

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-32 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12 md:mb-16 text-center">
          <h2 data-aos="fade-down" className="font-mono text-xs md:text-sm uppercase tracking-widest text-[#c8ff3d] mb-3 md:mb-4">
            Selected Works
          </h2>
          <h3 data-aos="fade-down" className="font-display text-4xl md:text-5xl lg:text-6xl text-white tracking-tight">
            Projek & <br className="block md:hidden" /> Eksperimen.
          </h3>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, i) => {
            const isRepoActive =
              project.repo &&
              project.repo.trim() !== "" &&
              project.repo !== "#";
            const isLiveActive =
              project.live &&
              project.live.trim() !== "" &&
              project.live !== "#";

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col justify-between p-6 md:p-8 lg:p-10 rounded-3xl bg-[#151515] border border-white/5 hover:border-white/20 hover:bg-[#1a1a1a] transition-all duration-300"
              >
                <div>
                  <div className="flex justify-between items-start mb-6 md:mb-8">
                    <div className="flex flex-col">
                      <span className="font-mono text-5xl md:text-6xl font-extrabold text-white/5 leading-none">
                        {project.id}
                      </span>
                      <span className="font-mono text-lg md:text-xl font-bold text-white/10 mt-1 md:mt-2">
                        {project.year}
                      </span>
                    </div>

                    <div className="flex gap-2 md:gap-3">
                      {isRepoActive ? (
                        <a
                          href={project.repo}
                          target="_blank"
                          rel="noreferrer"
                          className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-[#c8ff3d] hover:text-black hover:border-[#c8ff3d] transition-all"
                          title="Repository Tersedia"
                        >
                          <FaGithub className="text-base md:text-lg" />
                        </a>
                      ) : (
                        <span
                          className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-black/20 border border-white/5 flex items-center justify-center text-gray-700 cursor-not-allowed opacity-50"
                          title="Repository Private/Tidak Tersedia"
                        >
                          <FaGithub className="text-base md:text-lg" />
                        </span>
                      )}

                      {isLiveActive ? (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noreferrer"
                          className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-[#c8ff3d] hover:text-black hover:border-[#c8ff3d] transition-all"
                          title="Live Demo Tersedia"
                        >
                          ↗
                        </a>
                      ) : (
                        <span
                          className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-black/20 border border-white/5 flex items-center justify-center text-gray-700 cursor-not-allowed opacity-50"
                          title="Live Demo Tidak Tersedia"
                        >
                          ↗
                        </span>
                      )}
                    </div>
                  </div>

                  <h4 className="text-2xl md:text-3xl font-display text-white mb-3 md:mb-4">
                    {project.name}
                  </h4>
                  <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8 md:mb-12 pr-0 md:pr-4">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 md:gap-3">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-[10px] sm:text-xs uppercase tracking-wider px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-white/10 text-gray-300 bg-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
