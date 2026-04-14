import React from "react";
import "./Groups.css";

const features = [
  {
    title: "Study Groups",
    desc: "Connect with like-minded learners and form study groups for collaborative learning.",
  },
  {
    title: "Discussion Forums",
    desc: "Engage in meaningful discussions and get answers from peers and mentors.",
  },
  {
    title: "Live Sessions",
    desc: "Join live Q&A sessions and workshops with industry experts.",
  },
  {
    title: "Peer Support",
    desc: "Get help and support from fellow learners anytime you need it.",
  },
  {
    title: "Global Community",
    desc: "Connect with students from 150+ countries worldwide.",
  },
  {
    title: "Project Collaboration",
    desc: "Work on real-world projects with your peers.",
  },
];

const avatars = [
  "https://randomuser.me/api/portraits/women/68.jpg",
  "https://randomuser.me/api/portraits/women/65.jpg",
  "https://randomuser.me/api/portraits/women/44.jpg",
  "https://randomuser.me/api/portraits/women/50.jpg",
  "https://randomuser.me/api/portraits/men/32.jpg",
  "https://randomuser.me/api/portraits/men/45.jpg",
  "https://randomuser.me/api/portraits/women/33.jpg",
  "https://randomuser.me/api/portraits/women/12.jpg",
  "https://randomuser.me/api/portraits/women/22.jpg",
];

const Groups = () => {
  return (
    <section id = "groups" className="groups">
      <div className="groups-container">

        {/* LEFT */}
        <div className="groups-left">
          <p className="tag">COMMUNITY</p>

          <h2>
            Join Our Thriving <span>Learning Community</span>
          </h2>

          <p className="subtitle">
            Learning is better together. Join our community of 50,000+ students and
            unlock collaborative features that accelerate your growth.
          </p>

          <div className="features">
            {features.map((item, i) => (
              <div key={i} className="feature">
                <div className="icon">✔</div>
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <button className="btn">Join Community</button>
        </div>

        {/* RIGHT */}
        <div className="groups-right">
          <div className="avatar-grid">
            {avatars.map((img, i) => (
              <img key={i} src={img} alt="user" />
            ))}
          </div>

          {/* <div className="badge support">
            <div className="icon">💬</div> <div className="badgeText"><strong>24/7 Support</strong><span>Always here</span></div>
          </div> */}

          {/* <div className="badge countries">
            <div className="icon">🌍</div> <div className="badgeText"><strong>150+ Countries</strong><span>Worldwide reach</span></div>
          </div> */}
        </div>

      </div>
    </section>
  );
};

export default Groups;