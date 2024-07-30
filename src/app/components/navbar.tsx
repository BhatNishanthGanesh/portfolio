"use client"
import React,{useState,useEffect} from 'react';
import { AnimatePresence, motion } from "framer-motion";
import { FiMail,FiCheckCircle } from "react-icons/fi";
import emailjs from 'emailjs-com'




const SpringModal = ({ isOpen, setIsOpen }: any) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const USER_ID = process.env.NEXT_PUBLIC_EMAILJS_USER_ID || '';
  const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '';
  const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '';

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setIsSending(true);

    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    };

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID)
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
        setIsSending(false);
        setIsSuccess(true);
        setName("");
        setEmail("");
        setMessage("");
        setTimeout(() => setIsOpen(false), 3000); // Close modal after 3 seconds
      })
      .catch((err) => {
        console.error('Failed to send email. Error:', err);
        setIsSending(false);
      });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
        >
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
            className="text-white p-6 bg-slate-900 rounded-lg w-full max-w-lg shadow-xl cursor-default relative overflow-hidden"
          >
            <FiMail className="text-white/10 rotate-12 text-[250px] absolute z-0 -top-24 -left-24" />
            <div className="relative z-10">
              <div className="bg-dark-700 w-16 h-16 mb-2 rounded-full text-3xl text-white grid place-items-center mx-auto">
                <FiMail />
              </div>
              <h3 className="text-3xl font-bold text-center mb-2">
                Get in Touch
              </h3>
              <p className="text-center mb-6">
                Please fill out the form below to contact me.
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full px-4 py-2 rounded text-black"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-2 rounded text-black"
                />
                <textarea
                  placeholder="Your Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  className="w-full px-4 py-2 rounded text-black"
                />
                <motion.button
                  type="submit"
                  disabled={isSending}
                  className="bg-blue-500 text-dark-800 font-semibold w-full  rounded overflow-hidden"
                  style={{padding:'1rem'}}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="flex items-center justify-center">
                    {isSending && (
                      <svg className="animate-spin h-5 w-5 text-white absolute left-1/2 transform -translate-x-1/2" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 1 1 8 8 8 8 0 0 1-8-8zm8-6a6 6 0 0 0 0 12 6 6 0 0 0 0-12z"></path>
                      </svg>
                    )}
                    {isSuccess && (
                      <FiCheckCircle className="h-6 w-6 text-white absolute left-1/2 transform -translate-x-1/2" />
                    )}
                    {!isSending && !isSuccess && "Send Message"}
                  </div>
                </motion.button>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Navbar = () => {
    const [isScrolled, setScrolled] = useState(false)
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
      const handleScroll = () => {
        const offset = window.scrollY;
        setScrolled(offset > 50);
  
        const sections = ['projects', 'achievements', 'experience'];
        let currentSection = '';
  
        for (let section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= 0 && rect.bottom >= 0) {
              currentSection = section;
              break;
            }
          }
        }
        setActiveSection(currentSection);
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  return (
    <div className={`fixed w-full  shadow-md z-50  ${isScrolled ? 'bg-slate-900 bg-opacity-70' : 'bg-slate-900 bg-opacity-100'}`}>
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <div className="flex items-center space-x-3">
          <div className="relative">
          {/* <video 
              src="/cd2.mp4" 
              
              height={50} 
              width={50} 
              className="transform transition-transform rounded-full duration-300 hover:scale-110" 
              autoPlay 
              loop 
              muted 
            /> */}
 <svg
  height="50"
  width="50"
  className="transform transition-transform rounded-full duration-300 hover:scale-110"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <defs>
    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style={{ stopColor: 'rgba(50, 50, 50, 0.8)', stopOpacity: 1 }} />
      <stop offset="100%" style={{ stopColor: 'rgba(0, 0, 0, 0.8)', stopOpacity: 1 }} />
    </linearGradient>
    <radialGradient id="grad2" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
      <stop offset="0%" style={{ stopColor: 'rgba(255, 255, 255, 0.2)', stopOpacity: 1 }} />
      <stop offset="100%" style={{ stopColor: 'rgba(0, 0, 0, 0.4)', stopOpacity: 1 }} />
    </radialGradient>
    <filter id="shadow" x="0" y="0" width="200%" height="200%">
      <feDropShadow dx="2" dy="2" stdDeviation="2" floodColor="rgba(0, 0, 0, 0.5)" />
    </filter>
  </defs>
  <circle cx="12" cy="12" r="12" fill="url(#grad1)" stroke="rgba(0, 0, 0, 0.3)" strokeWidth="2"/>
  <path
    d="M8.5 9l-3.5 3 3.5 3"
    stroke="white"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ filter: 'url(#shadow)' }}
  />
  <path
    d="M15.5 9l3.5 3-3.5 3"
    stroke="white"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ filter: 'url(#shadow)' }}
  />
  <path
    d="M12 16v-8"
    stroke="white"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ filter: 'url(#shadow)' }}
  />
</svg>



          </div>
          <span className="text-white text-sm font-bold lg:text-4xl hidden lg:block">
            BNG
          </span>
        </div>
        <div className='border border-cyan-400 bg-slate-800 shadow-lg p-2 space-x-5 rounded-full hidden sm:block'>
      <a
        href="#projects"
        className={`text-white text-md  ${activeSection === 'projects' ? 'active-link' : ''}`}
      >
        Projects
      </a>
      <a
        href="#achievements"
        className={`text-white text-md ${activeSection === 'achievements' ? 'active-link' : ''}`}
      >
        Achievements
      </a>
      <a
        href="#experience"
        className={`text-white text-md  ${activeSection === 'experience' ? 'active-link' : ''}`}
      >
        Experience
      </a>
    </div>


        <div className="flex items-center space-x-4">
            
           <div className="px-4 grid place-content-center">
      <button
        onClick={() => setIsOpen(true)}
        className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-medium px-4 py-2 rounded hover:opacity-90 transition-opacity"
      >
        Get In Touch
      </button>
      <SpringModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
        </div>
      </div>
    </div>
    
    
  );
};

export default Navbar;
