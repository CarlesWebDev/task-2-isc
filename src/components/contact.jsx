import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'; 

export default function Contact() {
  return (
    <section id="contact" className="py-32 border-b border-white/10 ">
      <div className="text-center max-w-3xl mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-sm uppercase tracking-widest text-[#c8ff3d] mb-4"
        >
           Contact
        </motion.h2>
        
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-display text-5xl md:text-7xl tracking-tight leading-none text-white mb-12"
        >
          Mari diskusikan <br/> ide & kolaborasi.
        </motion.h3>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center items-center gap-4 md:gap-6 font-mono text-sm uppercase tracking-wider"
        >
          <a href="mailto:charlesmarvin4321@gmail.com" className="flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full hover:bg-[#c8ff3d] hover:scale-105 transition-all duration-300 font-bold">
            <FaEnvelope className="text-lg" /> Email
          </a>
          <a href="https://wa.me/6283807362506" target="_blank" rel="noreferrer" className="flex items-center gap-3 border border-white/20 px-8 py-4 rounded-full text-white hover:bg-white/10 transition-all duration-300">
            <FaWhatsapp className="text-lg" /> WhatsApp
          </a>

          <div className="flex gap-4 ml-0 md:ml-4">
            <a href="https://github.com/CarlesWebDev" target="_blank" rel="noreferrer" className="flex items-center justify-center w-[54px] h-[54px] rounded-full border border-white/20 text-white hover:bg-[#c8ff3d] hover:text-black hover:border-[#c8ff3d] transition-all duration-300" aria-label="GitHub">
              <FaGithub className="text-2xl" />
            </a>
            <a href="https://www.linkedin.com/in/carlsmrvn" target="_blank" rel="noreferrer" className="flex items-center justify-center w-[54px] h-[54px] rounded-full border border-white/20 text-white hover:bg-[#c8ff3d] hover:text-black hover:border-[#c8ff3d] transition-all duration-300" aria-label="LinkedIn">
              <FaLinkedin className="text-2xl" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}