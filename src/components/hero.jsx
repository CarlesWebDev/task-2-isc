import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Float } from "@react-three/drei";

// --- KOMPONEN LAPTOP HOLOGRAFIS MURNI KODE ---
function HolographicLaptop() {
  const groupRef = useRef();
  const screenRef = useRef();

  // Animasi mengambang dan efek berkedip pada layar
  useFrame((state) => {
    // Rotasi perlahan ke kiri dan kanan
    groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
    
    // Efek layar berkedip (Pulse) seperti sedang loading/processing
    if (screenRef.current) {
      screenRef.current.material.opacity = 0.5 + Math.sin(state.clock.elapsedTime * 3) * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={1.5}>
      <group ref={groupRef} scale={1.2} position={[0, -0.5, 0]}>
        
        {/* --- 1. BAGIAN BAWAH (BASE / KEYBOARD DECK) --- */}
        <mesh position={[0, -0.05, 0]}>
          <boxGeometry args={[3, 0.1, 2]} />
          <meshStandardMaterial color="#111111" metalness={0.9} roughness={0.1} />
          {/* Wireframe pelindung */}
          <mesh scale={1.01}>
            <boxGeometry args={[3, 0.1, 2]} />
            <meshBasicMaterial color="#c8ff3d" wireframe transparent opacity={0.2} />
          </mesh>
        </mesh>

        {/* Simulasi area Keyboard (Kotak gelap di atas base) */}
        <mesh position={[0, 0.01, 0.2]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[2.6, 1.2]} />
          <meshBasicMaterial color="#050505" />
          <mesh scale={1.02}>
            <planeGeometry args={[2.6, 1.2]} />
            <meshBasicMaterial color="#c8ff3d" wireframe transparent opacity={0.1} />
          </mesh>
        </mesh>

        {/* --- 2. BAGIAN LAYAR (LID / SCREEN) --- */}
        {/* Posisi Hinge (engsel) diletakkan di belakang (z = -1) dan dimiringkan sedikit ke belakang */}
        <group position={[0, 0, -1]} rotation={[-0.2, 0, 0]}>
          
          {/* Cangkang Layar */}
          <mesh position={[0, 1, 0]}>
            <boxGeometry args={[3, 2, 0.1]} />
            <meshStandardMaterial color="#111111" metalness={0.9} roughness={0.1} />
            <mesh scale={1.01}>
              <boxGeometry args={[3, 2, 0.1]} />
              <meshBasicMaterial color="#c8ff3d" wireframe transparent opacity={0.3} />
            </mesh>
          </mesh>
          
          {/* Layar Menyala (Display Cyan) */}
          <mesh ref={screenRef} position={[0, 1, 0.06]}>
            <planeGeometry args={[2.8, 1.8]} />
            {/* Menggunakan emissive agar seolah-olah layarnya memancarkan cahaya */}
            <meshStandardMaterial 
              color="#00f2fe" 
              emissive="#00f2fe" 
              emissiveIntensity={1} 
              transparent 
              opacity={0.8} 
            />
          </mesh>
        </group>

      </group>
    </Float>
  );
}

// --- KOMPONEN HERO UTAMA ---
export default function Hero() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section className="relative max-w-7xl mx-auto px-6 pt-32 pb-24 min-h-[90vh] flex items-center border-b border-white/10">
      <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
        
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-mono text-sm uppercase tracking-widest text-gray-400 mb-6"
          >
            Junior Full-Stack Developer
          </motion.div>

          <div className="overflow-hidden mb-8">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1] }}
              className="font-display text-5xl md:text-7xl font-bold tracking-tighter leading-[1.1] text-white"
            >
              Membangun <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c8ff3d] to-[#00f2fe]">
                Masa Depan
              </span>{" "}
              <br />
              Sistem Digital.
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-400 mb-10 max-w-lg"
          >
            Fokus pada pengembangan web dan mobile menggunakan ekosistem React,
            Go, dan Supabase. Menggabungkan estetika modern dengan performa
            tangguh.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-wrap gap-4 font-mono text-sm uppercase tracking-wider"
          >
            <a
              href="#projects"
              className="group flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-[#c8ff3d] hover:scale-105 transition-all duration-300"
            >
              Lihat Projek
              <span className="text-lg group-hover:translate-y-1 transition-transform duration-300">
                ↓
              </span>
            </a>
            <a
              href="#contact"
              className="group flex items-center gap-3 px-8 py-4 border border-white/10 bg-white/5 text-white rounded-full hover:bg-white/10 hover:border-white/20 transition-all duration-300"
            >
              Kontak Saya
              <span className="text-gray-500 group-hover:text-white transition-colors duration-300">
                ↗
              </span>
            </a>
          </motion.div>
        </div>

        {!isMobile && (
          <motion.div
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
            className="relative h-[600px] w-full flex items-center justify-center cursor-grab active:cursor-grabbing"
          >
            {/* Posisi kamera sedikit dinaikkan agar laptop terlihat dari sudut atas */}
            <Canvas camera={{ position: [0, 1.5, 6], fov: 45 }}>
              <ambientLight intensity={0.3} />
              
              {/* Lampu Sorot */}
              <directionalLight position={[5, 10, 5]} intensity={2} color="#c8ff3d" />
              <directionalLight position={[-5, -5, 5]} intensity={1.5} color="#00f2fe" />

              <HolographicLaptop />

              <OrbitControls
                enableZoom={false}
                autoRotate={false}
                // Batasi perputaran agar user tidak bisa melihat dari bawah laptop (tidak natural)
                maxPolarAngle={Math.PI / 2}
                minPolarAngle={Math.PI / 4}
              />
            </Canvas>
          </motion.div>
        )}
      </div>
    </section>
  );
}