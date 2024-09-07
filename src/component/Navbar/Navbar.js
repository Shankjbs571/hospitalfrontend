import React, { useState, useEffect } from "react";
import logo from "./logo.png";
import axiosInstance from "../../axiosConfig";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from 'jwt-decode';
import { ToastContainer,toast } from "react-toastify";



function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const navigate = useNavigate()


  const getUserInfoFromToken = () => {
    const token = localStorage.getItem('token');
    
    if (!token) { 
      console.log("null token"); 
      setIsLoggedIn(false);
      return null };

    try {
        const decodedToken = jwtDecode(token);
        setIsLoggedIn(true);
        return decodedToken; 
    } catch (error) {
        console.error('Invalid token:', error);
        return null;
    }
  };

  useEffect(() => {
    const userData = getUserInfoFromToken();
    setUserInfo(userData);
    console.log(userData);
  }, []);

  // const checkAuthStatus = () => {
  //   // Check if the token exists in cookies
  //   const token = Cookies.get('token'); // replace 'token' with your cookie name
  //   if (token) {
  //     setIsLoggedIn(true);
  //   } else {
  //     setIsLoggedIn(false);
  //   }
  // };

  const handlelogout = async () => {
    try{
        const res = await axiosInstance.post('/auth/logout')
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        toast.success("Logout Successful!");
        setIsLoggedIn(false);
        navigate("/");
    } catch(e){
        console.log(e)
    }
  };

  // Check authentication status when the component mounts
  // useEffect(() => {
  //   checkAuthStatus();
  // }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white bg-opacity-50 shadow-md fixed top-0 w-full z-10">
      <ToastContainer />
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-2 ">
          <div className="flex-shrink-0">
            <a
              href="#home"
              className="text-2xl lg:ml-20 font-bold text-gray-800"
            >
              <img src={logo} alt="Logo" className="w-36 h-28" />
            </a>
          </div>
          <div className="hidden md:block">
            <ul className="flex lg:space-x-12 text-lg lg:mr-20">
              <li>
                <a href="/" className="text-gray-800 hover:text-gray-600 font-semibold">
                  Home
                </a>
              </li>
              <li>
                <a href="/doctor" className="text-gray-800 hover:text-gray-600 font-semibold">
                  Doctors List
                </a>
              </li>  
              <li>
                <a href="/glam" className="text-gray-800 hover:text-gray-600 font-semibold">
                    Glam
                </a>
              </li>     
              <li>
                <a href="/services" className="text-gray-800 hover:text-gray-600 font-semibold">
                  Services
                </a>
              </li>
              <li>
                <a href="/appointment" className="text-gray-800 hover:text-gray-600 font-semibold"> {/* Updated href */}
                  Appointment
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-800 hover:text-gray-600 font-semibold">
                  About
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-800 hover:text-gray-600 font-semibold">
                  Contact
                </a>
              </li>
                { !isLoggedIn && (
                  <li>
                    <a href="/signup" className="text-gray-800 hover:text-gray-600 font-semibold">
                      Signup
                    </a>
                  </li>
                )}
              <li>
                {isLoggedIn ? (
                  <a onClick={handlelogout} className="text-gray-800 hover:text-gray-600 font-semibold">
                  Logout
                </a>
                )
              : (
                <a href="/login" className="text-gray-800 hover:text-gray-600 font-semibold">
                  Login
                </a>
              )}
              </li>
            </ul>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-800 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
        <ul className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <li>
            <a
              href="/"
              className="block text-gray-800 hover:bg-gray-200 rounded-md px-3 py-2 font-semibold"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/about"
              className="block text-gray-800 hover:bg-gray-200 rounded-md px-3 py-2 font-semibold"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="/services"
              className="block text-gray-800 hover:bg-gray-200 rounded-md px-3 py-2 font-semibold"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="/appointment"  /* Updated href */
              className="block text-gray-800 hover:bg-gray-200 rounded-md px-3 py-2 font-semibold"
            >
              Appointment
            </a>
          </li>
          <li>
            <a
              href="/contact"
              className="block text-gray-800 hover:bg-gray-200 rounded-md px-3 py-2 font-semibold"
            >
              Contact
            </a>
          </li>
          <li>
            <a
              href="/doctor"
              className="block text-gray-800 hover:bg-gray-200 rounded-md px-3 py-2 font-semibold"
            >
              Doctors List
            </a>
          </li>
          <li>
            <a
              href="/glam"
              className="block text-gray-800 hover:bg-gray-200 rounded-md px-3 py-2 font-semibold"
            >
              Glam
            </a>
          </li>
          <li>
          {isLoggedIn ? (
                  <div onClick={handlelogout} className="text-gray-800 hover:text-gray-600 font-semibold">
                  Logout
                </div>
                )
              : (
                <a href="/login" className="text-gray-800 hover:text-gray-600 font-semibold">
                  Login
                </a>
              )}
          </li>
          <li>
          {isLoggedIn ? (
                  <div onClick={handlelogout} className="text-gray-800 hover:text-gray-600 font-semibold">
                  Logout
                </div>
                )
              : (
                <a href="/login" className="text-gray-800 hover:text-gray-600 font-semibold">
                  Login
                </a>
              )}
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
