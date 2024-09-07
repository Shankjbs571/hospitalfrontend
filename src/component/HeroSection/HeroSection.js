import React from "react";
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <div className="relative h-screen flex flex-col md:flex-row justify-start bg-gray-100 z-10">
      {/* Background image */}
      <div className="absolute inset-0 overflow-hidden mt-[-50px] z-0">
        <img
          src="https://video.lovepik.com/video_cover/2022/03/18/hospital-nurse-station-sketch-background-video-4k-video-template_84263.jpg"
          alt="Diagnostic Lab"
          className="w-full h-full opacity-80 object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative flex flex-col md:flex-row w-full justify-between items-center mt-20 z-10 p-8 text-white text-left">
        {/* Left Side Content */}
        <div className="w-full mt-[30px] md:w-1/2 px-4 mb-8 md:mb-0">
          <h1 className="text-3xl mt-[-10px] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-black font-bold leading-tight">
            Welcome to Sai Hospital
          </h1>
        </div>

        {/* Right Side Content */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center text-center px-4">
          <div>
            <p className="text-xl text-right mt-50 sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-black font-bold leading-tight mt-4">
              We’ll Ensure You Always Get The Best Doctors and Best Results.
            </p>
            <p className="text-base sm:text-lg md:text-xl text-right mt-6 md:mt-8">
              Welcome to Sai Multispeciality Hospital in Shrigonda, Ahmednagar,
              the original and largest Sai Multispeciality Hospital campus.
              Located in the heart of Shrigonda, Ahmednagar — a dynamic city
              just 90 minutes East of Pune, Sai Multispeciality Hospital has
              been safely caring for patients from around the world for more
              than 10 years.
              <span className="block text-orange-500 font-semibold mt-2">
                Sai Multispeciality Hospital will always be your safe care
                destination.
              </span>
            </p>
            <div className="mt-6 md:mt-8">
              <Link
                to="/appointment"
                className="text-gray-800 hover:text-gray-600 font-semibold"
              >
                <button className="px-4 md:ml-[500px] ml-[80px] py-3 font-bold text-base md:text-lg lg:text-xl bg-blue-500 text-white rounded-lg">
                  Make An Appointment
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
