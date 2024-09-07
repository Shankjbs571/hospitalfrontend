import React from 'react'
import { Routes, Route } from "react-router-dom";
import AdminHome from '../admin/AdminHome';
import Appointments from '../admin/components/global/Appointments';
import Dash from '../admin/components/global/Dash';
import LineChart from '../admin/components/global/Line';
import Doctors from '../admin/components/global/Doctor';
import UserCardList from '../admin/components/global/Users'
import UserDetails from '../admin/components/global/UserDetails';

function AdminRoute() {
  return (
    <div>
      <Routes>
        <Route path="/admin" element={<AdminHome main={<Dash />} heading="DASHBOARD" />} />
        <Route path="/admin/appointments" element={<AdminHome main={<Appointments />} heading="APPOINTMENTS" />} />
        <Route path="/admin/doctors" element={<AdminHome main={<Doctors />} heading="DOCTORS" />} />
        <Route path="/admin/line" element={<LineChart />} />
        <Route path="/admin/users" element={<AdminHome main={<UserCardList />} heading="STAFF" />} />
        <Route path="/user-details/:id" element={<AdminHome main={<UserDetails />} heading="USER DETAILS" />} />
      </Routes>
    </div>
  );
}


export default AdminRoute;
// function AdminRoute() {
 
//   return (
//     <div>
      
//       <Routes>
//         <Route path="/admin" element={<AdminHome main={<Dash />} heading='DASHBOARD' />} />
//         <Route path="/admin/appointments" element={<AdminHome main = {<Appointments />} heading="APPOINTMENTS" />} />
//         <Route path="/admin/doctors" element={<AdminHome main = {<Doctors />} heading="DOCTORS" />} />
//         <Route path="/admin/line" element={<LineChart />} />
//         {/* <Route path="/admin/Users" element={<Users />} /> */}
        
//         <Route path="/admin/users" element={<AdminHome main={<UserCardList />} heading="Staff" />} />
//         <Route path="/user-details/:id" element={<AdminHome main={<UserDetails />} heading="UserDetails" />} />



//       </Routes>
//     </div>
//   );
// }
