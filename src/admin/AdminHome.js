import React, { useState } from 'react';
import Sidebar from "./components/global/Sidebar";
import Dash from "./components/global/Dash";
import Appointments from './components/global/Appointments';

export default function AdminHome({main, heading}){
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

    return(
        <div className="app">
          <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
          <main className={`content transition-all duration-300 ${isOpen ? 'ml-64' : 'ml-16'}`}>
          <h2 className="p-6 text-3xl font-bold">{heading}</h2>
            { main }          
          </main>
        </div>
    );
}