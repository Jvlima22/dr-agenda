"use client";

import { Float, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { Button } from "@/components/ui/button";

// Componente 3D com tons de azul baseados no logo
function Scene3D() {
  return (
    <Canvas camera={{ position: [0, 0, 8], fov: 75 }}>
      <ambientLight intensity={0.6} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#0ea5e9" />
      <pointLight position={[-10, -10, -10]} intensity={0.8} color="#3b82f6" />

      {/* Logo animado principal - azul escuro */}
      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        <mesh>
          <boxGeometry args={[2, 2, 2]} />
          <meshStandardMaterial
            color="#1e40af"
            metalness={0.8}
            roughness={0.2}
          />
        </mesh>
      </Float>

      {/* Esfera secundária - azul médio */}
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
        <mesh position={[-3, -2, 0]}>
          <sphereGeometry args={[1, 32, 32]} />
          <meshStandardMaterial
            color="#3b82f6"
            metalness={0.6}
            roughness={0.3}
          />
        </mesh>
      </Float>

      {/* Esfera terciária - azul claro */}
      <Float speed={1.2} rotationIntensity={0.3} floatIntensity={0.8}>
        <mesh position={[3, 2, -2]}>
          <sphereGeometry args={[0.8, 32, 32]} />
          <meshStandardMaterial
            color="#0ea5e9"
            metalness={0.6}
            roughness={0.3}
          />
        </mesh>
      </Float>

      {/* Elementos decorativos menores - azul cyan */}
      <Float speed={1.8} rotationIntensity={0.4} floatIntensity={1.2}>
        <mesh position={[2, -1, 1]}>
          <octahedronGeometry args={[0.5]} />
          <meshStandardMaterial
            color="#06b6d4"
            metalness={0.7}
            roughness={0.2}
          />
        </mesh>
      </Float>

      <Float speed={1.3} rotationIntensity={0.6} floatIntensity={0.9}>
        <mesh position={[-2, 1, -1]}>
          <tetrahedronGeometry args={[0.6]} />
          <meshStandardMaterial
            color="#0284c7"
            metalness={0.5}
            roughness={0.4}
          />
        </mesh>
      </Float>

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
      />
    </Canvas>
  );
}

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);
  const router = useRouter();

  const handleStart = () => {
    setShowSplash(false);
    router.push("/subscription");
  };

  if (showSplash) {
    return (
      <div className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-blue-900 via-blue-700 to-cyan-600">
        {/* 3D Video Background */}
        <div className="absolute inset-0 w-full h-full">
          <Scene3D />
        </div>

        {/* Overlay Content */}
        <div className="relative z-10 text-center px-8">
          {/* Logo */}
          <div className="mb-6">
            <div className="relative w-48 h-16 mx-auto mb-4">
              <Image
                src="logo-splash.svg"
                alt="Dr.Agenda Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
              Sistema de Gestão Médica
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8 drop-shadow-md">
              Sua Solução Completa de Gestão Clínica
            </p>
          </div>

          <Button
            onClick={handleStart}
            size="lg"
            className="bg-white text-blue-700 hover:bg-blue-50 text-lg px-8 py-4 rounded-full font-semibold shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 border-blue-200"
          >
            Começar
          </Button>
        </div>

        {/* Gradient Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 via-transparent to-blue-900/20 pointer-events-none" />
      </div>
    );
  }

  return null;
}
