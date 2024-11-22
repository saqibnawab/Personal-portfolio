import React from 'react';
import Title from './Title';
import { FaCloudDownloadAlt, FaHandSpock } from "react-icons/fa";
import { FaRegLightbulb } from "react-icons/fa";
import { GrCompliance } from "react-icons/gr";
import { Ri24HoursFill } from "react-icons/ri";

const Aboutme = () => {
    return (
        <section className='container mx-auto bg-[#fafafa] py-10'>
            <div className="about__me w-[90%] lg:w-[80%] mx-auto">
                <Title title="About Me" text="my introduction" />
                <div className="aboutme__content flex flex-col lg:flex-row justify-center items-center gap-10 mt-5">
                    {/* Right Section */}
                    <div className="aboutme_right w-full lg:w-[50%]">
                        <div className="image text-center">
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6PB6IblRAqRygmPuH6eZK9WZQoWKYkcJPug&s"
                                alt="Profile"
                                className="block mx-auto rounded-lg h-[300px] object-cover w-[100%] max-w-[300px]"
                            />
                        </div>
                    </div>
                    {/* Left Section */}
                    <div className="aboutme_left w-full lg:w-[50%]">
                        <div className="aboutme__minibox flex flex-wrap gap-5 justify-center">
                            {/* Experience */}
                            <div className="minibox bg-[#ffffff] shadow w-[120px] h-[100px] rounded">
                                <div className="minibox_info flex flex-col items-center w-full mt-3 gap-1">
                                    <div className="icone mb-1"><FaRegLightbulb size={25} /></div>
                                    <div className="minibox_textone font-medium">Experience</div>
                                    <div className="minibox_texttwo text-slate-500 text-sm">8+</div>
                                </div>
                            </div>
                            {/* Completed */}
                            <div className="minibox bg-[#ffffff] shadow w-[120px] h-[100px] rounded">
                                <div className="minibox_info flex flex-col items-center w-full mt-3 gap-1">
                                    <div className="icone mb-1"><GrCompliance size={25} /></div>
                                    <div className="minibox_textone font-medium">Completed</div>
                                    <div className="minibox_texttwo text-slate-500 text-sm">30+ projects</div>
                                </div>
                            </div>
                            {/* Support */}
                            <div className="minibox bg-[#ffffff] shadow w-[120px] h-[100px] rounded">
                                <div className="minibox_info flex flex-col items-center w-full mt-3 gap-1">
                                    <div className="icone mb-1"><Ri24HoursFill size={25} /></div>
                                    <div className="minibox_textone font-medium">Support</div>
                                    <div className="minibox_texttwo text-slate-500 text-sm">24/7</div>
                                </div>
                            </div>
                        </div>
                        {/* About Me Text */}
                        <div className="aboutme_title mt-5 text-slate-600 text-center">
                            I am a frontend developer with expertise in building responsive,
                            visually appealing web applications using HTML, CSS, JavaScript, and React.
                            I specialize in creating clean, efficient code and user-friendly interfaces,
                            ensuring seamless user experiences across devices.
                        </div>
                        {/* Button */}
                        <div className="aboutme_button flex justify-center items-center mt-5">
                            <button className='bg-black px-5 py-3 rounded-md text-white flex items-center'>
                                <span>Download CV</span>
                                <FaHandSpock className='ml-2' />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Aboutme;
