import React from 'react';
import Title from './Title';
import { MdOutlineEmail } from "react-icons/md";
import { IoIosArrowRoundForward } from "react-icons/io";

const Contact = () => {
  return (
    <section className='container mx-auto h-auto  py-8'>
      <Title title="Contact me" text="Get in touch with me" />
      <div className="contact flex flex-col md:flex-row gap-5 justify-center h-auto md:h-[500px]">
        {/* Right Section */}
        <div className="contact_right w-full md:w-[250px] h-auto md:h-full rounded-lg flex flex-col gap-3">
          <h1 className="text-white text-center md:text-left">Talk to Me</h1>
          <div className="contact_box h-auto bg-[#ffffff] rounded flex justify-center items-center flex-col p-4">
            <p><MdOutlineEmail size={30} /></p>
            <h3 className='font-medium'>Email</h3>
            <p className='text-slate-500'>Saqibnawab@gmail.com</p>
            <button className='flex items-center text-slate-500'>
              <span>Write me</span>
              <span><IoIosArrowRoundForward className='block' /></span>
            </button>
          </div>
          <div className="contact_box h-auto bg-[#ffffff] rounded flex justify-center items-center flex-col p-4">
            <p><MdOutlineEmail size={30} /></p>
            <h3 className='font-medium'>Email</h3>
            <p className='text-slate-500'>Saqibnawab@gmail.com</p>
            <button className='flex items-center text-slate-500'>
              <span>Write me</span>
              <span><IoIosArrowRoundForward className='block' /></span>
            </button>
          </div>
          <div className="contact_box h-auto bg-[#ffffff] rounded flex justify-center items-center flex-col p-4">
            <p><MdOutlineEmail size={30} /></p>
            <h3 className='font-medium'>Email</h3>
            <p className='text-slate-500'>Saqibnawab@gmail.com</p>
            <button className='flex items-center text-slate-500'>
              <span>Write me</span>
              <span><IoIosArrowRoundForward className='block' /></span>
            </button>
          </div>
        </div>

        {/* Left Section */}
        <div className="contact_left w-full md:w-[600px] h-auto bg-white rounded-lg p-8">
          <h3 className="mb-6 text-2xl text-center">Write me a project</h3>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-start text-sm font-medium text-gray-700 mb-2">Name</label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 "
                placeholder="Your Name"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-start text-sm font-medium text-gray-700 mb-2">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 "
                placeholder="Your Email"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-start text-sm font-medium text-gray-700 mb-2">Message</label>
              <textarea
                id="message"
                rows="6"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 "
                placeholder="Your Message"
              ></textarea>
            </div>
            <div className="text-start">
              <button
                type="submit"
                className="px-6 py-2 text-white rounded-lg bg-black "
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
