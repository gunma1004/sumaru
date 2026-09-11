"use client";

import { useEffect, useState } from "react";

export default function ClientTextMixer({ locationText }: { locationText: string }) {
  // 초기 렌더링 문구 (서버-클라이언트 일치)
  const [keywordText, setKeywordText] = useState(
    `${locationText} 맞춤형 프리미엄 바디케어 & 테라피 안내`
  );

  useEffect(() => {
    // 접속 시 자연스러운 키워드 조합으로 회전/선택 (스팸 키워드 배제 및 신뢰도 향상)
    const dynamicKeywords = [
      `${locationText} 투데이쿡 추천 24시 방문 홈케어 & 힐링 테라피`,
      `${locationText} 맞춤형 프리미엄 바디케어 및 휴식 가이드`,
      `${locationText} 100% 후불제 안심 예약! 신속 방문 제휴 테라피샵`,
      `${locationText} 베테랑 힐러의 맞춤형 타이·스웨디시 힐링 케어`,
    ];

    // 랜덤하게 또는 대표 문구로 자연스럽게 전환
    const randomIndex = Math.floor(Math.random() * dynamicKeywords.length);
    setKeywordText(dynamicKeywords[randomIndex]);
  }, [locationText]);

  return (
    <div className="bg-gradient-to-r from-amber-500/10 via-amber-400/5 to-amber-500/10 border border-amber-500/30 p-4 rounded-2xl text-center shadow-inner">
      <p className="text-xs md:text-sm font-bold text-amber-300 tracking-wide">
        ✨ {keywordText}
      </p>
    </div>
  );
}