import "./Header.css";
import HeaderLeft from "./HeaderLeft";
import HeaderCenter from "./HeaderCenter";
import HeaderRight from "./HeaderRight";
import Form from "./Form";
import React from "react";

export default function Header() {
  const [showForm, setShowForm] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const openForm = () => {
    setShowForm(true);
    setMobileMenuOpen(false);
  };

  return (
    <>
      {showForm && <Form closeForm={() => setShowForm(false)} />}

      <div className="header">
        <HeaderLeft />
        <HeaderCenter />
        <HeaderRight openForm={openForm} />

        <button
          type="button"
          className="mobileMenuButton"
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen((open) => !open)}
        >
          {mobileMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="mobileNavPanel">
          <HeaderCenter mobile onItemClick={() => setMobileMenuOpen(false)} />
          <HeaderRight openForm={openForm} mobile />
        </div>
      )}
    </>
  );
}
