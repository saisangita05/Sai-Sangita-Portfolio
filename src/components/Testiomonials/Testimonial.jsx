import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './Testimonial.css'; // Your custom CSS file
import sneha from '../../assets/sneha.jpeg';
import priya from '../../assets/priya.jpeg';
import swastik from '../../assets/swastik.jpeg';

const testimonials = [
  {
    text: "Working with Sai is always a pleasure, as she brings a positive energy and a collaborative spirit to every project. Her ability to turn ideas into fully functional, beautiful applications is truly impressive.",
    author: "Sneha Patra",
    role: "Student at Silicon University",
    image: sneha,
  },
  {
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    author: "Swastik Nayak",
    role: "Student at Silicon University",
    image: swastik,
  },
  {
    text: "My friend Sai is a real all-rounder girl, academic topper, flawless dancer, beautiful actress and she has a kind heart. Words are too less to describe her.",
    author: "Priya Gupta",
    role: "Student at Silicon University",
    image: priya,
  },
];

const Testimonial = () => {
  return (
    <div
      id="testimonialCarousel"
      className="carousel slide"
      data-ride="carousel"
      data-interval="3000"  // Automatic sliding every 3 seconds
      data-pause="hover"   // Pause on hover if needed
    >
      <div className="carousel-inner">
        {testimonials.map((testimonial, index) => (
          <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
            <div className="testimonial-card d-flex flex-column align-items-center justify-content-center">
              <div className="testimonial-content text-center">
                <div className="testimonial-quote">
                  <i className="fas fa-quote-left fa-2x"></i>
                </div>
                <p className="testimonial-text">{testimonial.text}</p>
                <div className="testimonial-author d-flex justify-content-center align-items-center mt-3">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="testimonial-author-img rounded-circle"
                  />
                  <div className="testimonial-author-info ml-3">
                    <h4>{testimonial.author}</h4>
                    <p>{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Carousel controls for manual movement if needed */}
      <a className="carousel-control-prev" href="#testimonialCarousel" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#testimonialCarousel" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
};

export default Testimonial;
