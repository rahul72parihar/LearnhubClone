import React from "react";
import PricingCard from "./PricingCard";
import "./Pricing.css";

const plans = [
  {
    name: "Starter",
    subtitle: "Perfect for beginners",
    price: "Free",
    features: [
      "Access to 10 free courses",
      "Basic community access",
      "Email support",
      "Mobile app access",
      "Course completion certificates",
    ],
    button: "Get Started",
  },
  {
    name: "Pro",
    subtitle: "Most popular choice",
    price: "$29",
    duration: "/month",
    popular: true,
    features: [
      "Unlimited course access",
      "Full community features",
      "Priority support 24/7",
      "Downloadable resources",
      "Live Q&A sessions",
      "Project reviews",
      "Career coaching",
    ],
    button: "Start Pro Trial",
  },
  {
    name: "Enterprise",
    subtitle: "For teams & organizations",
    price: "$99",
    duration: "/month",
    features: [
      "Everything in Pro",
      "Custom learning paths",
      "Team analytics dashboard",
      "Dedicated success manager",
      "Custom integrations",
      "SSO authentication",
      "Invoice billing",
    ],
    button: "Contact Sales",
  },
];

const Pricing= () => {
  return (
    <section id = "pricing" className="pricing-section">
      <p className="tag">PRICING</p>

      <h2>
        Simple, Transparent <span>Pricing</span>
      </h2>

      <p className="subtitle-main">
        Choose the plan that fits your learning goals. No hidden fees, cancel anytime.
      </p>

      <div className="pricing-grid">
        {plans.map((plan, index) => (
          <PricingCard key={index} plan={plan} />
        ))}
      </div>

      <p className="bottom-note">
        All plans include a 14-day money-back guarantee. No questions asked.
      </p>
    </section>
  );
};

export default Pricing;