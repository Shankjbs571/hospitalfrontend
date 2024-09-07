import React from 'react';
import { FaCalendarCheck, FaUserInjured, FaUserMd, FaProcedures, FaChild, FaVirus } from 'react-icons/fa';
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import LineChart from './Line';
import { Box } from '@mui/material';


export default function Dash(){
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <Card
          title="Appointments"
          value="120"
          icon={<FaCalendarCheck className="text-white" />}
          bgColor="from-blue-400"
        />
        <Card
          title="Patients"
          value="1,200"
          icon={<FaUserInjured className="text-white" />}
          bgColor="from-green-400"
        />
        <Card
          title="Doctors"
          value="75"
          icon={<FaUserMd className="text-white" />}
          bgColor="from-yellow-500"
        />
        <Card
          title="Current Cases"
          value="320"
          icon={<FaProcedures className="text-white" />}
          bgColor="from-red-400"
        />
        <Card
          title="Child Cases"
          value="50"
          icon={<FaChild className="text-white" />}
          bgColor="from-purple-400"
        />
        <Card
          title="Diseases"
          value="45"
          icon={<FaVirus className="text-white" />}
          bgColor="from-teal-400"
        />
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6">Overview</h2>
        <p className="text-gray-700 mb-4">
          A Month-wise overview of the hospital's data.
          
        </p>
        <div className="grid p-10 grid-cols-1 gap-6">
        <Box m="20px">
          <Box height="60vh">
            <LineChart />
          </Box>
        </Box>

          <div className="bg-gray-50 p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-2">Overview</h3>
          <div className="h-40 bg-gray-200 rounded"><LineChart /></div>
          </div>
        </div>
      </div>
    </div>
  
  );
};

const Card = ({ title, value, icon, bgColor }) => {
  return (
    <div className={`p-4 rounded-lg h-32 shadow-lg flex items-center  bg-gradient-to-r ${bgColor} to-gray-200 to-95%`}>
      <div className="p-3 rounded-full bg-opacity-25 mr-4">{icon}</div>
      <div>
        <p className="text-white text-lg">{title}</p>
        <p className="text-white text-2xl font-semibold">{value}</p>
      </div>
    </div>
  );
};

