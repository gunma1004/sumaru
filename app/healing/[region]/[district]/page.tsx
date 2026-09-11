import { Metadata } from "next";
import RegionalClientUI from "@/app/[region]/[district]/RegionalClientUI";

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

// 🎯 마사지 종류 키워드 중심의 안전한 메타데이터 설정
export async function generateMetadata({ params, searchParams }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const resolvedSearchParams = await searchParams;
  
  const { region, district } = resolvedParams;
  const dongName = resolvedSearchParams.dong ? decodeURIComponent(resolvedSearchParams.dong) : "";
  const districtName = decodeURIComponent(district);
  const regionName = getRegionKoreanName(region);
  const regionFullName = getRegionFullName(region);

  const fullTitle = dongName ? `${regionFullName} ${districtName} (${dongName})` : `${regionFullName} ${districtName}`;
  const locationKeyword = `${regionName} ${districtName} ${dongName}`.trim();
  const simpleLocation = dongName ? `${districtName} ${dongName}` : districtName;

  const title = `${locationKeyword} 타이 아로마 스웨디시 마사지 | 24시 안심 후불제 - 투데이쿡`;
  const description = `${simpleLocation} 인근 프라이빗 힐링 테라피! 타이, 아로마, 스웨디시 마사지 25분 내 신속 방문. 선입금 없는 100% 후불제로 편안하게 이용하세요.`;

  return {
    title,
    description,
    keywords: [
      `${locationKeyword} 타이 마사지`,
      `${locationKeyword} 아로마 마사지`,
      `${locationKeyword} 스웨디시 마사지`,
      `${locationKeyword} 바디케어`,
      `${simpleLocation} 타이마사지`,
      `${simpleLocation} 아로마마사지`,
      `${simpleLocation} 스웨디시마사지`,
      "후불제 마사지",
      "투데이쿡"
    ],
    openGraph: {
      title,
      description,
      url: `https://todaykkuk.netlify.app/healing/${region}/${encodeURIComponent(districtName)}${dongName ? `?dong=${encodeURIComponent(dongName)}` : ""}`,
      siteName: "투데이쿡",
      locale: "ko_KR",
      type: "website",
    },
  };
}

export default async function HealingRegionalPage({ params, searchParams }: PageProps) {
  const resolvedParams = await params;
  const resolvedSearchParams = await searchParams;

  const reg = resolvedParams.region;
  const dist = decodeURIComponent(resolvedParams.district);
  const dong = resolvedSearchParams.dong ? decodeURIComponent(resolvedSearchParams.dong) : "";

  return <RegionalClientUI region={reg} district={dist} dongName={dong} />;
}