import React from 'react';
import Title from './Title';
import { HiArrowSmRight } from "react-icons/hi";

const Portfilo = () => {
    return (
        <>
            <section className='bg-[#fafafa]'>
                <Title title="Portfilo" text="Most recent work" />
                <div className="btn flex justify-center items-center gap-5 mt-5 mb-4">
                    <button className=" px-3 py-2 rounded-md font-semibold">All</button>
                    <button className=" px-3 py-2 rounded-md font-semibold">Front_end</button>
                    <button className=" px-3 py-2 rounded-md font-semibold">Back_end</button>
                </div>

                {/* Grid container without any gap */}
                <div className="flex justify-center">
                    <div className="portfolio_container grid grid-cols-1  md:grid-cols-3 gap-5 justify-items-center ">

                        <div className="box h-[220px] w-[350px] relative flex flex-col items-center justify-center group">
                            <div className="image h-[90%] w-[90%] relative">
                                <img
                                    src="https://d1u4v6449fgzem.cloudfront.net/2020/03/The-Ecommerce-Business-Model-Explained.jpg"
                                    alt=""
                                    className="object-cover h-full w-full mx-auto rounded-md"
                                />
                                {/* Buttons visible on hover */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50">
                                    <button className="bg-yellow-400 text-white px-4 py-2 m-2 rounded-md hover:bg-yellow-400">
                                        Show Code
                                    </button>
                                    <button className="bg-yellow-400 text-white px-4 py-2 m-2 rounded-md hover:bg-yellow-400">
                                        Show Demo
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="box h-[220px] w-[350px] relative flex flex-col items-center justify-center group">
                            <div className="image h-[90%] w-[90%] relative">
                                <img
                                    src="https://d1u4v6449fgzem.cloudfront.net/2020/03/The-Ecommerce-Business-Model-Explained.jpg"
                                    alt=""
                                    className="object-cover h-full w-full mx-auto rounded-md"
                                />
                                {/* Buttons visible on hover */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50">
                                    <button className="bg-yellow-400 text-white px-4 py-2 m-2 rounded-md hover:bg-yellow-400">
                                        Show Code
                                    </button>
                                    <button className="bg-yellow-400 text-white px-4 py-2 m-2 rounded-md hover:bg-yellow-400">
                                        Show Demo
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="box h-[220px] w-[350px] relative flex flex-col items-center justify-center group">
                            <div className="image h-[90%] w-[90%] relative">
                                <img
                                    src="https://d1u4v6449fgzem.cloudfront.net/2020/03/The-Ecommerce-Business-Model-Explained.jpg"
                                    alt=""
                                    className="object-cover h-full w-full mx-auto rounded-md"
                                />
                                {/* Buttons visible on hover */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50">
                                    <button className="bg-yellow-400 text-white px-4 py-2 m-2 rounded-md hover:bg-yellow-400">
                                        Show Code
                                    </button>
                                    <button className="bg-yellow-400 text-white px-4 py-2 m-2 rounded-md hover:bg-yellow-400">
                                        Show Demo
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="box h-[220px] w-[350px] relative flex flex-col items-center justify-center group">
                            <div className="image h-[90%] w-[90%] relative">
                                <img
                                    src="https://d1u4v6449fgzem.cloudfront.net/2020/03/The-Ecommerce-Business-Model-Explained.jpg"
                                    alt=""
                                    className="object-cover h-full w-full mx-auto rounded-md"
                                />
                                {/* Buttons visible on hover */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50">
                                    <button className="bg-yellow-400 text-white px-4 py-2 m-2 rounded-md hover:bg-yellow-400">
                                        Show Code
                                    </button>
                                    <button className="bg-yellow-400 text-white px-4 py-2 m-2 rounded-md hover:bg-yellow-400">
                                        Show Demo
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="box h-[220px] w-[350px] relative flex flex-col items-center justify-center group">
                            <div className="image h-[90%] w-[90%] relative">
                                <img
                                    src="https://d1u4v6449fgzem.cloudfront.net/2020/03/The-Ecommerce-Business-Model-Explained.jpg"
                                    alt=""
                                    className="object-cover h-full w-full mx-auto rounded-md"
                                />
                                {/* Buttons visible on hover */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50">
                                    <button className="bg-yellow-400 text-white px-4 py-2 m-2 rounded-md hover:bg-yellow-400">
                                        Show Code
                                    </button>
                                    <button className="bg-yellow-400 text-white px-4 py-2 m-2 rounded-md hover:bg-yellow-400">
                                        Show Demo
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="box h-[220px] w-[350px] relative flex flex-col items-center justify-center group">
                            <div className="image h-[90%] w-[90%] relative">
                                <img
                                    src="https://d1u4v6449fgzem.cloudfront.net/2020/03/The-Ecommerce-Business-Model-Explained.jpg"
                                    alt=""
                                    className="object-cover h-full w-full mx-auto rounded-md"
                                />
                                {/* Buttons visible on hover */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50">
                                    <button className="bg-yellow-400 text-white px-4 py-2 m-2 rounded-md hover:bg-yellow-400">
                                        Show Code
                                    </button>
                                    <button className="bg-yellow-400 text-white px-4 py-2 m-2 rounded-md hover:bg-yellow-400">
                                        Show Demo
                                    </button>
                                </div>
                            </div>
                        </div>

                       


                    </div>
                </div>

            </section>
        </>
    );
}

export default Portfilo;


