import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CompanyChatbot() {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [jobTitle, setJobTitle] = useState("");
  const [jobDesc, setJobDesc] = useState("");
  const [jobSkill, setJobSkill] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleNext = () => {
    if (step === 2) {
      setIsLoading(true);
      setTimeout(() => {
        navigate("/company/loading");
      }, 1000);
    } else {
      setStep(step + 1);
    }
  };

  return (
    <div style={{ minHeight: "100vh", background: "#fff", paddingBottom: 32 }}>
      <div style={{ textAlign: "center", marginTop: 32 }}>
        <img src="/assets/logo.png" alt="logo" style={{ width: 60, marginBottom: 8 }} />
        <h1 style={{ color: "#22336c", fontWeight: 700, fontSize: 48, margin: 0 }}>TalenTag</h1>
      </div>
      <div style={{ margin: "32px 0 0 0", padding: "0 16px" }}>
        {step === 0 && (
          <>
            <div style={bubbleStyle}>
              嗨，我會協助您快速找到合適的實習生！<br />
              我們先從了解您的職缺開始：<br />
              <b>請問您目前想招募的職缺名稱是什麼？</b>
            </div>
            <div style={replyStyle}>
              <input
                value={jobTitle}
                onChange={e => setJobTitle(e.target.value)}
                placeholder="我想找行銷企劃的實習生"
                style={inputStyle}
              />
              <button style={sendBtnStyle} onClick={handleNext} disabled={!jobTitle}>送出</button>
            </div>
          </>
        )}
        {step === 1 && (
          <>
            <div style={bubbleStyle}>
              好的，那這個職缺的主要工作內容大概有哪些呢？（您可以簡單描述，例如「剪短影音、上字幕、協助素材整理」）
            </div>
            <div style={replyStyle}>
              <input
                value={jobDesc}
                onChange={e => setJobDesc(e.target.value)}
                placeholder="需要剪 TikTok 和 Reels 的短影音..."
                style={inputStyle}
              />
              <button style={sendBtnStyle} onClick={handleNext} disabled={!jobDesc}>送出</button>
            </div>
          </>
        )}
        {step === 2 && (
          <>
            <div style={bubbleStyle}>
              了解了～這份工作偏向創意內容製作，我來幫您找適合的學生……<br />
              您對這位實習生有沒有一些希望具備的特質或技能？（如「細心」、「懂 Premiere」）
            </div>
            <div style={replyStyle}>
              <input
                value={jobSkill}
                onChange={e => setJobSkill(e.target.value)}
                placeholder="會剪影片，最好有用過 Premiere..."
                style={inputStyle}
              />
              <button style={sendBtnStyle} onClick={handleNext} disabled={!jobSkill || isLoading}>送出</button>
            </div>
          </>
        )}
        {isLoading && (
          <div style={{ textAlign: "center", marginTop: 32 }}>
            <span style={{ fontWeight: 700, fontSize: 20 }}>TalenTag AI Agent 正在為您媒合人才.....</span>
          </div>
        )}
      </div>
      <div style={{ position: "fixed", left: 0, bottom: 0, width: "100%", background: "#fff", padding: 16 }}>
        <input
          disabled
          placeholder="訊息"
          style={{
            width: "90%",
            height: 48,
            borderRadius: 24,
            border: "1px solid #e0e0e0",
            fontSize: 20,
            paddingLeft: 16,
            color: "#b0b0b0",
            background: "#f7f7f7"
          }}
        />
        <button style={{
          background: "none",
          border: "none",
          position: "absolute",
          right: 32,
          bottom: 24,
          cursor: "pointer"
        }}>
          <svg width="36" height="36" viewBox="0 0 36 36">
            <polygon points="6,30 30,18 6,6 6,16 22,18 6,20" fill="#0050ff" />
          </svg>
        </button>
      </div>
    </div>
  );
}

const bubbleStyle = {
  background: "#22336c",
  color: "#fff",
  borderRadius: 16,
  padding: "20px 16px",
  fontSize: 22,
  marginBottom: 16,
  fontWeight: 500,
  lineHeight: 1.6,
};

const replyStyle = {
  background: "#f2f3f6",
  borderRadius: 16,
  padding: "12px 16px",
  marginBottom: 16,
  display: "flex",
  alignItems: "center",
  gap: 8,
};

const inputStyle = {
  flex: 1,
  height: 40,
  borderRadius: 8,
  border: "1px solid #e0e0e0",
  fontSize: 18,
  paddingLeft: 12,
  marginRight: 8,
};

const sendBtnStyle = {
  background: "#0050ff",
  color: "#fff",
  border: "none",
  borderRadius: 8,
  padding: "8px 16px",
  fontSize: 18,
  cursor: "pointer",
}; 