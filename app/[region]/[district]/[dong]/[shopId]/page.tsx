import { Metadata } from "next";
import Link from "next/link";

interface PageProps {
  params: Promise<{
    region: string;
    district: string;
    dong: string;
    shopId: string;
  }>;
}

// 🌐 영문 지역 코드를 완벽한 한글 지역명으로 변환
function getRegionFullName(region: string): string {
  switch (region.toLowerCase()) {
    case "seoul": return "서울";
    case "gyeonggi": return "경기";
    case "incheon": return "인천";
    default: return region;
  }
}

// 🛠️ URL 인코딩 및 한글 주소 파싱 헬퍼 함수
function parseLocationText(region: string, district: string, dong: string): string {
  const regionName = getRegionFullName(region);
  
  let decodedDistrict = "";
  try {
    decodedDistrict = decodeURIComponent(district || "").trim();
  } catch {
    decodedDistrict = district || "";
  }

  let cleanDong = "";
  if (dong && dong !== "all") {
    try {
      cleanDong = decodeURIComponent(dong || "").trim();
    } catch {
      cleanDong = dong || "";
    }
  }

  return `${regionName} ${decodedDistrict} ${cleanDong}`.replace(/\s+/g, " ").trim();
}

// 💎 정확한 코스 및 가격 정보가 반영된 샵 데이터
const shopData: Record<
  string,
  {
    name: string;
    phone: string;
    location: string;
    badge: string;
    image: string;
    desc: string;
    courses: { name: string; time: string; price: string; desc: string }[];
    features: string[];
  }
