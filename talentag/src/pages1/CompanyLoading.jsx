import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function CompanyLoading() {
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/company/recommend");
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div style={{
      minHeight: "100vh", display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center", background: "#8888"
    }}>
      <img src="/images/logo.png" alt="logo" style={{ width: 120, marginBottom: 24 }} />
      <h2>分析中...</h2>
      <div className="loader" style={{ marginTop: 32 }}>
        <div style={{
          width: 60, height: 60, border: "8px solid #b6eaff", borderTop: "8px solid #3bb6ff",
          borderRadius: "50%", animation: "spin 1s linear infinite"
        }} />
      </div>
      <style>{`
        @keyframes spin { 0% { transform: rotate(0deg);} 100% { transform: rotate(360deg);} }
      `}</style>
    </div>
  );
} 