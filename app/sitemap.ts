import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  // 🌐 새로운 수마루 서비스 도메인 주소로 통일
  const baseUrl = 'https://sumaru.netlify.app';

  // 1. 메인 홈 페이지
  const mainRoute: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
  ];

  // 2. 상단 카테고리 메인 페이지
  const categoryRoutes: MetadataRoute.Sitemap = [
    'services',
    'prices',
    'travel',
    'places',
    'reviews',
  ].map((route) => ({
    url: `${baseUrl}/${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  // 3. 메인 5개 제휴업체 상세 페이지 (/shop/1 ~ /shop/5)
  const shopRoutes: MetadataRoute.Sitemap = [1, 2, 3, 4, 5].map((id) => ({
    url: `${baseUrl}/shop/${id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  // 4. 수도권 구·시 주요 권역 목록 (시·구·군 접미사 제거 적용)
  const regionList = [
    // 서울 주요 권역
    { region: 'seoul', district: '종로' },
    { region: 'seoul', district: '중' },
    { region: 'seoul', district: '용산' },
    { region: 'seoul', district: '성동' },
    { region: 'seoul', district: '광진' },
    { region: 'seoul', district: '동대문' },
    { region: 'seoul', district: '중랑' },
    { region: 'seoul', district: '성북' },
    { region: 'seoul', district: '강북' },
    { region: 'seoul', district: '도봉' },
    { region: 'seoul', district: '노원' },
    { region: 'seoul', district: '은평' },
    { region: 'seoul', district: '서대문' },
    { region: 'seoul', district: '마포' },
    { region: 'seoul', district: '양천' },
    { region: 'seoul', district: '강서' },
    { region: 'seoul', district: '구로' },
    { region: 'seoul', district: '금천' },
    { region: 'seoul', district: '영등포' },
    { region: 'seoul', district: '동작' },
    { region: 'seoul', district: '관악' },
    { region: 'seoul', district: '서초' },
    { region: 'seoul', district: '강남' },
    { region: 'seoul', district: '송파' },
    { region: 'seoul', district: '강동' },

    // 경기 주요 권역
    { region: 'gyeonggi', district: '수원 장안' },
    { region: 'gyeonggi', district: '수원 권선' },
    { region: 'gyeonggi', district: '수원 팔달' },
    { region: 'gyeonggi', district: '수원 영통' },
    { region: 'gyeonggi', district: '성남 수정' },
    { region: 'gyeonggi', district: '성남 중원' },
    { region: 'gyeonggi', district: '성남 분당' },
    { region: 'gyeonggi', district: '고양 덕양' },
    { region: 'gyeonggi', district: '고양 일산동' },
    { region: 'gyeonggi', district: '고양 일산서' },
    { region: 'gyeonggi', district: '용인 수지' },
    { region: 'gyeonggi', district: '용인 기흥' },
    { region: 'gyeonggi', district: '부천 원미' },

    // 인천 주요 권역
    { region: 'incheon', district: '중' },
    { region: 'incheon', district: '미추홀' },
    { region: 'incheon', district: '연수' },
    { region: 'incheon', district: '남동' },
    { region: 'incheon', district: '부평' },
    { region: 'incheon', district: '계양' },
    { region: 'incheon', district: '서' },
  ];

  // A. 기본 지역별 상세 페이지 라우트
  const regionRoutes: MetadataRoute.Sitemap = regionList.map((item) => ({
    url: `${baseUrl}/${item.region}/${encodeURIComponent(item.district)}`,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 0.9,
  }));

  // B. 💡 힐링 테라피 전용 페이지 라우트 (/healing/...)
  const healingRegionRoutes: MetadataRoute.Sitemap = regionList.map((item) => ({
    url: `${baseUrl}/healing/${item.region}/${encodeURIComponent(item.district)}`,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 0.9,
  }));

  return [
    ...mainRoute,
    ...categoryRoutes,
    ...shopRoutes,
    ...regionRoutes,
    ...healingRegionRoutes,
  ];
}