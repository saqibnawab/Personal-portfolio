import React from 'react';
import { FaSquareGithub, FaSquareInstagram, FaSquareXTwitter, FaHandSpock } from "react-icons/fa6";

const Hero = () => {
  const Personaldata = {
    name: "saqibnawab",
    email: "saqibnawab@gmail.com",
    position: "Intern Web Developer",
    description: "Assisted in developing and maintaining web applications."
  };

  return (
    <section className="container mx-auto w-full py-10  bg-[#fafafa]">
      <div className="hero_section flex  flex-col md:flex-row gap-5 justify-center items-center">
        {/* Icon Section */}
        <div className="herobox_icone  flex flex-row  md:flex-col justify-center items-center gap-5 w-[10%]">
          <span><FaSquareXTwitter size={30} /></span>
          <span><FaSquareInstagram size={30} /></span>
          <span><FaSquareGithub size={30} /></span>
        </div>

        {/* Text Section */}
        <div className="herobox_text  flex flex-col  items-center justify-center gap-3 w-full md:w-[40%]">
          <h3 className="text-5xl font-semibold">SaqibNawab</h3>
          <p className="text-[20px]"> mern stack developer </p>
          <p className='text-slate-400 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque reiciendis iure quidem numquam tenetur, porro illo voluptates debitis.</p>
          <button className="bg-black px-4 py-2 rounded flex items-center text-white">
            Say hi <FaHandSpock className="ml-2" />
          </button>
        </div>

        {/* Image and Personal Info Section */}
        <div className="herobox_image  flex flex-row items-center   relative ">
          <div className="image  w-3/4   mx-auto  bg-red-300   ">
            <img
              src="https://masseduequity.org/wp-content/uploads/2021/07/Meeting-Students-Where-they-are-0.jpg"
              alt="Profile"
              className="w-full sm:w-[600px] rounded-lg mx-auto "
            />
          </div>

          <div className="hero_object bg-black text-white rounded-lg p-4 mt-4 text-xs sm:text-[10px] absolute top-0 right-0 h-[140px] sm:w-[200px] w-[150px] md:w-[180px] lg:w-[220px]">
            <p>{`{`}</p>
            <p className="ml-2 sm:ml-4 mt-2">Name: {Personaldata.name},</p>
            <p className="ml-2 sm:ml-4">Email: {Personaldata.email},</p>
            <p className="ml-2 sm:ml-4">Position: {Personaldata.position},</p>

            <p>{`}`}</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
