// Register.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MoreInfo from "./MoreInfo"; // Import the second step component

export default function Register() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [verifyPassword, setVerifyPassword] = useState("");
  const [showMoreInfo, setShowMoreInfo] = useState(false);

  const navigate = useNavigate();

  function handleNext() {
    if (password === verifyPassword) {
      setShowMoreInfo(true);
    } else {
      alert("Passwords do not match");
    }
  }

  if (showMoreInfo) {
    return <MoreInfo name={name} password={password} navigate={navigate} />;
  }

  return (
    <div className="register">
      <form>
        <input placeholder="Name" value={name} onChange={({ target }) => setName(target.value)} required />
        <br />
        <input type="password" placeholder="Password" value={password} onChange={({ target }) => setPassword(target.value)} required />
        <br />
        <input
          type="password"
          placeholder="Verify Password"
          value={verifyPassword}
          onChange={({ target }) => setVerifyPassword(target.value)}
          required
        />
        <br />
        <button type="button" onClick={handleNext}>
          Next
        </button>
      </form>
    </div>
  );
}
