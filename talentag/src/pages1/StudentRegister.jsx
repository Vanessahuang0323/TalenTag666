import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

export default function StudentRegister() {
  const navigate = useNavigate();
  const { setUserType } = useContext(AppContext);
  const [form, setForm] = useState({
    name: "", email: "", school: "", department: "", grade: "", password: ""
  });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    setUserType("student");
    navigate("/resume/progress");
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
      <img src="/images/logo.png" alt="logo" style={{ width: 120, marginBottom: 24 }} />
      <h2>學生資料填寫</h2>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16, width: 320 }}>
        <input name="name" placeholder="姓名" value={form.name} onChange={handleChange} required style={{ padding: 12, borderRadius: 8, border: "1px solid #ccc" }} />
        <input name="email" placeholder="電子郵件" value={form.email} onChange={handleChange} required style={{ padding: 12, borderRadius: 8, border: "1px solid #ccc" }} />
        <input name="school" placeholder="學校" value={form.school} onChange={handleChange} required style={{ padding: 12, borderRadius: 8, border: "1px solid #ccc" }} />
        <input name="department" placeholder="科系" value={form.department} onChange={handleChange} required style={{ padding: 12, borderRadius: 8, border: "1px solid #ccc" }} />
        <input name="grade" placeholder="年級" value={form.grade} onChange={handleChange} required style={{ padding: 12, borderRadius: 8, border: "1px solid #ccc" }} />
        <input name="password" placeholder="設定密碼 / 第三方登入" value={form.password} onChange={handleChange} required style={{ padding: 12, borderRadius: 8, border: "1px solid #ccc" }} />
        <button type="submit" style={{ padding: 16, borderRadius: 8, background: "#3bb6ff", color: "#fff", fontWeight: 700, fontSize: 20, border: "none" }}>下一步</button>
      </form>
    </div>
  );
} 