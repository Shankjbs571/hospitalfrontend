import React from "react";
import "./Contact.css";
import Header from "../Header";
import ContactInfo from "../../component/Contactinfo/Contactinfo";
import ContactForm from "../../component/ContactForm/ContactForm";
import Navbar from "../../component/Navbar/Navbar";
import Footer from "../../component/Footer/Footer";
function Contact() {
  return (
    <>
      <Navbar />
      <div>
        <Header />
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row my-5">
            <ContactInfo />
            <ContactForm />
           
          </div>
        </div>
        <Footer/>
      </div>
    </>
  );
}

export default Contact;
