import { useEffect, useState } from "react";
import "./Form.css";

export default function Form({ closeForm }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [agree, setAgree] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, password, confirm, agree });
  };

  return (
    <div className="form-overlay">
      <div className="form-box">

        {/* HEADER */}
        <div className="form-header">
          <h2>Create your account</h2>
          <span className="close-icon" onClick={closeForm}>✕</span>
        </div>

        <form onSubmit={handleSubmit}>

          <label>Full name</label>
          <input
            type="text"
            placeholder="Jane Doe"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label>Email address</label>
          <input
            type="email"
            placeholder="name@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Create a password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <label>Confirm password</label>
          <input
            type="password"
            placeholder="Repeat password"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
          />

          <div className="checkbox">
            <input
              type="checkbox"
              checked={agree}
              onChange={() => setAgree(!agree)}
            />
            <span>I agree to the terms and privacy</span>
          </div>

          <button type="submit" className="signup-btn">
            Sign up
          </button>

        </form>
      </div>
    </div>
  );
}