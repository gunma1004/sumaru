"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface RegionalClientUIProps {
  region: string;
  district: string;
  dongName: string;
}

// 서울/경기 주요 구별 전체 동 데이터 매핑
const districtDongsMap: Record<string, string[]> = {
  "강남구": ["역삼1동", "역삼2동", "개포1동", "개포2동", "개포4동", "청담동", "삼성1동", "삼성2동", "대치1동", "대치2동", "대치4동", "신사동", "논현1동", "논현2동", "압구정동", "세곡동", "자곡동", "일원동", "수서동", "도곡1동", "도곡2동"],
  "강서구": ["등촌1동", "등촌2동", "등촌3동", "화곡본동", "화곡1동", "화곡2동", "화곡3동", "화곡4동", "화곡6동", "화곡8동", "우장산동", "가양1동", "가양2동", "가양3동", "발산1동", "공항동", "방화1동", "방화2동", "방화3동"],
  "금천구": ["가산동", "독산1동", "독산2동", "독산3동", "독산4동", "시흥1동", "시흥2동", "시흥3동", "시흥4동", "시흥5동"],
  "마포구": ["공덕동", "아현동", "도화동", "용강동", "대흥동", "염리동", "신수동", "서교동", "합정동", "망원1동", "망원2동", "연남동", "성산1동", "성산2동", "상암동"],
  "송파구": ["잠실본동", "잠실2동", "잠실3동", "잠실4동", "잠실6동", "잠실7동", "풍납1동", "풍납2동", "거여1동", "거여2동", "마천1동", "마천2동", "방이1동", "방이2동", "오륜동", "오금동", "송파1동", "송파2동", "석촌동", "삼전동", "가락본동", "가락1동", "가락2동", "문정1동", "문정2동", "장지동", "위례동", "잠실동"],
};

const initialShopList = [
  { id: 1, name: "한국미녀홈타이", desc: "전국 주요지역 신속 방문! 정성 가득한 테라피 & 릴렉싱 프로그램", phone: "0507-1280-3303", price: "100,000원부터~", image: "/shop1.jpg" },
  { id: 2, name: "너무이쁜홈타이", desc: "품격 있는 힐링을 선사하는 최고급 오일 프라이빗 방문 테라피 서비스", phone: "0507-1280-3190", price: "60,000원부터~", image: "/shop2.jpg" },
  { id: 3, name: "예쁜걸홈타이", desc: "칼도착 25분 보장, 철저한 위생 관리와 럭셔리 케어", phone: "0507-1280-3185", price: "60,000원부터~", image: "/shop3.jpg" },
  { id: 4, name: "퀸즈홈테라피", desc: "전문 힐러들의 맞춤형 VIP 피로회복 특화 프로그램", phone: "0507-1280-3222", price: "60,000원부터~", image: "/shop4.jpg" },
  { id: 5, name: "한국골든테라피", desc: "선입금 없는 100% 후불제! 수도권 주요지역 25분 내 도착", phone: "0507-1280-3360", price: "110,000원부터~", image: "/shop5.jpg" }
];

