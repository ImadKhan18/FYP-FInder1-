import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white mt-12">
      <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Logo / App Info */}
        <div>
          <h2 className="text-2xl font-bold mb-2 text-blue-400">FYP Finder</h2>
          <p className="text-sm text-gray-300">
            Helping students find their ideal final year project supervisors with ease and clarity.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">How It Works</a></li>
            <li><a href="#" className="hover:text-white">Supervisors</a></li>
            <li><a href="#" className="hover:text-white">Feedback</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
          <p className="text-gray-400 text-sm">Email: support@fypfinder.com</p>
          <p className="text-gray-400 text-sm mt-1">Phone: +92 300 1234567</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center py-4 border-t border-gray-700 text-sm text-gray-400">
        © {new Date().getFullYear()} FYP Finder. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
