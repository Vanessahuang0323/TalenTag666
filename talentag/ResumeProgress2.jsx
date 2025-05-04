import React from "react";
import { useNavigate } from "react-router-dom";

export default function ResumeProgress2() {
  const navigate = useNavigate();

  return (
    <div style={{ minHeight: "100vh", background: "#fff" }}>
      <img src="/images/logo.png" alt="logo" style={{ width: 120, margin: "32px auto 0", display: "block" }} />
      <div style={{ width: "80%", margin: "24px auto 0", background: "#e0f7fa", borderRadius: 20, height: 24, position: "relative" }}>
        <div style={{ width: "50%", background: "#3bb6ff", height: 24, borderRadius: 20 }} />
        <span style={{ position: "absolute", left: 16, top: 0, color: "#22336c", fontWeight: 700, lineHeight: "24px" }}>履歷完成度50%</span>
      </div>
      <div style={{ margin: "32px auto", width: "80%", display: "flex", flexDirection: "column", gap: 16 }}>
        <div style={inputStyle}>
          求職動機 / 期望發展方向
          <span style={{ color: "#3bb66f", marginLeft: 8, fontSize: 22 }}>✔</span>
        </div>
        <div style={inputStyle}>語言能力或其他證照上傳</div>
        <div style={inputStyle}>其他補充說明</div>
        <div style={inputStyle}>求職動機 / 期望發展方向</div>
      </div>
      <button
        style={{ width: "80%", margin: "32px auto 0", display: "block", background: "#3bb6ff", color: "#fff", border: "none", borderRadius: 24, padding: "16px 0", fontWeight: 700, fontSize: 20 }}
        onClick={() => navigate("/resume/loading")}
      >
        下一步
      </button>
    </div>
  );
}

const inputStyle = {
  background: "#f0f0f0",
  borderRadius: 16,
  padding: "16px 24px",
  color: "#22336c",
  fontWeight: 500,
  fontSize: 18
}; 