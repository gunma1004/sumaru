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

  // 20개의 고유 인덱스를 만들기 위한 문자 코드 합산
  const charSum = (locationKeyword + districtName).split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const variantIndex = charSum % 20;

  // 🌟 중복 없이 스팸 키워드를 배제한 20개의 고유 타이틀 리스트
  const titleVariants = [
    `${locationKeyword} 마사지 제휴 안내 | 웰니스 스웨디시 & 타이마사지 - 위치 테라피`,
    `${simpleLocation} 웰니스 마사지 추천 코스 및 프로그램 정보 · 위치 테라피`,
    `${locationKeyword} 아로마 & 스웨디시 힐링 테라피 안내 - 위치 테라피`,
    `${simpleLocation} 정통 타이마사지 및 릴렉스 바디케어 | 위치 테라피`,
    `${locationKeyword} 프라이빗 웰니스 힐링 마사지 제휴점 - 위치 테라피`,
    `${simpleLocation} 전신 힐링 마사지 코스 및 정찰제 가격 안내 · 위치 테라피`,
    `${locationKeyword} 1:1 맞춤형 바디케어 & 웰니스 테라피 가이드 - 위치 테라피`,
    `${simpleLocation} 편안한 힐링 마사지 제휴업체 정보 | 위치 테라피`,
    `${locationKeyword} 쾌적한 스웨디시 & 아로마 웰니스 안내 - 위치 테라피`,
    `${simpleLocation} 웰니스 바디 테라피 및 정찰제 코스 가이드 · 위치 테라피`,
    `${locationKeyword} 전문 테라피스트 제휴샵 리스트 - 위치 테라피`,
    `${simpleLocation} 편안한 휴식을 위한 아로마 바디케어 안내 - 위치 테라피`,
    `${locationKeyword} 감성 스웨디시 및 힐링 프로그램 요약 - 위치 테라피`,
    `${simpleLocation} 도심 속 힐링 테라피 및 마사지 안내 - 위치 테라피`,
    `${locationKeyword} 맞춤형 바디 테라피 제휴 정보 - 위치 테라피`,
    `${simpleLocation} 쾌적하고 조용한 마사지 샵 가이드 - 위치 테라피`,
    `${locationKeyword} 프리미엄 웰니스 케어 프로그램 안내 - 위치 테라피`,
    `${simpleLocation} 일상 회복을 위한 바디 릴렉싱 코스 - 위치 테라피`,
    `${locationKeyword} 정통 테라피 및 스웨디시 제휴 가이드 - 위치 테라피`,
    `${simpleLocation} 신뢰할 수 있는 웰니스 마사지 정보 - 위치 테라피`
  ];

  // 🌟 타이틀과 중복되지 않도록 구성한 20개의 고유 메타 디스크립션 리스트
  const descriptionVariants = [
    `수도권 지역 내 우수한 제휴 샵의 프로그램과 정찰제 요금 정보를 제공합니다.`,
    `숙련된 테라피스트와 함께 몸과 마음의 피로를 부드럽게 씻어내 보세요.`,
    `엄선된 바디케어 전문 제휴점의 상세 코스와 이용 방법을 확인하실 수 있습니다.`,
    `편안한 분위기 속에서 즐기는 품격 있는 스웨디시 및 아로마 테라피 안내.`,
    `바쁜 일상에서 벗어나 온전한 휴식을 누릴 수 있는 최적의 힐링 공간 정보.`,
    `투명하고 정직한 제휴 샵 리스트를 통해 나에게 알맞은 코스를 찾아보세요.`,
    `부드러운 손길과 체계적인 프로그램으로 지친 신체 리듬을 되찾아드립니다.`,
    `청결하고 안락한 환경을 갖춘 수도권 내 인기 웰니스 케어 가이드.`,
    `다양한 마사지 테크닉과 맞춤형 프로그램 정보를 한눈에 비교해보세요.`,
    `몸의 긴장을 완화하고 편안한 안정감을 선사하는 전문 힐링 프로그램.`,
    `세심한 관리를 통해 일상의 스트레스를 말끔히 해소할 수 있는 테라피 안내.`,
    `엄격하게 선별된 제휴 샵들의 위치와 다채로운 코스 상세 내용 정리.`,
    `부담 없이 방문하여 여유를 즐길 수 있는 쾌적한 바디케어 네트워크.`,
    `정성 어린 손길로 전신에 활력을 불어넣어 주는 프리미엄 웰니스 서비스.`,
    `차분하고 아늑한 분위기에서 진행되는 전문 테라피 코스 소개.`,
    `개개인의 컨디션에 맞춘 섬세한 케어로 최상의 릴렉스를 경험하세요.`,
    `믿을 수 있는 제휴점 정보와 투명한 코스 안내를 지금 만나보세요.`,
    `지친 활력을 채워줄 품격 있는 전신 바디케어 및 힐링 가이드.`,
    `편안한 휴식과 재충전을 위한 필수 마사지 제휴 정보 플랫폼.`,
    `누구나 쉽고 편리하게 찾아볼 수 있는 수도권 맞춤형 웰니스 테라피 소식.`
  ];

  const finalTitle = titleVariants[variantIndex];
  const finalDescription = descriptionVariants[variantIndex];

  return {
    metadataBase: new URL("https://wich-therapy.netlify.app"),
    title: {
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
      "위치테라피"
    ],
    openGraph: {
      title: finalTitle,
      description: finalDescription,
      url: `https://wich-therapy.netlify.app/${region}/${encodeURIComponent(districtName)}${dongName ? `?dong=${encodeURIComponent(dongName)}` : ""}`,
      siteName: "위치 테라피",
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