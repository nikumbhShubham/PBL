import React, { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className={`  opacity-80 p-4  ${isOpen ? '' : 'sticky top-0'}`}>
            <div className="container flex justify-between items-center mx-auto">
                <div className="flex items-center ">
                    <a href="/" className="text-white font-bold text-2xl mr-48">BleuprintUI</a>
                </div>
                <div className="hidden md:flex justify-between items-center">
                    <a href="/" className="text-white text-lg font-bold hover:text-blue-600 px-3 py-2">Home</a>
                    <a href="/" className="text-white text-lg font-bold hover:text-blue-600 px-3 py-2">About</a>
                    <a href="/" className="text-white text-lg font-bold hover:text-blue-600 px-3 py-2">Services</a>
                    <a href="/" className="text-white text-lg font-bold hover:text-blue-600 px-3 py-2">Contact</a>
                </div>
                <div className="md:hidden">
                    <button
                        className="text-white focus:outline-none transition duration-300"
                        onClick={toggleMenu}
                    >
                        <svg
                            className={`h-6 w-6 ${isOpen ? 'transform rotate-90' : ''}`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16m-7 6h7"
                            />
                        </svg>
                    </button>
                </div>
            </div>
            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden">
                    <a href="/" className="block text-white hover:text-blue-600 px-3 py-2">Home</a>
                    <a href="/" className="block text-white hover:text-blue-600 px-3 py-2">About</a>
                    <a href="/" className="block text-white hover:text-blue-600 px-3 py-2">Services</a>
                    <a href="/" className="block text-white hover:text-blue-600 px-3 py-2">Contact</a>
                </div>
            )}
        </nav>
    );
};

// const App = () => {
//   return (
//     <div>
//       <Navbar />
//       <div className="container mx-auto p-4">
//         <h1 className="text-3xl font-bold">Hello, world!</h1>
//         <p className="mt-4">This is a sticky and responsive navbar example.</p>
//       </div>
//     </div>
//   );
// };

export default Navbar;