> = {
  "1": {
    name: "한국미녀홈타이",
    phone: "0507-1280-3303",
    location: "수도권 주요 지역 25분 내 신속 방문",
    badge: "실시간 만족도 1위",
    image: "/shop1.jpg",
    desc: "지친 일상을 깨우는 정성 가득한 테라피! 최고급 베테랑 힐러진이 고객님의 공간으로 직접 찾아갑니다.",
    courses: [
      { name: "아로디시", time: "90분", price: "100,000원", desc: "부드럽고 시원한 힐링 아로디시 코스" },
      { name: "아로디시", time: "120분", price: "130,000원", desc: "여유롭게 즐기는 120분 아로디시 코스" },
      { name: "VIP스웨디시", time: "60분", price: "110,000원", desc: "고품격 감성 스웨디시 집중 케어" },
      { name: "VIP스웨디시", time: "90분", price: "130,000원", desc: "깊은 휴식을 선사하는 인기 VIP 코스" },
      { name: "VIP스웨디시", time: "120분", price: "150,000원", desc: "완벽한 피로 회복을 위한 120분 풀케어" },
      { name: "한국인스웨디시", time: "60분", price: "140,000원", desc: "전문 한국인 관리사의 섬세한 스웨디시" },
      { name: "한국인스웨디시", time: "90분", price: "180,000원", desc: "최고급 만족도를 선사하는 한국인 스페셜" },
    ],
    features: ["100% 후불제 안심결제", "24시간 365일 연중무휴", "수도권 주요 거점 25분 칼도착"],
  },
  "2": {
    name: "너무이쁜홈타이",
    phone: "0507-1280-3190",
    location: "수도권 주요 거점 신속 방문",
    badge: "재방문율 최우수",
    image: "/shop2.jpg",
    desc: "품격 있는 힐링을 선사하는 프라이빗 케어! 최고급 오일과 맞춤형 테라피로 특별한 휴식을 드립니다.",
    courses: [
      { name: "타이코스", time: "60분", price: "60,000원", desc: "전신 스트레칭과 뻐근함 해소" },
      { name: "타이코스", time: "90분", price: "80,000원", desc: "여유로운 타이 전신 스트레칭" },
      { name: "타이코스", time: "120분", price: "100,000원", desc: "구석구석 시원하게 풀어주는 코스" },
      { name: "전신아로마", time: "60분", price: "70,000원", desc: "부드러운 오일 전신 순환 케어" },
      { name: "전신아로마", time: "90분", price: "90,000원", desc: "스트레스 완화 아로마 테라피" },
      { name: "전신아로마", time: "120분", price: "110,000원", desc: "깊은 릴렉싱을 주는 120분 아로마" },
      { name: "VIP 감성힐링코스 ★추천", time: "60분", price: "90,000원", desc: "감성 터치가 더해진 인기 힐링 코스" },
      { name: "VIP 감성힐링코스 ★추천", time: "90분", price: "110,000원", desc: "만족도 높은 시그니처 감성 힐링" },
      { name: "VIP 감성힐링코스 ★추천", time: "120분", price: "130,000원", desc: "오래도록 지속되는 편안함" },
      { name: "VIP 스페셜코스 ★추천", time: "60분", price: "100,000원", desc: "특별한 관리를 원하실 때 추천" },
      { name: "VIP 스페셜코스 ★추천", time: "90분", price: "120,000원", desc: "고품격 맞춤형 스페셜 케어" },
      { name: "VIP 스페셜코스 ★추천", time: "120분", price: "140,000원", desc: "최고의 힐링을 선사하는 스페셜" },
      { name: "VIP 프리미엄 코스", time: "150분", price: "160,000원", desc: "타이 & 아로마 & 풋코스 종합 프로그램" },
      { name: "한국인스웨디시", time: "60분", price: "140,000원", desc: "전문 한국인 관리사의 품격 있는 스웨디시" },
      { name: "한국인스웨디시", time: "90분", price: "180,000원", desc: "최고급 감성 스웨디시 풀케어" },
    ],
    features: ["100% 후불제 안심결제", "친절 마인드 힐러 상시 대기"],
  },
  "3": {
    name: "예쁜걸홈타이",
    phone: "0507-1280-3185",
    location: "수도권 주요 지역 신속 도착",
    badge: "24시 상시 할인",
    image: "/shop3.jpg",
    desc: "칼도착 25분 보장! 철저한 위생 관리와 럭셔리한 서비스로 완벽한 피로 회복을 약속드립니다.",
    courses: [
      { name: "타이코스", time: "60분", price: "60,000원", desc: "전신 스트레칭과 뻐근함 해소" },
      { name: "타이코스", time: "90분", price: "80,000원", desc: "여유로운 타이 전신 스트레칭" },
      { name: "타이코스", time: "120분", price: "100,000원", desc: "구석구석 시원하게 풀어주는 코스" },
      { name: "전신아로마", time: "60분", price: "70,000원", desc: "부드러운 오일 전신 순환 케어" },
      { name: "전신아로마", time: "90분", price: "90,000원", desc: "스트레스 완화 아로마 테라피" },
      { name: "전신아로마", time: "120분", price: "110,000원", desc: "깊은 릴렉싱을 주는 120분 아로마" },
      { name: "VIP 감성힐링코스 ★추천", time: "60분", price: "90,000원", desc: "감성 터치가 더해진 인기 힐링 코스" },
      { name: "VIP 감성힐링코스 ★추천", time: "90분", price: "110,000원", desc: "만족도 높은 시그니처 감성 힐링" },
      { name: "VIP 감성힐링코스 ★추천", time: "120분", price: "130,000원", desc: "오래도록 지속되는 편안함" },
      { name: "VIP 스페셜코스 ★추천", time: "60분", price: "100,000원", desc: "특별한 관리를 원하실 때 추천" },
      { name: "VIP 스페셜코스 ★추천", time: "90분", price: "120,000원", desc: "고품격 맞춤형 스페셜 케어" },
      { name: "VIP 스페셜코스 ★추천", time: "120분", price: "140,000원", desc: "최고의 힐링을 선사하는 스페셜" },
      { name: "VIP 프리미엄 코스", time: "150분", price: "160,000원", desc: "타이 & 아로마 & 풋코스 종합 프로그램" },
      { name: "한국인스웨디시", time: "60분", price: "140,000원", desc: "전문 한국인 관리사의 품격 있는 스웨디시" },
      { name: "한국인스웨디시", time: "90분", price: "180,000원", desc: "최고급 감성 스웨디시 풀케어" },
    ],
    features: ["선입금 0원 100% 후불제", "평균 25분 방문 보장"],
  },
  "4": {
    name: "퀸즈홈테라피",
    phone: "0507-1280-3222",
    location: "수도권 주요 지역 24시 방문",
    badge: "프리미엄 감성",
    image: "/shop4.jpg",
    desc: "전문 힐러들의 맞춤형 VIP 피로회복 특화 프로그램입니다.",
    courses: [
      { name: "건식 힐링 코스", time: "60분", price: "60,000원", desc: "원하는 부위를 집중적으로 풀어주는 건식 릴렉스" },
      { name: "건식 힐링 코스", time: "90분", price: "80,000원", desc: "여유롭고 시원한 건식 힐링" },
      { name: "건식 힐링 코스", time: "120분", price: "100,000원", desc: "전신 피로를 날려버리는 120분 건식" },
      { name: "아로마 힐링 코스", time: "60분", price: "70,000원", desc: "부드러운 오일 순환 아로마 케어" },
      { name: "아로마 힐링 코스", time: "90분", price: "80,000원", desc: "스트레스 해소를 위한 아로마 힐링" },
      { name: "아로마 힐링 코스", time: "120분", price: "100,000원", desc: "풍성한 오일 테라피 프로그램" },
      { name: "힐링스웨디시 코스", time: "60분", price: "80,000원", desc: "부드럽고 감미로운 힐링 스웨디시" },
      { name: "힐링스웨디시 코스", time: "90분", price: "100,000원", desc: "깊은 안정감을 주는 스웨디시 케어" },
      { name: "힐링스웨디시 코스", time: "120분", price: "120,000원", desc: "여유로운 프리미엄 스웨디시" },
      { name: "VIP스페셜코스", time: "60분", price: "100,000원", desc: "특별한 만족감을 주는 VIP 스페셜" },
      { name: "VIP스페셜코스", time: "90분", price: "120,000원", desc: "최상급 테라피스트의 집중 관리" },
      { name: "VIP스페셜코스", time: "120분", price: "150,000원", desc: "완벽한 휴식을 위한 120분 VIP" },
      { name: "한국 관리사 코스", time: "60분", price: "150,000원", desc: "전문 한국인 관리사의 1:1 맞춤 케어" },
      { name: "한국 관리사 코스", time: "90분", price: "180,000원", desc: "최고급 프리미엄 한국인 관리 코스" },
    ],
    features: ["세련된 감성 테라피", "100% 후불 결제"],
  },
  "5": {
    name: "한국골든테라피",
    phone: "0507-1280-3360",
    location: "수도권 실시간 방문",
    badge: "인기도 TOP 5",
    image: "/shop5.jpg",
    desc: "선입금 없는 100% 후불제 안심 이용 서비스.",
    courses: [
      { name: "스웨디시 코스", time: "60분", price: "140,000원", desc: "고품격 프리미엄 스웨디시 케어" },
      { name: "스웨디시 코스", time: "90분", price: "190,000원", desc: "깊은 휴식과 힐링을 주는 90분 스웨디시" },
      { name: "프리미엄 코스", time: "60분", price: "110,000원", desc: "실속 있고 알찬 프리미엄 프로그램" },
      { name: "프리미엄 코스", time: "90분", price: "130,000원", desc: "여유롭게 즐기는 90분 프리미엄 케어" },
      { name: "프리미엄 코스", time: "120분", price: "150,000원", desc: "모든 피로를 해소하는 120분 풀코스" },
    ],
    features: ["100% 후불제", "수도권 빠른 도착"],
  },
};

