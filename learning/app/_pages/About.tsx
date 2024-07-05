import { GlareCard } from '@/components/ui/glare-card'
import React from 'react'
import { FaReact } from "react-icons/fa";
import { FaJava } from "react-icons/fa6";
const About = () => {
  return (
    <div className=' h-[40rem] w-full pl-[40px] bg-neutral-950'>
        <h1 className='heading'>Overview</h1>
        <p className='text-[#808080] w-[1000px] m-2'>An aspiring learner and problem solver with hands-on real-time project work experience in Web-Based Application 
        Development, Management, and Project operations. Played a leadership and an important role voluntarily when required 
        for the projects. Seeking to secure a challenging position as a Full stack Java Programmer in a world-class organization. </p>
        <div className='flex flex-row mt-3 mb-5'>
            <div className='m-8'>
                <GlareCard className="flex flex-col items-center justify-center">
                        <svg
                            width="200"
                            height="200"
                            viewBox="0 0 200 200"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-14 w-14 text-white"
                        >
                            <FaReact size={200}/>
                        </svg>
                        <p className="text-white font-bold text-xl mt-4 pl-8 text-center">Web-based Application Developer</p>
                </GlareCard>
            </div>
            <div className='m-8'>
                <GlareCard className="flex flex-col items-center justify-center">
                        <svg
                            width="100"
                            height="100"
                            viewBox="0 0 100 100"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-14 w-14 text-white"
                        >
                        <FaJava  size={100}/>
                        </svg>
                        <p className="text-white font-bold text-xl mt-4 pl-8 text-center">Full Stack Java Developer</p>
                </GlareCard>
            </div>
        </div>
    </div>
  )
}

export default About