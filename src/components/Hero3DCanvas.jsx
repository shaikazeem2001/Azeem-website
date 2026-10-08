import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshWobbleMaterial, OrbitControls, Sphere, Torus, TorusKnot } from '@react-three/drei';

function FloatingGeometry() {
  const meshRef = useRef(null);
  const torusRef = useRef(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.4;
      meshRef.current.rotation.y += delta * 0.5;
    }
    if (torusRef.current) {
      torusRef.current.rotation.x -= delta * 0.3;
      torusRef.current.rotation.z += delta * 0.4;
    }
  });

  return (
    <group>
      {/* Central 3D Torus Knot */}
      <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
        <mesh ref={meshRef} position={[0, 0, 0]} scale={1.2}>
          <torusKnotGeometry args={[1, 0.35, 128, 32]} />
          <MeshWobbleMaterial factor={0.6} speed={1.5} color="#2563EB" roughness={0.2} metalness={0.8} />
        </mesh>
      </Float>

      {/* Orbiting Neon Ring */}
      <Float speed={3} rotationIntensity={2} floatIntensity={1.5}>
        <mesh ref={torusRef} position={[0, 0, 0]} scale={1.8}>
          <torusGeometry args={[1.5, 0.08, 16, 100]} />
          <meshStandardMaterial color="#00E676" emissive="#00E676" emissiveIntensity={0.6} roughness={0.1} />
        </mesh>
      </Float>

      {/* Accent Spheres */}
      <Float speed={4} rotationIntensity={1} floatIntensity={2}>
        <mesh position={[-2.2, 1.5, -1]}>
          <sphereGeometry args={[0.3, 32, 32]} />
          <meshStandardMaterial color="#F59E0B" roughness={0.2} metalness={0.7} />
        </mesh>
      </Float>

      <Float speed={3.5} rotationIntensity={1} floatIntensity={2}>
        <mesh position={[2.3, -1.2, 0.5]}>
          <sphereGeometry args={[0.35, 32, 32]} />
          <meshStandardMaterial color="#EC4899" roughness={0.2} metalness={0.7} />
        </mesh>
      </Float>
    </group>
  );
}

export default function Hero3DCanvas() {
  return (
    <div className="w-full h-full min-h-[350px] relative pointer-events-auto">
      <Canvas camera={{ position: [0, 0, 5.5], fov: 50 }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} color="#ffffff" />
        <pointLight position={[-10, -10, -5]} intensity={1} color="#00E676" />
        <FloatingGeometry />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.2} />
      </Canvas>
    </div>
  );
}