// 🎯 메타데이터 설정 (SEO 최적화 및 영문/healing 단어 제거)
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const { region, district, dong, shopId } = resolvedParams;
  const shop = shopData[shopId] || shopData["1"];

  const locationPrefix = parseLocationText(region, district, dong);
  const formattedTitle = `${locationPrefix} 출장 힐링 테라피 - ${shop.name} | 투데이쿡`;
  const formattedDesc = `${locationPrefix} 인근 방문 제휴업체 ${shop.name}. 선입금 없는 100% 안심 후불제 출장 홈케어 안내.`;

  return {
    title: formattedTitle,
    description: formattedDesc,
    openGraph: {
      title: formattedTitle,
      description: formattedDesc,
      url: `https://todaykkuk.netlify.app/${region}/${district}/${dong}/${shopId}`,
      siteName: "투데이쿡",
      locale: "ko_KR",
      type: "website",
    },
  };
}

export default async function ShopDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  const { region, district, dong, shopId } = resolvedParams;
  const shop = shopData[shopId] || shopData["1"];

  const locationPrefix = parseLocationText(region, district, dong);
  const displayShopName = `${locationPrefix} 출장마사지 - ${shop.name}`;

  return (
    <div className="bg-[#050505] text-gray-100 min-h-screen flex flex-col font-sans selection:bg-amber-500 selection:text-black pb-24">
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
              <span className="text-[10px] text-gray-400 tracking-tighter">PREMIUM SHOP DETAIL</span>
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
        <section className="bg-[#121214] border border-amber-500/30 rounded-3xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
          <div className="relative h-64 md:h-80 w-full overflow-hidden">
            <img src={shop.image} alt={shop.name} className="w-full h-full object-cover filter brightness-[0.7]" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#121214] via-transparent to-black/30"></div>
            <span className="absolute top-4 left-4 bg-amber-500 text-black text-xs font-black px-3.5 py-1.5 rounded-full shadow-lg">
              {shop.badge}
            </span>
          </div>

          <div className="p-6 md:p-8 space-y-4 -mt-8 relative z-10">
            <div className="inline-block bg-amber-500/10 border border-amber-500/30 px-3 py-1 rounded-xl text-amber-400 text-xs font-bold">
              📍 {shop.location}
            </div>

            <h1 className="text-xl md:text-3xl font-black text-white">{displayShopName}</h1>

            <p className="text-xs md:text-sm text-gray-300 leading-relaxed bg-black/50 p-4 rounded-2xl border border-white/5">
              {shop.desc}
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2">
              {shop.features.map((feat, idx) => (
                <div key={idx} className="bg-black/60 border border-amber-500/20 px-3 py-2 rounded-xl text-center text-[11px] font-bold text-amber-300">
                  ✓ {feat}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 상세 코스 및 요금 */}
        <section className="bg-[#0d0d0f] border border-amber-500/20 p-6 md:p-8 rounded-3xl space-y-6">
          <div className="text-center">
            <span className="text-amber-400 text-xs font-bold tracking-widest uppercase">COURSE & PRICE</span>
            <h2 className="text-xl md:text-2xl font-black text-white mt-1">💎 대표 코스 및 요금 안내</h2>
          </div>

          <div className="space-y-4">
            {shop.courses.map((course, idx) => (
              <div key={idx} className="bg-black/60 border border-white/10 p-5 rounded-2xl flex justify-between items-center hover:border-amber-500/40 transition-colors">
                <div>
                  <span className="text-red-400 text-[10px] font-black mr-2">{course.time}</span>
                  <h3 className="font-extrabold text-white text-base inline">{course.name}</h3>
                  <p className="text-xs text-gray-400 mt-1">{course.desc}</p>
                </div>
                <span className="text-base font-black text-amber-400 shrink-0 ml-4">{course.price}</span>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* 하단 고정 바 */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#08080a]/95 backdrop-blur-xl border-t border-amber-500/30 p-3 md:p-4 shadow-[0_-10px_25px_rgba(0,0,0,0.8)]">
        <div className="max-w-4xl mx-auto grid grid-cols-2 gap-3">
          <a href={`tel:${shop.phone}`} className="flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-yellow-400 text-black font-black py-3.5 rounded-2xl text-xs md:text-sm">
            📞 전화로 즉시예약
          </a>
          <a href={`sms:${shop.phone}?body=${encodeURIComponent(`${displayShopName} 문의드립니다. (투데이쿡 보고 연락드렸어요)`)}`} className="flex items-center justify-center gap-2 bg-neutral-900 text-white font-black py-3.5 rounded-2xl text-xs md:text-sm border border-white/10">
            💬 간편 문자상담
          </a>
        </div>
      </div>
    </div>
  );
}