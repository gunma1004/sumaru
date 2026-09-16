import { Metadata } from "next";
import MainClientUI from "./MainClientUI";

export const metadata: Metadata = {
  metadataBase: new URL("https://sumaru.netlify.app"),
  title: "수마루 - 서울 경기 인천 프리미엄 마사지 & 힐링 플랫폼",
  description:
    "서울, 경기, 인천 수도권 전 지역 우수한 샵 정보를 제공하는 프리미엄 힐링 테라피 플랫폼 수마루입니다.",
  keywords: [
    "수마루",
    "서울마사지",
    "경기마사지",
    "인천마사지",
    "수도권마사지",
    "힐링테라피",
    "마사지플랫폼",
    "바디케어",
  ],
  openGraph: {
    title: "수마루 - 서울 경기 인천 프리미엄 마사지 & 힐링 플랫폼",
    description:
      "서울, 경기, 인천 수도권 주요 지역 신뢰할 수 있는 샵 정보 및 테라피 안내.",
    url: "https://sumaru.netlify.app",
    siteName: "수마루",
    locale: "ko_KR",
    type: "website",
  },
};

export default function Page() {
  return <MainClientUI />;
}