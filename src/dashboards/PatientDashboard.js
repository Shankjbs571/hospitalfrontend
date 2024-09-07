import React, { useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';
import axiosInstance from '../axiosConfig';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../component/Navbar/Navbar';


const PatientDashboard = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const navigate = useNavigate()

  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getUserInfoFromToken = () => {
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');
    
    if (!token) { console.log("null token"); return null };

    try {
        const decodedToken = jwtDecode(token);
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

  const handlelogout = async () => {
    try{
        const res = await axiosInstance.post('/auth/logout')
        navigate("/");
    } catch(e){
        console.log(e)
    }

  };



  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const user = localStorage.getItem('user');
        const response = await axiosInstance.post('/Appointment/getAppointmentsByUserId', { user_id : user._id });
        
        setAppointments(response.data.appointments);
        console.log("setAppointments: ",appointments)

        setLoading(false);
      } catch (error) {
        setError(error.response ? error.response.data.message : 'An error occurred');
        setLoading(false);
      }
    };

    fetchAppointments();
  }, []);



  const patientData = {
    name: "John Doe",
    age: '-',
    gender: "Male",
    contact: "+1 (555) 123-4567",
    medicalRecordId: "MR123456",
  };

  const upcomingAppointments = [
    { date: "2024-09-05", time: "10:00 AM", doctor: "Dr. Smith" },
    { date: "2024-09-20", time: "2:00 PM", doctor: "Dr. Jones" },
  ];

  const recentTests = [
    { testName: "Blood Test", date: "2024-08-20", results: "Normal" },
    { testName: "X-Ray", date: "2024-08-15", results: "Pending" },
  ];

  const prescriptions = [
    { medication: "Medication A", dosage: "1 tablet daily", startDate: "2024-08-01", endDate: "2024-08-31" },
    { medication: "Medication B", dosage: "2 tablets twice a day", startDate: "2024-08-10", endDate: "2024-09-10" },
  ];

  return (
    <div>
    <Navbar />
    <div className="mt-32">
      {/* Navbar */}
      {/* <div className="w-full bg-teal-600 text-white bg-main-color">
        <div className="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
          <div className="p-4 flex flex-row items-center justify-between">
            <a href="#" className="text-lg font-semibold tracking-widest uppercase rounded-lg focus:outline-none focus:shadow-outline">
              Patient Dashboard
            </a>
            <button className="md:hidden rounded-lg focus:outline-none focus:shadow-outline" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
                <path className={!isMenuOpen ? 'block' : 'hidden'} fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clipRule="evenodd" />
                <path className={isMenuOpen ? 'block' : 'hidden'} fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
          <nav className={`flex-col flex-grow pb-4 md:pb-0 md:flex md:justify-end md:flex-row ${isMenuOpen ? 'flex' : 'hidden'}`}>
            <div className="relative">
              <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="flex flex-row items-center space-x-2 w-full px-4 py-2 mt-2 text-sm font-semibold text-left bg-transparent hover:bg-amber-400 md:w-auto md:inline md:mt-0 md:ml-4 hover:bg-gray-200 focus:bg-amber-500 focus:outline-none focus:shadow-outline">
                <span>{userInfo?.fullName}</span>
                <img className="inline h-6 rounded-full" src="https://avatars2.githubusercontent.com/u/24622175?s=60&v=4" alt="Profile" />
                <svg fill="currentColor" viewBox="0 0 20 20" className={`inline w-4 h-4 transition-transform duration-200 transform ${isDropdownOpen ? 'rotate-180' : 'rotate-0'}`}>
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              {isDropdownOpen && (
                <div className="absolute right-0 w-full mt-2 origin-top-right rounded-md shadow-lg md:w-48">
                  <div className="py-2 bg-white text-blue-800 text-sm rounded-sm border border-main-color shadow-sm">
                    <a className="block px-4 py-2 mt-2 text-sm bg-white md:mt-0 focus:text-gray-900 hover:bg-indigo-100 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="#">Settings</a>
                    <a className="block px-4 py-2 mt-2 text-sm bg-white md:mt-0 focus:text-gray-900 hover:bg-indigo-100 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="#">Help</a>
                    <div className="border-b"></div>
                    <a className="block px-4 py-2 mt-2 text-sm bg-white md:mt-0 focus:text-gray-900 hover:bg-indigo-100 focus:bg-gray-200 focus:outline-none focus:shadow-outline" onClick={handlelogout}>Logout</a>
                  </div>
                </div>
              )}
            </div>
          </nav>
        </div>
      </div> */}
      {/* End of Navbar */}

      <div className=" mx-auto my-5 p-5">
        <div className="md:flex md:gap-2 no-wrap md:-mx-2">
          {/* Left Side */}
          <div className="w-full md:w-3/12 md:mx-2">
            {/* Profile Card */}
            <div className="bg-white p-3 border-t-4 border-green-400">
              {/* <div className="image overflow-hidden">
                <img className="h-auto w-full mx-auto" src="https://lavinephotography.com.au/wp-content/uploads/2017/01/PROFILE-Photography-112.jpg" alt="Profile" />
              </div> */}
              <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">{userInfo?.fullName}</h1>
              <h3 className="text-gray-600 font-lg text-semibold leading-6">Patient</h3>
              <p className="text-sm text-gray-500 hover:text-gray-600 leading-6">
                Age: {patientData?.age}<br />
                Gender: {patientData?.gender}<br />
                Email: {userInfo?.email}<br />
                Medical Record ID: {userInfo?.id}
              </p>
            </div> 
            {/* End of profile card */}

            <div className="my-4"></div>
            {/* Appointments Card */}
            <div className="bg-white p-3 hover:shadow">
              <h2 className="text-gray-900 text-xl leading-8 font-semibold">Appointments</h2>
              <ul className="bg-gray-100 text-gray-600 py-2 px-3 mt-3 divide-y rounded shadow-sm">
                {appointments.length > 0 ? 
                ( appointments.map((appointment, index) => (
                  <li key={index} className="flex items-center py-3">
                    <span>{appointment.date_time} </span>
                    {/* <span className="ml-auto">{appointment.doctor}</span> */}
                  </li>
                )) )
                : 
                ( 
                  <li className="flex items-center py-3">
                    <span>No Appointments</span>
                    {/* <span className="ml-auto">{appointment.doctor}</span> */}
                  </li>
                 )
              }
              </ul>
            </div>
            {/* End of Appointments card */}

            <div className="my-4"></div>
            {/* Test Results Card */}
            <div className="bg-white p-3 hover:shadow">
              <h2 className="text-gray-900 text-xl leading-8 font-semibold">Recent Test Results</h2>
              <ul className="bg-gray-100 text-gray-600 py-2 px-3 mt-3 divide-y rounded shadow-sm">
                {recentTests.map((test, index) => (
                  <li key={index} className="flex items-center py-3">
                    <span>{test.testName} - {test.date}</span>
                    <span className="ml-auto">{test.results}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* End of Test Results card */}
          </div>
          {/* End of Left Side */}

          {/* Right Side */}
          <div className="w-full md:w-9/12 md:mx-2">
            {/* Prescription Card */}
            <div className="bg-white p-3 hover:shadow">
              <h2 className="text-gray-900 text-xl leading-8 font-semibold">Prescriptions</h2>
              <ul className="bg-gray-100 text-gray-600 py-2 px-3 mt-3 divide-y rounded shadow-sm">
                {prescriptions.map((prescription, index) => (
                  <li key={index} className="py-3">
                    <span className="block">{prescription.medication}</span>
                    <span className="block">Dosage: {prescription.dosage}</span>
                    <span className="block">From: {prescription.startDate} To: {prescription.endDate}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* End of Prescription card */}
          </div>
          {/* End of Right Side */}
        </div>
      </div>
    </div>
    </div>
  );
};

export default PatientDashboard;
