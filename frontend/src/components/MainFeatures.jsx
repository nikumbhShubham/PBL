import React from 'react';
import { features } from '../Constants/index.jsx';


const MainFeatures = () => {
    return (
      <div
        className="py-20"
        // style={{
        //   backgroundImage: `url('https://plus.unsplash.com/premium_photo-1712226611084-4983941cbbf0?q=80&w=2027&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
        //   backgroundSize: 'cover',
        //   backgroundPosition: 'center',
        // }}
      >
        <div className=" opacity-90 py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-white text-center mb-8">Main Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
              {features.map((feature, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="bg-cardColor p-4 rounded-lg shadow-lg mb-4">
                    {feature.icon}
                    <h3 className="text-xl text-white font-semibold mb-2">{feature.title}</h3>
                    <p className="text-white">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };
  

// const App = () => {
//   return (
//     <div>
//       {/* Your existing HeroSection */}
//       {/* <HeroSection /> */}
//       <MainFeatures />
//       <div className="container mx-auto p-4">
//         <h2 className="text-3xl font-bold">Welcome to my website</h2>
//         <p className="mt-4">This is a simple example of a main features section using a mapped object.</p>
//       </div>
//     </div>
//   );
// };

export default MainFeatures;
