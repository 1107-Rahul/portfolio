"use client"

import Image from "next/image";
import { BackgroundBeams } from "@/components/ui/background-beams";
import ShowComponent from "./_components/shoe_Image.tsx/page";
import { CarouselDemo } from "./_components/carousel_comp/page";
export default function Home() {
  return (
    <div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4 z-20">
       
      <CarouselDemo/>
        
      <ShowComponent/> 
      </div>
      <BackgroundBeams />
    </div>
  );
}
