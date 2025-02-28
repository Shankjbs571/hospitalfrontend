import { Routes, Route } from "react-router-dom";
import Home from "../views/Home/Home";
import Doct from "../views/Doct/Doct";
import Doctor from "../views/Doctor/Doctor";
import Login from "../views/Login/Login";
import Signup from "../views/Signup/Signup";
import Opd from "../views/Opd/Opd";
import Services from "../views/Services/Services";
import About from "../views/About/About"; 
import Contact from "../views/Contact/Contact";
import Appointment from "../views/Appointment/Appointment";
import AppointmentWithDoctorId from "../views/Appointment/AppointmentWithDoctorId";
import PatientDashboard from "../dashboards/PatientDashboard";
import Glam from "../views/Glam/glam";

function NewRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/doct" element={<Doct />} />
        <Route path="/doctor" element={<Doctor />} />
        <Route path="/glam" element={<Glam />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} /> 
        <Route path="/opd" element={<Opd />} />
        <Route path="/services" element={<Services />} />
        <Route path="/appointment" element={<Appointment />} /> 
        <Route path="/appointment/:doctorId" element={<AppointmentWithDoctorId />} /> 
        <Route path="/patientdashboard" element={<PatientDashboard />} />

      </Routes>
    </div>
  );
}

export default NewRoutes;
