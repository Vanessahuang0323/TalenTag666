import React, { useRef } from "react";

export default function ResumeUpload() {
  const fileInput = useRef();

  const handleUpload = () => {
    if (fileInput.current.files.length > 0) {
      alert("上傳成功！(Demo)");
    }
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
      <img src="/images/logo.png" alt="logo" style={{ width: 120, marginBottom: 24 }} />
      <h2>上傳履歷</h2>
      <input type="file" ref={fileInput} style={{ margin: "24px 0" }} />
      <button
        style={{ padding: 16, borderRadius: 8, background: "#3bb6ff", color: "#fff", fontWeight: 700, fontSize: 20, border: "none" }}
        onClick={handleUpload}
      >
        上傳
      </button>
    </div>
  );
} 