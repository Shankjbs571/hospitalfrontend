import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import axiosInstance from '../../../axiosConfig';

const UserCardList = () => {
  const [users, setUsers] = useState([]); // State to hold users
  const [filter, setFilter] = useState('');
  const [showAddForm, setShowAddForm] = useState(false);

  const [newStaff, setNewStaff] = useState({
    fullName: '',
    username: '',
    password: '',
    mobile: '',
    email: '',
    date_of_birth: '',
    gender: '',
    bloodgroup: '',
    bio: '',
    role: '',
    address: '',
  });

  const navigate = useNavigate();

  // Fetch users from the backend when the component mounts
  // useEffect(() => {
  //   const fetchUsers = async () => {
  //     try {
  //       const response = await axios.get('http://localhost:5050/auth/users', {
  //         withCredentials: true,
  //       });
  //       setUsers(response.data); // Assuming the data returned is an array of users
  //     } catch (error) {
  //       console.error('Error fetching users:', error.response?.data || error.message);
  //     }
  //   };

  //   fetchUsers();
  // }, []);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const token = localStorage.getItem('accessToken');
  
        if (!token) {
          throw new Error('No access token provided');
        }
  
        const response = await axiosInstance.get('/auth/users', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true, 
        });
  
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error.response?.data || error.message);
      }
    };
  
    fetchUsers();
  }, []);
  

  const filteredUsers = filter
    ? users.filter((user) => user.role.toLowerCase() === filter.toLowerCase())
    : users;

  const handleCardClick = (user) => {
    navigate(`/user-details/${user._id}`, { state: { user } });
  };

  const handleAddStaff = () => {
    setShowAddForm(true);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setNewStaff((prev) => ({ ...prev, [name]: value }));
  };

  const addNewStaff = async (staffData) => {
    try {
      const response = await axiosInstance.post('/auth/signup', staffData, {
        withCredentials: true,
      });
      console.log('New staff added:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error adding new staff:', error.response?.data || error.message);
      throw error;
    }
  };

  const handleAddNewStaff = async (e) => {
    e.preventDefault();
    try {
      const addedStaff = await addNewStaff(newStaff);
      setUsers((prevUsers) => [...prevUsers, addedStaff]);
      setShowAddForm(false);
      setNewStaff({
        fullName: '',
        username: '',
        password: '',
        mobile: '',
        email: '',
        date_of_birth: '',
        gender: '',
        bloodgroup: '',
        bio: '',
        role: '',
        address: '',
      });
    } catch (error) {
      console.error('Failed to add staff:', error);
    }
  };

  const handleCancel = () => {
    setShowAddForm(false);
    setNewStaff({
      fullName: '',
      username: '',
      password: '',
      mobile: '',
      email: '',
      date_of_birth: '',
      gender: '',
      bloodgroup: '',
      bio: '',
      role: '',
      address: '',
    });
  };

  return (
    <div className="container mx-auto p-4">
      {/* Filter and Add Staff Button */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6">
        <select
          className="w-full md:w-1/3 px-4 py-2 mb-4 md:mb-0 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
          onChange={(e) => setFilter(e.target.value)}
          defaultValue=""
        >
          <option value="">All Roles</option>
          <option value="Doctor">Doctor</option>
          <option value="Patient">Patient</option>
          <option value="Admin">Admin</option>
        </select>
        <button
          onClick={handleAddStaff}
          className="w-full md:w-auto px-6 py-2 bg-blue-500 text-white rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Add Staff
        </button>
      </div>

      {/* Add New Staff Form */}
      {showAddForm && (
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-lg mb-6">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Add New Staff</h3>
          <form onSubmit={handleAddNewStaff}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Full Name */}
              <div>
                <label className="block text-gray-700 mb-1" htmlFor="fullName">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  id="fullName"
                  value={newStaff.fullName}
                  onChange={handleFormChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
                />
              </div>

              {/* Username */}
              <div>
                <label className="block text-gray-700 mb-1" htmlFor="username">
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  value={newStaff.username}
                  onChange={handleFormChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
                />
              </div>

              {/* Password */}
              <div>
                <label className="block text-gray-700 mb-1" htmlFor="password">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={newStaff.password}
                  onChange={handleFormChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
                />
              </div>

              {/* Mobile */}
              <div>
                <label className="block text-gray-700 mb-1" htmlFor="mobile">
                  Mobile No
                </label>
                <input
                  type="tel"
                  name="mobile"
                  id="mobile"
                  value={newStaff.mobile}
                  onChange={handleFormChange}
                  required
                  pattern="^\d{10}$"
                  placeholder="1234567890"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-gray-700 mb-1" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={newStaff.email}
                  onChange={handleFormChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
                />
              </div>

              {/* Date of Birth */}
              <div>
                <label className="block text-gray-700 mb-1" htmlFor="date_of_birth">
                  Date of Birth
                </label>
                <input
                  type="date"
                  name="date_of_birth"
                  id="date_of_birth"
                  value={newStaff.date_of_birth}
                  onChange={handleFormChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
                />
              </div>

              {/* Gender */}
              <div>
                <label className="block text-gray-700 mb-1" htmlFor="gender">
                  Gender
                </label>
                <select
                  name="gender"
                  id="gender"
                  value={newStaff.gender}
                  onChange={handleFormChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* Blood Group */}
              <div>
                <label className="block text-gray-700 mb-1" htmlFor="bloodgroup">
                  Blood Group
                </label>
                <select
                  name="bloodgroup"
                  id="bloodgroup"
                  value={newStaff.bloodgroup}
                  onChange={handleFormChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
                >
                  <option value="">Select Blood Group</option>
                  <option value="A+">A+</option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="B-">B-</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>
                  <option value="O+">O+</option>
                  <option value="O-">O-</option>
                </select>
              </div>

              {/* Bio */}
              <div className="md:col-span-2">
                <label className="block text-gray-700 mb-1" htmlFor="bio">
                  Bio
                </label>
                <textarea
                  name="bio"
                  id="bio"
                  value={newStaff.bio}
                  onChange={handleFormChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
                ></textarea>
              </div>

              {/* Role */}
              <div className="md:col-span-2">
                <label className="block text-gray-700 mb-1" htmlFor="role">
                  Role
                </label>
                <select
                  name="role"
                  id="role"
                  value={newStaff.role}
                  onChange={handleFormChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
                >
                  <option value="">Select Role</option>
                  <option value="Doctor">Doctor</option>
                  <option value="Patient">Patient</option>
                  <option value="Admin">Admin</option>
                </select>
              </div>

              {/* Address */}
              <div className="md:col-span-2">
                <label className="block text-gray-700 mb-1" htmlFor="address">
                  Address
                </label>
                <input
                  type="text"
                  name="address"
                  id="address"
                  value={newStaff.address}
                  onChange={handleFormChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
                />
              </div>
            </div>

            <div className="mt-6 flex justify-end">
              <button
                type="button"
                onClick={handleCancel}
                className="px-6 py-2 mr-4 bg-red-500 text-white rounded-md shadow hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2 bg-green-500 text-white rounded-md shadow hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                Add Staff
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Users List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {filteredUsers.map((user) => (
          <div
            key={user._id}
            className="bg-white p-6 rounded-lg border border-gray-200 shadow-lg cursor-pointer hover:shadow-xl transition-shadow duration-200"
            onClick={() => handleCardClick(user)}
          >
            <h2 className="text-xl font-semibold text-gray-800">{user.fullName}</h2>
            <p className="text-gray-600">{user.role}</p>
            <p className="text-gray-600">{user.email}</p>
            <p className="text-gray-600">DOB: {user.date_of_birth}</p>
            <p className="text-gray-600">Blood Group: {user.bloodgroup}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserCardList;


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const initialUsers = [
//   // Your initial users data
// ];

// const UserCardList = () => {
//   const [users, setUsers] = useState(initialUsers); // State to hold users
//   const [filter, setFilter] = useState('');
//   const [showAddForm, setShowAddForm] = useState(false);
//   const [newStaff, setNewStaff] = useState({
//     name: '',
//     username: '',
//     password: '',
//     mobile: '',
//     email: '',
//     age: '',
//     gender: '',
//     bloodGroup: '',
//     bio: '',
//     role: '',
//     specialization: '',
//     shifts: [{ from: '', to: '' }],
//     courtNo: '',
//     underDoctor: [],
//     address: '',
//   });

//   const navigate = useNavigate();

//   const filteredUsers = filter
//     ? users.filter((user) => user.role.toLowerCase() === filter.toLowerCase())
//     : users;

//   const handleCardClick = (user) => {
//     navigate(`/user-details/${user.id}`, { state: { user } });
//   };

//   const handleAddStaff = () => {
//     setShowAddForm(true);
//   };

//   const handleFormChange = (e) => {
//     const { name, value } = e.target;
//     setNewStaff((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleShiftChange = (index, e) => {
//     const { name, value } = e.target;
//     const updatedShifts = newStaff.shifts.map((shift, idx) =>
//       idx === index ? { ...shift, [name]: value } : shift
//     );
//     setNewStaff((prev) => ({ ...prev, shifts: updatedShifts }));
//   };

//   const addShift = () => {
//     setNewStaff((prev) => ({
//       ...prev,
//       shifts: [...prev.shifts, { from: '', to: '' }],
//     }));
//   };

//   const removeShift = (index) => {
//     setNewStaff((prev) => ({
//       ...prev,
//       shifts: prev.shifts.filter((_, idx) => idx !== index),
//     }));
//   };

  // const addNewStaff = async (staffData) => {
  //   try {
  //     const response = await axios.post('/auth/staff', staffData, {
  //       withCredentials: true,  // If you are using cookies for authentication
  //     });
  //     console.log('New staff added:', response.data);
  //     return response.data;
  //   } catch (error) {
  //     console.error('Error adding new staff:', error.response?.data || error.message);
  //     throw error;
  //   }
  // };

  // const handleAddNewStaff = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const addedStaff = await addNewStaff(newStaff);
  //     setUsers((prevUsers) => [...prevUsers, addedStaff]);
  //     setShowAddForm(false);
  //     setNewStaff({
  //       name: '',
  //       username: '',
  //       password: '',
  //       mobile: '',
  //       email: '',
  //       age: '',
  //       gender: '',
  //       bloodGroup: '',
  //       bio: '',
  //       role: '',
  //       specialization: '',
  //       shifts: [{ from: '', to: '' }],
  //       courtNo: '',
  //       underDoctor: [],
  //       address: '',
  //     });
  //   } catch (error) {
  //     console.error('Failed to add staff:', error);
  //   }
  // };

//   const handleCancel = () => {
//     setShowAddForm(false);
//     setNewStaff({
//       name: '',
//       username: '',
//       password: '',
//       mobile: '',
//       email: '',
//       age: '',
//       gender: '',
//       bloodGroup: '',
//       bio: '',
//       role: '',
//       specialization: '',
//       shifts: [{ from: '', to: '' }],
//       courtNo: '',
//       underDoctor: [],
//       address: '',
//     });
//   };

//   return (
//     <div className="container mx-auto p-4">
//       {/* Filter and Add Staff Button */}
//       <div className="flex flex-col md:flex-row justify-between items-center mb-6">
//         <select
//           className="w-full md:w-1/3 px-4 py-2 mb-4 md:mb-0 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
//           onChange={(e) => setFilter(e.target.value)}
//           defaultValue=""
//         >
//           <option value="">All Roles</option>
//           <option value="Doctor">Doctor</option>
//           <option value="Receptionist">Receptionist</option>
//           <option value="Admin">Admin</option>
//         </select>
//         <button
//           onClick={handleAddStaff}
//           className="w-full md:w-auto px-6 py-2 bg-blue-500 text-white rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
//         >
//           Add Staff
//         </button>
//       </div>

//       {/* Add New Staff Form */}
//       {showAddForm && (
//         <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-lg mb-6">
//           <h3 className="text-2xl font-semibold text-gray-800 mb-4">Add New Staff</h3>
//           <form onSubmit={handleAddNewStaff}>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               {/* Name */}
//               <div>
//                 <label className="block text-gray-700 mb-1" htmlFor="name">
//                   Name
//                 </label>
//                 <input
//                   type="text"
//                   name="name"
//                   id="name"
//                   value={newStaff.name}
//                   onChange={handleFormChange}
//                   required
//                   className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
//                 />
//               </div>

//               {/* Username */}
//               <div>
//                 <label className="block text-gray-700 mb-1" htmlFor="username">
//                   Username
//                 </label>
//                 <input
//                   type="text"
//                   name="username"
//                   id="username"
//                   value={newStaff.username}
//                   onChange={handleFormChange}
//                   required
//                   className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
//                 />
//               </div>

//               {/* Password */}
//               <div>
//                 <label className="block text-gray-700 mb-1" htmlFor="password">
//                   Password
//                 </label>
//                 <input
//                   type="password"
//                   name="password"
//                   id="password"
//                   value={newStaff.password}
//                   onChange={handleFormChange}
//                   required
//                   className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
//                 />
//               </div>

//               {/* Mobile */}
//               <div>
//                 <label className="block text-gray-700 mb-1" htmlFor="mobile">
//                   Mobile No
//                 </label>
//                 <input
//                   type="tel"
//                   name="mobile"
//                   id="mobile"
//                   value={newStaff.mobile}
//                   onChange={handleFormChange}
//                   required
//                   pattern="^\d{10}$"
//                   placeholder="1234567890"
//                   className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
//                 />
//               </div>

//               {/* Email */}
//               <div>
//                 <label className="block text-gray-700 mb-1" htmlFor="email">
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   name="email"
//                   id="email"
//                   value={newStaff.email}
//                   onChange={handleFormChange}
//                   required
//                   className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
//                 />
//               </div>

//               {/* Age */}
//               <div>
//                 <label className="block text-gray-700 mb-1" htmlFor="age">
//                   Age
//                 </label>
//                 <input
//                   type="number"
//                   name="age"
//                   id="age"
//                   value={newStaff.age}
//                   onChange={handleFormChange}
//                   required
//                   min="18"
//                   max="100"
//                   className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
//                 />
//               </div>

//               {/* Gender */}
//               <div>
//                 <label className="block text-gray-700 mb-1" htmlFor="gender">
//                   Gender
//                 </label>
//                 <select
//                   name="gender"
//                   id="gender"
//                   value={newStaff.gender}
//                   onChange={handleFormChange}
//                   required
//                   className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
//                 >
//                   <option value="">Select Gender</option>
//                   <option value="Male">Male</option>
//                   <option value="Female">Female</option>
//                   <option value="Other">Other</option>
//                 </select>
//               </div>

//               {/* Blood Group */}
//               <div>
//                 <label className="block text-gray-700 mb-1" htmlFor="bloodGroup">
//                   Blood Group
//                 </label>
//                 <select
//                   name="bloodGroup"
//                   id="bloodGroup"
//                   value={newStaff.bloodGroup}
//                   onChange={handleFormChange}
//                   required
//                   className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
//                 >
//                   <option value="">Select Blood Group</option>
//                   <option value="A+">A+</option>
//                   <option value="A-">A-</option>
//                   <option value="B+">B+</option>
//                   <option value="B-">B-</option>
//                   <option value="AB+">AB+</option>
//                   <option value="AB-">AB-</option>
//                   <option value="O+">O+</option>
//                   <option value="O-">O-</option>
//                 </select>
//               </div>

//               {/* Address */}
//               <div>
//                 <label className="block text-gray-700 mb-1" htmlFor="address">
//                   Address
//                 </label>
//                 <input
//                   type="text"
//                   name="address"
//                   id="address"
//                   value={newStaff.address}
//                   onChange={handleFormChange}
//                   required
//                   className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
//                 />
//               </div>

//               {/* Bio */}
//               <div className="md:col-span-2">
//                 <label className="block text-gray-700 mb-1" htmlFor="bio">
//                   Bio
//                 </label>
//                 <textarea
//                   name="bio"
//                   id="bio"
//                   value={newStaff.bio}
//                   onChange={handleFormChange}
//                   rows="3"
//                   className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
//                 ></textarea>
//               </div>

//               {/* Role */}
//               <div>
//                 <label className="block text-gray-700 mb-1" htmlFor="role">
//                   Role
//                 </label>
//                 <select
//                   name="role"
//                   id="role"
//                   value={newStaff.role}
//                   onChange={handleFormChange}
//                   required
//                   className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
//                 >
//                   <option value="">Select Role</option>
//                   <option value="Doctor">Doctor</option>
//                   <option value="Receptionist">Receptionist</option>
//                   <option value="Admin">Admin</option>
//                 </select>
//               </div>

//               {/* Specialization (for Doctors only) */}
//               {newStaff.role === 'Doctor' && (
//                 <div>
//                   <label className="block text-gray-700 mb-1" htmlFor="specialization">
//                     Specialization
//                   </label>
//                   <input
//                     type="text"
//                     name="specialization"
//                     id="specialization"
//                     value={newStaff.specialization}
//                     onChange={handleFormChange}
//                     required={newStaff.role === 'Doctor'}
//                     className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
//                   />
//                 </div>
//               )}

//               {/* Court Number (for Receptionists only) */}
//               {newStaff.role === 'Receptionist' && (
//                 <div>
//                   <label className="block text-gray-700 mb-1" htmlFor="courtNo">
//                     Court Number
//                   </label>
//                   <input
//                     type="text"
//                     name="courtNo"
//                     id="courtNo"
//                     value={newStaff.courtNo}
//                     onChange={handleFormChange}
//                     required={newStaff.role === 'Receptionist'}
//                     className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
//                   />
//                 </div>
//               )}

//               {/* Under Doctor (for Receptionists only) */}
//               {newStaff.role === 'Receptionist' && (
//                 <div className="md:col-span-2">
//                   <label className="block text-gray-700 mb-1" htmlFor="underDoctor">
//                     Under Doctor
//                   </label>
//                   <select
//                     name="underDoctor"
//                     id="underDoctor"
//                     value={newStaff.underDoctor}
//                     onChange={(e) => {
//                       const selectedOptions = Array.from(
//                         e.target.selectedOptions,
//                         (option) => option.value
//                       );
//                       setNewStaff((prev) => ({
//                         ...prev,
//                         underDoctor: selectedOptions,
//                       }));
//                     }}
//                     multiple
//                     required
//                     className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
//                   >
//                     {users
//                       .filter((user) => user.role === 'Doctor')
//                       .map((doctor) => (
//                         <option key={doctor.id} value={doctor.id}>
//                           {doctor.name}
//                         </option>
//                       ))}
//                   </select>
//                 </div>
//               )}

//               {/* Shifts */}
//               <div className="md:col-span-2">
//                 <label className="block text-gray-700 mb-1">Shifts</label>
//                 {newStaff.shifts.map((shift, index) => (
//                   <div key={index} className="flex items-center gap-4 mb-2">
//                     <input
//                       type="time"
//                       name="from"
//                       value={shift.from}
//                       onChange={(e) => handleShiftChange(index, e)}
//                       required
//                       className="w-1/2 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
//                     />
//                     <input
//                       type="time"
//                       name="to"
//                       value={shift.to}
//                       onChange={(e) => handleShiftChange(index, e)}
//                       required
//                       className="w-1/2 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
//                     />
//                     {index > 0 && (
//                       <button
//                         type="button"
//                         onClick={() => removeShift(index)}
//                         className="text-red-500 hover:text-red-700"
//                       >
//                         Remove
//                       </button>
//                     )}
//                   </div>
//                 ))}
//                 <button
//                   type="button"
//                   onClick={addShift}
//                   className="mt-2 px-4 py-2 bg-green-500 text-white rounded-md shadow hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
//                 >
//                   Add Shift
//                 </button>
//               </div>
//             </div>

//             {/* Form Actions */}
//             <div className="mt-6 flex justify-end gap-4">
//               <button
//                 type="button"
//                 onClick={handleCancel}
//                 className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md shadow hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300"
//               >
//                 Cancel
//               </button>
//               <button
//                 type="submit"
//                 className="px-6 py-2 bg-blue-500 text-white rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               >
//                 Add Staff
//               </button>
//             </div>
//           </form>
//         </div>
//       )}

//       {/* User Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        // {filteredUsers.map((user) => (
        //   <div
        //     key={user.id}
        //     onClick={() => handleCardClick(user)}
        //     className="p-4 bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg cursor-pointer transition-shadow duration-200"
        //   >
        //     <h3 className="text-xl font-semibold text-gray-800">{user.name}</h3>
        //     <p className="text-gray-600">{user.bio}</p>
        //     <p className="text-gray-500 text-sm">{user.specialization}</p>
        //     <p className="text-gray-500 text-sm">{user.role}</p>
        //   </div>
        // ))}
//       </div>
//     </div>
//   );
// };

// export default UserCardList;
