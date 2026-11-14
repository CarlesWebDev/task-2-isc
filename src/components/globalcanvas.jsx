import { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Stars } from "@react-three/drei";

function LiquidCore({ isMobile }) {
  const meshRef = useRef();

  useFrame((state, delta) => {
    meshRef.current.rotation.y += delta * 0.1;
    meshRef.current.rotation.x += delta * 0.05;
  });

  const position = isMobile ? [0, 0, -3] : [3, 0, -2];
  const scale = isMobile ? 1.5 : 2.2;

  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <sphereGeometry args={[1, 100, 100]} />
        <MeshDistortMaterial
          color="#050505"
          metalness={0.9}
          roughness={0.1}
          distort={0.3}
          speed={1.5}
          emissive="#c8ff3d"
          emissiveIntensity={0.1}
        />
      </mesh>
    </Float>
  );
}

export default function GlobalCanvas() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="fixed inset-0 z-[-1] bg-[#030303] pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.1} />
        <directionalLight position={[5, 5, 5]} intensity={3} color="#c8ff3d" />
        <directionalLight
          position={[-5, -5, -2]}
          intensity={2}
          color="#00f2fe"
        />
        <spotLight
          position={[0, 5, 0]}
          intensity={1}
          color="#ffffff"
          penumbra={1}
        />

        <Stars
          radius={100}
          depth={50}
          count={3000}
          factor={4}
          saturation={0}
          fade
          speed={1}
        />

        <LiquidCore isMobile={isMobile} />
      </Canvas>

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#030303_100%)] opacity-80"></div>
    </div>
  );
}
