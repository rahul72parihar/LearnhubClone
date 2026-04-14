import { useState } from "react";
import { useEffect } from "react";
import React from "react";

export default function HomeRight() {
  const [videoPlayer, setVideoPlayer] = useState(false);
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
            <span className="pic pic1">👤</span>
            <span className="pic pic2">👤</span>
            <span className="pic pic3">👤</span>
          </div>
          <div>
            <p className="badgeLabelBold">Join 50k+</p>
            <p className="badgeLabel">Students</p>
          </div>
        </div>

        {/* Bottom Left Badge */}
        <div className="bottomLeftBadge">
          <span className="badgeIcon">📚</span>
          <div>
            <p className="badgeLabel">200+ Courses</p>
            <p className="badgeLabel">Available Now</p>
          </div>
        </div>
      </div>
    </div>
  );
}
