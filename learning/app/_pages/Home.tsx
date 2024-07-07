"use client"

import Image from "next/image";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { TextGenerateEffect } from "@/components/text-generate-effect";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls , Preload} from "@react-three/drei";
import Desktop from '@/components/desktop'
import { useRef } from 'react';


export default function HomePage() {
  const orbitRef = useRef();
  return (
    <div className="h-[100vh] w-full rounded-md  relative flex flex-col antialiased  items-center bg-neutral-950">
      <div className="max-w-2xl mx-auto p-4 z-20">
  
      </div>
      
      <BackgroundBeams />
      <div className="text-center">
        <h1 className="heading z-20">Hi, I'm Rahul</h1>
      </div>
      <TextGenerateEffect className="text-center w-[700px] z-20 text-[20px]" words="Versatile software professional with a proven track record of delivering high-quality, innovative
         solutions across the full software development lifecycle." />
      <div className="h-full w-full mt-7 ">
      <Canvas frameloop="demand" shadows camera={{position:[20, 3, 5], fov:25}}
      gl={{ preserveDrawingBuffer:true}}>
        <Environment preset="studio" />
        <OrbitControls enableZoom={false}
        
         />
        <Desktop />
       <Preload all/>
      </Canvas>
    </div>

    </div>
  );
}
