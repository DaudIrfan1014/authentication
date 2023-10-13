"use    client";
import React, { useEffect, useState } from "react";

const mainPage = () => {
  const [Show, setShow] = useState(false);
  useEffect(() => {
    let role = localStorage.getItem("role");
    if (role === "admin") {
      setShow(true);
    }
  }, []);
  return (
    <>
      {Show ? (
        <>
          <ul>
            <li>Dashboard</li>
            <li>Home</li>
            <li>Contact</li>
            <li>Payment Management</li>
          </ul>
        </>
      ) : (
        <>
          <ul>
            <li>Home</li>
            <li>Contact</li>
          </ul>
        </>
      )}
    </>
  );
};

export default mainPage;
