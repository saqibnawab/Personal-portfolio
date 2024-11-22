// src/Components/ScrollButtons.js
import React from 'react';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';

const Scrolleablefun = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const scrollToBottom = () => {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    };

    return (
        <div className="fixed bottom-4 right-4 flex flex-col space-y-2">
            <button
                onClick={scrollToTop}
                className="bg-blue-500 text-white p-2 rounded shadow-md hover:bg-blue-600 transition duration-300"
                aria-label="Scroll to top"
            >
                <FaArrowUp />
            </button>
            <button
                onClick={scrollToBottom}
                className="bg-blue-500 text-white p-2 rounded shadow-md hover:bg-blue-600 transition duration-300"
                aria-label="Scroll to bottom"
            >
                <FaArrowDown />
            </button>
        </div>
    );
};

export default Scrolleablefun;
