import React from "react";
import MentorCard from "./MentorCard";
import "./Mentors.css";

const mentors = [
  {
    name: "John Smith",
    role: "Web Development Expert",
    desc: "8+ years experience in data analysis and machine learning. Former Data Scientist at Facebook.",
    students: "20K+",
    courses: 10,
    rating: 4.9,
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Sarah Johnson",
    role: "Digital Marketing Guru",
    desc: "10+ years experience in digital marketing and SEO strategies. Former Marketing Manager at Google.",
    students: "15K+",
    courses: 8,
    rating: 4.8,
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Mike Chen",
    role: "Data Science Specialist",
    desc: "7+ years experience in data analysis and machine learning. Former Data Scientist at Facebook.",
    students: "18K+",
    courses: 12,
    rating: 4.9,
    img: "https://randomuser.me/api/portraits/men/46.jpg",
  },
  {
    name: "Emma Davis",
    role: "Graphic Design Artist",
    desc: "9+ years experience in graphic design and visual arts. Former Creative Director at Adobe.",
    students: "22K+",
    courses: 9,
    rating: 4.8,
    img: "https://randomuser.me/api/portraits/women/65.jpg",
  },
];

const Mentors = () => {
  return (
    <section id="mentors" className="mentors-section">
      <p className="tag">MENTORS</p>
      <h2>
        Learn From Industry <span>Experts</span>
      </h2>
      <p className="subtitle">
        Our mentors are industry leaders with years of experience in their respective fields.
      </p>

      <div className="mentor-grid">
        {mentors.map((mentor, index) => (
          <MentorCard key={index} mentor={mentor} />
        ))}
      </div>
    </section>
  );
};

export default Mentors;