// MoreInfo.js
import React, { useState, useEffect } from "react";
import { fetchUsers } from "../fetching";

export default function MoreInfo({ name, website, navigate }) {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [todo, setTodo] = useState([]);
  const [registered, setRegistered] = useState(false);
  

  const [data, setData] = useState(null)
  useEffect(() => {
    fetchUsers(data, setData)
}, [])

  function handleSubmit(e) {
    e.preventDefault();

    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: JSON.stringify(data.length + 1),
        name,
        username: userName,
        email,
        phone,
        website,
        todo,
      }),
    })
    .then((res) => res.json())
    .then((dat) => {
      localStorage.setItem("current User", JSON.stringify(dat));
      setRegistered(true);
      setTimeout(() => navigate("/home"), 1300);
    })
  }

  return (
    <div className="more-info">
      <h2>More Information</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Username" value={userName} onChange={({ target }) => setUserName(target.value)} required />
        <br />
        <input placeholder="Email" value={email} onChange={({ target }) => setEmail(target.value)} required />
        <br />
        <input placeholder="Phone" value={phone} onChange={({ target }) => setPhone(target.value)} required />
        <br />
        <button type="submit">Submit</button>
      </form>
      {registered && <p>Registration completed!</p>}
    </div>
  );
}
