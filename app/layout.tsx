import type { Metadata } from "next";
import "./globals.css";
import NavigationHeader from "./NavigationHeader";

export const metadata: Metadata = {
  metadataBase: new URL("https://sumaru.netlify.app"),
  title: "수마루 | 일상에 쉼표를 더하는 프리미엄 웰니스 & 마사지 큐레이션",
  description: "서울, 경기, 인천 수도권 전 지역에서 만나는 고품격 휴식처. 지친 신체와 마음에 깊은 안식을 전하는 수마루 웰니스 플랫폼.",
  keywords: "수마루, 수도권마사지, 프리미엄테라피, 힐링스팟, 스웨디시, 아로마케어, 바디릴렉스, 웰니스플랫폼",
  verification: {
    google: "", // 추후 구글 서치콘솔 인증 코드로 입력하세요
    other: {
      "naver-site-verification": "e4e51d8f056a8bb9ca75bd713f374ab804521183",
    },
  },
  openGraph: {
    title: "수마루 | 프리미엄 웰니스 & 마사지 큐레이션",
    description: "서울, 경기, 인천 수도권 주요 지역의 검증된 힐링 공간과 전문 테라피 안내.",
    url: "https://sumaru.netlify.app",
    siteName: "수마루",
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