import React from "react";

// First Component
const VideoSection = () => {
  return (
    <div className="w-full h-screen">
      <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/JZ6DejA9lmc"
        title="YouTube video"
        allowFullScreen
      ></iframe>
    </div>
  );
};

// Second Component
const TrustedBySection = () => {
  return (
    <div className="grid grid-cols-2 gap-2 p-4">
      {[...Array(4)].map((_, index) => (
        <div key={index} className="bg-gray-200 p-4 text-center">
          <h2 className=" text-2xl text-black font-bold flex">Trusted By thousands</h2>
          <p>
            Supported and trusted by millions of users and recognised in 200+ countries
          </p>
        </div>
      ))}
    </div>
  );
};

// Third Component
const IntroductorySection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center p-4 bg-white">
      <div className="w-full md:w-1/2 p-4">
        <img
          src="https://plus.unsplash.com/premium_photo-1661281280284-613996db31ee?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Placeholder"
          className="w-full h-auto"
        />
      </div>
      <div className="w-full md:w-1/2 p-4">
        <h2 className="text-2xl font-bold flex">Welcome to my community, I'm Vivek</h2>
        <p className="mt-4 ">
          Growing up in India, I faced significant challenges with severe acne
          and scarring, and the negative comments from those around me were
          difficult to endure. This experience drove me to establish a medical
          practice that blends empathy with cutting-edge innovation. My team and
          I are dedicated to providing specialized care for all skin types and
          tones, exclusively using treatments that are scientifically validated.
          So join us in this new adventure where every care is personal and get 
          yourself more glowy and glassy.
        </p>
        <button className="mt-4 bg-gray-500  text-white py-2 px-2">
          Consult Right Now
        </button>
        <div className="text-right mt-4">
          <p>– Dr. Vivek</p>
          <p>MBBS, MS</p>
        </div>
      </div>
    </div>
  );
};

const DynamicCheckupCard = () => {
    
    const checkupItems = [
      { id: 1, title: "ACNE >", src: "https://plus.unsplash.com/premium_photo-1706557115599-c5ce88552cdc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YWNuZSUyMGZhY2UlMjBob3NwaXRhbHxlbnwwfHwwfHx8MA%3D%3D" },
      { id: 2, title: "Blackheads >", src: "https://plus.unsplash.com/premium_photo-1682088209248-c9cac22df472?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YmxhY2toZWFkfGVufDB8fDB8fHww" },
      { id: 3, title: "Surgical Procedure >", src: "https://images.unsplash.com/photo-1633219664572-473fd988a44f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHN1cmlnY2FsJTIwaG9zcGl0YWx8ZW58MHx8MHx8fDA%3D" },
      { id: 4, title: "Pimples >", src: "https://plus.unsplash.com/premium_photo-1679750867410-7f226618d3e0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGltcGxlc3xlbnwwfHwwfHx8MA%3D%3D" },
      { id: 5, title: "ACNE >", src: "https://plus.unsplash.com/premium_photo-1706557115599-c5ce88552cdc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YWNuZSUyMGZhY2UlMjBob3NwaXRhbHxlbnwwfHwwfHx8MA%3D%3D" },
      { id: 6, title: "Blackheads >", src: "https://plus.unsplash.com/premium_photo-1682088209248-c9cac22df472?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YmxhY2toZWFkfGVufDB8fDB8fHww" },
      { id: 7, title: "Surgical Procedure >", src: "https://images.unsplash.com/photo-1633219664572-473fd988a44f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHN1cmlnY2FsJTIwaG9zcGl0YWx8ZW58MHx8MHx8fDA%3D" },
      { id: 8, title: "Pimples >", src: "https://plus.unsplash.com/premium_photo-1679750867410-7f226618d3e0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGltcGxlc3xlbnwwfHwwfHx8MA%3D%3D" },
    ];
  
    return (
      <div className="grid grid-cols-4 gap-6 p-6">
        {checkupItems.map((item) => (
          <div
            key={item.id}
            className="relative bg-cover bg-center p-4 text-center shadow-md cursor-pointer hover:scale-105 transition-all duration-300 h-36 w-full"
            style={{ backgroundImage: `url(${item.src})` }}
          >
            <div className="absolute bottom-0 left-0 right-0 text-black bg-opacity-100 py-2 rounded-b-md">
              <h2 className="text-lg font-bold">{item.title}</h2>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  

  const TestimonialsCarousel = () => {
    const testimonials = [
      {
        name: "Ankit Rai",
        testimonial:
          "Supported and trusted by millions of users and recognised in 200+ countries",
      },
      {
        name: "Ankit Rai",
        testimonial:
          "Supported and trusted by millions of users and recognised in 200+ countries",
      },
    ];
  
    return (
      <div className="flex items-center bg-gray-200 justify-between p-8">
        <button className="p-3 text-orange-500 text-2xl font-bold hover:scale-110 transition-all duration-300">
          {"<"}
        </button>
        <div className="flex justify-between w-full px-20">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 text-center w-64 h-64 flex flex-col justify-center items-center space-y-4"
            >
              <div className="bg-gray-400 w-24 h-24 rounded-full"></div>
              <h3 className="mt-2 font-bold text-lg">{testimonial.name}</h3>
              <p className="mt-2 text-sm text-gray-700">{testimonial.testimonial}</p>
            </div>
          ))}
        </div>
        <button className="p-3 text-orange-500 text-2xl font-bold hover:scale-110 transition-all duration-300">
          {">"}
        </button>
      </div>
    );
  };
  

  const DynamicCardWithImage = () => {
    const dummyData = [
      {
        imgSrc: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?q=80&w=2052&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Free Checkup",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing Quisquee placerat Convallis felis vitae tortor augue. Velit nascetur massa in.",
        link: "#",
      },
      {
        imgSrc: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?q=80&w=2052&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Free Checkup",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing Quisquee placerat Convallis felis vitae tortor augue. Velit nascetur massa in.",
        link: "#",
      },
      {
        imgSrc: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?q=80&w=2052&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Free Checkup",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing Quisquee placerat Convallis felis vitae tortor augue. Velit nascetur massa in.",
        link: "#",
      },
      {
        imgSrc: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?q=80&w=2052&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Free Checkup",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing Quisquee placerat Convallis felis vitae tortor augue. Velit nascetur massa in.",
        link: "#",
      },
      {
        imgSrc: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?q=80&w=2052&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Free Checkup",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing Quisquee placerat Convallis felis vitae tortor augue. Velit nascetur massa in.",
        link: "#",
      },
      {
        imgSrc: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?q=80&w=2052&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Free Checkup",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing Quisquee placerat Convallis felis vitae tortor augue. Velit nascetur massa in.",
        link: "#",
      },
    ];
  
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
        {dummyData.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105"
          >
            <img src={item.imgSrc} alt={item.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
              <p className="mt-2 text-gray-600 text-sm">{item.content}</p>
              <a href={item.link} className="mt-4 inline-block text-blue-600 hover:text-blue-800">
                Learn More →
              </a>
            </div>
          </div>
        ))}
      </div>
    );
  };
  

