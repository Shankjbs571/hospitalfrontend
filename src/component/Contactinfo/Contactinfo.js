import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faPhone,
  faClock,
} from "@fortawesome/free-solid-svg-icons";

const ContactInfo = () => {
  const infoBoxStyle = (bgColor) => ({
    background: bgColor,
    padding: "20px",
    marginBottom: "20px",
    borderRadius: "10px",
  });

  return (
    <div className="md:w-1/3 p-4">
      <div className="bg-gray-100 p-5 mb-5 rounded-lg">
        <h4 className="text-lg font-semibold mb-2">
          <FontAwesomeIcon icon={faMapMarkerAlt} /> OUR LOCATIONS
        </h4>
        <p>
          Sai Multispeciality Hospital, Sai Nivas, Shrigonda, Ahmednagar, India
        </p>
      </div>
      <div className="bg-blue-100 p-5 mb-5 rounded-lg">
        <h4 className="text-lg font-semibold mb-2">
          <FontAwesomeIcon icon={faPhone} /> CONNECT WITH US
        </h4>
        <p>
          CALL: +91 02487-221525
          <br />
          +91 02487-221525
        </p>
      </div>
      <div className="bg-teal-100 p-5 mb-5 rounded-lg">
        <h4 className="text-lg font-semibold mb-2">
          <FontAwesomeIcon icon={faClock} /> VISITING HOURS
        </h4>
        <p>
          Sunday: 08:00 AM - 10:00 PM
          <br />
          Monday - Friday: 05:00 AM - 12:00 AM
        </p>
      </div>
    </div>
  );
};

export default ContactInfo;
