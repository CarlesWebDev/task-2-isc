import { motion } from "framer-motion";
import { useState } from "react";

const generateParticles = () =>
  Array.from({ length: 40 }).map((_, i) => ({
    id: i,
    size: Math.random() * 3 + 1,
    x: Math.random() * 100,
    y: Math.random() * 100 + 20,
    duration: Math.random() * 15 + 10,
    delay: Math.random() * 5,
  }));

export default function AmbientBackground() {
  const [particles] = useState(generateParticles);

  return (
    <div className="fixed inset-0 z-[-1] h-full w-full  overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute inset-0  [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,transparent_20%,#000_100%)]"></div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] md:w-[40vw] md:h-[40vw] bg-[#c8ff3d] rounded-full mix-blend-screen filter blur-[120px] md:blur-[180px]"
      ></motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
        className="absolute top-[40%] -right-[10%] w-[60vw] h-[60vw] md:w-[35vw] md:h-[35vw] bg-white rounded-full mix-blend-screen filter blur-[120px] md:blur-[180px]"
      ></motion.div>

      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute bg-[#c8ff3d]"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}vw`,
            top: `${p.y}vh`,
            opacity: 0,
            boxShadow: "0 0 10px 2px rgba(200, 255, 61, 0.4)",
          }}
          animate={{
            y: ["0vh", "-50vh", "-120vh"],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "linear",
            delay: p.delay,
          }}
        />
      ))}
    </div>
  );
}
