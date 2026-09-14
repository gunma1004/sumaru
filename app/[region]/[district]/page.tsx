import { Metadata } from "next";
import RegionalClientUI from "./RegionalClientUI";

interface PageProps {
  params: Promise<{
    region: string;
    district: string;
  }>;
  searchParams: Promise<{
    dong?: string;
  }>;
}

function getRegionKoreanName(region: string): string {
  switch (region.toLowerCase()) {
    case "seoul": return "서울";
    case "incheon": return "인천";
    case "gyeonggi": return "경기";
    default: return "수도권";
  }
}

// 🛠️ 이중 URL 인코딩까지 안전하게 풀어내는 디코더
function safeDecode(str: string): string {
  if (!str) return "";
  let decoded = str;
  try {
    decoded = decodeURIComponent(decodeURIComponent(str));
  } catch {
    try {
      decoded = decodeURIComponent(str);
    } catch {
      decoded = str;
    }
  }
  return decoded.trim();
}

export async function generateMetadata({ params, searchParams }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const resolvedSearchParams = await searchParams;
  
  const { region, district } = resolvedParams;
  const regionName = getRegionKoreanName(region);
  const districtName = safeDecode(district);
  const dongName = resolvedSearchParams.dong ? safeDecode(resolvedSearchParams.dong) : "";

  const locationKeyword = `${regionName} ${districtName} ${dongName}`.trim();
  const simpleLocation = dongName ? `${districtName} ${dongName}` : districtName;

  const charSum = (locationKeyword + districtName).split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const variantIndex = charSum % 10;

  // 🌟 스팸 키워드 배제 + 구 단위 웰니스 마사지 배리에이션
  const titleVariants = [
    `${locationKeyword} 마사지 제휴 안내 | 웰니스 스웨디시 & 타이마사지 - 투데이쿡`,
    `${simpleLocation} 웰니스 마사지 추천 코스 및 프로그램 안내 · 투데이쿡`,
    `${locationKeyword} 아로마 & 스웨디시 힐링 테라피 안내 - 투데이쿡`,
    `${simpleLocation} 정통 타이마사지 및 릴렉스 바디케어 | 투데이쿡`,
    `${locationKeyword} 프라이빗 웰니스 힐링 마사지 제휴점 - 투데이쿡`,
    `${simpleLocation} 전신 힐링 마사지 코스 및 정찰제 가격 안내 · 투데이쿡`,
    `${locationKeyword} 1:1 맞춤형 바디케어 & 웰니스 테라피 가이드 - 투데이쿡`,
    `${simpleLocation} 편안한 힐링 마사지 제휴업체 정보 | 투데이쿡`,
    `${locationKeyword} 쾌적한 스웨디시 & 아로마 웰니스 안내 - 투데이쿡`,
    `${simpleLocation} 웰니스 바디 테라피 및 정찰제 코스 가이드 · 투데이쿡`
  ];

  const descriptionVariants = [
    `${locationKeyword} 쾌적한 웰니스 마사지 안내! 타이마사지, 아로마, 스웨디시 제휴업체의 프로그램과 정찰제 코스 정보를 확인하세요.`,
    `${simpleLocation} 인근 편안한 힐링 테라피 가이드. 베테랑 테라피스트의 체계적인 마사지 프로그램을 투데이쿡에서 만나보세요.`,
    `${locationKeyword} 쾌적한 웰니스 마사지 제휴점 모음. 투명한 정찰제 요금과 정성스러운 바디케어 서비스를 제공합니다.`,
    `${simpleLocation} 맞춤형 힐링 마사지 코스 안내. 일상의 피로를 부드럽게 풀어주는 정통 스웨디시 및 아로마 테라피.`,
    `${locationKeyword} 프라이빗 웰니스 가이드. 뭉친 근육과 스트레스를 편안하게 해소하는 최상의 휴식 코스 안내.`,
    `${simpleLocation} 제휴 마사지 업체 정보. 100% 현장 정찰제와 쾌적한 케어 프로그램을 지금 확인하세요.`,
    `${locationKeyword} 1:1 웰니스 바디케어 추천. 숙련된 테라피스트의 디테일한 손길로 전신 피로를 회복하세요.`,
    `${simpleLocation} 안심 힐링 마사지 프로그램 가이드. 타이마사지와 천연 아로마 케어 정보를 한눈에 비교할 수 있습니다.`,
    `${locationKeyword} 전문 웰니스 제휴 안내. 포근한 감성 스웨디시와 릴렉스 마사지로 활력을 충전하세요.`,
    `${simpleLocation} 웰니스 테라피 종합 안내. 고객 만족도 높은 추천 마사지 코스와 이용 요금 안내.`
  ];

  const finalTitle = titleVariants[variantIndex];
  const finalDescription = descriptionVariants[variantIndex];

  return {
    title: {
      // 🌟 핵심: 상위 layout.tsx의 기본 타이틀을 무시하고 이 타이틀을 강제 적용
      absolute: finalTitle,
    },
    description: finalDescription,
    keywords: [
      `${locationKeyword} 마사지`,
      `${locationKeyword} 타이마사지`,
      `${locationKeyword} 스웨디시`,
      `${simpleLocation} 아로마 마사지`,
      `${simpleLocation} 웰니스 테라피`,
      `${simpleLocation} 바디케어`,
      "투데이쿡"
    ],
    openGraph: {
      title: finalTitle,
      description: finalDescription,
      url: `https://todaykkuk.netlify.app/${region}/${encodeURIComponent(districtName)}${dongName ? `?dong=${encodeURIComponent(dongName)}` : ""}`,
      siteName: "투데이쿡",
      locale: "ko_KR",
      type: "website",
    },
  };
}

export default async function RegionalDetailPage({ params, searchParams }: PageProps) {
  const resolvedParams = await params;
  const resolvedSearchParams = await searchParams;

  const reg = resolvedParams.region;
  const dist = safeDecode(resolvedParams.district);
  const dong = resolvedSearchParams.dong ? safeDecode(resolvedSearchParams.dong) : "";

  return <RegionalClientUI region={reg} district={dist} dongName={dong} />;
}