"use client";
import { useState } from "react";
import MainPage from "./mainPage";
export default function Home() {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Show, setShow] = useState(true);
  const User = [
    {
      Email: "daud",
      Password: "daud",
      role: "admin",
    },
    {
      Email: "irfan",
      Password: "irfan",
      role: "manager",
    },
  ];
  const handleSubmit = () => {
    let flag = false;
    for (let i = 0; i < User.length; i++) {
      if (User[i].Email === Email && User[i].Password === Password) {
        localStorage.setItem("role", User[i].role);
        flag = true;
        setShow(false);
        break;
      }
    }
  };

  return (
    <>
      {Show ? (
        <>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "2vh",
              backgroundColor: "black",
              color: "white",
              height: "50vh",
              width: "50vw",
            }}
          >
            <label htmlFor="email">Email</label>
            <input
              style={{ color: "black" }}
              type="text"
              name="Email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <label htmlFor="email">Password</label>
            <input
              style={{ color: "black" }}
              type="text"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <button
              style={{ border: "1px solid white", padding: "1vh 8vh" }}
              onClick={handleSubmit}
            >
              submit
            </button>
          </div>
        </>
      ) : (
        <>
          <MainPage />
        </>
      )}
    </>
  );
}
