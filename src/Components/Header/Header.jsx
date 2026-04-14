import "./Header.css";
import HeaderLeft from "./HeaderLeft";
import HeaderCenter from "./HeaderCenter";
import HeaderRight from "./HeaderRight";
import Form from "./Form";
import React from "react";
export default function Header() {
  const [showForm, setShowForm] = React.useState(false);
  const openForm = () => {
    setShowForm(true);
  };
  return (
    <div className="header">
      {showForm && <Form closeForm={() => setShowForm(false)} />}
      <HeaderLeft></HeaderLeft>
      <HeaderCenter></HeaderCenter>
      <HeaderRight openForm={openForm}></HeaderRight>
    </div>
  );
}
