import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return;
    }
    setIsLoading(true);
    try {
      await axios.post('/api/signup', { name, email, password });
      alert('Signup successful! Please log in.');
      navigate('/login');
    } catch (error) {
      alert('Signup failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.div
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center px-4 sm:px-6 lg:px-8"
      style={{
        backgroundImage: 'url(https://cdn.pixabay.com/photo/2024/06/10/15/05/flower-8820894_1280.png)',
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 opacity-40"></div>
      <div
        className="relative bg-white bg-opacity-80 p-8 rounded-2xl shadow-2xl max-w-md w-full transition-transform duration-1000 transform hover:scale-105"
        style={{ animation: 'fadeIn 1s ease-in-out' }}
      >
        <h2 className="text-3xl font-bold text-black mb-6 text-center">
          Sign Up
        </h2>
        <form onSubmit={handleSignup} className="flex flex-col space-y-4">
          <label className="text-gray-700 font-semibold">Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="p-3 border border-gray-300 rounded-lg bg-gray-100 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-transform duration-300"
          />
          <label className="text-gray-700 font-semibold">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="p-3 border border-gray-300 rounded-lg bg-gray-100 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-transform duration-300"
          />
          <label className="text-gray-700 font-semibold">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="p-3 border border-gray-300 rounded-lg bg-gray-100 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-transform duration-300"
          />
          <label className="text-gray-700 font-semibold">Confirm Password</label>
          <input
            type="password"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            className="p-3 border border-gray-300 rounded-lg bg-gray-100 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-transform duration-300"
          />
          <button
            type="submit"
            className={`bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-semibold shadow-md transition-transform duration-300 transform hover:scale-105 ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={isLoading}
          >
            {isLoading ? 'Signing Up...' : 'Sign Up'}
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default Signup;
