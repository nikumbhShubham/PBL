import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process login logic here
    console.log('Email:', email);
    console.log('Password:', password);
    // You can add your login logic here
  };

  return (
    <div className="min-h-screen flex items-center justify-center opacity-80 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full bg-secCo p-8 rounded-lg shadow-md flex">
        <div className="w-3/5 pr-4">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Log in to your account</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Login
              </button>
            </div>
          </form>
        </div>
        <div className="w-2/5">
          <img src="https://via.placeholder.com/400" alt="Profile" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Login;
