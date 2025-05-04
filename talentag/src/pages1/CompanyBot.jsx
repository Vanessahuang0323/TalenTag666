import React from "react";
import { useNavigate } from "react-router-dom";

export default function CompanyBot() {
  const navigate = useNavigate();
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
      <img src="/images/logo.png" alt="logo" style={{ width: 120, marginBottom: 24 }} />
      <h2>聊天機器人為您媒合人才</h2>
      <button
        style={{ marginTop: 32, padding: 16, borderRadius: 8, background: "#3bb6ff", color: "#fff", fontWeight: 700, fontSize: 20, border: "none" }}
        onClick={() => navigate("/company/loading")}
      >
        下一頁
      </button>
    </div>
  );
} 