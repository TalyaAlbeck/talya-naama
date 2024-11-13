import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import Info from "./Info";

export default function Home() {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <>
      <h1>this is home</h1>

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
