import React from 'react';

const testimonialData = [
  {
    name: 'Abhay Tale',
    occupation: 'Data Analyst',
    rating: '★★★★★',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAzd8vy7PaNc_jN-GOMWLdpBhXqQjxGpMaWme2UBES9TZwkUUPoliYA6Vh0g&s',
    review: '“The care and attention I received at this hospital were outstanding. The team’s expertise and the advanced facilities made my recovery quick and stress-free. I highly recommend their services to anyone in need of medical care.”'
  },
  {
    name: 'Yash Tale',
    occupation: 'Software Developer',
    rating: '★★★★★',
    image: 'https://media.licdn.com/dms/image/D4D03AQEWkW2vJtLV9g/profile-displayphoto-shrink_400_400/0/1708179223149?e=1725494400&v=beta&t=puiFwEioO07KivvjGe7zQH-Dka9bc6E5gf0XyCsJe2I',
    review: '“From the moment I stepped in, I felt like I was in safe hands. The staff was incredibly supportive, and the doctors were knowledgeable and approachable. My experience here has been nothing short of excellent.”'
  },
  {
    name: 'Liam Bower',
    occupation: 'Mechanic',
    rating: '★★★★★',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAzd8vy7PaNc_jN-GOMWLdpBhXqQjxGpMaWme2UBES9TZwkUUPoliYA6Vh0g&s',
    review: '“I was nervous about my procedure, but the team at the hospital put me at ease. Their professionalism and the state-of-the-art equipment gave me confidence that I was receiving top-notch care. I couldn’t be happier with the outcome.”'
  },
  {
    name: 'Nicky',
    occupation: 'Dancer',
    rating: '★★★★★',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAzd8vy7PaNc_jN-GOMWLdpBhXqQjxGpMaWme2UBES9TZwkUUPoliYA6Vh0g&s',
    review: '“The facilities at this hospital are first-rate, and the staff goes above and beyond to ensure you’re comfortable and well cared for. My treatment was successful, and I’m grateful for the excellent service provided.”'
  }
];

const testimonialCardClasses = 'bg-card p-6 rounded-lg shadow-lg';
const ratingStarClasses = 'text-green-500';
const imageClasses = 'w-8 h-8 rounded-full mr-2';

const TestimonialCard = ({ name, occupation, rating, image, review, largeImage }) => (
  <div className={testimonialCardClasses}>
    <div className="flex items-center mb-4">
      <span className={ratingStarClasses}>{rating}</span>
    </div>
    <p className="text-muted-foreground mb-4">{review}</p>
    <div className="flex items-center">
      <img className={largeImage ? 'w-24 h-24 rounded-full mr-4' : imageClasses} src={image} alt={name} />
      <div>
        <p className="font-bold">{name}</p>
        <p className="text-muted-foreground text-sm">{occupation}</p>
      </div>
    </div>
  </div>
);

const Testimonials = () => (
  <div className="bg-[var(--background)] text-[var(--foreground)] p-8">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-1">
          <h2 className="text-4xl font-bold mb-4">What People Say About Us</h2>
          <p className="text-muted-foreground mb-4">
            We are proud to share the experiences of our patients who have placed their trust in us. Here’s what they have to say about the care and services they received at our hospital.
          </p>
          <a href="#" className="text-primary hover:underline">View All Testimonials</a>
        </div>
        <div className="md:col-span-2">
          <TestimonialCard {...testimonialData[0]} largeImage={true} />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        {testimonialData.slice(1).map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} largeImage={false} />
        ))}
      </div>
    </div>
  </div>
);

export default Testimonials;
