import React, { useState } from 'react';
import { Transition } from '@headlessui/react';

const Dashboard = () => {
    const [sidebarOpen, setSidebarOpen] = useState(true);

    return (
        <div className="flex h-screen overflow-hidden">
            {/* Sidebar */}
            <Transition
                show={sidebarOpen}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
            >
                <div className="bg-gray-800 text-white w-64 flex flex-col h-screen">
                    <div className="p-4 border-b text-2xl border-gray-700">BlueprintUI</div>
                    <div className="flex-grow p-4 overflow-y-auto">
                        <ul className="space-y-2">
                            <li className="py-2 px-4 hover:bg-gray-700 cursor-pointer">Components</li>
                            <li className="py-2 px-4 hover:bg-gray-700 cursor-pointer">UI Packages</li>
                            <li className="py-2 px-4 hover:bg-gray-700 cursor-pointer">My Projects</li>
                        </ul>
                    </div>
                    <div className="mt-auto p-4 border-t-2 border-gray-700">
                        <button className="text-white w-full">Logout</button>
                    </div>
                </div>

            </Transition>

            {/* Main Content */}
            <div className="flex-grow bg-gray-100 p-4">
                {/* Navbar */}
                <div className='flex justify-end items-center mr-4 mb-4'>
                    <button className="text-gray-800 focus:outline-none">
                        Account
                    </button>
                    <button className="text-gray-800 focus:outline-none ml-4">
                        Notification
                    </button>
                </div>
                <div className="flex justify-between items-center mb-4">
                    <button
                        className="text-gray-800 focus:outline-none lg:hidden"
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
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

                {/* Content */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="bg-white p-4 shadow-md rounded">Card 1</div>
                    <div className="bg-white p-4 shadow-md rounded">Card 2</div>
                    <div className="bg-white p-4 shadow-md rounded">Card 3</div>
                    <div className="bg-white p-4 shadow-md rounded">Card 4</div>
                    <div className="bg-white p-4 shadow-md rounded">Card 5</div>
                    <div className="bg-white p-4 shadow-md rounded">Card 6</div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
