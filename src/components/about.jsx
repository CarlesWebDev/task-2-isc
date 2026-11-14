import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-32 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-mono  text-sm uppercase tracking-widest text-[#c8ff3d] mb-4 lg:sticky lg:top-32" data-aos="fade-right">
              About
            </h2>
            <h3 className="font-display text-4xl md:text-5xl text-white hidden lg:block sticky top-44" data-aos="fade-right">
              Bukan <br /> sekadar kode.
            </h3>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-400 leading-relaxed space-y-8"
          >
            <p data-aos="fade-right">
              Saya adalah mahasiswa{" "}
              <span className="text-white font-bold">Teknik Informatika</span> di
              Universitas Pamulang (UNPAM) dengan ketertarikan mendalam pada
              rekayasa perangkat lunak. Bagi saya,{" "}
              <span className="font-mono text-sm bg-white/10 text-white px-2 py-1 rounded border border-white/10 mx-1">
                coding
              </span>{" "}
              bukan sekadar menulis sintaks, melainkan{" "}
              <span className="text-[#c8ff3d] font-bold">
                merancang sistem yang efisien dan memecahkan masalah nyata.
              </span>
            </p>
            <p data-aos="fade-right">
              Saat ini, saya aktif mengembangkan aplikasi lintas platform menggunakan ekosistem modern: Next.js untuk web, {""}
              React Native & Flutter untuk sisi <em>mobile</em>, serta Go
              dan Supabase untuk kebutuhan <em>backend</em>. Saya terbiasa
              bekerja secara produktif di lingkungan Hybrid
            </p>

            <div data-aos="fade-right" className="pt-10 mt-10 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-8 font-mono text-sm">
              <div>
                <span className="block text-gray-500 mb-2 uppercase text-xs tracking-widest">
                  Lokasi
                </span>
                <span className="text-white">Tangerang Selatan</span>
              </div>
              <div>
                <span className="block text-gray-500 mb-2 uppercase text-xs tracking-widest">
                  Edukasi
                </span>
                <span className="text-white">Universitas Pamulang</span>
              </div>
              <div>
                <span className="block text-gray-500 mb-2 uppercase text-xs tracking-widest">
                  Fokus
                </span>
                <span className="text-white">Full-Stack Dev</span>
              </div>
              <div>
                <span className="block text-gray-500 mb-2 uppercase text-xs tracking-widest">
                  Hobi
                </span>
                <span className="text-white">Ngoding, Game, Musik</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
