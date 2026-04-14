import React from "react";
import "./pricing.css";

const PricingCard = ({ plan }) => {
  return (
    <div className={`pricing-card ${plan.popular ? "popular" : ""}`}>
      
      {plan.popular && <div className="badge">Most Popular</div>}

      <h3>{plan.name}</h3>
      <p className="subtitle">{plan.subtitle}</p>

      <h2 className="price">
        {plan.price}
        {plan.duration && <span>{plan.duration}</span>}
      </h2>

      <ul className="features">
        {plan.features.map((item, index) => (
          <li key={index}>✔ {item}</li>
        ))}
      </ul>

      <button className={`btn ${plan.popular ? "primary" : ""}`}>
        {plan.button}
      </button>
    </div>
  );
};

export default PricingCard;