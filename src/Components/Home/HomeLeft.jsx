import React from "react";

export default function HomeLeft() {
  return (
    <div className="homeLeft">
      {/* Badge */}
      <div className="badge">
        <span className="badgeDot">●</span>
        <span>New Courses Available</span>
      </div>

      {/* Main Heading */}
      <div className="mainHeading">
        <h1>Master New Skills</h1>
        <h1 className="highlightText">Online Anytime, Anywhere</h1>
      </div>

      {/* Description */}
      <p className="description">
        Join over 50,000+ students learning from world-class mentors. Transform your career with industry-leading courses.
      </p>

      {/* Buttons */}
      <div className="buttonGroup">
        <button className="btnPrimary">Start Learning →</button>
        <button className="btnSecondary">▶ YouTube Channel</button>
      </div>

      {/* Stats */}
      <div className="statsContainer">
        <div className="statItem">
          <span className="statIcon">👥</span>
          <span className="statText">50K+ Students</span>
        </div>
        <div className="statItem">
          <span className="statIcon">📚</span>
          <span className="statText">200+ Courses</span>
        </div>
        <div className="statItem">
          <span className="statIcon">⭐</span>
          <span className="statText">4.9 Rating</span>
        </div>
      </div>
    </div>
  );
}