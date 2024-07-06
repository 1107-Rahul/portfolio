import React from 'react'
import { MdOutlineEmail } from "react-icons/md";
import { IoLogoLinkedin } from "react-icons/io";
import { FaPhoneSquareAlt } from "react-icons/fa";

const Final = () => {
  return (
    <div className='bg-white w-[350px] h-[300px] ml-10 mt-12 rounded-2xl'>
        <div className="artboard artboard-horizontal phone-2">
            <div className='flex flex-row pt-10'>
                <div className='pt-1 pl-[60px]'>
                <svg
                            width="80"
                            height="80"
                            viewBox="0 0 80 80"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-10 w-10"
                        >
                            <MdOutlineEmail size={80}/>
                        </svg>
                </div>
                <a  className='pt-3 pl-2'href=''>: abc@gmail.com</a>
            </div>
            <div className='flex flex-row pt-5'>
                <div className='pt-1 pl-[60px]'>
                <svg
                            width="80"
                            height="80"
                            viewBox="0 0 80 80"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-10 w-10"
                        >
                            <IoLogoLinkedin size={80}/>
                        </svg>
                </div>
                <a  className='pt-3 pl-2'href=''>: likedin.com</a>
            </div>
            <div className='flex flex-row pt-5'>
                <div className='pt-1 pl-[60px]'>
                <svg
                            width="80"
                            height="80"
                            viewBox="0 0 80 80"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-10 w-10"
                        >
                            <FaPhoneSquareAlt size={80}/>
                        </svg>
                </div>
                <a  className='pt-3 pl-2'href=''>: 1234567890</a>
            </div>
        </div>
        
    </div>
  )
}

export default Final