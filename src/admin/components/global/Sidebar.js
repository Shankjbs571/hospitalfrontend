import React, { useState } from 'react';
import { FaBars, FaCalendarCheck,FaStethoscope, FaUser, FaCog, FaSignOutAlt } from 'react-icons/fa';
import { MdSpaceDashboard,MdPayments  } from "react-icons/md";
import { FaUserDoctor } from "react-icons/fa6";
import { BiHandicap } from "react-icons/bi";
import { Link } from 'react-router-dom';


const SidebarItem = ({ isOpen, path, label, icon }) => {
  return (
    <li className="flex items-center p-4 hover:bg-gray-700 cursor-pointer">
      <Link to={path} className="flex items-center">
        {icon && <icon.type />}
        {isOpen && <span className="ml-4">{label}</span>}
      </Link>
    </li>
  );
};


export default function Sidebar({ toggleSidebar,isOpen }){
  

  return (
    <div className={`flex flex-col h-screen bg-gray-800 ${isOpen ? 'w-64' : 'w-16'} transition-width duration-300 fixed`}>
      <div className="flex items-center justify-between text-white p-4">
        {isOpen && <span className="text-xl">Admin</span>}
        <FaBars className="cursor-pointer" onClick={toggleSidebar} />
      </div>
      <ul className="flex flex-col text-gray-300">
        
        <SidebarItem isOpen={isOpen} path="/admin" label="Dashboard" icon={<FaCalendarCheck />} />
    
        <SidebarItem isOpen={isOpen} path="/admin/appointments" label="Appointments" icon={<FaStethoscope />} />

        <SidebarItem isOpen={isOpen} path="/admin/doctors" label="Doctors" icon={<FaUserDoctor />} />

        <SidebarItem isOpen={isOpen} path="/admin/patients" label="Patients" icon={<BiHandicap />} />

        {/* <SidebarItem isOpen={isOpen} path="/admin/payments" label="Payments" icon={<MdPayments />} /> */}

        <SidebarItem isOpen={isOpen} path="/admin/Users" label="Staff" icon={<FaUser />} />

      </ul>
    </div>
  );
};