export default function RegionalClientUI({ region, district, dongName }: RegionalClientUIProps) {
  const [shuffledShops, setShuffledShops] = useState(initialShopList);

  useEffect(() => {
    // 🌟 새로고침하거나 페이지를 이동할 때마다 샵 리스트를 랜덤하게 섞음
    setShuffledShops([...initialShopList].sort(() => Math.random() - 0.5));
  }, [region, district, dongName]);

  const regionKoreanName = region === "seoul" ? "서울" : region === "incheon" ? "인천" : "경기";
  const displayTitle = `${regionKoreanName} ${district}${dongName ? ` ${dongName}` : ""}`;
  
  // 해당 구에 속한 동 목록 가져오기 (등록되지 않은 구는 기본 가이드 동 제공)
  const dongs = districtDongsMap[district] || ["전체", "상세동 문의"];

  return (
    <div className="bg-[#050505] text-gray-100 min-h-screen flex flex-col font-sans selection:bg-amber-400 selection:text-black pb-24">
      {/* 상단 헤더 */}
      <header className="sticky top-0 z-50 bg-[#050505]/85 backdrop-blur-xl border-b border-amber-500/20 px-4 py-3.5 shadow-[0_4px_20px_rgba(245,158,11,0.1)]">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-amber-500 flex items-center justify-center font-black text-black text-base shadow border border-amber-400">
              뚝
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-wider bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-500 bg-clip-text text-transparent">
                투데이쿡
              </span>
              <span className="text-[10px] text-gray-400 tracking-tighter">PREMIUM HOME CARE</span>
            </div>
          </Link>
          <Link
            href="/"
            className="text-xs font-bold text-amber-400 bg-amber-500/10 px-3 py-1.5 rounded-xl border border-amber-500/30 hover:bg-amber-500 hover:text-black transition-all"
          >
            🏠 메인으로
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8 w-full flex-1 space-y-8">
        {/* 타이틀 배너 */}
        <div className="text-center space-y-2 py-6 bg-[#121214] border border-amber-500/30 rounded-3xl p-6 shadow-lg">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">REGIONAL PARTNER GUIDE</span>
          <h1 className="text-2xl md:text-3xl font-black text-white">📍 {displayTitle} 출장 홈케어 안내</h1>
          <p className="text-xs text-gray-300">선입금 없는 100% 후불제 안심 방문 홈케어 서비스</p>
        </div>

        {/* 🌟 구 페이지 등에서 세부 동을 선택할 수 있는 바로가기 그리드 버튼 */}
        <section className="bg-[#0d0d0f] border border-amber-500/20 p-6 rounded-3xl space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-sm font-black text-amber-400 tracking-wider uppercase">📌 {district} 세부 동 선택하기</h2>
            {dongName && (
              <Link 
                href={`/${region}/${encodeURIComponent(district)}`}
                className="text-[11px] font-bold text-gray-400 hover:text-amber-400 transition-colors"
              >
                🔄 전체 동 보기
              </Link>
            )}
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2">
            {dongs.map((dItem, idx) => {
              const isSelected = dongName === dItem;
              return (
                <Link
                  key={idx}
                  href={`/${region}/${encodeURIComponent(district)}?dong=${encodeURIComponent(dItem)}`}
                  className={`text-xs font-bold py-2.5 px-3 rounded-xl text-center transition-all truncate shadow border ${
                    isSelected 
                      ? "bg-amber-500 text-black border-amber-400 font-black shadow-[0_0_15px_rgba(245,158,11,0.4)]" 
                      : "bg-black/60 border-amber-500/20 hover:border-amber-400 hover:bg-amber-500/10 text-gray-200 hover:text-amber-300"
                  }`}
                >
                  {dItem}
                </Link>
              );
            })}
          </div>
        </section>

        {/* 제휴업체 목록 (새로고침 시 매번 랜덤 셔플) */}
        <section className="space-y-4">
          <h2 className="text-sm font-black text-amber-400 tracking-wider uppercase">
            🏆 {displayTitle} 추천 제휴업체 목록
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {shuffledShops.map((shop) => (
              <div key={shop.id} className="bg-gradient-to-br from-[#161619] to-[#101013] border border-amber-500/25 hover:border-amber-400 rounded-2xl p-4 flex gap-4 items-center shadow-lg transition-all group relative">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-xl overflow-hidden shrink-0 border border-amber-500/30">
                  <img src={shop.image} alt={shop.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-extrabold text-sm md:text-base text-white truncate group-hover:text-amber-400 transition-colors">
                    {shop.name}
                  </h3>
                  <p className="text-[11px] text-gray-300 mt-1 line-clamp-2">{shop.desc}</p>
                  <div className="mt-2.5 flex items-center justify-between">
                    <span className="text-xs font-black text-amber-300">{shop.price}</span>
                    <a href={`tel:${shop.phone}`} className="bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-amber-400 hover:to-yellow-300 text-black font-black text-xs px-3.5 py-1.5 rounded-xl shadow transition-all relative z-10">
                      전화연결
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}