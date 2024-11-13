import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [mail, setMail] = useState("");
  const [phone, setPhone] = useState(0);

  const [data, setData] = useState(null);
  const [primaryData, setPrimaryData] = useState(false);
  const [registered, setRegistered] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then((res) => res.json())
      .then((dat) => {
        setData(dat);
        console.log(data);
      });
  }, []);

  function handelSubmit() {
    fetch("http://localhost:3000/users", {
      method: "POST",
      body: JSON.stringify({
        id: data.length + 1,
        name: name,
        username: userName,
        email: mail,
        phone: phone,
        website: password,
        todo: [],
      }),
    })
      .then(() => localStorage.setItem("current User", JSON.stringify(userName)))
      .then(() => {
        setRegistered(true);
        setTimeout(() => navigate("/home"), 2000);
      });
  }

  function showRegistered() {
    setTimeout(() => navigate("/home"), 2500);
  }

  return (
    <div className="register">
      <form onSubmit={handelSubmit}>
        <input placeholder="user name" onChange={({ target }) => setUserName(target.value)} required /> <br />
        <input placeholder="real name" onChange={({ target }) => setName(target.value)} required /> <br />
        <input placeholder="password" onChange={({ target }) => setPassword(target.value)} required /> <br />
        <input placeholder="email" onChange={({ target }) => setMail(target.value)} required /> <br />
        <input placeholder="phone" onChange={({ target }) => setPhone(target.value)} required /> <br />
        <button type="submit">sign up</button>
      </form>
      <br />
      <p>
        Already have an account? <Link to="/login"> log in</Link>
      </p>
      {registered && <p>registraion completed!</p>}
    </div>
  );
}
