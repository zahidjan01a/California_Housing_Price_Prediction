import React from 'react';

function Pricing() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-20 text-center">
      <h1 className="text-4xl font-bold text-blue-800 mb-12">Choose Your Subscription Plan</h1>
      <div className="flex justify-center gap-10 flex-wrap">
        <div className="bg-white shadow-xl p-8 rounded-2xl w-72 hover:scale-105 transition">
          <h2 className="text-2xl font-semibold mb-2 text-gray-800">Basic</h2>
          <p className="text-blue-600 text-3xl font-bold mb-4">$10<span className="text-base">/month</span></p>
          <p className="text-gray-500 mb-6">For small pharmacies (up to 50 patients)</p>
          <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">Subscribe</button>
        </div>

        <div className="bg-gradient-to-b from-indigo-600 to-blue-600 text-white shadow-xl p-8 rounded-2xl w-72 hover:scale-105 transition">
          <h2 className="text-2xl font-semibold mb-2">Premium</h2>
          <p className="text-3xl font-bold mb-4">$25<span className="text-base">/month</span></p>
          <p className="opacity-90 mb-6">For large pharmacies (unlimited patients)</p>
          <button className="bg-white text-blue-600 px-5 py-2 rounded-lg font-semibold hover:bg-gray-100 transition">Subscribe</button>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
