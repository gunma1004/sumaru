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
  return decoded.replace(/(시|구|군)$/, "").trim();
}

// 🌟 1단: 지역 메인 코스 및 복합 키워드 풀 (출장 배제, 마사지 포함)
const primaryServicePatterns = [
  '소프트스웨디시 마사지·홈타이', '감성스웨디시 마사지·아로마', '프리미엄 힐링 마사지·바디케어',
  '딥티슈 전신 마사지·림프케어', 'VIP 스웨디시 마사지·로맨틱힐링', '정통 타이 마사지·스트레칭',
  '천연 아로마 오일 마사지·스파', '체형맞춤 바디 마사지·웰니스', '릴렉스 테라피 마사지·컨디셔닝',
  '명품 소프트 마사지·감성케어', '순환 림프 마사지·전신이완', '포근한 힐링 마사지·스웨디시',
  '프라이빗 바디 마사지·아로마', '토탈 웰니스 마사지·홈타이', '스페셜 릴렉싱 마사지·바디테라피'
];

// 🌟 2단: 상위 지역 연계 및 안마/테라피 키워드 풀
const secondaryRegionalPatterns = [
  '안마 테라피 추천', '인기 안마 힐링존', '전신 안마 바디스팟',
  '웰니스 안마 코스 안내', '감성 안마 프로그램', '프리미엄 안마 릴렉스',
  '전문 안마 케어 추천', '맞춤형 안마 테라피', '스파 안마 힐링 가이드'
];

// 🌟 3단: CTR을 극대화하는 롱테일 소구 문구 풀
const tertiaryActionPatterns = [
  '1:1 맞춤 방문케어', '프라이빗 힐링 안내', '전신 피로회복 총정리',
  '정직한 정찰제 안심 가이드', '당일 예약 맞춤 코스', '최고급 힐러진 프로그램',
  '안심 후불제 웰니스 안내', '전신 릴렉스 힐링 추천', '쾌적한 1:1 케어 솔루션'
];

// 🌟 상세 설명 풀 (30개)
const regionDescriptions = [
  '선입금 없는 100% 안전 시스템과 투명한 정찰제로 편안한 휴식을 선사합니다.',
  '검증된 전문 샵 정보와 체계적인 프로그램으로 지친 피로를 시원하게 풀어드립니다.',
  '엄선된 전문 테라피스트의 섬세한 손길로 최상의 힐링 마사지를 경험해 보세요.',
  '향기로운 아로마와 부드러운 터치로 나만의 프라이빗한 힐링 안식을 드립니다.',
  '일상에 지친 몸과 마음에 활력을 불어넣어 주는 체계적인 맞춤형 테라피 안내.',
  '깊은 근육까지 부드럽게 이완시켜 주는 전문 바디케어 서비스를 만나보세요.',
  '철저한 위생 관리와 고객 만족 중심의 품격 높은 웰니스 프로그램을 제공합니다.',
  '빠르고 편리한 정보 확인으로 언제 어디서나 편안한 휴식을 누리실 수 있습니다.',
  '부드러운 에센셜 오일과 정성 어린 테크닉으로 깊은 안정감을 채워드립니다.',
  '피로와 스트레스를 말끔히 해소해 주는 프리미엄 바디 릴렉스 가이드.'
];

export async function generateMetadata({ params, searchParams }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const resolvedSearchParams = await searchParams;
  
  const { region, district } = resolvedParams;
  const regionName = getRegionKoreanName(region);
  const districtName = safeDecode(district);
  const dongName = resolvedSearchParams.dong ? safeDecode(resolvedSearchParams.dong) : "";

  const locationKeyword = `${regionName} ${districtName} ${dongName}`.trim();
  const parentLocation = `${regionName} ${districtName}`.trim();

  // 🌟 순차적 인덱스 계산 (출장 배제, 1,000개 이상 문서 고유 조합 보장)
  const seedString = `${locationKeyword}-sumaru-3part-region-seo`;
  const charSum = seedString.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  
  const part1Idx = charSum % primaryServicePatterns.length;
  const part2Idx = (charSum * 3) % secondaryRegionalPatterns.length;
  const part3Idx = (charSum * 5) % tertiaryActionPatterns.length;
  const descIdx = (charSum * 7) % regionDescriptions.length;

  // 💡 [지역] [1단 마사지] | [상위지역 안마] | [3단 소구점] 구조로 약 45~50자 구성
  const finalTitle = `${locationKeyword} ${primaryServicePatterns[part1Idx]} | ${parentLocation} ${secondaryRegionalPatterns[part2Idx]} | ${tertiaryActionPatterns[part3Idx]}`;
  const finalDescription = `${locationKeyword} 마사지 제휴 샵 안내. ${parentLocation} ${secondaryRegionalPatterns[part2Idx]}. ${regionDescriptions[descIdx]}`;

  return {
    metadataBase: new URL("https://sumaru.netlify.app"),
    title: {
      absolute: finalTitle,
    },
    description: finalDescription,
    keywords: [
      `${locationKeyword} 마사지`,
      `${locationKeyword} 스웨디시`,
      `${locationKeyword} 아로마마사지`,
      `${parentLocation} 안마`,
      `${parentLocation} 웰니스 테라피`,
      "방문케어"
    ],
    openGraph: {
      title: finalTitle,
      description: finalDescription,
      url: `https://sumaru.netlify.app/${region}/${encodeURIComponent(districtName)}${dongName ? `?dong=${encodeURIComponent(dongName)}` : ""}`,
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