import type { Metadata } from "next";
import "./globals.css";
import NavigationHeader from "./NavigationHeader";

export const metadata: Metadata = {
  metadataBase: new URL("https://wich-therapy.netlify.app"),
  title: "위치 테라피 - 서울 경기 인천 프리미엄 마사지 & 힐링 플랫폼",
  description: "서울, 경기, 인천 수도권 전 지역의 우수한 샵 정보를 제공하는 프리미엄 힐링 테라피 플랫폼 위치 테라피입니다.",
  keywords: "위치테라피, 서울마사지, 경기마사지, 인천마사지, 수도권마사지, 힐링테라피, 마사지플랫폼, 샵정보",
  verification: {
    google: "", // 추후 구글 서치콘솔 인증 코드로 입력하세요
    other: {
      "naver-site-verification": "934b9a4b0bacef5a1f7246b6e9d8f60089385465",
    },
  },
  openGraph: {
    title: "위치 테라피 - 서울 경기 인천 마사지 & 힐링 플랫폼",
    description: "서울, 경기, 인천 수도권 주요 지역 신뢰할 수 있는 샵 정보 및 테라피 안내.",
    url: "https://wich-therapy.netlify.app",
    siteName: "위치 테라피",
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