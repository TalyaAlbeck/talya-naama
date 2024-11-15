// Register.js
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MoreInfo from "./MoreInfo"; // Import the second step component
import { fetchUsers } from "../fetching";

export default function Register() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [verifyPassword, setVerifyPassword] = useState("");
  const [showMoreInfo, setShowMoreInfo] = useState(false);

  const navigate = useNavigate();

  const [data, setData] = useState(null)
    useEffect(() => {
      fetchUsers(data, setData)
  }, [])

  function handleNext() {
    if (password !== verifyPassword) {
      alert("Passwords do not match");      
    } else if (checkExistingUsers(name)) {
      alert("this user is already exist");
    } else {
      setShowMoreInfo(true);
    }
  }

  function checkExistingUsers(name) {
    for (let user in data) {
      if (data[user].name === name) {
        return true;
      }
    }
  }

  if (showMoreInfo) {
    return <MoreInfo name={name} website={password} navigate={navigate} />;
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
