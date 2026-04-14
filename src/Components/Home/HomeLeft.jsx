import React from "react";

export default function HomeLeft() {
  return (
    <div className="homeLeft">
      <div className="homeAnnouncementBadge">
        <span className="homeAnnouncementDot">●</span>
        <span>New Courses Available</span>
      </div>

      {/* Main Heading */}
      <div className="mainHeading">
        <h1>Master New Skills
        < span className="highlightText"> Online Anytime, </span>
        Anywhere</h1>
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
          <span className="statIcon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 21v-2a4 4 0 0 0 -4 -4h-4a4 4 0 0 0 -4 4v2" />
              <circle cx="10" cy="7" r="4" />
              <path d="M22 21v-2a4 4 0 0 0 -3 -3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          </span>
          <span className="statText">50K+ Students</span>
        </div>
        <div className="statItem">
          <span className="statIcon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 5.5a2.5 2.5 0 0 1 2.5 -2.5h4.5v18h-4.5a2.5 2.5 0 0 0 -2.5 2.5z" />
              <path d="M21 5.5a2.5 2.5 0 0 0 -2.5 -2.5h-4.5v18h4.5a2.5 2.5 0 0 1 2.5 2.5z" />
            </svg>
          </span>
          <span className="statText">200+ Courses</span>
        </div>
        <div className="statItem">
          <span className="statIcon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="8" r="4" />
              <path d="M10 14l-2 7l4 -2l4 2l-2 -7" />
            </svg>
          </span>
          <span className="statText">4.9 Rating</span>
        </div>
      </div>
    </div>
  );
}
