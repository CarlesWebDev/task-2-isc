import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

export default function AmbientBackground() {
  return (
    <div className="fixed inset-0 z-[-1] h-full w-full bg-gray-50 dark:bg-[#030303] overflow-hidden pointer-events-none transition-colors duration-500">
      <div className="absolute inset-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
          <ambientLight intensity={0.1} />
          <directionalLight position={[5, 5, 5]} intensity={3} color="#c8ff3d" />
          <directionalLight position={[-5, -5, -2]} intensity={2} color="#00f2fe" />
          <spotLight position={[0, 5, 0]} intensity={1} color="#ffffff" penumbra={1} />
          
          <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
        </Canvas>
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,transparent_20%,#000_100%)]"></div>

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#f9fafb_100%)] dark:bg-[radial-gradient(ellipse_at_center,transparent_0%,#030303_100%)] opacity-80"></div>
    </div>
  );
}