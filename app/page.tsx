import { Metadata } from "next";
import MainClientUI from "./MainClientUI";

export const metadata: Metadata = {
  title: "투데이쿡 | 서울 경기 인천 24시 방문 홈케어 & 프리미엄 힐링 테라피 안내",
  description:
    "서울, 경기, 인천 수도권 전 지역 신속 방문! 100% 안심 후불제 예약. 프리미엄 방문 테라피 및 힐링 제휴업체 정보 안내.",
  keywords: [
    "투데이쿡",
    "서울 홈케어",
    "경기 홈케어",
    "인천 홈케어",
    "수도권 마사지",
    "방문 테라피",
    "후불제 바디케어",
    "24시 힐링 케어",
  ],
  openGraph: {
    title: "투데이쿡 | 서울 경기 인천 24시 방문 홈케어 & 마사지 추천",
    description:
      "안심 후불 케어! 서울, 경기, 인천 수도권 주요 도시 빠른 방문 바디케어 정보를 한눈에 모아보세요.",
    url: "https://todaykkuk.netlify.app",
    siteName: "투데이쿡",
    locale: "ko_KR",
    type: "website",
  },
};

export default function Page() {
  return <MainClientUI />;
}