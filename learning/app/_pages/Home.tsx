"use client"

import Image from "next/image";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { TextGenerateEffect } from "@/components/text-generate-effect";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import Desktop from '@/components/desktop'
import { useRef } from 'react';


export default function HomePage() {
  const orbitRef = useRef();
  return (
    <div className="h-[45rem] w-full rounded-md  relative flex flex-col antialiased  items-center bg-neutral-950">
      <div className="max-w-2xl mx-auto p-4 z-20">
  
      </div>
      
      <BackgroundBeams />
      <div className="text-center">
        <h1 className="heading z-20">Hi, I'm Rahul</h1>
      </div>
      <TextGenerateEffect className="text-center w-[700px] z-20 text-[20px]" words="Versatile software professional with a proven track record of delivering high-quality, innovative
         solutions across the full software development lifecycle." />
      <div className="h-[600px] w-[650px] mt-10 relative">
      <Canvas className="w-full h-full">
        <Environment preset="studio" />
        <OrbitControls />
        <Desktop />
      </Canvas>
    </div>

    </div>
  );
}
