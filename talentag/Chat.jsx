import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Chat() {
  const [messages, setMessages] = useState([
    { from: "system", text: "軒軒您好，我們是A公司，覺得您很適合我們的【行銷企劃】實習，方便聊聊嗎？" }
  ]);
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { from: "me", text: input }]);
      setInput("");
    }
  };

  return (
    <div style={{ minHeight: "100vh", background: "#fff" }}>
      <div style={{ display: "flex", alignItems: "center", padding: 16, background: "#22336c", color: "#fff" }}>
        <img src="/images/person.jpg" alt="person" style={{ width: 48, height: 48, borderRadius: "50%", marginRight: 12 }} />
        <div>
          <div style={{ fontWeight: 700 }}>輔仁大學中文系大三 軒軒</div>
        </div>
      </div>
      <div style={{ padding: 24 }}>
        {messages.map((msg, idx) => (
          <div key={idx} style={{
            background: msg.from === "me" ? "#b6eaff" : "#eee",
            color: "#22336c",
            borderRadius: 12,
            padding: 12,
            margin: "8px 0",
            alignSelf: msg.from === "me" ? "flex-end" : "flex-start",
            maxWidth: "80%"
          }}>
            {msg.text}
          </div>
        ))}
      </div>
      <div style={{ position: "fixed", bottom: 0, left: 0, width: "100%", background: "#fff", padding: 16, display: "flex", alignItems: "center" }}>
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="輸入訊息"
          style={{ flex: 1, padding: 12, borderRadius: 8, border: "1px solid #ccc" }}
        />
        <button onClick={handleSend} style={{ marginLeft: 8, background: "#3bb6ff", color: "#fff", border: "none", borderRadius: 8, padding: "8px 16px", fontWeight: 700 }}>
          發送
        </button>
      </div>
    </div>
  );
} 