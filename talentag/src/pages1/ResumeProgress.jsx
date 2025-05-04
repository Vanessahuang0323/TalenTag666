import React from "react";
import { useNavigate } from "react-router-dom";

export default function ResumeProgress() {
  const navigate = useNavigate();

  return (
    <div style={{ minHeight: "100vh", background: "#fff" }}>
      <img src="/images/logo.png" alt="logo" style={{ width: 120, margin: "32px auto 0", display: "block" }} />
      <div style={{ width: "80%", margin: "24px auto 0", background: "#e0f7fa", borderRadius: 20, height: 24, position: "relative" }}>
        <div style={{ width: "30%", background: "#3bb6ff", height: 24, borderRadius: 20 }} />
        <span style={{ position: "absolute", left: 16, top: 0, color: "#22336c", fontWeight: 700, lineHeight: "24px" }}>履歷完成度30%</span>
      </div>
      <div style={{ margin: "32px auto", width: "80%", display: "flex", flexDirection: "column", gap: 16 }}>
        <div style={inputStyle}>個人簡介（100字自我介紹）</div>
        <div style={inputStyle}>學經歷（學校、社團、打工、專案）</div>
        <div style={inputStyle}>技能專長敘述</div>
        <div style={inputStyle}>作品集連結</div>
        <div style={inputStyle}>希望職務類型</div>
        <div style={inputStyle}>可配合時間</div>
        <div style={inputStyle}>希望實習地點</div>
      </div>
      <button
        style={{ width: "80%", margin: "16px auto", display: "block", background: "#22336c", color: "#fff", border: "none", borderRadius: 24, padding: "16px 0", fontWeight: 700, fontSize: 20 }}
        onClick={() => navigate("/resume/upload")}
      >
        我已做好自己的履歷
      </button>
      <button
        style={{ width: "80%", margin: "8px auto", display: "block", background: "#3bb6ff", color: "#fff", border: "none", borderRadius: 24, padding: "16px 0", fontWeight: 700, fontSize: 20 }}
        onClick={() => navigate("/resume/motive")}
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