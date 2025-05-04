import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CompanyRegister from "./pages/CompanyRegister";
import CompanyBot from "./pages/CompanyBot";
import CompanyLoading from "./pages/CompanyLoading";
import CompanyRecommend from "./pages/CompanyRecommend";
import Chat from "./pages/Chat";
import StudentRegister from "./pages/StudentRegister";
import ResumeProgress from "./pages/ResumeProgress";
import ResumeUpload from "./pages/ResumeUpload";
import ResumeMotive from "./pages/ResumeMotive";
import ResumeMotiveEdit from "./pages/ResumeMotiveEdit";
import ResumeProgress2 from "./pages/ResumeProgress2";
import ResumeLoading from "./pages/ResumeLoading";
import StudentRecommend from "./pages/StudentRecommend";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/company/register" element={<CompanyRegister />} />
      <Route path="/company/bot" element={<CompanyBot />} />
      <Route path="/company/loading" element={<CompanyLoading />} />
      <Route path="/company/recommend" element={<CompanyRecommend />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="/student/register" element={<StudentRegister />} />
      <Route path="/resume/progress" element={<ResumeProgress />} />
      <Route path="/resume/upload" element={<ResumeUpload />} />
      <Route path="/resume/motive" element={<ResumeMotive />} />
      <Route path="/resume/motive-edit" element={<ResumeMotiveEdit />} />
      <Route path="/resume/progress2" element={<ResumeProgress2 />} />
      <Route path="/resume/loading" element={<ResumeLoading />} />
      <Route path="/student/recommend" element={<StudentRecommend />} />
    </Routes>
  );
} 