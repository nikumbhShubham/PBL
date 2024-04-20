import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
const HeroSection = () => {
    // const navigate = useNavigate();

    // const handleGetStarted = () => {
    //     // Redirect to the registration page
    //     navigate('/register');
    // };
    return (
        <div className="py-32 px-6 text-center">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-5xl text-white font-bold mt-10 mb-6">Build faster with Blueprint UI </h1>
                <p className="text-xl text-gray-300 mb-14 break-words">A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.</p>
                <button
                    // onClick={handleGetStarted}
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full mr-4">Get Started
                </button>
                <a href="#" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full">Github</a>
            </div>
        </div>
    );
};



// const App = () => {
//   return (
//     <div>
//       <HeroSection />
//       <div className="container mx-auto p-4">
//         <h2 className="text-3xl font-bold">Welcome to my website</h2>
//         <p className="mt-4">This is a simple example of a hero section inspired by the Tailwind CSS official website.</p>
//       </div>
//     </div>
//   );
// };

export default HeroSection;
