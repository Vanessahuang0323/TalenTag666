import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

SwiperCore.use([Navigation, Pagination]);

const demoTalents = [
  {
    name: "輔仁大學中文系大三  軒軒",
    tags: ["#文字轉化力強", "#觀察入微的內容企劃", "#耐心又細心的執行者", "#溫和好溝通", "#願意學也敢挑戰"],
    exp: ["提案競賽全國季軍", "Coach 行銷策略銀獎", "系刊編輯+影音企劃"],
    img: "/images/person.jpg"
  },
];

export default function CompanyRecommend() {
  const navigate = useNavigate();
  const [saved, setSaved] = useState([]);

  return (
    <div style={{ minHeight: "100vh", background: "#fff" }}>
      <div style={{ padding: 24, background: "#22336c", color: "#fff", fontWeight: 700, fontSize: 24 }}>
        以下為您推薦的 10 位人選，依照適配度高低排序。
      </div>
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        style={{ width: "100%", height: "70vh", marginTop: 24 }}
      >
        {demoTalents.map((talent, idx) => (
          <SwiperSlide key={idx}>
            <div style={{ display: "flex", background: "#fff", borderRadius: 16, boxShadow: "0 4px 16px #0001", overflow: "hidden", margin: "0 16px" }}>
              <img src={talent.img} alt="talent" style={{ width: "50%", objectFit: "cover" }} />
              <div style={{ flex: 1, padding: 24 }}>
                <div style={{ background: "#22336c", color: "#fff", borderRadius: 8, padding: "4px 12px", fontWeight: 700, fontSize: 20, marginBottom: 8 }}>
                  {talent.name}
                </div>
                {talent.tags.map(tag => <div key={tag} style={{ fontWeight: 700, margin: "4px 0" }}>{tag}</div>)}
                <button style={{ margin: "12px 0", background: "#3bb6ff", color: "#fff", border: "none", borderRadius: 8, padding: "6px 16px", fontWeight: 700 }}>實際經驗</button>
                <ul>
                  {talent.exp.map(e => <li key={e}>{e}</li>)}
                </ul>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", margin: "32px 24px 0 24px" }}>
        <button
          style={{ background: "none", border: "none" }}
          onClick={() => navigate("/chat")}
        >
          <img src="https://img.icons8.com/ios-filled/50/3bb6ff/telegram-app.png" alt="chat" style={{ width: 60 }} />
        </button>
        <button
          style={{ background: "none", border: "none" }}
          onClick={() => setSaved([...saved, 1])}
        >
          <img src="https://img.icons8.com/ios-filled/50/3bb6ff/bookmark-ribbon.png" alt="save" style={{ width: 60 }} />
        </button>
      </div>
    </div>
  );
} 