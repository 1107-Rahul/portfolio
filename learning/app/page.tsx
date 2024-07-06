import About from "./about/page";
import Experience from "./experience/page";
import HomePage from "./_pages/Home";
import Work from "./work/page";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
import GlobeDemo from "./_pages/GlobeDemo";
import Final from "./contact/final";


export default function Home() {
  const navItems = [
    {
      name: "Home",
      link: "#home",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "#about",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Work",
      link: "#experience",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact",
      link: "#contact",
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];

  return (
    <div className="relative w-full bg-neutral-950">
      <FloatingNav navItems={navItems} />
      <div id="home">
        <HomePage />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="experience">
        <Experience />
      </div>
      <div>
        <Work />
      </div>
      <div id="contact" className="flex  h-full w-full flex-row justify-center items-center">
          <div className="">
            <h1 className="heading text-white ml-10">Get in touch</h1>
            <Final />
          </div>
          <div className="mb-48"> <GlobeDemo /> </div>
            
      </div>
      
    
    </div>
  );
}
