import React from 'react';
import { useLocation } from 'react-router-dom';

const UserDetails = () => {
  const location = useLocation();
  const { user } = location.state;

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">{user.name}</h2>
        
        <form className="mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700">Role:</label>
              <input
                type="text"
                value={user.role}
                className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg"
                readOnly
              />
            </div>
            <div>
              <label className="block text-gray-700">Specialization:</label>
              <input
                type="text"
                value={user.specialization}
                className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg"
                readOnly
              />
            </div>
            <div>
              <label className="block text-gray-700">Email:</label>
              <input
                type="email"
                value={user.email}
                className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg"
                readOnly
              />
            </div>
            <div>
              <label className="block text-gray-700">Age:</label>
              <input
                type="number"
                value="45"
                className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <label className="block text-gray-700">Mobile Number:</label>
              <input
                type="text"
                value="123-456-7890"
                className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <label className="block text-gray-700">Address:</label>
              <input
                type="text"
                value="123 Main St, City, Country"
                className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg"
              />
            </div>
          </div>
        </form>

        <div className="flex justify-between mt-6">
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
            Update
          </button>
          <button className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
