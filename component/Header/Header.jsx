import React, { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // State to toggle dropdown

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <header className="bg-white text-black py-4 px-6 flex justify-between items-center">
      {/* Logo and Categories */}
      <div className="flex items-center space-x-4">
        <a href="/" className="text-2xl font-bold">
          Udemy
        </a>

        {/* Categories Dropdown */}
        <div className="relative">
          <button
            onClick={toggleDropdown}
            className="text-black hover:underline flex items-center"
          >
            Categories ▼
          </button>
          {isOpen && (
            <ul className="absolute left-0 top-10 bg-white text-black border border-gray-200 rounded-md shadow-lg w-40">
              <li className="px-4 py-2 hover:bg-gray-100">
                <a href="#">Development</a>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <a href="#">Business</a>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <a href="#">Design</a>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <a href="#">Marketing</a>
              </li>
            </ul>
          )}
        </div>
      </div>

      {/* Search Bar */}
      <div className="flex-1 mx-6">
        <input
          type="text"
          placeholder="Search for anything"
          className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-black"
        />
      </div>

      {/* Navigation Links */}
      <nav>
        <ul className="flex items-center space-x-6">
          <li>
            <a href="/" className="hover:underline">
              Plans & Pricing
            </a>
          </li>
          <li>
            <a href="/business" className="hover:underline">
              Udemy Business
            </a>
          </li>
          <li>
            <a href="/teach" className="hover:underline">
              Teach on Udemy
            </a>
          </li>
          <li>
            <button className="border border-black px-4 py-2 font-bold text-sm hover:underline">
              Log in
            </button>
          </li>
          <li>
            <button className="bg-black text-white px-4 py-2 border border-black font-bold text-sm">
              Sign up
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

