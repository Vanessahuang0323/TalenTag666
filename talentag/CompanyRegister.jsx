import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

export default function CompanyRegister() {
  const navigate = useNavigate();
  const { setUserType } = useContext(AppContext);
  const [form, setForm] = useState({ company: "", email: "", contact: "" });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    setUserType("company");
    navigate("/company/bot");
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
      <img src="/images/logo.png" alt="logo" style={{ width: 120, marginBottom: 24 }} />
      <h2>企業資料填寫</h2>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16, width: 320 }}>
        <input name="company" placeholder="公司名稱" value={form.company} onChange={handleChange} required style={{ padding: 12, borderRadius: 8, border: "1px solid #ccc" }} />
        <input name="email" placeholder="聯絡信箱" value={form.email} onChange={handleChange} required style={{ padding: 12, borderRadius: 8, border: "1px solid #ccc" }} />
        <input name="contact" placeholder="聯絡人" value={form.contact} onChange={handleChange} required style={{ padding: 12, borderRadius: 8, border: "1px solid #ccc" }} />
        <button type="submit" style={{ padding: 16, borderRadius: 8, background: "#3bb6ff", color: "#fff", fontWeight: 700, fontSize: 20, border: "none" }}>下一頁</button>
      </form>
    </div>
  );
} 