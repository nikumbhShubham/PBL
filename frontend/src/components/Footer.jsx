import React from 'react';

const Footer = () => {
  return (
    <footer className=" pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-2xl font-extrabold text-white mb-4">Stay Connected</h2>
            <p className="text-gray-300 mb-4">Subscribe to our website for updates and exclusive offers.</p>
            <form className="flex items-center mb-4">
              <input
                type="email"
                className="flex-1 appearance-none bg-gray-900 border border-gray-700 rounded py-2 px-4 mr-2 text-white focus:outline-none focus:border-indigo-500"
                placeholder="Enter your email"
              />
              <button
                type="submit"
                className="bg-blue-700 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
              >
                Subscribe
              </button>
            </form>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white">
                Facebook
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                Twitter
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                Instagram
              </a>
            </div>
          </div>
          <div>
            <h2 className="text-xl font-extrabold text-white mb-4">Quick Links</h2>
            <ul className="text-gray-300">
              <li><a href="#" className="hover:text-white">Home</a></li>
              <li><a href="#" className="hover:text-white">About Us</a></li>
              <li><a href="#" className="hover:text-white">Services</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-700 pt-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <p className="text-gray-300">&copy; 2022 Your Company. All rights reserved.</p>
          <a href="#" className="text-indigo-500 hover:text-indigo-600">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
