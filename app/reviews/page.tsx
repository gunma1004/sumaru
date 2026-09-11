import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "생생 후기 | 투데이쿡 - 100% 실제 고객 방문 케어 이용 리뷰",
  description: "서울·경기·인천 수도권 투데이쿡 제휴샵을 직접 이용하신 고객님들의 100% 솔직한 평점과 후기를 확인해 보세요.",
  openGraph: {
    title: "생생 후기 | 투데이쿡",
    description: "투데이쿡 실제 고객님들의 100% 솔직한 방문 테라피 이용 후기",
    url: "https://todaykkuk.netlify.app/reviews",
    siteName: "투데이쿡",
    locale: "ko_KR",
    type: "website",
  },
};

export default function ReviewsPage() {
  const reviews = [
    { 
      name: "서울 강남구 이용자", 
      rate: "★★★★★ 5.0", 
      course: "VIP 코스",
      date: "최근 이용",
      text: "야근 후에 홈케어 신청했는데 25분 만에 오셨어요. 어깨 뭉친 게 싹 풀려서 다음 날 컨디션이 최고였습니다!" 
    },
    { 
      name: "경기 수원시 이용자", 
      rate: "★★★★★ 5.0", 
      course: "감성 스웨디시",
      date: "최근 이용",
      text: "선입금 없는 후불제라 마음 편하게 이용했습니다. 관리사분 친절함과 테라피 실력 모두 완전 만족스럽네요." 
    },
    { 
      name: "인천 송도동 이용자", 
      rate: "★★★★★ 5.0", 
      course: "아로마 오일 케어",
      date: "최근 이용",
      text: "부드러운 아로마 향과 함께 뭉친 근육을 잘 짚어주셔서 힐링 제대로 했습니다. 주말마다 정기적으로 부를 생각입니다." 
    },
    { 
      name: "서울 마포구 이용자", 
      rate: "★★★★★ 5.0", 
      course: "건식 릴렉싱 케어",
      date: "최근 이용",
      text: "집에서 편안하게 관리받을 수 있는 게 가장 큰 장점이네요. 위생 관리도 철저해서 안심하고 받았습니다." 
    },
    { 
      name: "경기 성남시 이용자", 
      rate: "★★★★★ 5.0", 
      course: "VIP 프리미엄",
      date: "최근 이용",
      text: "투데이쿡 후기 보고 믿고 예약했는데 역대급 힐링이었습니다. 다음에도 꼭 다시 이용하겠습니다!" 
    },
  ];

  return (
    <div className="bg-[#050505] text-gray-100 min-h-screen py-10 px-4">
      <div className="max-w-3xl mx-auto space-y-8">
        
        {/* 상단 타이틀 */}
        <div className="text-center space-y-2">
          <span className="text-amber-400 text-xs font-bold tracking-widest uppercase">
            REAL CUSTOMER REVIEWS
          </span>
          <h1 className="text-3xl md:text-4xl font-black text-white">
            실제 이용 고객 생생 후기
          </h1>
          <p className="text-xs md:text-sm text-gray-400">
            투데이쿡을 직접 경험하신 고객님들의 100% 솔직한 피로회복 후기
          </p>
        </div>

        {/* 평점 요약 배너 */}
        <div className="bg-gradient-to-r from-amber-500/10 via-amber-400/5 to-amber-500/10 border border-amber-500/30 p-5 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-inner">
          <div>
            <span className="text-amber-300 font-extrabold text-sm md:text-base">
              🏆 투데이쿡 고객 평균 만족도
            </span>
            <p className="text-xs text-gray-300 mt-0.5">
              철저한 검증과 100% 후불제 정직한 서비스로 높은 재방문율을 유지합니다.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl md:text-3xl font-black text-amber-400">4.98</span>
            <span className="text-amber-400 text-sm">/ 5.0</span>
          </div>
        </div>

        {/* 후기 카드 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {reviews.map((rev, idx) => (
            <div 
              key={idx} 
              className="bg-[#121214] border border-amber-500/20 hover:border-amber-500/50 p-5 rounded-2xl space-y-2.5 transition-all shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-amber-400 font-black text-xs tracking-wider">
                    {rev.rate}
                  </span>
                  <span className="text-[10px] text-gray-500 bg-white/5 px-2 py-0.5 rounded-md">
                    {rev.date}
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="text-gray-200 font-bold">{rev.name}</span>
                  <span className="text-amber-300/80 text-[11px]">{rev.course}</span>
                </div>
                <p className="text-xs text-gray-300 leading-relaxed">
                  &quot;{rev.text}&quot;
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 하단 홈으로 이동 버튼 */}
        <div className="text-center pt-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-yellow-400 text-black font-extrabold text-xs px-6 py-3.5 rounded-xl shadow-lg hover:from-amber-400 hover:to-yellow-300 transition-all active:scale-95"
          >
            <span>🏠</span> 투데이쿡 홈으로 돌아가기
          </Link>
        </div>

      </div>
    </div>
  );
}