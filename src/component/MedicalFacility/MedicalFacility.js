import React from "react";
import Imgages from "./opd.jpg";

function MedicalFacility() {
  return (
    <div className="w-full h-screen  pt-20">
      <div className="w-[85%] mx-auto flex flex-col lg:flex-row rounded-lg relative">
        {/* Image Section */}
        <div className="w-full lg:w-[50%] bg-green-600">
          <img src={Imgages} alt="myImages" className="w-full h-full object-cover" />
        </div>

        {/* Service Information Section */}
        <div className="absolute z-10 w-[85%] sm:w-[300px] bottom-0 left-0 lg:right-[50%] bg-green-500 p-8 text-white">
          <h2 className="text-[1.5rem] sm:text-[1.7rem] font-semibold">Our main Service</h2>
          <p className="text-sm sm:text-base mt-4">
            Sai Hospital offers top-notch multispecialty services, ensuring
            expert care across various medical fields, all under one roof.
          </p>
          <div className="mt-6">
            <a href="#" className="text-white underline">
              Learn more
            </a>
          </div>
        </div>

        {/* Facility Information Section */}
        <div className="w-full lg:w-[50%] flex flex-col bg-red-400">
          <div className="flex flex-col lg:flex-row">
            {/* Facilities */}
            <div className="text-black p-6 bg-white flex-1">
              <h2 className="text-[1.5rem] sm:text-[1.7rem] font-semibold">Our Facilities</h2>
              <p className="text-sm sm:text-base mt-4">
                Our Sai Multispeciality Hospital provides advanced
                infrastructure, specialized departments, 24/7 emergency
                services, and modern ICUs.
              </p>
              <div className="mt-6">
                <a href="#" className="text-black underline">
                  Learn more
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="text-white bg-green-500 p-6 lg:p-7 flex-1">
              <h2 className="text-[1.5rem] sm:text-[1.7rem] font-semibold">Our Location</h2>
              <p className="text-sm sm:text-base mt-4">
                Sai Multispeciality Hospital Sai Nivas, Shrigonda, Ahmednagar,
                India
              </p>
              <div className="mt-6">
                <a href="#" className="text-white underline">
                  Get Direction
                </a>
              </div>
            </div>
          </div>

          {/* Appointment Section */}
          <div className="p-6 lg:p-7 bg-blue-700 text-white">
            <h2 className="text-[1.5rem] sm:text-[1.7rem] font-semibold">Make an appointment</h2>
            <p className="text-sm sm:text-base mt-4">
              Scheduling your appointment with us is simple and hassle-free.
              Whether online, by phone, or in person, our team is ready to
              assist you. Choose a time that suits you, and let us take care of
              the rest. Your health is our priority—book today and experience
              seamless care!
            </p>
            <div className="flex flex-col sm:flex-row gap-7 mt-6">
              <button className="border-[2px] border-white bg-transparent hover:bg-white hover:text-blue-700 transition px-8 py-2">
                Start Now
              </button>
              <div className="w-full sm:w-auto flex justify-center items-center">
                <div className="h-[1px] sm:h-auto sm:w-[1px] bg-white"></div>
              </div>
              <div className="text-center sm:text-left sm:pl-6">
                <p className="text-sm sm:text-base">Book an appointment</p>
                <p className="text-[1.2rem] sm:text-[1.4rem] mt-2">+91 02487-221525</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MedicalFacility;
