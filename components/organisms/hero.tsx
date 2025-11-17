
import Image from "next/image";
import { Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import type { WebGLRenderer } from "three";
import { DroneModel } from "@/components/molecules/drone-model";
import { Button } from "@/components/atoms/button";
import { Badge } from "@/components/atoms/badge";
import { BookOpen } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  const rendererRef = useRef<WebGLRenderer>(null);

  const handleCanvasCreated = ({ gl }: { gl: WebGLRenderer }) => {
    rendererRef.current = gl;
    gl.setClearColor(0x000000, 0); // Remove alpha background
  };

  return (
    <section className="py-14 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">

              {/* Logo Section */}
              <div className="flex items-center gap-2">
                <div className="relative w-[60px] md:w-[80px] h-[60px] md:h-[80px] flex-shrink-0">
                  <Image
                    src="/IRC.png"
                    alt="Logo Drone Edukit"
                    fill
                    className="object-contain"
                  />
                </div>
                {/* <div className="relative w-[60px] md:w-[80px] h-[60px] md:h-[80px] flex-shrink-0">
                  <Image
                    src="/IRC.png"
                    alt="Logo Drone Edukit"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="relative w-[60px] md:w-[80px] h-[60px] md:h-[80px] flex-shrink-0">
                  <Image
                    src="/IRC.png"
                    alt="Logo Drone Edukit"
                    fill
                    className="object-contain"
                  />
                </div> */}
              </div>
              {/* End Logo Section */}

              {/* <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200">Platform Pembelajaran STEM</Badge> */}
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
                  Drone Edukit
                </span>
                <br />
                <span className="text-gray-800">Belajar Teknologi Lewat Udara</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Modul drone edukatif untuk pelajar dan pengembang masa depan. Eksplorasi dunia teknologi melalui
                pembelajaran hands-on yang menyenangkan.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
            <Link href="#spesifikasi" legacyBehavior>
              <a>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-blue-200 text-blue-600 hover:bg-blue-50 px-8 py-3 bg-transparent"
                >
                  Lihat Spesifikasi
                </Button>
              </a>
            </Link>
          </div>

            {/* <div className="flex items-center space-x-8 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>Prototipe Aktif</span>
              </div>
              <div className="flex items-center space-x-2">
                <BookOpen className="w-4 h-4" />
                <span>Open Source</span>
              </div>
            </div> */}
          </div>

          {/* 3D Drone */}
          <div className="h-96 bg-none lg:h-[500px] rounded-2xl overflow-hidden">
            <Canvas
              camera={{ position: [5, 2, 5], fov: 45 }}
              onCreated={handleCanvasCreated}
              shadows
            >
              {/* Lights */}
              <ambientLight intensity={0.5} />
              <directionalLight position={[5, 10, 7]} intensity={1} castShadow />
              <pointLight position={[-10, -10, -5]} intensity={0.3} color="#00d4ff" />

              <Suspense
                fallback={
                  <mesh>
                    <boxGeometry args={[2, 0.3, 2]} />
                    <meshStandardMaterial color="#2563eb" />
                  </mesh>
                }
              >
                <DroneModel />
              </Suspense>

              <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={1} />
              <Environment preset="studio" />
            </Canvas>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
