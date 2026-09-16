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

// 🛠️ 이중 URL 인코딩 및 '시', '구', '군' 접미사를 깔끔하게 제거하는 디코더
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
  // '시', '구', '군' 접미사를 제거하여 '강남' 형태로 정제
  return decoded.replace(/(시|구|군)$/, "").trim();
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

  // 🌟 모든 타이틀에 '마사지' 단어가 꼭 들어가도록 구성한 20개의 고유 타이틀 리스트
  const titleVariants = [
    `${locationKeyword} 마사지 제휴 안내 | 웰니스 스웨디시 & 타이마사지 - 수마루`,
    `${simpleLocation} 추천 마사지 코스 및 웰니스 프로그램 정보 · 수마루`,
    `${locationKeyword} 아로마 & 스웨디시 마사지 힐링 테라피 안내 - 수마루`,
    `${simpleLocation} 정통 타이마사지 및 릴렉스 바디케어 | 수마루`,
    `${locationKeyword} 프라이빗 웰니스 힐링 마사지 제휴점 - 수마루`,
    `${simpleLocation} 전신 힐링 마사지 코스 및 정찰제 가격 안내 · 수마루`,
    `${locationKeyword} 1:1 맞춤형 마사지 바디케어 & 웰니스 가이드 - 수마루`,
    `${simpleLocation} 편안한 힐링 마사지 제휴업체 정보 | 수마루`,
    `${locationKeyword} 쾌적한 스웨디시 & 아로마 마사지 안내 - 수마루`,
    `${simpleLocation} 웰니스 바디 마사지 테라피 및 정찰제 코스 가이드 · 수마루`,
    `${locationKeyword} 전문 테라피스트 제휴 마사지 샵 리스트 - 수마루`,
    `${simpleLocation} 편안한 휴식을 위한 아로마 바디케어 마사지 안내 - 수마루`,
    `${locationKeyword} 감성 스웨디시 및 마사지 힐링 프로그램 요약 - 수마루`,
    `${simpleLocation} 도심 속 힐링 테라피 및 마사지 안내 - 수마루`,
    `${locationKeyword} 맞춤형 바디 마사지 테라피 제휴 정보 - 수마루`,
    `${simpleLocation} 쾌적하고 조용한 마사지 샵 가이드 - 수마루`,
    `${locationKeyword} 프리미엄 웰니스 마사지 케어 프로그램 안내 - 수마루`,
    `${simpleLocation} 일상 회복을 위한 바디 릴렉싱 마사지 코스 - 수마루`,
    `${locationKeyword} 정통 테라피 및 스웨디시 마사지 제휴 가이드 - 수마루`,
    `${locationKeyword} 신뢰할 수 있는 웰니스 마사지 정보 - 수마루`
  ];

  // 🌟 모든 디스크립션에 '마사지' 단어가 꼭 들어가도록 구성한 20개의 고유 리스트
  const descriptionVariants = [
    `수도권 지역 내 우수한 제휴 마사지 샵의 프로그램과 정찰제 요금 정보를 제공합니다.`,
    `숙련된 테라피스트와 함께 마사지를 받으며 몸과 마음의 피로를 부드럽게 씻어내 보세요.`,
    `엄선된 마사지 전문 제휴점의 상세 코스와 이용 방법을 확인하실 수 있습니다.`,
    `편안한 분위기 속에서 즐기는 품격 있는 스웨디시 및 아로마 마사지 안내.`,
    `바쁜 일상에서 벗어나 마사지로 온전한 휴식을 누릴 수 있는 최적의 힐링 공간 정보.`,
    `투명하고 정직한 제휴 마사지 샵 리스트를 통해 나에게 알맞은 코스를 찾아보세요.`,
    `부드러운 손길의 마사지와 체계적인 프로그램으로 지친 신체 리듬을 되찾아드립니다.`,
    `청결하고 안락한 환경을 갖춘 수도권 내 인기 마사지 및 웰니스 케어 가이드.`,
    `다양한 마사지 테크닉과 맞춤형 프로그램 정보를 한눈에 비교해보세요.`,
    `몸의 긴장을 완화하고 편안한 안정감을 선사하는 전문 마사지 힐링 프로그램.`,
    `세심한 마사지 관리를 통해 일상의 스트레스를 말끔히 해소할 수 있는 테라피 안내.`,
    `엄격하게 선별된 제휴 마사지 샵들의 위치와 다채로운 코스 상세 내용 정리.`,
    `부담 없이 방문하여 마사지로 여유를 즐길 수 있는 쾌적한 바디케어 네트워크.`,
    `정성 어린 마사지 손길로 전신에 활력을 불어넣어 주는 프리미엄 웰니스 서비스.`,
    `차분하고 아늑한 분위기에서 진행되는 전문 마사지 테라피 코스 소개.`,
    `개개인의 컨디션에 맞춘 섬세한 마사지 케어로 최상의 릴렉스를 경험하세요.`,
    `믿을 수 있는 마사지 제휴점 정보와 투명한 코스 안내를 지금 만나보세요.`,
    `지친 활력을 채워줄 품격 있는 전신 바디케어 및 마사지 힐링 가이드.`,
    `편안한 휴식과 재충전을 위한 필수 마사지 제휴 정보 플랫폼.`,
    `누구나 쉽고 편리하게 찾아볼 수 있는 수도권 맞춤형 마사지 및 테라피 소식.`
  ];

  const finalTitle = titleVariants[variantIndex];
  const finalDescription = descriptionVariants[variantIndex];

  return {
    metadataBase: new URL("https://sumaru.netlify.app"),
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
      "수마루"
    ],
    openGraph: {
      title: finalTitle,
      description: finalDescription,
      url: `https://sumaru.netlify.app/${region}/${encodeURIComponent(districtName)}${dongName ? `?dong=${encodeURIComponent(dongName)}` : ""}`,
      siteName: "수마루",
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