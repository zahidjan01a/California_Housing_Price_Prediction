import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="flex flex-col items-center justify-center text-center h-[90vh] bg-gradient-to-b from-indigo-50 to-white">
      <h1 className="text-5xl font-bold text-blue-800 mb-4 animate-fadeIn">Welcome to SmartPharma 💊</h1>
      <p className="text-gray-600 text-lg max-w-xl mb-8">
        A smart way for pharmacies to manage prescriptions, track refills, and improve patient adherence effortlessly.
      </p>
      <Link to="/pricing" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold shadow-md transition-all">
        View Subscription Plans
      </Link>
    </div>
  );
}

export default Home;
