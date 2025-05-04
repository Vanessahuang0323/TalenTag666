import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

export default function Home() {
  const navigate = useNavigate();
  const { setUserType } = useContext(AppContext);

  const handleCompany = () => {
    setUserType("company");
    navigate("/company/register");
  };
  const handleStudent = () => {
    setUserType("student");
    navigate("/student/register");
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
      <img src="/assets/logo.png" alt="logo" style={{ width: 160, marginBottom: 24 }} />
      <h1 style={{ color: "#22336c", fontWeight: 700, fontSize: 48, margin: 0 }}>TalenTag</h1>
      <div style={{ color: "#22336c", fontWeight: 700, fontSize: 24, margin: "8px 0" }}>
        <span style={{ color: "#22336c", fontWeight: 700, fontSize: 20 }}>AI</span>
        精準媒合人才與機會
      </div>
      <button
        style={{
          width: 320,
          height: 70,
          borderRadius: 40,
          background: "linear-gradient(90deg, #b6eaff 0%, #b6aaff 100%)",
          color: "#fff",
          fontSize: 40,
          fontWeight: 700,
          margin: "32px 0 16px 0",
          border: "none",
          boxShadow: "0 4px 16px #b6aaff55",
          cursor: "pointer",
        }}
        onClick={handleCompany}
      >
        我是企業主
      </button>
      <button
        style={{
          width: 320,
          height: 70,
          borderRadius: 40,
          background: "linear-gradient(90deg, #b6eaff 0%, #3bb6ff 100%)",
          color: "#fff",
          fontSize: 40,
          fontWeight: 700,
          border: "none",
          boxShadow: "0 4px 16px #3bb6ff55",
          cursor: "pointer",
        }}
        onClick={handleStudent}
      >
        我是學生
      </button>
      <div style={{ position: "absolute", right: 32, bottom: 32 }}>
        <svg width="80" height="80" viewBox="0 0 80 80">
          <path d="M40 10a30 30 0 1 1-30 30" fill="none" stroke="#0050ff" strokeWidth="6" />
          <polyline points="20,40 40,60 60,40" fill="none" stroke="#0050ff" strokeWidth="6" />
        </svg>
      </div>
    </div>
  );
} 