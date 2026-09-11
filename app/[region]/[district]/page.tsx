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
  const regionFullName = getRegionFullName(region);

  const locationKeyword = `${regionName} ${districtName} ${dongName}`.trim();
  const simpleLocation = dongName ? `${districtName} ${dongName}` : districtName;

  const charSum = (locationKeyword + dongName + districtName).split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const variantIndex = charSum % 20;

  const titleVariants = [
    `${locationKeyword} 24시 홈케어 추천 | 신속방문 프리미엄 힐링 테라피 - 투데이쿡`,
    `[투데이쿡] ${locationKeyword} 방문케어 안내 · 100% 안심 후불제`,
    `${simpleLocation} 24시 홈케어 전문 안내 | ${regionName} 프라이빗 힐링 케어`,
    `${locationKeyword} 제휴업체 정보 및 후불제 예약 가이드 - 투데이쿡`,
    `${locationKeyword} 24시 빠른 방문케어 | 타이·아로마·스웨디시 전문`,
    `투데이쿡 | ${simpleLocation} 안심 후불제 힐링 테라피`,
    `${locationKeyword} 신속 방문 바디케어 · 선입금 없는 정직한 휴식 가이드`,
    `${regionName} ${simpleLocation} 24시 방문 예약 및 제휴 코스 안내`,
    `${locationKeyword} 홈케어 추천 | 프라이빗 1:1 맞춤형 피로회복`,
    `[24시 방문] ${locationKeyword} 추천 제휴업체 모음 · 투데이쿡`,
    `${simpleLocation} 릴렉싱 케어 | 후불제 홈테라피 가이드`,
    `${locationKeyword} 25분 내 빠르게 방문합니다 - 투데이쿡`,
    `프라이빗 힐링 ${locationKeyword} 홈케어 | 타이·아로마·스웨디시`,
    `${locationKeyword} 24시 엄선된 제휴업체 및 요금 안내`,
    `${simpleLocation} 홈케어 잘하는 곳 | 100% 후불 안심 테라피`,
    `${locationKeyword} 신속한 예약 서비스 | 투데이쿡 공식`,
    `[투데이쿡 24시] ${locationKeyword} 베테랑 힐러 케어`,
    `${locationKeyword} 바디케어 가이드 | 스웨디시·아로마·홈케어`,
    `${simpleLocation} 24시간 언제나 빠르게 방문합니다`,
    `${locationKeyword} 선입금 X | 안심 후불 바디케어 - 투데이쿡`
  ];

  const descriptionVariants = [
    `${locationKeyword} 25분 내 빠른 홈케어! 선입금 요청 절대 없는 100% 안심 후불제. 타이, 아로마, 스웨디시 제휴업체 코스 안내.`,
    `프라이빗한 피로 회복! ${locationKeyword} 인근 24시 방문케어 가이드. 베테랑 테라피스트의 맞춤 힐링 케어를 확인하세요.`,
    `${locationKeyword} 전지역 신속 홈케어 예약. 부담 없는 후불제 시스템과 정직한 코스 정보 제공, 투데이쿡 공식 안내.`,
    `${simpleLocation} 고객님을 위한 24시 안심 방문케어. 스웨디시, 아로마 릴렉싱 정보 및 빠른 전화 연결 서비스.`,
    `${locationKeyword} 홈케어 찾고 계신가요? 100% 후불제 운영으로 안심하고 즐기는 프라이빗 케어 전문 가이드입니다.`,
    `지친 일상의 피로를 날려버릴 ${locationKeyword} 24시 홈케어 안내. 빠른 신속 방문과 베테랑 힐러진의 품격 있는 서비스를 경험하세요.`,
    `${locationKeyword} 어디서나 25분 내 도착! 선입금 없는 안심 후불제 홈케어와 힐링 바디케어 코스를 엄선하여 소개합니다.`,
    `${simpleLocation} 홈케어 및 방문케어 전문 제휴업체 모음. 24시간 언제든 편안한 개인 공간에서 이용하는 프리미엄 서비스.`,
    `${locationKeyword} 인근 믿을 수 있는 후불제 바디케어 정보. 타이, 아로마, 전신 오일 테라피까지 한눈에 비교 확인하세요.`,
    `투데이쿡에서 보장하는 ${locationKeyword} 안심 서비스! 선입금 요구 없이 도착 후 결제하는 100% 안전 시스템.`,
    `${locationKeyword} 24시 홈케어 종합 안내. 맞춤형 힐링 케어로 묵은 피로를 시원하게 해소해 드립니다.`,
    `${simpleLocation} 방문케어 코스 및 이용 가격 안내. 24시간 친절 상담과 빠른 방문으로 고객 만족도를 높여드립니다.`,
    `${locationKeyword} 릴렉싱 프로그램. 프라이빗한 맞춤 케어로 심신의 편안함과 활력을 찾아드립니다.`,
    `${locationKeyword} 24시 방문 예약 가이드. 선입금 사기 걱정 없는 100% 후불제 제휴업체 정보만 선별하여 전달합니다.`,
    `${simpleLocation} 어디든 신속 방문하는 24시 홈케어. 타이, 아로마, 스웨디시 등 나에게 딱 맞는 힐링 테라피 추천.`,
    `${locationKeyword} 안심 안내! 예약금 요구 없는 정직한 100% 후불 시스템으로 편안하게 이용해 보세요.`,
    `전문 힐러의 손길로 경험하는 ${locationKeyword} 홈케어. 빠른 방문 시간과 합리적인 코스 정보를 확인하세요.`,
    `${simpleLocation} 24시 방문케어 서비스. 쌓인 스트레스와 뭉친 근육을 부드럽게 이완시켜 드립니다.`,
    `${locationKeyword} 엄선된 제휴업체 정보 안내. 선입금 제로, 검증된 1:1 맞춤 케어 프로그램을 제공합니다.`,
    `${locationKeyword} 인근 25분 내 도착하는 홈케어 서비스! 친절한 상담과 신속한 도착으로 언제나 편안하게 이용 가능합니다.`
  ];

  const finalTitle = titleVariants[variantIndex];
  const finalDescription = descriptionVariants[variantIndex];

  return {
    title: finalTitle,
    description: finalDescription,
    keywords: [
      `${locationKeyword} 홈케어`,
      `${locationKeyword} 방문케어`,
      `${simpleLocation} 바디케어`,
      "24시 홈케어",
      "후불제 홈케어",
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