import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'

function Computer() {
  const groupRef = useRef()

  useFrame((state) => {
    // Gentle rotation
    groupRef.current.rotation.y += 0.005
  })

  return (
    <group ref={groupRef}>
      {/* Monitor */}
      <mesh position={[0, 0.5, 0]}>
        <boxGeometry args={[2, 1.5, 0.1]} />
        <meshStandardMaterial color="#1a1a1a" />
      </mesh>
      
      {/* Screen */}
      <mesh position={[0, 0.5, 0.06]}>
        <boxGeometry args={[1.8, 1.3, 0.02]} />
        <meshStandardMaterial color="#01FE98" emissive="#01FE98" emissiveIntensity={0.5} />
      </mesh>

      {/* Monitor Stand */}
      <mesh position={[0, -0.1, 0]}>
        <cylinderGeometry args={[0.05, 0.05, 0.5]} />
        <meshStandardMaterial color="#2a2a2a" />
      </mesh>

      {/* Monitor Base */}
      <mesh position={[0, -0.35, 0]} rotation={[0, 0, 0]}>
        <cylinderGeometry args={[0.3, 0.3, 0.05]} />
        <meshStandardMaterial color="#1a1a1a" />
      </mesh>

      {/* Keyboard */}
      <mesh position={[0, -0.35, 0.8]} rotation={[-0.1, 0, 0]}>
        <boxGeometry args={[1.5, 0.05, 0.5]} />
        <meshStandardMaterial color="#2a2a2a" />
      </mesh>

      {/* Keyboard keys glow */}
      <mesh position={[0, -0.32, 0.8]} rotation={[-0.1, 0, 0]}>
        <boxGeometry args={[1.4, 0.01, 0.45]} />
        <meshStandardMaterial color="#01FE98" emissive="#01FE98" emissiveIntensity={0.3} />
      </mesh>

      {/* Mouse */}
      <mesh position={[1, -0.35, 0.8]}>
        <boxGeometry args={[0.15, 0.08, 0.2]} />
        <meshStandardMaterial color="#2a2a2a" />
      </mesh>
    </group>
  )
}

const Computer3D = () => {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 1, 4]} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#01FE98" />
        <spotLight position={[0, 5, 0]} angle={0.3} intensity={1} color="#01FE98" />
        <Computer />
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 2}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  )
}

export default Computer3D
