import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-blue-600 to-indigo-700 shadow-lg">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h2 className="text-white text-2xl font-bold tracking-wide">SmartPharma</h2>
        <div className="space-x-6">
          <Link to="/" className="text-white hover:text-gray-200">Home</Link>
          <Link to="/pricing" className="text-white hover:text-gray-200">Pricing</Link>
          <Link to="/login" className="text-white hover:text-gray-200">Login</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
