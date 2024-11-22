import React from 'react';
import Title from './Title';
import { FaChevronCircleDown } from "react-icons/fa";

const Skill = () => {
    return (
        <section className='bg-[#fafafa] container mx-auto px-5 py-10'>
            <Title title="Skill" text="My technical Level" />
            <div className="skill_container flex flex-col md:flex-row justify-center items-start gap-10">
                {/* Frontend Skills */}
                <div className="skill_boxright bg-white rounded-lg w-full md:w-[30%] px-8 py-6 shadow">
                    <h3 className='text-[18px] font-medium mb-5 text-center'>Frontend Developer</h3>
                    <div className="skillcontent text-start grid grid-cols-2 sm:grid-cols-2 gap-5">
                        <SkillItem title="HTML" level="Basic" />
                        <SkillItem title="CSS" level="Intermediate" />
                        <SkillItem title="JavaScript" level="Advanced" />
                        <SkillItem title="React" level="Intermediate" />
                        <SkillItem title="Bootstrap" level="Intermediate" />
                        <SkillItem title="Tailwind" level="Intermediate" />
                    </div>
                </div>

                {/* Backend Skills */}
                <div className="skill_boxleft bg-white rounded-lg w-full md:w-[30%] px-8 py-6 shadow">
                    <h3 className='text-[18px] font-medium mb-5 text-center'>Backend Developer</h3>
                    <div className="skillcontent text-start grid grid-cols-2 sm:grid-cols-2 gap-5">
                        <SkillItem title="Node.js" level="Intermediate" />
                        <SkillItem title="Express" level="Intermediate" />
                        <SkillItem title="MongoDB" level="Intermediate" />
                        <SkillItem title="Mongoose" level="Basic" />
                        <SkillItem title="Firebase" level="Basic" />
                        <SkillItem title="API Integration" level="Intermediate" />
                    </div>
                </div>
            </div>
        </section>
    );
};

// Reusable Skill Item Component
const SkillItem = ({ title, level }) => {
    return (
        <div className="one">
            <div className="flex items-center gap-2">
                <span><FaChevronCircleDown /></span>
                <span className='font-semibold'>{title}</span>
            </div>
            <div className="ml-8 text-slate-400">{level}</div>
        </div>
    );
};

export default Skill;
