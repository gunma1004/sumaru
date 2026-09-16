import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  metadataBase: new URL("https://sumaru.netlify.app"),
  title: "웰니스 여행 가이드 | 수문루 - 수도권 프리미엄 힐링 명소 & 드라이브 코스",
  description: "서울, 경기, 인천 수도권 주요 도시의 감성적인 심신 힐링 명소와 아름다운 드라이브 코스를 수마루에서 확인하세요.",
  keywords: [
    "수마루",
    "수도권 힐링 명소",
    "드라이브 코스",
    "웰니스 여행지",
    "서울 산책로",
    "경기 숲길",
    "인천 오션뷰"
  ],
  openGraph: {
    title: "웰니스 여행 가이드 | 수마루",
    description: "피로를 말끔히 씻어내고 여유를 되찾는 수도권 권역별 프리미엄 힐링 여행지 가이드",
    url: "https://sumaru.netlify.app/travel",
    siteName: "수마루",
    locale: "ko_KR",
    type: "website",
  },
};

export default function TravelPage() {
  const travelCourses = [
    {
      region: "서울 파노라마 코스",
      title: "남산 둘레길 산책 & 한강 야경 드라이브",
      desc: "도심 속 탁 트인 녹음과 반짝이는 한강의 야경을 감상하며 일상의 바쁜 숨 고르기를 정돈하는 감성 산책 코스입니다.",
      tag: "야경 & 도심 힐링"
    },
    {
      region: "경기 숲길 코스",
      title: "가평 축령산 숲길 & 양평 북한강 드라이브",
      desc: "울창한 잣나무 숲과 맑은 강변을 따라 이어지는 드라이브로, 맑은 공기를 마시며 깊은 숨을 내쉬는 자연 정화 코스입니다.",
      tag: "삼림욕 & 리프레시"
    },
    {
      region: "인천 오션뷰 코스",
      title: "송도 센트럴파크 & 영종도 해안 낙조 산책",
      desc: "이국적인 수변 공원의 산책로와 붉게 물드는 서해 바다의 낙조를 바라보며 마음의 여유를 채우는 오션뷰 코스입니다.",
      tag: "낙조 & 바다 힐링"
    },
  ];

  return (
    <div className="bg-[#0b0b0f] text-gray-100 min-h-screen py-12 px-4 selection:bg-amber-400 selection:text-black">
      <div className="max-w-4xl mx-auto space-y-10">
        
        {/* 상단 타이틀 */}
        <div className="text-center space-y-3">
          <span className="inline-block px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 font-bold text-xs tracking-widest uppercase">
            LOCAL WELLNESS TRAVEL GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight">
            수도권 프라이빗 <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-300 bg-clip-text text-transparent">힐링 여행지 안내</span>
          </h1>
          <p className="text-xs md:text-sm text-gray-400 max-w-lg mx-auto leading-relaxed">
            수마루가 제안하는 몸과 마음의 피로를 말끔히 비워내기 좋은 수도권 권역별 웰니스 명소
          </p>
        </div>

        {/* 힐링 테마 배너 */}
        <div className="bg-gradient-to-br from-[#161619] to-[#101013] border-2 border-amber-500/40 p-6 rounded-3xl text-center space-y-2 shadow-[0_0_30px_rgba(245,158,11,0.15)]">
          <p className="text-sm md:text-base font-extrabold text-amber-300">
            🌿 여행과 웰니스 바디케어가 어우러지는 여유로운 삶
          </p>
          <p className="text-xs text-gray-300 leading-relaxed max-w-xl mx-auto">
            자연 속에서 일상의 스트레스를 날려버리고, 전문적인 웰니스 테라피와 함께 온전한 재충전을 누릴 수 있는 특별한 라이프스타일을 만나보세요.
          </p>
        </div>

        {/* 여행 코스 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {travelCourses.map((course, idx) => (
            <div 
              key={idx} 
              className="bg-gradient-to-br from-[#141418] to-[#0f0f12] border border-amber-500/25 hover:border-amber-500/60 p-6 rounded-3xl space-y-3.5 transition-all group shadow-xl flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-amber-300 text-xs font-extrabold bg-amber-500/15 px-3 py-1 rounded-full border border-amber-500/30">
                    {course.region}
                  </span>
                  <span className="text-[10px] text-gray-300 bg-black/50 px-2.5 py-1 rounded-lg border border-white/5 font-bold">
                    {course.tag}
                  </span>
                </div>
                <h3 className="font-extrabold text-base md:text-lg text-white group-hover:text-amber-400 transition-colors">
                  {course.title}
                </h3>
                <p className="text-xs text-gray-300 leading-relaxed">
                  {course.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 하단 홈으로 이동 버튼 */}
        <div className="text-center pt-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 hover:from-amber-300 hover:to-yellow-300 text-black font-black text-xs px-8 py-4 rounded-2xl shadow-[0_0_20px_rgba(245,158,11,0.4)] transition-all active:scale-95"
          >
            <span>🏠</span> 수마루 홈으로 돌아가기
          </Link>
        </div>

      </div>
    </div>
  );
}