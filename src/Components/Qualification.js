import React, { useState } from 'react';
import Title from './Title';
import { MdCastForEducation } from "react-icons/md";
import { TbBrandYandex } from "react-icons/tb";

const Qualification = () => {
    const [activeSection, setActiveSection] = useState('Education');

    return (
        <section>
            <Title title='Qualification' text='My personal journey' />
            <div className="qualification">
                <div className="qualification_button flex justify-center items-center">
                    <button
                        className={`flex items-center px-5 font-medium py-2 ${activeSection === 'Education' ? 'active' : ''}`}
                        aria-label="Education"
                        onClick={() => setActiveSection('Education')}
                    >
                        <MdCastForEducation size={24} /> Education
                    </button>
                    <button
                        className={`flex items-center px-5 font-medium py-2 ${activeSection === 'Experience' ? 'active' : ''}`}
                        aria-label="Experience"
                        onClick={() => setActiveSection('Experience')}
                    >
                        <TbBrandYandex size={24} /> Experience
                    </button>
                </div>
                <div className="qualification_content text-center ">
                    {activeSection === 'Education' && (
                        <div>
                            <h3>Education</h3>
                            <p>Details about your educational background...</p>
                        </div>
                    )}
                    {activeSection === 'Experience' && (
                        <div >
                            <h3>Experience</h3>
                            <p>Details about your professional experience...</p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}

export default Qualification;
