# AI 기반 뷰티 제품 개발 및 마케팅 플랫폼

TikTok Shop에서 얻은 인사이트를 토대로한, AI 기반 뷰티 제품 개발 및 마케팅 플랫폼입니다. 트렌드 분석, 제품 기획, 마케팅 영상 자동 생성 기능을 제공합니다.

## 주요 기능

### 대시보드 (`/dashboard`)
- 핵심 성과 지표(KPI) 한눈에 보기
- 인사이트 랩, 제품 아틀리에 빠른 접근

### 인사이트 랩 (`/insight`)
- **트렌드 분석**: 틱톡, 인스타그램 실시간 트렌드 모니터링
- **기회 매트릭스**: 바이럴 잠재력 vs 전환력 분석
- **인플루언서 분석**: 뷰티 인플루언서 성과 추적
- **경쟁사 분석**: LANEIGE, innisfree 등 경쟁 제품 벤치마킹
- **VOC 분석**: 고객 의견 긍정/부정 요인 분석 및 제품 개선 기회 도출

### 제품 아틀리에 (`/product-atelier`)
AI 기반 제품 개발 스튜디오:
- **제품 정보**: 제품명, 설명, 타겟 시장, 가격대, 피부 타입, 출시 일정
- **패키징 변형**: 다양한 컬러 옵션 (Pearl White, Rose Gold 등)
- **텍스처 프로파일**: 워터리, 젤 타입, 세럼 등
- **핵심 성분**: 활성 성분과 효능, 함량 정보
- **페인포인트 솔루션**: 고객 불만 사항과 해결책 매핑
- **제품 클레임**: 비건, 크루얼티프리, 임상 테스트 완료 등

### 크리에이티브 스튜디오 (`/creative-studio`)
틱톡 마케팅용 AI 영상 생성 플랫폼:
- **플롯 구조 편집기**: 영상 내러티브 구성
  - HOOK (0-3초): 주목 끌기
  - PROBLEM (3-6초): 고객 페인포인트
  - DEMO (6-13초): 제품 시연
  - CTA (13-15초): 행동 유도
- **영상 프리뷰**: 생성된 영상 미리보기
- **생성 변형**: 리뷰 스타일, ASMR 스타일, 드라마 스타일 등
- **생성 리포트**: 품질 지표 (피델리티 스코어, 예상 조회수, 최적 게시 시간)
- **피드백 및 재생성**: 피드백 기반 영상 개선
- **내보내기**: 다운로드 또는 틱톡 직접 업로드

## 기술 스택

| 분류 | 기술 |
|------|------|
| 프레임워크 | Next.js 14.2.5 (App Router) |
| 언어 | TypeScript 5.5.3 (strict mode) |
| 스타일링 | Tailwind CSS 3.4.7 |
| 상태 관리 | Zustand 4.5.2 |
| 폼 관리 | React Hook Form 7.52.1 |
| 애니메이션 | Framer Motion 11.3.19 |
| 차트 | Recharts 2.12.7 |

## 프로젝트 구조

```
web-platform/
├── app/                           # Next.js 페이지
│   ├── page.tsx                   # 루트 (대시보드로 리다이렉트)
│   ├── dashboard/page.tsx         # 대시보드
│   ├── insight/page.tsx           # 인사이트 랩
│   ├── product-atelier/page.tsx   # 제품 아틀리에
│   └── creative-studio/page.tsx   # 크리에이티브 스튜디오
├── components/                    # 컴포넌트
│   ├── layout/                    # Sidebar, Header
│   ├── dashboard/                 # 대시보드 컴포넌트
│   ├── product-atelier/           # 제품 개발 컴포넌트
│   └── creative-studio/           # 영상 생성 컴포넌트
├── types/                         # TypeScript 인터페이스
│   ├── product.ts                 # 제품 관련 타입
│   └── video.ts                   # 영상 관련 타입
├── lib/utils.ts                   # 유틸리티 함수
└── tailwind.config.ts             # Tailwind 설정
```

## 시작하기

### 요구 사항

- Node.js 18.0.0 이상
- npm 또는 yarn

### 설치

```bash
# 저장소 클론
git clone <repository-url>
cd web-platform

# 의존성 설치
npm install
```

### 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000) 접속

### 빌드

```bash
# 프로덕션 빌드
npm run build

# 프로덕션 서버 실행
npm run start
```

### 린트

```bash
npm run lint
```

## 디자인 시스템

### 컬러 팔레트

| 이름 | 색상 | 용도 |
|------|------|------|
| `primary-main` | #001C58 | 메인 네이비 |
| `primary-light` | #1F5795 | 브랜드 블루 |
| `secondary-main` | #F5F5F5 | 라이트 그레이 |
| `secondary-light` | #FFFFFF | 화이트 |
| `background-dark` | #1A1A1A | 크리에이티브 스튜디오 배경 |

### 폰트

- 한글: SUIT, Arita Dotum KR
- 영문: Inter (fallback)

### 레이아웃

- 사이드바 너비: 280px (고정)
- 헤더 높이: 64px (고정)
- 카드 테두리 반경: 10px
- 최대 콘텐츠 너비: 1200px

## 개발 가이드

### 컴포넌트 규칙

```typescript
"use client";

interface ComponentNameProps {
  // props 정의
}

export default function ComponentName({ ...props }: ComponentNameProps) {
  return (
    // JSX
  );
}
```

### 클래스명 조건부 병합

```typescript
import { cn } from "@/lib/utils";

className={cn(
  "base-classes",
  isActive && "active-classes"
)}
```

## 현재 상태

- 모든 데이터는 목업/샘플 데이터 (API 연동 예정)
- 전역 상태 관리 미구현
- 인증 시스템 미구현
- 한국어 우선 로컬라이제이션
