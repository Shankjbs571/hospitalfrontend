import React from 'react';
import 'tailwindcss/tailwind.css';

const Header = () => {
  return (
    <header className="relative bg-cover bg-center h-72 text-white flex items-center justify-center text-center font-sans" style={{ backgroundImage: 'url(https://images.pexels.com/photos/245240/pexels-photo-245240.jpeg?cs=srgb&dl=pexels-atbo-66986-245240.jpg&fm=jpg)' }}>
      <div className="absolute inset-0 bg-black bg-opacity-50 "></div>
      <div className="relative z-20 p-5">
        <h1 className="mt-5 text-4xl font-bold tracking-wide animate-fadeInDown">Contact Us</h1>
        <p className="  text-white text-3xl font-semibold  animate-fadeInUp">We are here to help you with any questions or concerns</p>
      </div>
    </header>
  );
};

export default Header;
