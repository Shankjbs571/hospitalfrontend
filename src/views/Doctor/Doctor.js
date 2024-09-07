import React from 'react';
import './style.css';
import Navbar from '../../component/Navbar/Navbar';
import { useNavigate } from "react-router-dom";
import { jwtDecode } from 'jwt-decode';

import { useState, useEffect } from 'react';
import axiosInstance from '../../axiosConfig';


const doctors = [
  {
    id : 1,
    name: "Dr. Mandar Bhosle",
    day: "Sunday",
    dateOfMonth: "Every 3rd Sunday",
    timing: "3:00 PM - 6:00 PM",
    phone: "9422739424",
    specialty: "MBBS Ortho",
  },
  {
    id : 2,
    name: "Dr. Abhay Patel",
    day: "Monday",
    dateOfMonth: "Every Monday",
    timing: "12:00 PM - 3:00 PM",
    phone: "9422739424",
    specialty: "MBBS Ortho",
  },
  {
    id : 3,
    name: "Dr. Rahul Triumke",
    day: "Wednesday",
    dateOfMonth: "Every Wednesday",
    timing: "11:00 AM - 1:00 PM",
    phone: "9422739424",
    specialty: "Cardiologist",
  },
  {
    id : 4,
    name: "Dr. Dhananjay Ware",
    day: "Tuesday",
    dateOfMonth: "Every Tuesday",
    timing: "4:00 PM - 6:00 PM",
    phone: "9422739424",
    specialty: "Cardiologist",
  },
  {
    id : 5,
    name: "Dr. Mandar Bhosle",
    day: "Sunday",
    dateOfMonth: "Every 3rd Sunday",
    timing: "3:00 PM - 6:00 PM",
    phone: "9422739424",
    specialty: "Neurosurgeon",
  },
  {
    id : 6,
    name: "Dr. Rahul Triumke",
    day: "Monday",
    dateOfMonth: "Every Monday",
    timing: "12:00 PM - 3:00 PM",
    phone: "9422739424",
    specialty: "Nephrologist",
  },
];

const Dashboard = () => {
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


  const handleBookAppointment = async (doctor) => {
    // Logic to redirect to the appointment booking page with the selected doctor
    // Example: redirecting to a specific route
    if (!isLoggedIn){
      navigate("/login");
      return ;
    }
    // window.location.href = `/book-appointment?doctor=${encodeURIComponent(doctor.name)}`;
    console.log("on navigate to appointment: ",doctor.id)
    navigate(`/appointment/${doctor.id}`);

    const payload = { 
      patientInfo : userInfo,
      doctor_id : doctor.id,
    }
  };


  return (
   <>
   <Navbar/>
    <div className="dashboard-container pt-20">
     
     <main>
       <div className="doctor-list-container">
         <div className="doctor-list-header">
           <h2>All Doctors</h2>
           <h3>Active Doctors</h3>
           <button className="add-new-button">Make an appointment</button>
         </div>
         <table className="doctor-table">
           <thead>
             <tr>
               <th>Physician Name</th>
               <th>Day</th>
               <th>Date of Month</th>
               <th>Timing</th>
               <th>Contact Number</th>
               <th>Specialty</th>
               <th>Actions</th>
             </tr>
           </thead>
           <tbody>
             {doctors.map((doctor, index) => (
               <tr key={index}>
                 <td>{doctor.name}</td>
                 <td>{doctor.day}</td>
                 <td>{doctor.dateOfMonth}</td>
                 <td>{doctor.timing}</td>
                 <td>{doctor.phone}</td>
                 <td className={`specialty ${doctor.specialty.toLowerCase().replace(' ', '-')}`}>
                   {doctor.specialty}
                 </td>
                 <td>
                   <button
                     className="book-appointment-button"
                     onClick={() => handleBookAppointment(doctor)}
                   >
                     Book Appointment
                   </button>
                 </td>
               </tr>
             ))}
           </tbody>
         </table>
         <div className="pagination">
           <button className="page-button">Previous</button>
           <button className="page-button">1</button>
           <button className="page-button">2</button>
           <button className="page-button">Next</button>
         </div>
       </div>
     </main>
   </div>
   </>
  );
};

export default Dashboard;
