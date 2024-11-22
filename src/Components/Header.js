import React, { useState } from 'react'
import { IoHomeOutline } from "react-icons/io5";
import { FiMenu } from "react-icons/fi";

const Header = () => {
  const [togglemenu, settogglemenu] = useState(false);

  const showTogglo = () => {
    settogglemenu(!togglemenu);
  }

  return (
    <>
      <header className='container mx-auto  px-4 h-[60px] font-mono bg-[#fafafa]'>
        <div className="header container w-[100%] mx-auto hidden md:flex justify-between h-full items-center">
          <div className="header_icone font-semibold text-2xl cursor-pointer -tracking-tighter">SaqibNawab</div>
          <div className="header_navbar">
            <ul className='flex space-x-7 font-medium cursor-pointer'>
              <li>Home</li>
              <li>About</li>
              <li>Skill</li>
              <li>Services</li>
              <li>Portfolio</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
        {/* Wrapper for small screen section */}
        <div className="headersmallscreensection md:hidden flex justify-between p-4">
          <span>Saqibnawab</span>
          <span onClick={showTogglo}><FiMenu /></span>
        </div>
        {/* Mobile Menu */}
        {togglemenu && (
  <div className="headerforsmallScreenInfo bg-red-100 absolute container mx-auto top-10 left-0 w-full h-screen flex flex-col justify-center items-center z-30" onClick={()=>{ settogglemenu(false)}}>
    <ul className='grid place-items-center gap-10'>
      <li className='flex justify-center items-center'>
        <IoHomeOutline size={20} className='mx-1' />
        <span className='text-[20px]'>Home</span>
      </li>
      <li className='flex justify-center items-center'>
        <IoHomeOutline size={20} className='mx-1' />
        <span className='text-[20px]'>About</span>
      </li>
      <li className='flex justify-center items-center'>
        <IoHomeOutline size={20} className='mx-1' />
        <span className='text-[20px]'>Skill</span>
      </li>
      <li className='flex justify-center items-center'>
        <IoHomeOutline size={20} className='mx-1' />
        <span className='text-[20px]'>Services</span>
      </li>
      <li className='flex justify-center items-center'>
        <IoHomeOutline size={20} className='mx-1' />
        <span className='text-[20px]'>Portfolio</span>
      </li>
      <li className='flex justify-center items-center'>
        <IoHomeOutline size={20} className='mx-1' />
        <span className='text-[20px]'>Contact</span>
      </li>
    </ul>
  </div>
)}

      </header>
    </>
  )
}

export default Header;
