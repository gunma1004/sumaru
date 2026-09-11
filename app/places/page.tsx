import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "맛집·숙소 가이드 | 투데이쿡 - 수도권 힐링 공간 & 핫플레이스 안내",
  description: "서울·경기·인천 수도권 주요 거점 지역의 검증된 맛집과 편안한 숙소·휴식 공간 정보를 투데이쿡에서 확인하세요.",
  openGraph: {
    title: "맛집·숙소 가이드 | 투데이쿡",
    description: "서울 경기 인천 주요 지역 검증된 맛집 및 휴식 공간 안내",
    url: "https://todaykkuk.netlify.app/places",
    siteName: "투데이쿡",
    locale: "ko_KR",
    type: "website",
  },
};

export default function PlacesPage() {
  const categories = [
    {
      title: "☕ 힐링 카페 & 디저트",
      desc: "테라피 전후 여유를 즐길 수 있는 분위기 좋은 감성 카페",
    },
    {
      title: "🍽️ 지역 대표 맛집",
      desc: "피로를 풀고 원기를 채워주는 수도권별 현지인 추천 식당",
    },
    {
      title: "🏨 프리미엄 호텔 & 스테이",
      desc: "온전한 휴식과 숙면을 제공하는 프라이빗 숙소 및 호텔",
    },
  ];

  return (
    <div className="bg-[#050505] text-gray-100 min-h-screen py-10 px-4">
      <div className="max-w-4xl mx-auto space-y-10">
        
        {/* 상단 타이틀 */}
        <div className="text-center space-y-2">
          <span className="text-amber-400 text-xs font-bold tracking-widest uppercase">
            LOCAL HOT PLACES & STAY
          </span>
          <h1 className="text-3xl md:text-4xl font-black text-white">
            내 주변 맛집 & 편안한 휴식 공간
          </h1>
          <p className="text-xs md:text-sm text-gray-400">
            투데이쿡이 추천하는 수도권 지역별 검증된 핫플레이스와 편안한 쉼터 가이드
          </p>
        </div>

        {/* 안내 배너 박스 */}
        <div className="bg-gradient-to-r from-amber-500/10 via-amber-400/5 to-amber-500/10 border border-amber-500/30 p-6 rounded-3xl text-center space-y-2 shadow-inner">
          <p className="text-sm md:text-base font-bold text-amber-300">
            📍 수도권 주요 권역 실시간 핫플레이스 가이드
          </p>
          <p className="text-xs text-gray-300 leading-relaxed">
            서울, 경기, 인천 등 수도권 주요 거점 지역의 실시간 이용 가능한 맛집·숙소 연계 정보를 큐레이션하여 안내해 드립니다.
          </p>
        </div>

        {/* 카테고리 카드 리스트 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="bg-[#121214] border border-white/5 hover:border-amber-500/40 p-5 rounded-2xl space-y-2 transition-all group"
            >
              <h3 className="font-extrabold text-sm md:text-base text-white group-hover:text-amber-400 transition-colors">
                {cat.title}
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                {cat.desc}
              </p>
            </div>
          ))}
        </div>

        {/* 하단 홈으로 이동 버튼 */}
        <div className="text-center pt-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-yellow-400 text-black font-extrabold text-xs px-5 py-3 rounded-xl shadow-lg hover:from-amber-400 hover:to-yellow-300 transition-all"
          >
            <span>🏠</span> 투데이쿡 홈으로 돌아가기
          </Link>
        </div>

      </div>
    </div>
  );
}