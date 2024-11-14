import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import App from "../../App";
import { fetchUsers } from "../fetching";

export default function LogIn() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    fetchUsers(data, setData)
}, [])

  function handelSubmit(e) {
    e.preventDefault();
    for (let user in data) {
      if (userName === data[user].username && password === data[user].website) {
        localStorage.setItem("current User", JSON.stringify(data[user]));
        navigate(`/user/${JSON.parse(localStorage.getItem("current User")).id}/home`);
        return;
      }
    }
    alert("name or password are incorrect");
  }

  return (
    <>
      <form onSubmit={handelSubmit}>
        <input placeholder="userName" onChange={({ target }) => setUserName(target.value)} required /> <br />
        <input placeholder="password" type="password" onChange={({ target }) => setPassword(target.value)} required /> <br />
        <br />
        <button type="submit" onClick={handelSubmit}>login</button>
      </form>
      <br />
      <Link to="/register">Don't have a user? Click here</Link>
    </>
  );
}
