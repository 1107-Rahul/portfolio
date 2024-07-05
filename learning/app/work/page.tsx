import React from 'react'
import { StickyScroll } from '@/components/ui/sticy-glare';
import Image from 'next/image';
import { IoLogoHtml5 } from "react-icons/io5";
import { FaCss3Alt } from "react-icons/fa6";

const content = [
    {
      title: "Role: Application Programmer and Engineer ",
      description:
        "Developed an application that helps in solving the problem of people looking for blood in an emergency.The client can request the blood banks and make a direct request to the donors through the application.For this application design, we used MERN (Mongo DB-Express JS-React JS-Node JS) Stack i.e., No SQL online Cloud Mongo dB, React JS, Express JS using Node JS. This approach made the application fast & reliable. ",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white font-[800]">
          Blood Drop Web-Application Project
        </div>
      ),
    },
    {
      title: "Role: Application Programmer and Designer",
      description:
        "Designed an application that helps in solving the problem of people who are in an emergency and require basic needs. Implemented REST Architecture using Django REST Python Framework. On the client side to offer a fast and reliable user interface, we used React JS library because of its pros like virtual DOM rendering. Used POSTMAN for designing testing & API Design management. ",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white font-[800]">
          Helping Hands Web-Application Project
        </div>
      ),
    },
    {
      title: "Role: Application Programmer and Designer",
      description:
        "Designed a fast reliable application to use Video streaming services with HTTP2 and NGNIX integrating with React JS, and Django REST Python framework. Involved in NGNIX integration with HTTP2, and SSH network protocols to make applications more fast and secure",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white font-[800]">
        A Video Streaming Web-Application
        </div>
      ),
    },
  ];

const Work = () => {
  return (
    <div className='h-[70rem] w-full pl-[40px] bg-neutral-950' >
    <div className="p-10">
      <h1 className='heading mb-3'>Projects</h1>
      <StickyScroll content={content} />
      <div className='flex flex-row'>
      <div className="bg-white inline-block h-20 w-20 m-5" style={{ borderRadius: "10%" }}>
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 250 250"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-full">
          <IoLogoHtml5 size="100%" />
        </svg>
      </div>
      <div className="bg-white inline-block h-20 w-20 m-5" style={{ borderRadius: "10%" }}>
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 250 250"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-full">
          <FaCss3Alt size="100%" />
        </svg>
      </div>
      <div className="bg-white inline-block h-20 w-20 m-5" style={{ borderRadius: "10%" }}>
        
      </div>
      </div>
    </div>
  </div>
  
  
  )
}

export default Work