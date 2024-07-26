"use client";
import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-800 via-gray-900 to-black text-gray-200 py-8">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
        <div className="flex justify-center space-x-6 mb-6">
          <a href="https://github.com/BhatNishanthGanesh" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-100 transition duration-300">
            <FaGithub className="text-2xl" />
          </a>
          <a href="https://www.linkedin.com/in/nishanth-bhat-80853a228/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-100 transition duration-300">
            <FaLinkedin className="text-2xl" />
          </a>
          <a href="https://x.com/Nishant81025211" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-100 transition duration-300">
            <FaTwitter className="text-2xl" />
          </a>
          <a href="https://www.instagram.com/nishanthbhat_19/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-100 transition duration-300">
            <FaInstagram className="text-2xl" />
          </a>
        </div>
        <p className="text-gray-500 mb-4">&copy; {new Date().getFullYear()} Bhat Nishanth Ganesh. All rights reserved.</p>
        <p className="text-gray-500">Built with ❤️ using Next.js and Tailwind CSS</p>
      </div>
    </footer>
  );
}
