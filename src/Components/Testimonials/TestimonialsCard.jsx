import React from "react";
import "./testimonials.css";

const TestimonialCard = ({ data }) => {
  return (
    <div className="testimonial-card">
      
      <div className="stars">★★★★★</div>

      <div className="quote">❝</div>

      <p className="message">{data.message}</p>

      <div className="divider"></div>

      <div className="user">
        <img src={data.img} alt={data.name} />
        <div>
          <h4>{data.name}</h4>
          <p>{data.role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;