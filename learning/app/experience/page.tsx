"use client"
import React from 'react'

const Experience = () => {
  return (
    <div className='z-10 text-white'>
      <h1 className='heading m-7 mb-10'>Work Experience</h1>
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
      <li>
        <div className="timeline-middle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5">
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd" />
          </svg>
        </div>
        <div className="timeline-start mb-10 md:text-end">
          <time className="font-mono italic">July 2023 - Present</time>
          <div className="text-lg  mt-3 mb-3 font-[800]">Tennant Company</div>
           <div className='w-[500px] text-left'>
           Working as a Software Engineer at Tennet Company, developing robust Java applications
           leveraging JDBC to seamlessly integrate with Oracle Database. Demonstrated expertise 
           in Core Java and implemented secure authentication using OpenID Connect (OIDC) and PKCE. 
           Utilized Docker and Kubernetes to containerize and deploy applications, ensuring scalability 
           and reliability.
           </div>
        </div>
        <hr />
      </li>
      <li>
        <hr />
        <div className="timeline-middle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5">
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd" />
          </svg>
        </div>
        <div className="timeline-end mb-10">
          <time className="font-mono italic">July 2019 - August 2021</time>
          <div className="text-lg font-white mt-3 mb-3 font-[800]">Renault Nissan Technology & Business Centre India</div>
          <div className='w-[500px] text-left'>
          Worked as a Software Engineer on the CUSTOMS (Tactic) project for RENAULT, developing Java applications that 
          integrated with PostgreSQL and MongoDB databases. Leveraged Maven for build automation and Jenkins for continuous integration, 
          containerizing and deploying the applications using Docker and Kubernetes. Contributed to the frontend development using AngularJS 
          and the backend using Spring Framework, while also utilizing Git for version control.
          </div>
        </div>
        <hr />
      </li>
</ul>


    </div>
  )
}

export default Experience