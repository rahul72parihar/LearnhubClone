import React from "react";
import TestimonialsCard from "./TestimonialsCard";
import "./Testimonials.css";

const testimonials = [
  {
    name: "Alex Thompson",
    role: "Software Developer at Meta",
    message:
      "LearnHub completely transformed my career. The web development bootcamp gave me the skills I needed to land my dream job at Meta. The mentors are incredible!",
    img: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "Jessica Lee",
    role: "UX Designer at Spotify",
    message:
      "The UI/UX design course was exactly what I needed. The practical projects and mentor feedback helped me build a portfolio that got me hired at Spotify.",
    img: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "David Park",
    role: "Data Analyst at Amazon",
    message:
      "I switched careers from marketing to data science thanks to LearnHub. The structured curriculum and supportive community made the transition seamless.",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Maria Garcia",
    role: "Freelance Designer",
    message:
      "As a freelancer, I needed flexible learning. LearnHub's self-paced courses fit perfectly into my schedule. Highly recommend!",
    img: "https://randomuser.me/api/portraits/women/50.jpg",
  },
  {
    name: "James Wilson",
    role: "Startup Founder",
    message:
      "The marketing course helped me understand how to grow my startup. The ROI has been incredible - best investment in my education.",
    img: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    name: "Emily Chen",
    role: "Product Manager at Google",
    message:
      "The combination of technical and business courses gave me a unique edge. I've recommended LearnHub to all my colleagues.",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials-section">
      
      <h2>What Our Students Say</h2>
      <p className="subtitle">
        Join thousands of successful students who have transformed their careers with LearnHub.
      </p>

      <div className="testimonial-grid">
        {testimonials.map((item, index) => (
          <TestimonialsCard key={index} data={item} />
        ))}
      </div>

    </section>
  );
};

export default Testimonials;