"use client"


import About from "./_pages/About";
import Experience from "./_pages/Experience";
import HomePage from "./_pages/Home";
import Tech from "./_pages/Tech";
import Work from "./_pages/Work";

export default function Home() {
  return (
    <div className="bg-neutral-950">
    <HomePage/>
    <About/>
    <Experience/>
    <Work />
    <Tech />
    </div>
  );
}
