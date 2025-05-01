import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md py-4 px-6 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">
          FYP Finder
        </div>

        {/* Nav Links */}
        <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <li className="hover:text-blue-500 cursor-pointer">Home</li>
          <li className="hover:text-blue-500 cursor-pointer">How It Works</li>
          <li className="hover:text-blue-500 cursor-pointer">Supervisors</li>
          <li className="hover:text-blue-500 cursor-pointer">Feedback</li>
        </ul>

        {/* Bookmark Button */}
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-200">
          Bookmarks
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
