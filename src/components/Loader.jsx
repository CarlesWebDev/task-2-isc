import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Loader({ onLoadingComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const jump = Math.floor(Math.random() * 15) + 1;
        const next = prev + jump;
        
        if (next >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            onLoadingComplete();
          }, 500);
          return 100;
        }
        return next;
      });
    }, 150); 

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  return (
    <motion.div
    
      exit={{ 
        y: "-100vh", 
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
      }}
      className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#050505] text-[#c8ff3d] overflow-hidden"
    >
      <div className="flex flex-col items-center">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.5 } }}
          className="font-mono text-sm md:text-base uppercase tracking-widest text-gray-500 mb-6"
        >
          System Initializing
        </motion.div>
        
        <div className="font-display text-7xl md:text-9xl font-black tracking-tighter flex items-end">
          {progress}
          <span className="text-3xl md:text-5xl mb-2 md:mb-4 text-gray-600">%</span>
        </div>

        <div className="w-48 md:w-64 h-[2px] bg-white/10 mt-8 overflow-hidden rounded-full">
          <motion.div 
            className="h-full bg-[#c8ff3d]"
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ ease: "linear" }}
          />
        </div>
      </div>
    </motion.div>
  );
}