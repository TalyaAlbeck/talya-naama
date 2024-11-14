import { useEffect, useState } from "react";
import Info from "./Info";

export default function Home() {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <>
      <h1>welcome to home, {JSON.parse(localStorage.getItem("current User")).name}</h1>

      {!showInfo && (
        <>
          <button onClick={() => setShowInfo(true)}> show my info </button>
        </>
      )}

      {showInfo && (
        <>
          <Info />
          <br />
          <button onClick={() => setShowInfo(false)}> hide my info </button>
        </>
      )}

      {/* <Outlet /> */}
    </>
  );
}
