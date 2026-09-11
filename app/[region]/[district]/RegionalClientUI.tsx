"use client";

import Link from "next/link";
import ClientTextMixer from "./ClientTextMixer";

interface ClientUIProps {
  region: string;
  district: string;
  dongName: string;
}

function getRegionFullName(region: string): string {
  switch (region) {
    case "seoul": return "서울특별시";
    case "incheon": return "인천광역시";
    case "gyeonggi": return "경기도";
    default: return "";
  }
}

export default function RegionalClientUI({ region, district, dongName }: ClientUIProps) {
  const regionName = getRegionFullName(region);
  const fullTitle = dongName ? `${regionName} ${district} (${dongName})` : `${regionName} ${district}`;
  const localPrefix = dongName ? `${district} ${dongName}` : district;

  // [지역명] 홈케어 - [샵이름] 형식 적용 및 민감한 연령 키워드(20대 등) 제외
  let baseShops = [
    { id: 1, name: `${localPrefix} 홈케어 - 한국미녀홈타이`, desc: "전국 주요지역 신속 방문! 정성 가득한 테라피 & 릴렉싱 프로그램", phone: "0507-1280-3303", price: "100,000원부터~", image: "/shop1.jpg" },
    { id: 2, name: `${localPrefix} 홈케어 - 너무이쁜홈타이`, desc: "품격 있는 힐링을 선사하는 최고급 오일 프라이빗 방문 테라피 서비스", phone: "0507-1280-3190", price: "60,000원부터~", image: "/shop2.jpg" },
    { id: 3, name: `${localPrefix} 홈케어 - 예쁜걸홈타이`, desc: "칼도착 25분 보장, 철저한 위생 관리와 럭셔리 케어", phone: "0507-1280-3185", price: "60,000원부터~", image: "/shop3.jpg" },
    { id: 4, name: `${localPrefix} 홈케어 - 퀸즈홈테라피`, desc: "전문 힐러들의 맞춤형 VIP 피로회복 특화 프로그램", phone: "0507-1280-3222", price: "60,000원부터~", image: "/shop4.jpg" },
    { id: 5, name: `${localPrefix} 홈케어 - 한국골든테라피`, desc: "선입금 없는 100% 후불제! 수도권 주요지역 25분 내 도착", phone: "0507-1280-3360", price: "110,000원부터~", image: "/shop5.jpg" }
  ];

  // 렌더링 시점에 셔플
  const shuffledShops = [...baseShops].sort(() => Math.random() - 0.5);

  return (
    <div className="bg-[#050505] text-gray-100 min-h-screen flex flex-col font-sans selection:bg-amber-500 selection:text-black">
      <main className="max-w-4xl mx-auto px-4 py-8 w-full flex-1 space-y-12">
        
        <section className="relative rounded-3xl overflow-hidden border border-amber-500/30 shadow-[0_0_40px_rgba(245,158,11,0.15)]">
          <img 
            src="/banner.jpg" 
            alt={`${fullTitle} 홈케어 및 바디케어 안내`} 
            className="w-full h-56 md:h-72 object-cover filter brightness-[0.6]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex flex-col justify-end p-6 md:p-8">
            <span className="text-amber-400 text-xs font-black tracking-widest uppercase mb-1">
              {regionName} · LOCAL HEALING GUIDE
            </span>
            <h1 className="text-2xl md:text-4xl font-black text-white drop-shadow-md">
              {fullTitle} 홈케어 & 방문케어 안내
            </h1>
            <p className="text-xs md:text-sm text-gray-300 mt-2 max-w-xl leading-relaxed">
              {fullTitle} 고객님을 위한 24시 홈케어 가이드입니다. 검증된 테라피 코스와 100% 후불 안심 시스템을 확인해 보세요.
            </p>
          </div>
        </section>

        <ClientTextMixer locationText={fullTitle} />

        <section className="space-y-6">
          <div className="text-center">
            <p className="text-xs text-amber-400 font-bold tracking-widest uppercase">
              RECOMMENDED SHOPS
            </p>
            <h2 className="text-xl md:text-2xl font-black text-white mt-1">
              🏆 {fullTitle} 추천 제휴업체 (총 5곳)
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {shuffledShops.map((lShop) => {
              // 🎯 변경된 동적 라우팅 경로 조합 ([region]/[district]/[dong]/[shopId])
              const shopDetailUrl = `/${region}/${encodeURIComponent(district)}/${encodeURIComponent(dongName || "all")}/${lShop.id}`;

              return (
                <div key={lShop.id} className="bg-[#121214] border border-amber-500/20 hover:border-amber-500/60 rounded-2xl p-4 flex gap-4 items-center shadow-lg transition-all group relative">
                  <Link href={shopDetailUrl} className="absolute inset-0 z-10" aria-label={`${lShop.name} 상세페이지 보기`} />
                  <img 
                    src={lShop.image} 
                    alt={lShop.name} 
                    className="w-20 h-20 md:w-24 md:h-24 rounded-xl object-cover border border-white/10 group-hover:scale-105 transition-transform" 
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-extrabold text-sm md:text-base text-white truncate group-hover:text-amber-400 transition-colors">
                      {lShop.name}
                    </h3>
                    <p className="text-[11px] text-gray-400 mt-1 line-clamp-2">
                      {lShop.desc}
                    </p>
                    <div className="mt-2.5 flex items-center justify-between">
                      <span className="text-xs font-black text-amber-400">{lShop.price}</span>
                      <a 
                        href={`tel:${lShop.phone}`} 
                        className="bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-amber-400 hover:to-yellow-300 text-black font-black text-xs px-3.5 py-1.5 rounded-xl shadow transition-all transform active:scale-95 relative z-20"
                      >
                        전화연결
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section className="bg-[#0c0c0e] p-6 md:p-8 rounded-3xl border border-white/10 space-y-4">
          <h3 className="text-base md:text-lg font-bold text-amber-400 flex items-center gap-2">
            <span>🌿</span> {fullTitle} 홈케어 & 바디케어 건강 가이드
          </h3>
          <div className="text-xs text-gray-300 space-y-3 leading-relaxed">
            <p>
              {fullTitle} 지역에서 홈케어를 찾으시는 분들을 위해, 현대 직장인들이 오랫동안 앉아서 일할 때 경직되는 승모근과 목 주변 근육을 풀어주는 릴렉싱 케어 정보를 안내해 드립니다.
            </p>
            <div className="bg-black/50 p-4 rounded-2xl border border-white/5 space-y-2">
              <h4 className="font-bold text-white text-xs">💡 나에게 맞는 홈케어 프로그램 선택 기준</h4>
              <ul className="list-disc list-inside space-y-1.5 text-gray-400">
                <li><strong className="text-gray-200">건식 릴렉싱 케어:</strong> 둔근, 하체 근육, 견갑골 주위의 굳은 부위를 눌러 스트레칭 위주로 근육 긴장을 해소합니다.</li>
                <li><strong className="text-gray-200">아로마 & 스웨디시 케어:</strong> 천연 오일의 유기적인 압을 이용해 림프 순환을 돕고 심신 안정 및 부종 완화에 탁월합니다.</li>
                <li><strong className="text-gray-200">프라이빗 홈케어:</strong> 익숙하고 편안한 자신의 개인 공간에서 이동 시간 없이 피로를 완화할 수 있는 장점이 있습니다.</li>
              </ul>
            </div>
          </div>
        </section>

      </main>

      <footer className="bg-[#030303] border-t border-white/10 py-10 text-center text-gray-500 text-xs mt-auto">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <div>
            <a 
              href="tel:0507-1280-3344" 
              className="inline-flex items-center gap-1.5 bg-neutral-900 hover:bg-neutral-800 text-amber-400 font-bold px-4 py-2 rounded-xl border border-amber-500/30 hover:border-amber-400 transition-all text-xs shadow-md"
            >
              <span>🤝</span> 제휴문의 (0507-1280-3344)
            </a>
          </div>
          <p className="text-gray-400 font-bold">투데이쿡은 건전한 방문케어 및 홈케어 힐링 바디케어 정보 안내 플랫폼입니다.</p>
          <p className="text-[11px] text-gray-600">COPYRIGHT &copy; 투데이쿡 ALL RIGHTS RESERVED.</p>
        </div>
      </footer>
    </div>
  );
}