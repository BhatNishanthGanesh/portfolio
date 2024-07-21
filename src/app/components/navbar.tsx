"use client"
import React,{useState,useEffect} from 'react';
import Image from 'next/image';

const Navbar = () => {
    const [isScrolled, setScrolled] = useState(false)
    useEffect(() => {
      const handleScroll = () => {
        const offset = window.scrollY
        if (offset > 50) {
          setScrolled(true)
        } else {
          setScrolled(false)
        }
      }
      window.addEventListener('scroll', handleScroll)
  
      return () => {
        window.removeEventListener('scroll', handleScroll)
      }
    }, [])
  return (
    <div className={`fixed w-full  shadow-md z-50  ${isScrolled ? 'bg-slate-900 bg-opacity-70' : 'bg-slate-900 bg-opacity-100'}`}>
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <div className="flex items-center space-x-3">
          <div className="relative">
            <Image 
              src="/deve.png" 
              alt="Logo" 
              height={50} 
              width={50} 
              className="transform transition-transform duration-300 hover:scale-110"
            />
          </div>
          <span className="text-white text-2xl font-bold lg:text-4xl hidden lg:block">
            Port<span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500">folio</span>
          </span>
        </div>
        <div className="flex items-center space-x-4">
          <button className="group bg-black relative min-h-[50px] w-40 overflow-hidden border border-purple-500 hover:text-purple-500 shadow-2xl transition-all before:absolute rounded-lg before:left-0 before:top-0 before:h-0 before:w-1/4 before:bg-purple-500 before:duration-500 after:absolute after:bottom-0 after:right-0 after:h-0 after:w-1/4 after:bg-purple-500 after:duration-500 text-white hover:before:h-full hover:after:h-full">
            <span className="top-0 flex h-full w-full items-center justify-center before:absolute before:bottom-0 before:left-1/4 before:z-0 before:h-0 before:w-1/4 before:bg-purple-500 before:duration-500 after:absolute after:right-1/4 after:top-0 after:z-0 after:h-0 after:w-1/4 after:bg-purple-500 after:duration-500 hover:text-white group-hover:before:h-full group-hover:after:h-full"></span>
            <span className="absolute bottom-0 left-0 right-0 top-0 z-10 flex h-full w-full items-center justify-center group-hover:text-white">Get In Touch</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
