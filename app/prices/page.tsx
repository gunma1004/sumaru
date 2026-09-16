import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  metadataBase: new URL("https://sumaru.netlify.app"),
  title: "프로그램 & 요금 안내 | 수마루 - 투명하고 정직한 정찰제 가격 가이드",
  description: "타이, 아로마, 스웨디시, VIP 맞춤 코스 등 수마루 제휴 샵의 투명한 가격과 웰니스 프로그램을 확인하세요. 선입금 없는 100% 안심 후불제.",
  keywords: [
    "수마루",
    "마사지 가격",
    "스웨디시 요금",
    "아로마 테라피 비용",
    "정찰제 마사지",
    "후불제 웰니스",
    "프리미엄 코스 안내"
  ],
  openGraph: {
    title: "프로그램 & 요금 안내 | 수마루",
    description: "수마루의 투명하고 정직한 코스별 요금 및 웰니스 프로그램 안내",
    url: "https://sumaru.netlify.app/prices",
    siteName: "수마루",
    locale: "ko_KR",
    type: "website",
  },
};

export default function PricesPage() {
  const priceList = [
    { 
      title: "리프레시 건식 테라피 (60분)", 
      price: "60,000원부터~", 
      desc: "지친 신체의 피로를 덜어내고 굳은 근육을 부드럽게 이완시켜 주는 클래식 건식 코스",
      badge: "베이직 추천"
    },
    { 
      title: "아로마 오일 릴렉싱 (60분)", 
      price: "70,000원부터~", 
      desc: "순수 천연 에센셜 오일의 은은한 향과 함께 전신 순환을 도모하는 프리미엄 오일 케어",
      badge: "인기 스팟"
    },
    { 
      title: "감성 스웨디시 밸런스 (60분)", 
      price: "90,000원부터~", 
      desc: "부드럽고 섬세한 터치로 림프 순환과 깊은 심신 안정을 선사하는 시그니처 힐링 프로그램",
      badge: "스테디셀러"
    },
    { 
      title: "VVIP 하이엔드 마스터피스 (60분)", 
      price: "140,000원부터~", 
      desc: "개개인의 컨디션에 맞춘 커스텀 테크닉으로 최상의 안락함을 제공하는 최고급 코스",
      badge: "VIP 익스클루시브"
    },
  ];

  return (
    <div className="bg-[#0b0b0f] text-gray-100 min-h-screen py-12 px-4 selection:bg-amber-400 selection:text-black">
      <div className="max-w-3xl mx-auto space-y-10">
        
        {/* 상단 타이틀 */}
        <div className="text-center space-y-3">
          <span className="inline-block px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 font-bold text-xs tracking-widest uppercase">
            TRANSPARENT PRICING & PROGRAMS
          </span>
          <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight">
            품격 있는 웰니스 <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-300 bg-clip-text text-transparent">코스별 요금 안내</span>
          </h1>
          <p className="text-xs md:text-sm text-gray-400 max-w-lg mx-auto leading-relaxed">
            수마루는 투명한 정찰제 운영과 선입금 없는 100% 현장 후불 안심 시스템을 지향합니다.
          </p>
        </div>

        {/* 안심 보장 안내 박스 */}
        <div className="bg-gradient-to-br from-[#161619] to-[#101013] border-2 border-amber-500/40 p-6 rounded-3xl flex flex-col md:flex-row items-center gap-4 text-left shadow-[0_0_30px_rgba(245,158,11,0.15)]">
          <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-xl shrink-0">
            🛡️
          </div>
          <div className="space-y-1 flex-1">
            <span className="text-amber-300 font-extrabold text-sm flex items-center gap-1.5">
              100% 현장 후불제 안심 보장 스태프 가이드
            </span>
            <p className="text-xs text-gray-300 leading-relaxed">
              수마루의 모든 제휴 샵은 서비스 이용 전 <strong className="text-amber-400">어떠한 명목의 예약금이나 선입금도 절대 요구하지 않습니다.</strong> 안심하고 편안한 휴식을 누리세요.
            </p>
          </div>
        </div>

        {/* 코스별 가격 카드 리스트 */}
        <div className="space-y-4">
          {priceList.map((item, idx) => (
            <div 
              key={idx} 
              className="bg-gradient-to-br from-[#141418] to-[#0f0f12] border border-amber-500/20 hover:border-amber-500/60 p-6 rounded-3xl flex flex-col md:flex-row justify-between md:items-center gap-5 transition-all group shadow-xl"
            >
              <div className="space-y-2 flex-1">
                <div className="flex items-center gap-2.5 flex-wrap">
                  <span className="text-[10px] px-3 py-1 rounded-full bg-amber-500/15 text-amber-300 border border-amber-500/30 font-extrabold tracking-wide">
                    {item.badge}
                  </span>
                  <h3 className="font-extrabold text-white text-base md:text-lg group-hover:text-amber-400 transition-colors">
                    {item.title}
                  </h3>
                </div>
                <p className="text-xs text-gray-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="flex items-center justify-between md:justify-end shrink-0 pt-3 md:pt-0 border-t md:border-t-0 border-white/5">
                <span className="text-amber-400 font-black text-lg md:text-xl bg-black/60 px-4 py-2 rounded-2xl border border-amber-500/30 shadow-inner">
                  {item.price}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* 하단 상담 및 홈 이동 버튼 */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-6">
          <a
            href="tel:0507-1280-3344"
            className="w-full sm:w-auto text-center bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 hover:from-amber-300 hover:to-yellow-300 text-black font-black text-xs px-8 py-4 rounded-2xl shadow-[0_0_20px_rgba(245,158,11,0.4)] transition-all active:scale-95"
          >
            📞 실시간 프로그램 및 요금 문의 (0507-1280-3344)
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