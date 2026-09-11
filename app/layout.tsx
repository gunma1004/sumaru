import type { Metadata } from "next";
import "./globals.css";
import NavigationHeader from "./NavigationHeader";

export const metadata: Metadata = {
  metadataBase: new URL("https://todaykkuk.netlify.app"),
  title: "투데이쿡 | 서울 경기 인천 24시 방문 홈케어 & 프리미엄 힐링 테라피 안내",
  description: "서울, 경기, 인천 수도권 전 지역 24시 방문 홈케어 및 프리미엄 힐링 제휴업체 안내 플랫폼.",
  verification: {
    google: "", // 추후 구글 서치콘솔 인증 코드로 입력하세요
    other: {
      "naver-site-verification": "", // 추후 네이버 웹마스터도구 인증 코드로 입력하세요
    },
  },
  openGraph: {
    title: "투데이쿡 | 서울 경기 인천 24시 방문 홈케어 & 힐링 마사지 추천",
    description: "서울, 경기, 인천 수도권 주요 지역 빠르고 신뢰할 수 있는 바디케어 및 홈케어 안내.",
    url: "https://todaykkuk.netlify.app",
    siteName: "투데이쿡",
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <NavigationHeader />
        {children}
      </body>
    </html>
  );
}