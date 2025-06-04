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

      {/* Símbolo do hospital (Cruz) */}
      <Float speed={1.4} rotationIntensity={0.5} floatIntensity={1.2}>
        <group position={[0, 2, 0]}>
          {/* Cruz vertical */}
          <mesh>
            <boxGeometry args={[0.4, 1.5, 0.4]} />
            <meshStandardMaterial
              color="#38bdf8"
              metalness={0.6}
              roughness={0.2}
            />
          </mesh>
          {/* Cruz horizontal */}
          <mesh>
            <boxGeometry args={[1.5, 0.4, 0.4]} />
            <meshStandardMaterial
              color="#38bdf8"
              metalness={0.6}
              roughness={0.2}
            />
          </mesh>
        </group>
      </Float>

      {/* Representação do Dashboard */}
      <Float speed={1.2} rotationIntensity={0.3} floatIntensity={0.8}>
        <mesh position={[-5, 0, -2]} rotation={[0.2, 0.3, 0]}>
          <boxGeometry args={[2, 1.5, 0.1]} />
          <meshStandardMaterial
            color="#3b82f6"
            metalness={0.7}
            roughness={0.3}
          />
        </mesh>
      </Float>

      {/* Calendário de Agendamentos */}
      <Float speed={1.6} rotationIntensity={0.4} floatIntensity={1}>
        <group position={[5, 0, -2]}>
          <mesh>
            <boxGeometry args={[1.5, 1.8, 0.1]} />
            <meshStandardMaterial
              color="#0ea5e9"
              metalness={0.5}
              roughness={0.4}
            />
          </mesh>
          {/* Linhas do calendário */}
          {[-0.4, 0, 0.4].map((y, i) => (
            <mesh key={i} position={[0, y, 0.06]}>
              <boxGeometry args={[1.3, 0.1, 0.01]} />
              <meshStandardMaterial color="#60a5fa" />
            </mesh>
          ))}
        </group>
      </Float>

      {/* Prédio da Clínica */}
      <Float speed={1.3} rotationIntensity={0.2} floatIntensity={0.7}>
        <group position={[0, -2, 0]}>
          <mesh>
            <boxGeometry args={[2, 2.5, 0.5]} />
            <meshStandardMaterial
              color="#2563eb"
              metalness={0.6}
              roughness={0.3}
            />
          </mesh>
          {/* Janelas */}
          {[-0.5, 0.5].map((x, i) =>
            [-0.5, 0.5].map((y, j) => (
              <mesh key={`${i}-${j}`} position={[x, y, 0.26]}>
                <boxGeometry args={[0.4, 0.4, 0.01]} />
                <meshStandardMaterial
                  color="#93c5fd"
                  metalness={0.8}
                  roughness={0.2}
                />
              </mesh>
            ))
          )}
        </group>
      </Float>

      {/* Dodecaedro flutuante - azul índigo */}
      <Float speed={1.7} rotationIntensity={0.8} floatIntensity={1.5}>
        <mesh position={[-6, 4, -4]}>
          <dodecahedronGeometry args={[0.7]} />
          <meshStandardMaterial
            color="#4f46e5"
            metalness={0.7}
            roughness={0.2}
          />
        </mesh>
      </Float>

      {/* Anel torcido - azul safira */}
      <Float speed={1.4} rotationIntensity={0.9} floatIntensity={1.3}>
        <mesh position={[7, 3, -5]}>
          <torusKnotGeometry args={[0.5, 0.2, 128, 16]} />
          <meshStandardMaterial
            color="#2563eb"
            metalness={0.8}
            roughness={0.3}
          />
        </mesh>
      </Float>

      {/* Cilindro inclinado - azul celeste */}
      <Float speed={2.1} rotationIntensity={0.6} floatIntensity={1.7}>
        <mesh position={[0, -5, 3]} rotation={[0.5, 0.3, 0.2]}>
          <cylinderGeometry args={[0.3, 0.3, 1.5, 32]} />
          <meshStandardMaterial
            color="#38bdf8"
            metalness={0.6}
            roughness={0.4}
          />
        </mesh>
      </Float>

      {/* Esfera secundária - azul médio */}
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
        <mesh position={[-5, -3, 2]}>
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
        <mesh position={[5, 4, -3]}>
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
        <mesh position={[4, -3, 2]}>
          <octahedronGeometry args={[0.5]} />
          <meshStandardMaterial
            color="#06b6d4"
            metalness={0.7}
            roughness={0.2}
          />
        </mesh>
      </Float>

      <Float speed={1.3} rotationIntensity={0.6} floatIntensity={0.9}>
        <mesh position={[-4, 2, -2]}>
          <tetrahedronGeometry args={[0.6]} />
          <meshStandardMaterial
            color="#0284c7"
            metalness={0.5}
            roughness={0.4}
          />
        </mesh>
      </Float>
      {/* Elemento decorativo - torus azul */}
      <Float speed={1.6} rotationIntensity={0.7} floatIntensity={1.1}>
        <mesh position={[6, -4, -2]}>
          <torusGeometry args={[0.6, 0.2, 16, 32]} />
          <meshStandardMaterial
            color="#38bdf8"
            metalness={0.8}
            roughness={0.2}
          />
        </mesh>
      </Float>

      {/* Elemento decorativo - cone azul escuro */}
      <Float speed={1.4} rotationIntensity={0.5} floatIntensity={1}>
        <mesh position={[-6, 4, -3]} rotation={[0, 0, Math.PI / 4]}>
          <coneGeometry args={[0.4, 0.8, 32]} />
          <meshStandardMaterial
            color="#1e40af"
            metalness={0.6}
            roughness={0.3}
          />
        </mesh>
      </Float>

      {/* Elemento decorativo - dodecaedro ciano */}
      <Float speed={1.7} rotationIntensity={0.8} floatIntensity={1.3}>
        <mesh position={[3, 5, 3]}>
          <dodecahedronGeometry args={[0.4]} />
          <meshStandardMaterial
            color="#22d3ee"
            metalness={0.7}
            roughness={0.2}
          />
        </mesh>
      </Float>

      {/* Elemento decorativo - torusKnot azul claro */}
      <Float speed={1.9} rotationIntensity={0.6} floatIntensity={1.2}>
        <mesh position={[-5, -4, 2]}>
          <torusKnotGeometry args={[0.3, 0.1, 64, 16]} />
          <meshStandardMaterial
            color="#7dd3fc"
            metalness={0.5}
            roughness={0.4}
          />
        </mesh>
      </Float>

      {/* Torus - azul celeste */}
      <Float speed={1.6} rotationIntensity={0.7} floatIntensity={1.1}>
        <mesh position={[6, -3, 3]}>
          <torusGeometry args={[0.8, 0.2, 16, 32]} />
          <meshStandardMaterial
            color="#38bdf8"
            metalness={0.7}
            roughness={0.2}
          />
        </mesh>
      </Float>

      {/* Cone - azul royal */}
      <Float speed={1.4} rotationIntensity={0.8} floatIntensity={1.3}>
        <mesh position={[-6, 5, -2]} rotation={[0, 0, Math.PI / 4]}>
          <coneGeometry args={[0.6, 1.2, 32]} />
          <meshStandardMaterial
            color="#2563eb"
            metalness={0.6}
            roughness={0.3}
          />
        </mesh>
      </Float>

      {/* Dodecahedron - azul safira */}
      <Float speed={2.1} rotationIntensity={0.9} floatIntensity={1.4}>
        <mesh position={[0, 5, 3]}>
          <dodecahedronGeometry args={[0.7]} />
          <meshStandardMaterial
            color="#1d4ed8"
            metalness={0.8}
            roughness={0.2}
          />
        </mesh>
      </Float>

      {/* Torus Knot - azul turquesa */}
      <Float speed={1.7} rotationIntensity={1.2} floatIntensity={1.5}>
        <mesh position={[-5, 0, 4]}>
          <torusKnotGeometry args={[0.5, 0.15, 100, 16]} />
          <meshStandardMaterial
            color="#0891b2"
            metalness={0.9}
            roughness={0.1}
          />
        </mesh>
      </Float>

      {/* Icosaedro - azul celeste */}
      <Float speed={1.8} rotationIntensity={0.7} floatIntensity={1.6}>
        <mesh position={[8, 2, -6]}>
          <icosahedronGeometry args={[0.6]} />
          <meshStandardMaterial
            color="#38bdf8"
            metalness={0.7}
            roughness={0.3}
          />
        </mesh>
      </Float>

      {/* Octaedro - azul royal */}
      <Float speed={2.2} rotationIntensity={0.8} floatIntensity={1.4}>
        <mesh position={[-8, 3, -5]}>
          <octahedronGeometry args={[0.7]} />
          <meshStandardMaterial
            color="#2563eb"
            metalness={0.6}
            roughness={0.4}
          />
        </mesh>
      </Float>

      {/* Anel Duplo - azul índigo */}
      <Float speed={1.5} rotationIntensity={1.1} floatIntensity={1.3}>
        <group position={[7, -5, 4]}>
          <mesh>
            <torusGeometry args={[0.8, 0.2, 32, 32]} />
            <meshStandardMaterial
              color="#4f46e5"
              metalness={0.8}
              roughness={0.2}
            />
          </mesh>
          <mesh rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[0.8, 0.2, 32, 32]} />
            <meshStandardMaterial
              color="#4f46e5"
              metalness={0.8}
              roughness={0.2}
            />
          </mesh>
        </group>
      </Float>

      {/* Cubo Rotacionado - azul claro */}
      <Float speed={1.9} rotationIntensity={0.9} floatIntensity={1.7}>
        <mesh position={[-7, -4, 5]} rotation={[Math.PI / 4, Math.PI / 4, 0]}>
          <boxGeometry args={[0.8, 0.8, 0.8]} />
          <meshStandardMaterial
            color="#7dd3fc"
            metalness={0.5}
            roughness={0.3}
          />
        </mesh>
      </Float>

      {/* Espiral - azul safira */}
      <Float speed={2.0} rotationIntensity={1.0} floatIntensity={1.2}>
        <mesh position={[6, 5, -4]}>
          <torusKnotGeometry args={[0.6, 0.2, 128, 32, 2, 3]} />
          <meshStandardMaterial
            color="#1d4ed8"
            metalness={0.7}
            roughness={0.2}
          />
        </mesh>
      </Float>

      {/* Pirâmide - azul ciano */}
      <Float speed={1.6} rotationIntensity={0.6} floatIntensity={1.5}>
        <mesh position={[-4, 6, 3]} rotation={[0, Math.PI / 4, 0]}>
          <coneGeometry args={[0.5, 1, 4]} />
          <meshStandardMaterial
            color="#06b6d4"
            metalness={0.6}
            roughness={0.3}
          />
        </mesh>
      </Float>

      {/* Esfera com anéis - azul turquesa */}
      <Float speed={1.7} rotationIntensity={0.8} floatIntensity={1.4}>
        <group position={[8, -3, -3]}>
          <mesh>
            <sphereGeometry args={[0.4, 32, 32]} />
            <meshStandardMaterial
              color="#0891b2"
              metalness={0.8}
              roughness={0.2}
            />
          </mesh>
          <mesh rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[0.6, 0.1, 16, 32]} />
            <meshStandardMaterial
              color="#0891b2"
              metalness={0.8}
              roughness={0.2}
            />
          </mesh>
          <mesh rotation={[0, Math.PI / 2, 0]}>
            <torusGeometry args={[0.6, 0.1, 16, 32]} />
            <meshStandardMaterial
              color="#0891b2"
              metalness={0.8}
              roughness={0.2}
            />
          </mesh>
        </group>
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
    router.push("/authentication");
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
              Sistema de gestão médica
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8 drop-shadow-md">
              Sua solução completa de gestão clínica
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
