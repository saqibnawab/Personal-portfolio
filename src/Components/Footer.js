import React from 'react'
import { FaGithub } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";
import { BsTwitterX } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
        <div className="footer container mx-auto flex  items-center justify-center  flex-col mt-16 gap-6">

            <div className="footer__title">
                <p className='text-[30px]'>Saqib</p>
            </div>
            <div className="footer__list ">
                <ul className='flex gap-4'>
                    <li>About</li>
                    <li>Project</li>
                    <li>Services</li>
                    <li>Contact</li>
                 
                </ul>
            </div>
            <div className="footer__icones flex gap-4">
                <span>
                <FaGithub size={30} className='bg-black text-white px-1 rounded '/>
                 </span>
                 <span>
                 <SiInstagram  size={30} className='bg-black text-white px-1 rounded '/>
                 </span>
                 <span>
                 <BsTwitterX  size={30} className='bg-black text-white px-1 rounded '/>

                 </span>
                 


            </div>
            <div className="footer__copyright mt-3">
                <p>CopyRight | Saqibnawab@gmail.com</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer
