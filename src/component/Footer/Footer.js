import React from "react";
import Logo from "./logo.png";

const Footer = () => {
  return (
    <footer className="bg-white text-black py-12">
      <div className="container mx-auto flex flex-wrap">
        {/* Logo Section */}
        <div className="w-full md:w-1/4 p-4 flex flex-col items-start">
          <img src={Logo} alt="Sai Multispeciality Hospital Logo" className="mb-4 w-48 h-auto" />
          <p className="text-lg text-gray-800">
            Providing top-notch healthcare services with a focus on quality and patient satisfaction.
          </p>
        </div>

        {/* Main Services Section */}
        <div className="w-full md:w-1/4 p-4">
          <h3 className="font-bold mb-4 text-xl">Our Main Services</h3>
          <ul className="text-lg text-gray-800">
            <li className="mb-2 hover:text-black">Sample Preparations</li>
            <li className="mb-2 hover:text-black">Healthcare Labs</li>
            <li className="mb-2 hover:text-black">Advanced Microscopy</li>
            <li className="mb-2 hover:text-black">Chemical Research</li>
            <li className="mb-2 hover:text-black">Pathology Testing</li>
          </ul>
        </div>

        {/* Useful Links Section */}
        <div className="w-full md:w-1/4 p-4">
          <h3 className="font-bold mb-4 text-xl">Useful Links</h3>
          <ul className="text-lg text-gray-800">
            <li className="mb-2">
              <a href="/about" className="hover:text-black">About Us</a>
            </li>
            <li className="mb-2">
              <a href="/contact" className="hover:text-black">Contact Us</a>
            </li>
            <li className="mb-2">
              <a href="/team" className="hover:text-black">Meet Our Team</a>
            </li>
            <li className="mb-2">
              <a href="/services" className="hover:text-black">Our Services</a>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="w-full md:w-1/4 p-4">
          <h3 className="font-bold mb-4 text-xl">Contact</h3>
          <p className="text-lg text-gray-800 mb-4">
            Sai Multispeciality Hospital, <br />
            Sai Nivas, Shrigonda, Ahmednagar, India
          </p>
          <p className="text-lg">
            <span>Email: </span>
            <a href="mailto:saihospital@gmail.com" className="text-green-700 hover:text-black">saihospitalshrigonda@gmail.com</a>
          </p>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="text-center py-6 border-t border-gray-300 mt-8">
        <p className="text-lg">© 2024 Sai Hospital. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
