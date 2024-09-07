import React from 'react';
import "./About.css";

import ContactInfo from '../../component/Contactinfo/Contactinfo';
import Navbar from '../../component/Navbar/Navbar';
import Footer from '../../component/Footer/Footer';
import NewLester from '../../component/NewLester/NewLester';
import ExpertTeam from '../../component/Team/Team';
import WhyChooseUs from '../../component/WhyChooseUs/WhyChooseUs';
import QuickContact from '../../component/QuickContact/QuickContact';

function Contact() {
  return (
    <div>
      <Navbar />
      <div className="App pt-20">
        <header className="relative bg-cover bg-center h-96 text-white flex items-center justify-center text-center font-sans shadow-lg" style={{ backgroundImage: 'url(https://images.pexels.com/photos/245240/pexels-photo-245240.jpeg?cs=srgb&dl=pexels-atbo-66986-245240.jpg&fm=jpg)' }}>
          <div className="absolute inset-0 bg-black bg-opacity-60 z-10"></div>
          <div className="relative z-20 p-5">
            <h1 className="mt-5 text-5xl font-extrabold tracking-wide animate-fadeInDown">About Us</h1>
            <p className="text-2xl font-light animate-fadeInUp">We are here to help you with any questions or concerns</p>
          </div>
        </header>
       
      </div>
      <WhyChooseUs />
      <ExpertTeam />
      <QuickContact />
     
      <div className="container mx-auto px-6 py-12 text-left bg-gray-50 shadow-md rounded-lg">
          <section className="mb-12">
            <h2 className="text-4xl font-bold mb-6 text-teal-600">Our Mission</h2>
            <p className="text-lg text-gray-800 leading-relaxed">
              Our mission is to provide top-notch healthcare services that empower individuals to lead healthy and fulfilling lives. We believe in compassionate care and personalized treatment for each of our patients. Our goal is to make healthcare accessible, reliable, and affordable for everyone.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-4xl font-bold mb-6 text-teal-600">Our Vision</h2>
            <p className="text-lg text-gray-800 leading-relaxed">
              We envision a world where healthcare is not just a necessity but a right. A place where advanced medical technology meets compassionate care, ensuring the best outcomes for our patients. We strive to be a leader in the healthcare industry, setting new standards in patient care and innovation.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-4xl font-bold mb-6 text-teal-600">Why Choose Us</h2>
            <p className="text-lg text-gray-800 leading-relaxed">
              Choosing us means choosing excellence in healthcare. Our team of expert professionals is dedicated to providing you with the best medical care. We offer a wide range of services tailored to meet your specific needs. With state-of-the-art facilities and a patient-first approach, we are committed to your well-being.
            </p>
          </section>

          <section>
            <h2 className="text-4xl font-bold mb-6 text-teal-600">Our Values</h2>
            <ul className="list-disc list-inside text-lg text-gray-800 leading-relaxed">
              <li>Integrity: Upholding the highest standards of professionalism and ethics in all our actions.</li>
              <li>Compassion: Treating every patient with empathy, kindness, and respect.</li>
              <li>Innovation: Constantly evolving and adopting the latest medical advancements.</li>
              <li>Excellence: Striving for the highest quality in every aspect of our work.</li>
              <li>Collaboration: Working together with patients, families, and healthcare professionals to achieve the best outcomes.</li>
            </ul>
          </section>
        </div>
        <NewLester />
      <Footer />
    </div>
  );
}

export default Contact;
