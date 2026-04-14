import { useState } from "react";
import React from "react";

export default function HomeRight() {
  const [videoPlayer, setVideoPlayer] = useState(false);
  const badgeAvatars = [
    "https://randomuser.me/api/portraits/women/68.jpg",
    "https://randomuser.me/api/portraits/women/65.jpg",
    "https://randomuser.me/api/portraits/women/44.jpg",
  ];

  return (
    <div className="homeRight">
      {/* Video Player */}
      {videoPlayer && (
        <div className="videoPlayer">
          <button className="closeButton" onClick={() => setVideoPlayer(false)}>
            ✕
          </button>
          <iframe
            src="https://www.youtube.com/embed/S5fYinte7bE?si=0N8kwmaEW_E2CH6A"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      )}
      {/* Hero Image Container */}

      <div className="heroImage">
        <img
          src="https://themewagon.github.io/learnhub/assets/images/hero-img.jpg"
          alt="Student learning"
        />

        {/* Play Button Overlay */}
        <button onClick={() => setVideoPlayer(true)} className="playButton">
          ▶
        </button>

        {/* Top Right Badge */}
        <div className="topRightBadge">
          <div className="profilePics">
            {badgeAvatars.map((avatar, index) => (
              <img key={index} className="pic" src={avatar} alt="" aria-hidden="true" />
            ))}
          </div>
          <div className="badgeTextGroup">
            <p className="badgeLabelBold">Join 50k+</p>
            <p className="badgeLabel">Students</p>
          </div>
        </div>

        {/* Bottom Left Badge */}
        <div className="bottomLeftBadge">
          <span className="badgeIcon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 5.5a2.5 2.5 0 0 1 2.5 -2.5h4.5v18h-4.5a2.5 2.5 0 0 0 -2.5 2.5z" />
              <path d="M21 5.5a2.5 2.5 0 0 0 -2.5 -2.5h-4.5v18h4.5a2.5 2.5 0 0 1 2.5 2.5z" />
            </svg>
          </span>
          <div className="badgeTextGroup">
            <p className="badgeLabelBold">200+ Courses</p>
            <p className="badgeLabel">Available Now</p>
          </div>
        </div>
      </div>
    </div>
  );
}
