import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Doctor = ({ doctors }) => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold mb-6 text-center">Our Doctors</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {doctors.map((doctor) => (
          <div key={doctor.id} className="bg-white p-6 rounded-lg shadow-lg">
            <img
              src={doctor.image || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS99bE6G1j_MJPlxG9z1yGpSFqeEt-ylJi6LWpnd5REpZYqeT3oGh90IFfcxy6PcRnQs0&usqp=CAU"}
              alt={doctor.name}
              className="w-full h-auto object-cover rounded-t-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{doctor.name}</h3>
            <p className="text-gray-700 mb-4">{doctor.specialty}</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">
              View Profile
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await axios.get('http://localhost:5050/auth/users');
        const doctorsOnly = response.data.filter(user => user.role === 'doctor');
        setDoctors(doctorsOnly);
      } catch (error) {
        console.error('Error fetching doctors:', error);
      }
    };

    fetchDoctors();
  }, []);

  return (
    <div>
      <Doctor doctors={doctors} />
    </div>
  );
};

export default Doctors;