// Seventh Component
const ContactSection = () => {
    return (
      <div className="p-6 bg-white">
        <h2 className="text-2xl font-bold text-center text-blue-900 mb-2">Contact</h2>
        <p className="text-sm justify-center flex font-semibold text-blue-600 mb-8 uppercase">Get in Touch</p>
        <div className="flex justify-center gap-4">
          <div className="w-64 h-64 p-4 bg-blue-100 rounded-lg shadow-lg flex flex-col items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-900 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10l1.546-1.54c.245-.244.632-.29.926-.123l1.785.978c.318.174.741.02.928-.298L9 6.548c.245-.425.745-.674 1.26-.673H14.74c.515 0 1.015.248 1.26.673l.815 1.457c.186.318.609.473.928.298l1.785-.978c.294-.167.681-.12.926.123L21 10m-9 7v5m-4-5v5m8-5v5" />
            </svg>
            <h4 className="font-semibold text-lg text-blue-900 mb-2">Emergency</h4>
            <p className="text-base text-blue-900">(237) 681-812-255</p>
            <p className="text-base text-blue-900">(237) 666-331-894</p>
          </div>
          <div className="w-64 h-64 p-4 bg-blue-900 rounded-lg shadow-lg flex flex-col items-center justify-center text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m2-5h-5l1.5 1.5H16V7.5H7.5V5h5L9 3m12 9c0 5-4.6 9-9 9-4.6 0-9-4-9-9 0-4.4 3.4-8 8-9h2c2.8 1 6 5 6 9z" />
            </svg>
            <h4 className="font-semibold text-lg mb-2">Location</h4>
            <p className="text-base">0123 Some place</p>
            <p className="text-base">9876 Some country</p>
          </div>
          <div className="w-64 h-64 p-4 bg-blue-100 rounded-lg shadow-lg flex flex-col items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-900 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13v7a2 2 0 01-2 2H6a2 2 0 01-2-2v-7M16 3.5v5h1.5M8 3.5v5H9m-1 2.5h6" />
            </svg>
            <h4 className="font-semibold text-lg text-blue-900 mb-2">Email</h4>
            <p className="text-base text-blue-900">fildineesoe@gmail.com</p>
            <p className="text-base text-blue-900">mybstudios@gmail.com</p>
          </div>
          <div className="w-64 h-64 p-4 bg-blue-100 rounded-lg shadow-lg flex flex-col items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-900 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7.5 12H5.6a2.8 2.8 0 000 5.6h.9m6.2 0H14m-7 0h1.4a2.8 2.8 0 010-5.6H7m5 0h-1.4a2.8 2.8 0 100 5.6H12m1.4 0H14M12 12V9a3 3 0 00-6 0v3m6 0a3 3 0 00-6 0m0 0v3m6-3v3m6-3v3m0 0V9a3 3 0 00-6 0v3" />
            </svg>
            <h4 className="font-semibold text-lg text-blue-900 mb-2">Working Hours</h4>
            <p className="text-base text-blue-900">Mon-Sat 09:00-20:00</p>
            <p className="text-base text-blue-900">Sunday Emergency only</p>
          </div>
        </div>
      </div>
    );
  };
  

// Main Glam Component
const Glam = () => {
  return (
    <div>
      <VideoSection />
      <TrustedBySection />
      <IntroductorySection />
     < DynamicCheckupCard/>
      <TestimonialsCarousel />
      <DynamicCardWithImage />
      <ContactSection />
    </div>
  );
};

export default Glam;