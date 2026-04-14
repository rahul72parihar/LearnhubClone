import React from "react";
import "./Mentors.css";

const MentorCard = ({ mentor }) => {
  return (
    <div className="mentor-card">
      <div className="mentor-img-wrapper">
        <img src={mentor.img} alt={mentor.name} className="mentor-img" />
        <div className="rating-badge">
          {mentor.rating} ⭐
        </div>
      </div>

      <h3>{mentor.name}</h3>
      <p className="role">{mentor.role}</p>

      <p className="desc">{mentor.desc}</p>

      <div className="stats">
        <span><strong>{mentor.students}</strong> Students</span>
        <span><strong>{mentor.courses}</strong> Courses</span>
      </div>

      <div className="socials">
        <span>x</span>
        <span>in</span>
        <span>⚙</span>
      </div>
    </div>
  );
};

export default MentorCard;