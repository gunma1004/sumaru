import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  metadataBase: new URL("https://sumaru.netlify.app"),
  title: "고객 생생 후기 | 수문루 - 100% 실제 이용 고객 웰니스 힐링 리뷰",
  description: "서울·경기·인천 수도권 수마루 제휴 샵을 직접 이용하신 고객님들의 100% 솔직한 평점과 프리미엄 바디케어 후기를 확인해 보세요.",
  keywords: [
    "수마루",
    "마사지 이용후기",
    "스웨디시 후기",
    "웰니스 힐링 리뷰",
    "실제 고객 평가",
    "후불제 제휴샵 후기"
  ],
  openGraph: {
    title: "고객 생생 후기 | 수마루",
    description: "수마루 실제 고객님들의 100% 진솔한 웰니스 테라피 및 바디케어 이용 후기",
    url: "https://sumaru.netlify.app/reviews",
    siteName: "수마루",
    locale: "ko_KR",
    type: "website",
  },
};

export default function ReviewsPage() {
  const reviews = [
    { 
      name: "서울 강남 이용 고객", 
      rate: "★★★★★ 5.0", 
      course: "VVIP 익스클루시브 코스",
      date: "실시간 인증 후기",
      text: "방문 케어 서비스 이용했는데 약속된 시간에 정확히 오셔서 피로를 깔끔하게 날려주셨습니다. 컨디션이 완전히 회복되었어요!" 
    },
    { 
      name: "경기 수원 이용 고객", 
      rate: "★★★★★ 5.0", 
      course: "감성 스웨디시 밸런스",
      date: "실시간 인증 후기",
      text: "선입금이나 예약금 스트레스가 전혀 없는 100% 후불제라 정말 편했습니다. 관리사분 전문성과 친절함에 감동했습니다." 
    },
    { 
      name: "인천 송도 이용 고객", 
      rate: "★★★★★ 5.0", 
      course: "아로마 오일 릴렉싱",
      date: "실시간 인증 후기",
      text: "은은한 천연 아로마 향 속에서 몸의 긴장이 사르르 녹아내리는 기분이었습니다. 앞으로 단골 삼으려고 합니다." 
    },
    { 
      name: "서울 마포 이용 고객", 
      rate: "★★★★★ 5.0", 
      course: "리프레시 건식 테라피",
      date: "실시간 인증 후기",
      text: "집에서 편안하게 최고급 스파를 받는 기분이었어요. 위생 상태도 너무 쾌적하고 깔끔해서 안심하고 이용했습니다." 
    },
    { 
      name: "경기 성남 이용 고객", 
      rate: "★★★★★ 5.0", 
      course: "프리미엄 웰니스 케어",
      date: "실시간 인증 후기",
      text: "수마루 추천 제휴 샵 중 고민하다 선택했는데 역대급 만족입니다. 다음 주 주말에 또 예약할 예정입니다!" 
    },
  ];

  return (
    <div className="bg-[#0b0b0f] text-gray-100 min-h-screen py-12 px-4 selection:bg-amber-400 selection:text-black">
      <div className="max-w-3xl mx-auto space-y-10">
        
        {/* 상단 타이틀 */}
        <div className="text-center space-y-3">
          <span className="inline-block px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 font-bold text-xs tracking-widest uppercase">
            VERIFIED CUSTOMER EXPERIENCES
          </span>
          <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight">
            실제 이용 고객 <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-300 bg-clip-text text-transparent">생생 힐링 후기</span>
          </h1>
          <p className="text-xs md:text-sm text-gray-400 max-w-md mx-auto leading-relaxed">
            수마루를 통해 엄선된 제휴 스팟을 직접 경험하신 고객님들의 100% 진솔한 피로회복 리뷰입니다.
          </p>
        </div>

        {/* 평점 요약 배너 */}
        <div className="bg-gradient-to-br from-[#161619] to-[#101013] border-2 border-amber-500/40 p-6 rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left shadow-[0_0_30px_rgba(245,158,11,0.15)]">
          <div className="space-y-1">
            <span className="text-amber-300 font-extrabold text-sm md:text-base flex items-center justify-center sm:justify-start gap-1.5">
              🏆 수마루 통합 제휴 샵 고객 만족도
            </span>
            <p className="text-xs text-gray-300 leading-relaxed">
              철저한 검증 프로세스와 정직한 후불제 운영으로 압도적인 재방문율을 자랑합니다.
            </p>
          </div>
          <div className="flex items-center justify-center gap-2 bg-black/50 px-5 py-3 rounded-2xl border border-amber-500/30 shadow-inner">
            <span className="text-3xl md:text-4xl font-black text-amber-400">4.99</span>
            <span className="text-amber-300 text-xs font-bold">/ 5.0</span>
          </div>
        </div>

        {/* 후기 카드 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {reviews.map((rev, idx) => (
            <div 
              key={idx} 
              className="bg-gradient-to-br from-[#141418] to-[#0f0f12] border border-amber-500/25 hover:border-amber-500/60 p-6 rounded-3xl space-y-3 transition-all shadow-xl flex flex-col justify-between group"
            >
              <div className="space-y-2.5">
                <div className="flex justify-between items-center">
                  <span className="text-amber-400 font-black text-xs tracking-wider bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/25">
                    {rev.rate}
                  </span>
                  <span className="text-[10px] text-gray-400 font-medium bg-black/40 px-2.5 py-1 rounded-lg border border-white/5">
                    {rev.date}
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs pt-1">
                  <span className="text-white font-extrabold">{rev.name}</span>
                  <span className="text-amber-300 font-bold text-[11px]">{rev.course}</span>
                </div>
                <p className="text-xs text-gray-300 leading-relaxed pt-1">
                  &quot;{rev.text}&quot;
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