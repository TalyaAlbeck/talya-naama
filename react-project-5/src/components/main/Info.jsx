import { useEffect, useState } from "react";

export default function Info() {
  const currentUser = JSON.parse(localStorage.getItem("current User")).username;
  const [userInfo, setUserInfo] = useState();

  function getUser(data) {
    for (let user in data) {
      if (currentUser === data[user].username) {
        setUserInfo(data[user]);
        
      }
    }
  }

  useEffect(() => {
    fetch("http://localhost:3000/users/")
      .then((res) => res.json())
      .then((data) => {
        getUser(data);
      });
  }, [userInfo]);

  return (
    <>
      {userInfo ? (
        <div className="info">
          Name: {(userInfo.username)}
          <br />
          Emali: {(userInfo.email)}
          <br />
          Phone: {(userInfo.phone)}
          <br />
        </div>
      ) : 
      <p></p>}
    </>
  );
}
