import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  metadataBase: new URL("https://sumaru.netlify.app"),
  title: "프로그램 & 서비스 안내 | 수마루 - 수도권 프리미엄 웰니스 힐링 코스",
  description: "클래식 건식 테라피, 아로마 오일 릴렉싱, 감성 스웨디시, VIP 마스터피스 등 수마루의 고품격 피로회복 웰니스 프로그램을 확인하세요.",
  keywords: [
    "수마루",
    "웰니스 프로그램",
    "스웨디시 코스",
    "아로마 테라피",
    "건식 마사지",
    "프리미엄 바디케어",
    "맞춤형 힐링 서비스"
  ],
  openGraph: {
    title: "프로그램 & 서비스 안내 | 수마루",
    description: "수마루가 제공하는 맞춤형 웰니스 테라피 & 프리미엄 바디케어 프로그램 안내",
    url: "https://sumaru.netlify.app/services",
    siteName: "수마루",
    locale: "ko_KR",
    type: "website",
  },
};

export default function ServicesPage() {
  const serviceList = [
    {
      num: "01",
      title: "리프레시 건식 테라피",
      desc: "전신의 누적된 피로를 덜어내고 굳은 근육과 관절을 부드럽게 이완시켜 주는 클래식 스트레칭 중심의 프로그램입니다.",
      target: "어깨 결림, 만성 근육 뭉침, 빠른 피로 회복을 원하시는 분"
    },
    {
      num: "02",
      title: "아로마 오일 릴렉싱",
      desc: "순수 천연 에센셜 오일을 사용하여 피부에 부드러운 영양을 공급하고 혈액순환과 심신 안정을 돕는 전신 케어 코스입니다.",
      target: "스트레스 완화, 부드러운 전신 이완 및 포근한 힐링이 필요하신 분"
    },
    {
      num: "03",
      title: "감성 스웨디시 밸런스",
      desc: "림프 순환을 촉진하고 섬세한 감성 터치와 리드미컬한 압으로 지친 몸과 마음을 최상의 상태로 리프레시해 드립니다.",
      target: "깊은 휴식, 부드러운 림프 순환, 품격 있는 프라이빗 케어를 원하시는 분"
    },
    {
      num: "04",
      title: "VVIP 익스클루시브 코스",
      desc: "오랜 경력의 베테랑 힐러진이 고객님의 당일 신체 컨디션에 맞춰 커스텀마이징 피로회복 플랜을 제공하는 최상급 프로그램입니다.",
      target: "체계적인 맞춤 관리와 차별화된 웰니스 만족도를 원하시는 VIP 고객"
    },
  ];

  return (
    <div className="bg-[#0b0b0f] text-gray-100 min-h-screen py-12 px-4 selection:bg-amber-400 selection:text-black">
      <div className="max-w-4xl mx-auto space-y-10">
        
        {/* 상단 타이틀 */}
        <div className="text-center space-y-3">
          <span className="inline-block px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 font-bold text-xs tracking-widest uppercase">
            PREMIUM WELLNESS PROGRAMS
          </span>
          <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight">
            수마루 <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-300 bg-clip-text text-transparent">코스별 서비스 안내</span>
          </h1>
          <p className="text-xs md:text-sm text-gray-400 max-w-lg mx-auto leading-relaxed">
            고객님의 신체 컨디션과 취향에 맞추어 수도권 전역에서 만나볼 수 있는 최상의 웰니스 테라피 코스
          </p>
        </div>

        {/* 서비스 특징 안내 배너 */}
        <div className="bg-gradient-to-br from-[#161619] to-[#101013] border-2 border-amber-500/40 p-6 rounded-3xl text-center space-y-2 shadow-[0_0_30px_rgba(245,158,11,0.15)]">
          <p className="text-sm md:text-base font-extrabold text-amber-300">
            ✨ 100% 현장 후불제 & 철저한 위생 멸균 시스템
          </p>
          <p className="text-xs text-gray-300 leading-relaxed max-w-xl mx-auto">
            수마루의 모든 제휴 샵은 최고급 천연 오일과 철저히 소독된 케어 용품만을 고집하며, 서비스 제공 전 선입금을 절대 요구하지 않습니다.
          </p>
        </div>

        {/* 서비스 카드 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {serviceList.map((srv, idx) => (
            <div 
              key={idx} 
              className="bg-gradient-to-br from-[#141418] to-[#0f0f12] border border-amber-500/25 hover:border-amber-500/60 p-7 rounded-3xl space-y-4 shadow-xl transition-all group flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-amber-400 text-2xl font-black">{srv.num}</span>
                  <span className="text-[10px] text-amber-300 bg-amber-500/15 border border-amber-500/30 px-3 py-1 rounded-full font-extrabold tracking-wide">
                    수마루 추천
                  </span>
                </div>
                <h3 className="font-extrabold text-lg text-white group-hover:text-amber-400 transition-colors">
                  {srv.title}
                </h3>
                <p className="text-xs text-gray-300 leading-relaxed">
                  {srv.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-white/5">
                <p className="text-[11px] text-gray-400 flex items-start gap-1.5 leading-snug">
                  <span className="text-amber-400 font-extrabold shrink-0">추천 대상:</span> {srv.target}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 하단 CTA 버튼 영역 */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-6">
          <a
            href="tel:0507-1280-3344"
            className="w-full sm:w-auto text-center bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 hover:from-amber-300 hover:to-yellow-300 text-black font-black text-xs px-8 py-4 rounded-2xl shadow-[0_0_20px_rgba(245,158,11,0.4)] transition-all active:scale-95"
          >
            📞 맞춤 코스 빠른 상담 (0507-1280-3344)
          </a>
          <Link
            href="/"
            className="w-full sm:w-auto text-center bg-[#18181c] hover:bg-[#222228] text-gray-300 hover:text-white border border-white/10 font-bold text-xs px-8 py-4 rounded-2xl transition-all"
          >
            🏠 수마루 홈으로 돌아가기
          </Link>
        </div>

      </div>
    </div>
  );
}