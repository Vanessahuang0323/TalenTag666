import React from "react";
import { useNavigate } from "react-router-dom";

export default function ResumeMotive() {
  const navigate = useNavigate();

  return (
    <div style={{ minHeight: "100vh", background: "#fff" }}>
      <img src="/images/logo.png" alt="logo" style={{ width: 120, margin: "32px auto 0", display: "block" }} />
      <div style={{ width: "80%", margin: "24px auto 0", background: "#e0f7fa", borderRadius: 20, height: 24, position: "relative" }}>
        <div style={{ width: "30%", background: "#3bb6ff", height: 24, borderRadius: 20 }} />
        <span style={{ position: "absolute", left: 16, top: 0, color: "#22336c", fontWeight: 700, lineHeight: "24px" }}>履歷完成度30%</span>
      </div>
      <div style={{ margin: "32px auto", width: "80%", display: "flex", flexDirection: "column", gap: 16 }}>
        <button
          style={{ width: "100%", background: "#3bb6ff", color: "#fff", border: "none", borderRadius: 24, padding: "16px 0", fontWeight: 700, fontSize: 20 }}
          onClick={() => navigate("/resume/motive-edit")}
        >
          求職動機 / 期望發展方向
        </button>
      </div>
      <button
        style={{ width: "80%", margin: "32px auto 0", display: "block", background: "#3bb6ff", color: "#fff", border: "none", borderRadius: 24, padding: "16px 0", fontWeight: 700, fontSize: 20 }}
        onClick={() => navigate("/resume/progress2")}
      >
        下一步
      </button>
    </div>
  );
} 