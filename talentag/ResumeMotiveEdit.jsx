import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ResumeMotiveEdit() {
  const navigate = useNavigate();
  const [text, setText] = useState(
    "我是輔仁大學中文系大三的軒軒。擅長文字整理與內容發想，喜歡觀察生活、了解受眾需求。對行銷企劃充滿熱情，期待在實習中學習從市場調查、活動發想到文案撰寫的完整流程，培養實戰能力，未來希望朝品牌內容行銷或策略溝通方向發展，成為能兼具創意與邏輯的行銷人。"
  );

  const handleSubmit = e => {
    e.preventDefault();
    navigate("/resume/progress2");
  };

  return (
    <div style={{ minHeight: "100vh", background: "#fff" }}>
      <img src="/images/logo.png" alt="logo" style={{ width: 120, margin: "32px auto 0", display: "block" }} />
      <div style={{ width: "80%", margin: "24px auto 0", color: "#22336c", fontWeight: 700, fontSize: 22 }}>
        求職動機 / 期望發展方向
      </div>
      <form onSubmit={handleSubmit} style={{ width: "80%", margin: "0 auto" }}>
        <textarea
          value={text}
          onChange={e => setText(e.target.value)}
          rows={8}
          style={{ width: "100%", borderRadius: 16, padding: 16, fontSize: 18, border: "1px solid #ccc", marginBottom: 24 }}
        />
        <button
          type="submit"
          style={{ width: "100%", background: "#22336c", color: "#fff", border: "none", borderRadius: 24, padding: "16px 0", fontWeight: 700, fontSize: 20 }}
        >
          完成
        </button>
      </form>
    </div>
  );
} 