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
  switch (region) {
    case "seoul": return "서울";
    case "incheon": return "인천";
    case "gyeonggi": return "경기";
    default: return "수도권";
  }
}

function getRegionFullName(region: string): string {
  switch (region) {
    case "seoul": return "서울특별시";
    case "incheon": return "인천광역시";
    case "gyeonggi": return "경기도";
    default: return "";
  }
}

export async function generateMetadata({ params, searchParams }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const resolvedSearchParams = await searchParams;
  
  const { region, district } = resolvedParams;
  const dongName = resolvedSearchParams.dong ? decodeURIComponent(resolvedSearchParams.dong) : "";
  const districtName = decodeURIComponent(district);
  const regionName = getRegionKoreanName(region);

  const locationKeyword = `${regionName} ${districtName} ${dongName}`.trim();
  const simpleLocation = dongName ? `${districtName} ${dongName}` : districtName;

  const charSum = (locationKeyword + dongName + districtName).split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const variantIndex = charSum % 20;

  // 🌟 스팸 트리거(홈케어/방문/24시/선입금) 완전 배제, 마사지/웰니스/스웨디시/타이마사지 중심
  const titleVariants = [
    `${locationKeyword} 마사지 제휴 안내 | 웰니스 스웨디시 & 타이마사지 - 투데이쿡`,
    `[투데이쿡] ${locationKeyword} 테라피 안내 · 안심 정찰제 바디케어`,
    `${simpleLocation} 웰니스 마사지 전문 가이드 | ${regionName} 프라이빗 힐링 케어`,
    `${locationKeyword} 제휴업체 정보 및 정직한 테라피 안내 - 투데이쿡`,
    `${locationKeyword} 힐링 마사지 가이드 | 타이마사지·아로마·스웨디시 전문`,
    `투데이쿡 | ${simpleLocation} 안심 힐링 테라피 & 마사지 코스`,
    `${locationKeyword} 바디케어 안내 · 정직하고 편안한 웰니스 휴식 가이드`,
    `${regionName} ${simpleLocation} 제휴 마사지 코스 및 프로그램 안내`,
    `${locationKeyword} 마사지 안내 | 프라이빗 1:1 맞춤형 웰니스 테라피`,
    `[힐링 가이드] ${locationKeyword} 추천 제휴 테라피 모음 · 투데이쿡`,
    `${simpleLocation} 릴렉싱 마사지 | 정직한 힐링 테라피 가이드`,
    `${locationKeyword} 쾌적한 힐링 바디케어를 안내합니다 - 투데이쿡`,
    `프라이빗 힐링 ${locationKeyword} 마사지 | 타이마사지·아로마·스웨디시`,
    `${locationKeyword} 엄선된 제휴 마사지 업체 및 요금 안내`,
    `${simpleLocation} 마사지 안내 | 안심 웰니스 테라피 프로그램`,
    `${locationKeyword} 정직한 마사지 정보 가이드 | 투데이쿡 공식`,
    `[투데이쿡] ${locationKeyword} 베테랑 테라피스트 마사지 케어`,
    `${locationKeyword} 바디케어 가이드 | 스웨디시·아로마 마사지 안내`,
    `${simpleLocation} 편안한 휴식을 돕는 웰니스 힐링 마사지`,
    `${locationKeyword} 정찰제 바디케어 & 테라피 정보 - 투데이쿡`
  ];

  const descriptionVariants = [
    `${locationKeyword} 쾌적한 웰니스 마사지 안내! 타이마사지, 아로마, 스웨디시 제휴업체의 프로그램과 정찰제 코스 정보를 확인하세요.`,
    `프라이빗한 피로 회복! ${locationKeyword} 인근 테라피 가이드. 베테랑 테라피스트의 맞춤 힐링 마사지 코스를 안내합니다.`,
    `${locationKeyword} 전지역 마사지 정보. 부담 없는 안심 시스템과 정직한 코스 정보를 제공하는 투데이쿡 공식 가이드입니다.`,
    `${simpleLocation} 고객님을 위한 안심 마사지 프로그램. 스웨디시, 아로마 릴렉싱 정보 및 상세 요금표를 확인하세요.`,
    `${locationKeyword} 마사지 정보를 찾고 계신가요? 투명한 정찰제 운영으로 편안하게 즐기는 프라이빗 테라피 가이드입니다.`,
    `지친 일상의 피로를 덜어줄 ${locationKeyword} 마사지 안내. 베테랑 테라피스트의 품격 있는 웰니스 서비스를 경험해 보세요.`,
    `${locationKeyword} 어디서나 편안하게 확인하는 마사지 정보! 엄선된 힐링 바디케어와 스웨디시 코스를 소개합니다.`,
    `${simpleLocation} 마사지 및 테라피 전문 제휴업체 모음. 프라이빗한 공간에서 누리는 프리미엄 웰니스 프로그램.`,
    `${locationKeyword} 인근 신뢰할 수 있는 바디케어 정보. 타이마사지, 아로마, 전신 오일 테라피까지 한눈에 비교하세요.`,
    `투데이쿡에서 안내하는 ${locationKeyword} 안심 웰니스 서비스! 투명한 코스 구성과 정직한 요금 안내를 제공합니다.`,
    `${locationKeyword} 마사지 종합 안내. 맞춤형 힐링 테라피로 묵은 피로를 부드럽게 해소해 드립니다.`,
    `${simpleLocation} 마사지 코스 및 프로그램 안내. 친절한 안내와 검증된 제휴업체 정보로 만족도를 높여드립니다.`,
    `${locationKeyword} 릴렉싱 프로그램. 프라이빗한 맞춤 마사지로 심신의 편안함과 바디 밸런스를 찾아드립니다.`,
    `${locationKeyword} 제휴업체 가이드. 쾌적한 환경에서 진행되는 검증된 테라피 정보만 선별하여 전달합니다.`,
    `${simpleLocation} 편안하게 이용하는 웰니스 마사지. 타이마사지, 아로마, 스웨디시 등 나에게 맞는 힐링 테라피 추천.`,
    `${locationKeyword} 안심 마사지 안내! 정직한 프로그램과 투명한 정찰제 시스템으로 편안하게 확인하세요.`,
    `전문 테라피스트의 손길로 누리는 ${locationKeyword} 마사지. 합리적인 코스 정보와 상세 프로그램 안내.`,
    `${simpleLocation} 바디케어 서비스 안내. 쌓인 스트레스와 굳은 근육을 부드럽게 이완시켜 드립니다.`,
    `${locationKeyword} 엄선된 제휴 마사지 정보 안내. 검증된 1:1 맞춤 테라피 프로그램을 제공합니다.`,
    `${locationKeyword} 인근 쾌적한 웰니스 마사지 서비스! 친절한 상담과 신뢰할 수 있는 제휴점 정보.`
  ];

  const finalTitle = titleVariants[variantIndex];
  const finalDescription = descriptionVariants[variantIndex];

  return {
    title: finalTitle,
    description: finalDescription,
    keywords: [
      // 🌟 스팸성 없는 100% 정상 키워드로 재구성
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
  const dist = decodeURIComponent(resolvedParams.district);
  const dong = resolvedSearchParams.dong ? decodeURIComponent(resolvedSearchParams.dong) : "";

  return <RegionalClientUI region={reg} district={dist} dongName={dong} />;
}