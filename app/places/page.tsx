import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  metadataBase: new URL("https://sumaru.netlify.app"),
  title: "웰니스 핫플 가이드 | 수마루 - 수도권 프리미엄 맛집 & 감성 숙소 추천",
  description: "서울·경기·인천 수도권 주요 명소 주변의 엄선된 맛집과 편안한 힐링 스테이 공간 정보를 수마루에서 만나보세요.",
  keywords: [
    "수마루",
    "수도권 맛집",
    "감성 숙소",
    "힐링 스테이",
    "디저트 카페",
    "웰니스 가이드",
    "핫플레이스 추천"
  ],
  openGraph: {
    title: "웰니스 핫플 가이드 | 수마루",
    description: "서울 경기 인천 주요 지역 엄선된 맛집 및 감성 휴식 공간 안내",
    url: "https://sumaru.netlify.app/places",
    siteName: "수마루",
    locale: "ko_KR",
    type: "website",
  },
};

export default function PlacesPage() {
  const categories = [
    {
      title: "☕ 시그니처 감성 카페 & 디저트",
      desc: "지친 바디케어 전후, 여유로운 풍경 속에서 달콤한 리프레시를 즐기는 아늑한 공간",
    },
    {
      title: "🍽️ 로컬 푸드 & 미식 맛집",
      desc: "금강산도 식후경! 수도권 권역별 현지인들이 극찬하는 원기 회복 특선 요리 식당",
    },
    {
      title: "🏨 프리미엄 힐링 스테이 & 호텔",
      desc: "고요한 분위기 속에서 완벽한 숙면과 온전한 재충전을 선사하는 프라이빗 숙소",
    },
  ];

  return (
    <div className="bg-[#050505] text-gray-100 min-h-screen py-10 px-4">
      <div className="max-w-4xl mx-auto space-y-10">
        
        {/* 상단 타이틀 */}
        <div className="text-center space-y-2">
          <span className="text-amber-400 text-xs font-bold tracking-widest uppercase">
            WELLNESS HOT PLACES & STAY
          </span>
          <h1 className="text-3xl md:text-4xl font-black text-white">
            엄선된 로컬 맛집 & 품격 있는 휴식 공간
          </h1>
          <p className="text-xs md:text-sm text-gray-400">
            수마루가 제안하는 수도권 권역별 베스트 핫플레이스와 편안한 쉼터 큐레이션
          </p>
        </div>

        {/* 안내 배너 박스 */}
        <div className="bg-gradient-to-r from-amber-500/10 via-amber-400/5 to-amber-500/10 border border-amber-500/30 p-6 rounded-3xl text-center space-y-2 shadow-inner">
          <p className="text-sm md:text-base font-bold text-amber-300">
            ✨ 수도권 맞춤형 프리미엄 라이프스타일 큐레이션
          </p>
          <p className="text-xs text-gray-300 leading-relaxed">
            서울, 경기, 인천 등 수도권 전역의 힐링 스팟과 연계하여, 몸과 마음에 풍성한 여유를 더해줄 검증된 맛집 및 스테이 정보를 안내해 드립니다.
          </p>
        </div>

        {/* 카테고리 카드 리스트 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="bg-[#121214] border border-white/5 hover:border-amber-500/40 p-5 rounded-2xl space-y-2 transition-all group shadow-lg"
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
            <span>🏠</span> 수마루 홈으로 돌아가기
          </Link>
        </div>

      </div>
    </div>
  );
}