import React from 'react';
import Title from './Title';
import { SiFrontendmentor } from "react-icons/si";

const Services = () => {
    return (
        <section className="container mx-auto bg-[#fafafa] px-5 py-10">
            <Title title="My Services" text="What I Offer" />
            <div className="flex flex-wrap justify-center gap-6">
                <ServiceCard
                    icon={<SiFrontendmentor size={30} />}
                    title="Web Development"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem fugiat in odio vitae ut natus maiores, facere veritatis."
                />
                <ServiceCard
                    icon={<SiFrontendmentor size={30} />}
                    title="App Development"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem fugiat in odio vitae ut natus maiores, facere veritatis."
                />
                <ServiceCard
                    icon={<SiFrontendmentor size={30} />}
                    title="UI/UX Design"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem fugiat in odio vitae ut natus maiores, facere veritatis."
                />
            </div>
        </section>
    );
};

// Reusable Service Card Component
const ServiceCard = ({ icon, title, description }) => {
    return (
        <div className="services_box shadow-lg w-full sm:w-[300px] bg-white rounded-lg">
            <div className="services_text grid place-items-center text-center px-5 py-6">
                <p className="mb-3 text-primary">{icon}</p>
                <h1 className="text-lg font-semibold mb-3">{title}</h1>
                <p className="text-sm text-gray-600">{description}</p>
            </div>
        </div>
    );
};

export default Services;
