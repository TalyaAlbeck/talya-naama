import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import App from "../../App";
import { fetchUsers } from "../fetching";

export default function LogIn() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchUsers(data, setData)
}, [])

  function handelSubmit() {
    for (let user in data) {
      if (userName === data[user].username && password === data[user].website) {
        <Link to="/register">dont have user? click here</Link>;        
        localStorage.setItem("current User", JSON.stringify(data[user]));
        
        return true;
      }
    }
    setTimeout(alert("name or password are incorrect"), 2000);
  }

  return (
    <>
      <form onSubmit={handelSubmit}>
        <input placeholder="userName" onChange={({ target }) => setUserName(target.value)} required /> <br />
        <input placeholder="password" onChange={({ target }) => setPassword(target.value)} required /> <br />
        <br />
        <button type="submit" onClick={handelSubmit}>
          <Link to={handelSubmit ? "/home" : "/"}>log in</Link>
        </button>
      </form>
      <br />
      <Link to="/register">Don't have a user? Click here</Link>
    </>
  );
}
