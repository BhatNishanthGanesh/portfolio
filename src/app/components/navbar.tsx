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
          <video 
              src="/cd2.mp4" 
              
              height={50} 
              width={50} 
              className="transform transition-transform rounded-full duration-300 hover:scale-110" 
              autoPlay 
              loop 
              muted 
            />
          </div>
          <span className="text-white text-sm font-bold lg:text-4xl hidden lg:block">
            BNG
          </span>
        </div>
        <div className="flex items-center space-x-4">
          {/* <button className="group bg-black relative min-h-[50px] w-40 overflow-hidden border border-purple-500 hover:text-purple-500 shadow-2xl transition-all before:absolute rounded-lg before:left-0 before:top-0 before:h-0 before:w-1/4 before:bg-purple-500 before:duration-500 after:absolute after:bottom-0 after:right-0 after:h-0 after:w-1/4 after:bg-purple-500 after:duration-500 text-white hover:before:h-full hover:after:h-full">
            <span className="top-0 flex h-full w-full items-center justify-center before:absolute before:bottom-0 before:left-1/4 before:z-0 before:h-0 before:w-1/4 before:bg-purple-500 before:duration-500 after:absolute after:right-1/4 after:top-0 after:z-0 after:h-0 after:w-1/4 after:bg-purple-500 after:duration-500 hover:text-white group-hover:before:h-full group-hover:after:h-full"></span>
            <span className="absolute bottom-0 left-0 right-0 top-0 z-10 flex h-full w-full items-center justify-center group-hover:text-white">Get In Touch</span>
          </button> */}
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
