import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../../axiosConfig';

export default function Appointments() {
  const [appointments, setAppointments] = useState([]);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('Current Appointment');
  const [currentTime, setCurrentTime] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    setSelectedDate(today);

    // Fetch the appointments when the component mounts
    fetchAppointments();
  }, []);

  useEffect(() => {
    const updateCurrentTime = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      setCurrentTime(`${hours}:${minutes}`);
    };

    updateCurrentTime();

    const intervalId = setInterval(updateCurrentTime, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const fetchAppointments = async () => {
    try {
      const response = await axiosInstance.get('/appointments'); 
      setAppointments(response.data);
    } catch (error) {
      console.error('Error fetching appointments:', error);
    }
  };

  const handleFilterChange = (e) => {
    setSelectedFilter(e.target.value);
    // Keep the selected date unchanged when switching filters
    if (!selectedDate) {
      const today = new Date().toISOString().split('T')[0];
      setSelectedDate(today);
    }
  };

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
    // Clear the filter when a date is manually selected
    setSelectedFilter('');
  };

  const filteredAppointments = appointments.filter((appointment) => {
    const appointmentDate = new Date(appointment.date).toISOString().split('T')[0];
    const today = new Date().toISOString().split('T')[0];
    const tomorrow = new Date();
    tomorrow.setDate(new Date().getDate() + 1);
    const tomorrowDate = tomorrow.toISOString().split('T')[0];

    if (selectedDate) {
      return appointmentDate === selectedDate;
    }

    if (selectedFilter === 'Current Appointment') {
      return appointment.status === 'Scheduled' && appointmentDate === today;
    } else if (selectedFilter === 'Upcoming Appointment') {
      return new Date(appointment.date) >= new Date(tomorrowDate);
    }

    return true;
  });

  const handleAddAppointmentClick = () => {
    navigate('/apointment');
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <div className="flex space-x-4">
          <select
            value={selectedFilter}
            onChange={handleFilterChange}
            className="px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="Current Appointment">Current Appointment</option>
            <option value="Upcoming Appointment">Upcoming Appointment</option>
          </select>
          <input
            type="date"
            value={selectedDate}
            onChange={handleDateChange}
            className="px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="time"
            value={currentTime}
            readOnly
            className="px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          onClick={handleAddAppointmentClick}
          className="px-6 py-2 bg-blue-500 text-white rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Add Appointment
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left bg-gray-200">ID</th>
              <th className="px-4 py-2 text-left bg-gray-200">Patient Name</th>
              <th className="px-4 py-2 text-left bg-gray-200">Doctor Name</th>
              <th className="px-4 py-2 text-left bg-gray-200">Date</th>
              <th className="px-4 py-2 text-left bg-gray-200">Time</th>
              <th className="px-4 py-2 text-left bg-gray-200">Status</th>
              <th className="px-4 py-2 text-left bg-gray-200">Reason</th>
            </tr>
          </thead>
          <tbody>
            {filteredAppointments.map((appointment) => (
              <tr key={appointment._id} className="border-b">
                <td className="px-4 py-2">{appointment._id}</td>
                <td className="px-4 py-2">{appointment.patient_name}</td>
                <td className="px-4 py-2">{appointment.doctor_name}</td>
                <td className="px-4 py-2">{appointment.date.split('T')[0]}</td>
                <td className="px-4 py-2">{new Date(appointment.date).toLocaleTimeString()}</td>
                <td className="px-4 py-2">
                  <span
                    className={`px-2 py-1 rounded-full text-white ${
                      appointment.status === 'Completed'
                        ? 'bg-green-500'
                        : appointment.status === 'Scheduled'
                        ? 'bg-blue-500'
                        : 'bg-red-500'
                    }`}
                  >
                    {appointment.status}
                  </span>
                </td>
                <td className="px-4 py-2">{appointment.reason}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}


// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate
// import { appointments } from '../../dummy_data/appointments_data';

// export default function Appointments() {
//   // Set the initial state for the current date and time
//   const [selectedDate, setSelectedDate] = useState('');
//   const [selectedFilter, setSelectedFilter] = useState('Current Appointment');
//   const [currentTime, setCurrentTime] = useState('');

//   // Initialize navigate function
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Set the selectedDate to today's date when the component mounts
//     const today = new Date().toISOString().split('T')[0];
//     setSelectedDate(today);
//   }, []);

//   useEffect(() => {
//     // Function to update the current time every second
//     const updateCurrentTime = () => {
//       const now = new Date();
//       const hours = String(now.getHours()).padStart(2, '0');
//       const minutes = String(now.getMinutes()).padStart(2, '0');
//       setCurrentTime(`${hours}:${minutes}`);
//     };

//     // Initial call to set the current time
//     updateCurrentTime();

//     // Update the current time every second
//     const intervalId = setInterval(updateCurrentTime, 1000);

//     // Clear the interval when the component unmounts
//     return () => clearInterval(intervalId);
//   }, []);

//   const handleFilterChange = (e) => {
//     setSelectedFilter(e.target.value);
//     setSelectedDate(''); // Clear the selected date when the filter is changed
//   };

//   const handleDateChange = (e) => {
//     setSelectedDate(e.target.value);
//     setSelectedFilter(''); // Clear the filter when a date is selected
//   };

//   const filteredAppointments = appointments.filter((appointment) => {
//     const appointmentDate = new Date(appointment.appointment_date).toISOString().split('T')[0];
//     const today = new Date().toISOString().split('T')[0];
//     const tomorrow = new Date();
//     tomorrow.setDate(new Date().getDate() + 1);
//     const tomorrowDate = tomorrow.toISOString().split('T')[0];

//     if (selectedDate) {
//       // Show appointments for the selected date only
//       return appointmentDate === selectedDate;
//     }

//     if (selectedFilter === 'Current Appointment') {
//       return appointment.status === 'Scheduled' && appointmentDate === today;
//     } else if (selectedFilter === 'Upcoming Appointment') {
//       return new Date(appointment.appointment_date) >= new Date(tomorrowDate);
//     }

//     return true;
//   });

//   // Function to handle the "Add Appointment" button click
//   const handleAddAppointmentClick = () => {
//     navigate('/apointment'); // Navigate to the Appointment Form route
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <div className="flex justify-between items-center mb-4">
//         <div className="flex space-x-4">
//           <select
//             value={selectedFilter}
//             onChange={handleFilterChange}
//             className="px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//           >
//             <option value="Current Appointment">Current Appointment</option>
//             <option value="Upcoming Appointment">Upcoming Appointment</option>
//           </select>
//           <input
//             type="date"
//             value={selectedDate}
//             onChange={handleDateChange}
//             className="px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//           <input
//             type="time"
//             value={currentTime}
//             readOnly
//             className="px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>
//         <button
//           onClick={handleAddAppointmentClick} // Add onClick handler
//           className="px-6 py-2 bg-blue-500 text-white rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
//         >
//           Add Appointment
//         </button>
//       </div>
//       <div className="overflow-x-auto">
//         <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
//           <thead>
//             <tr>
//               <th className="px-4 py-2 text-left bg-gray-200">ID</th>
//               <th className="px-4 py-2 text-left bg-gray-200">Patient Name</th>
//               <th className="px-4 py-2 text-left bg-gray-200">Doctor Name</th>
//               <th className="px-4 py-2 text-left bg-gray-200">Date</th>
//               <th className="px-4 py-2 text-left bg-gray-200">Time</th>
//               <th className="px-4 py-2 text-left bg-gray-200">Status</th>
//               <th className="px-4 py-2 text-left bg-gray-200">Reason</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredAppointments.map((appointment) => (
//               <tr key={appointment.appointment_id} className="border-b">
//                 <td className="px-4 py-2">{appointment.appointment_id}</td>
//                 <td className="px-4 py-2">{appointment.patient_name}</td>
//                 <td className="px-4 py-2">{appointment.doctor_name}</td>
//                 <td className="px-4 py-2">{appointment.appointment_date}</td>
//                 <td className="px-4 py-2">{appointment.time}</td>
//                 <td className="px-4 py-2">
//                   <span
//                     className={`px-2 py-1 rounded-full text-white ${
//                       appointment.status === 'Completed'
//                         ? 'bg-green-500'
//                         : appointment.status === 'Scheduled'
//                         ? 'bg-blue-500'
//                         : 'bg-red-500'
//                     }`}
//                   >
//                     {appointment.status}
//                   </span>
//                 </td>
//                 <td className="px-4 py-2">{appointment.reason}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }
