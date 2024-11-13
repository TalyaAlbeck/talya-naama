import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import App from "../../App";

export default function LogIn() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then((res) => res.json())
      .then((dat) => {
        setData(dat);
        console.log("hello from fetch");
      });
  }, []);

  function handelSubmit() {
    for (let user in data) {
      if (userName === data[user].username && password === data[user].website) {
        <Link to="/register">dont have user? click here</Link>;
        localStorage.setItem("current User", JSON.stringify(userName));
        return true, console.log(data[user]);
      }
    }
    alert("name or password are incorrect");
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
