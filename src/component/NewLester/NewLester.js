import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faPhone, faEnvelope, faPaperPlane, faNewspaper } from "@fortawesome/free-solid-svg-icons";

function NewLester() {
  return (
    <div>
      <div className="h-auto bg-blue-500 text-white py-10 px-4 md:py-20 md:px-0">
        <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-20 items-center">
          <div className="text-center md:text-left flex items-center mb-4 md:mb-0">
            <FontAwesomeIcon icon={faNewspaper} className="mr-5  text-green-500 h-10" />
            <div>
              <p className="text-2xl font-bold mb-2">
                Subscribe To Our Newsletter
              </p>
              <p className="text-lg">
                Stay in touch with us to get the latest news and special offers.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center">
            <input
              type="text"
              placeholder="Enter Your Email"
              className="border-2 mb-4 md:mb-0 md:mr-5 w-full md:w-72 p-2"
            />
            <button className="text-lg hover:bg-white hover:text-black p-2 rounded-md px-3 font-semibold flex items-center">
              Subscribe
              <FontAwesomeIcon icon={faPaperPlane} className="ml-2" />
            </button>
          </div>
        </div>
        {/* second main div */}
        <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-20 pt-10 md:pt-20 lg:gap-44">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-semibold mb-2 flex items-center">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-4 text-green-500 h-7" />
              Address
            </h2>
            <p className="text-lg">
              Sai Multispeciality Hospital Sai Nivas,
              <br /> Shrigonda, Ahmednagar, India
            </p>
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-semibold mb-2 flex items-center">
              <FontAwesomeIcon icon={faPhone} className="mr-4 text-green-500 h-7" />
              Call Us
            </h2>
            <p className="text-lg">
              +91 02487-221525
            </p>
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-semibold mb-2 flex items-center">
              <FontAwesomeIcon icon={faEnvelope} className="mr-4 text-green-500 h-7" />
              Email Us
            </h2>
            <p className="text-lg">
              saihospitalshrigonda@gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewLester;
