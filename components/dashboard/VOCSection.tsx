"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

type ProductOpportunity = {
  name: string;
  priority: string;
  priorityColor: string;
  sales: string;
  revenue: string;
  returnRate: string;
  strength: {
    label: string;
    text: string;
  };
  improvement: {
    label: string;
    text: string;
  };
  improvementOptions: Array<{
    id: string;
    title: string;
    description: string;
    expectedEffect: string;
    implementationPeriod: string;
    category: string;
    recommended?: boolean;
  }>;
  basisData: string;
};

function ProductOpportunityCard({ product }: { product: ProductOpportunity }) {
  const [isExpanded, setIsExpanded] = useState(product.name === "e.l.f. Halo Glow Liquid Filter");

  return (
    <div
      className="border border-secondary-dark/20 rounded-[10px] overflow-hidden w-full"
    >
      {/* Header */}
      <div
        className="bg-secondary-main cursor-pointer p-4"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-start justify-between">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 flex-wrap">
              <h4
                className="text-black font-medium"
                style={{
                  fontSize: '16px',
                  lineHeight: '24px',
                  letterSpacing: '-0.6325px',
                  fontWeight: 500,
                  fontFamily: "'Inter', sans-serif"
                }}
              >
                {product.name}
              </h4>
              <span
                className="flex items-center justify-center text-white font-semibold"
                style={{
                  width: '80.36px',
                  height: '20px',
                  background: product.priorityColor,
                  borderRadius: '4px',
                  fontSize: '12px',
                  lineHeight: '16px',
                  letterSpacing: '-0.16px',
                  fontWeight: 600,
                  fontFamily: "'Inter', sans-serif"
                }}
              >
                {product.priority}
              </span>
            </div>
            <div className="flex items-center gap-4" style={{ width: '991px', height: '16px' }}>
              <span
                className="text-secondary-dark"
                style={{
                  fontSize: '12px',
                  lineHeight: '16px',
                  letterSpacing: '-0.16px',
                  fontWeight: 500,
                  fontFamily: "'Inter', sans-serif"
                }}
              >
                판매: {product.sales}
              </span>
              <span
                className="text-secondary-dark"
                style={{
                  fontSize: '12px',
                  lineHeight: '16px',
                  letterSpacing: '-0.16px',
                  fontWeight: 500,
                  fontFamily: "'Inter', sans-serif"
                }}
              >
                매출: {product.revenue}
              </span>
              <span
                className="text-secondary-dark"
                style={{
                  fontSize: '12px',
                  lineHeight: '16px',
                  letterSpacing: '-0.16px',
                  fontWeight: 500,
                  fontFamily: "'Inter', sans-serif"
                }}
              >
                반품률: {product.returnRate}
              </span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                style={{
                  transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.2s'
                }}
              >
                <path d="M5 7.5L10 12.5L15 7.5" stroke="#7D7D7D" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </div>

        {/* Strength and Improvement */}
        <div className="grid grid-cols-2 gap-2 mt-4">
          <div
            className="bg-white border border-accent-success/20 rounded-[10px] flex flex-col p-2 gap-1"
          >
            <p
              className="text-secondary-dark"
              style={{
                fontSize: '10px',
                lineHeight: '15px',
                letterSpacing: '-0.0428125px',
                fontWeight: 500,
                fontFamily: "'Inter', sans-serif"
              }}
            >
              {product.strength.label}
            </p>
            <p
              className="text-accent-success font-medium"
              style={{
                fontSize: '12px',
                lineHeight: '16px',
                letterSpacing: '-0.16px',
                fontWeight: 500,
                fontFamily: "'Inter', sans-serif"
              }}
            >
              {product.strength.text}
            </p>
          </div>
          <div
            className="bg-white border border-accent-error/20 rounded-[10px] flex flex-col p-2 gap-1"
          >
            <p
              className="text-secondary-dark"
              style={{
                fontSize: '10px',
                lineHeight: '15px',
                letterSpacing: '-0.0428125px',
                fontWeight: 500,
                fontFamily: "'Inter', sans-serif"
              }}
            >
              {product.improvement.label}
            </p>
            <p
              className="text-accent-error font-medium"
              style={{
                fontSize: '12px',
                lineHeight: '16px',
                letterSpacing: '-0.16px',
                fontWeight: 500,
                fontFamily: "'Inter', sans-serif"
              }}
            >
              {product.improvement.text}
            </p>
          </div>
        </div>
      </div>

      {/* Expanded Content */}
      {isExpanded && product.improvementOptions.length > 0 && (
        <div
          className="bg-white border-t border-secondary-dark/20 p-4"
        >
          <h5
            className="text-primary-main font-medium mb-4"
            style={{
              fontSize: '14px',
              lineHeight: '20px',
              letterSpacing: '-0.310391px',
              fontWeight: 500,
              width: '98px',
              fontFamily: "'Inter', sans-serif"
            }}
          >
            개선 옵션 (3가지)
          </h5>

          <div className="flex flex-col gap-3">
            {product.improvementOptions.map((option) => (
              <div
                key={option.id}
                className="bg-secondary-main border border-secondary-dark/20 rounded-[10px]"
                style={{
                  width: '1011px',
                  padding: '17px',
                  gap: '12px'
                }}
              >
                {/* Option Header */}
                <div className="flex items-start gap-3 mb-3" style={{ width: '977px', height: '48px' }}>
                  <div
                    className="bg-primary-light rounded-[10px] flex items-center justify-center text-white font-bold flex-shrink-0"
                    style={{
                      width: '32px',
                      height: '32px',
                      fontSize: '14px',
                      lineHeight: '20px',
                      letterSpacing: '-0.310391px',
                      fontFamily: "'Inter', sans-serif"
                    }}
                  >
                    {option.id}
                  </div>
                  <div className="flex flex-col gap-1 flex-1">
                    <h6
                      className="text-black font-medium"
                      style={{
                        fontSize: '16px',
                        lineHeight: '24px',
                        letterSpacing: '-0.6325px',
                        fontWeight: 500,
                        fontFamily: "'Inter', sans-serif"
                      }}
                    >
                      {option.title}
                    </h6>
                    <p
                      className="text-secondary-dark"
                      style={{
                        fontSize: '14px',
                        lineHeight: '20px',
                        letterSpacing: '-0.310391px',
                        fontWeight: 400,
                        fontFamily: "'Inter', sans-serif"
                      }}
                    >
                      {option.description}
                    </p>
                  </div>
                </div>

                {/* Expected Effect and Implementation Period */}
                <div className="flex gap-2 mb-3" style={{ width: '977px', height: '51px' }}>
                  <div
                    className="bg-white rounded flex flex-col"
                    style={{
                      width: '484.5px',
                      height: '51px',
                      padding: '8px',
                      gap: '4px'
                    }}
                  >
                    <p
                      className="text-secondary-dark"
                      style={{
                        fontSize: '10px',
                        lineHeight: '15px',
                        letterSpacing: '-0.0428125px',
                        fontWeight: 400,
                        fontFamily: "'Inter', sans-serif"
                      }}
                    >
                      예상 효과
                    </p>
                    <p
                      className="text-accent-success font-semibold"
                      style={{
                        fontSize: '12px',
                        lineHeight: '16px',
                        letterSpacing: '-0.16px',
                        fontWeight: 600,
                        fontFamily: "'Inter', sans-serif"
                      }}
                    >
                      {option.expectedEffect}
                    </p>
                  </div>
                  <div
                    className="bg-white rounded flex flex-col"
                    style={{
                      width: '484.5px',
                      height: '51px',
                      padding: '8px',
                      gap: '4px'
                    }}
                  >
                    <p
                      className="text-secondary-dark"
                      style={{
                        fontSize: '10px',
                        lineHeight: '15px',
                        letterSpacing: '-0.0428125px',
                        fontWeight: 400,
                        fontFamily: "'Inter', sans-serif"
                      }}
                    >
                      구현 기간
                    </p>
                    <p
                      className="text-primary-light font-semibold"
                      style={{
                        fontSize: '12px',
                        lineHeight: '16px',
                        letterSpacing: '-0.16px',
                        fontWeight: 600,
                        fontFamily: "'Inter', sans-serif"
                      }}
                    >
                      {option.implementationPeriod}
                    </p>
                  </div>
                </div>

                {/* Category and Recommended */}
                <div
                  className="flex items-center justify-between border-t border-secondary-dark/10 pt-2"
                  style={{
                    width: '977px',
                    height: '33px'
                  }}
                >
                  <span
                    className="text-secondary-dark"
                    style={{
                      fontSize: '12px',
                      lineHeight: '16px',
                      letterSpacing: '-0.16px',
                      fontWeight: 400,
                      fontFamily: "'Inter', sans-serif"
                    }}
                  >
                    {option.category}
                  </span>
                  {option.recommended && (
                    <span
                      className="bg-accent-success/10 text-accent-success flex items-center justify-center font-medium"
                      style={{
                        width: '36.45px',
                        height: '24px',
                        borderRadius: '4px',
                        padding: '0px 8px',
                        fontSize: '12px',
                        lineHeight: '16px',
                        letterSpacing: '-0.16px',
                        fontWeight: 500,
                        fontFamily: "'Inter', sans-serif"
                      }}
                    >
                      추천
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Basis Data */}
          {product.basisData && (
            <div
              className="bg-yellow-50 border border-yellow-200 rounded-[10px] mt-4"
              style={{
                width: '1011px',
                height: '62px',
                padding: '13px',
                gap: '4px',
                background: '#FFFBEB',
                border: '1px solid #FDE68A'
              }}
            >
              <p
                className="text-orange-600 font-medium mb-1"
                style={{
                  fontSize: '12px',
                  lineHeight: '16px',
                  letterSpacing: '-0.16px',
                  fontWeight: 500,
                  color: '#D97706',
                  fontFamily: "'Inter', sans-serif"
                }}
              >
                📊 근거 데이터
              </p>
              <p
                className="text-black"
                style={{
                  fontSize: '12px',
                  lineHeight: '16px',
                  letterSpacing: '-0.16px',
                  fontWeight: 400,
                  fontFamily: "'Inter', sans-serif"
                }}
              >
                {product.basisData}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

type TabType = "positive" | "negative" | "opportunity";

export default function VOCSection() {
  const [activeTab, setActiveTab] = useState<TabType>("opportunity");

  const tabs = [
    { id: "positive" as TabType, label: "잘 팔리는 이유", icon: "📈", color: "#1F5795" },
    { id: "negative" as TabType, label: "안 팔리는 이유", icon: "📉", color: "#DC2626" },
    { id: "opportunity" as TabType, label: "제품 개선 기회", icon: "💡", color: "#10B981" },
  ];

  const positiveDrivers = [
    {
      title: "Non-greasy",
      category: "Texture",
      mentioned: "Mentioned 8.4K",
      positiveRate: "68%",
      quotes: [
        '"피부가 내부에서 빛나는 것 같아요"',
        '"메이크업 한 티 안 나는 글로우"',
      ],
    },
    {
      title: "Lightweight",
      category: "Texture",
      mentioned: "Mentioned 8.4K",
      positiveRate: "68%",
      quotes: [
        '"피부가 내부에서 빛나는 것 같아요"',
        '"메이크업 한 티 안 나는 글로우"',
      ],
    },
    {
      title: "Instant Hydration",
      category: "Benefit",
      mentioned: "Mentioned 8.4K",
      positiveRate: "68%",
      quotes: [
        '"피부가 내부에서 빛나는 것 같아요"',
        '"메이크업 한 티 안 나는 글로우"',
      ],
    },
  ];

  const negativeDrivers = [
    {
      title: "Too Pale",
      category: "Texture",
      mentioned: "Mentioned 8.4K",
      negativeRate: "68%",
      quotes: [
        '"피부가 내부에서 빛나는 것 같아요"',
        '"메이크업 한 티 안 나는 글로우"',
      ],
    },
    {
      title: "Lightweight",
      category: "Texture",
      mentioned: "Mentioned 8.4K",
      negativeRate: "68%",
      quotes: [
        '"피부가 내부에서 빛나는 것 같아요"',
        '"메이크업 한 티 안 나는 글로우"',
      ],
    },
    {
      title: "Instant Hydration",
      category: "Benefit",
      mentioned: "Mentioned 8.4K",
      negativeRate: "68%",
      quotes: [
        '"피부가 내부에서 빛나는 것 같아요"',
        '"메이크업 한 티 안 나는 글로우"',
      ],
    },
  ];

  const productOpportunities = [
    {
      name: "e.l.f. Halo Glow Liquid Filter",
      priority: "높음 우선순위",
      priorityColor: "#DC2626",
      sales: "89.2K",
      revenue: "$1.26M",
      returnRate: "18%",
      strength: {
        label: "✅ 강점 유지",
        text: "자연스러운 광채 (68%)",
      },
      improvement: {
        label: "⚠️ 개선 필요",
        text: "예상보다 어두운 색상 (34%)",
      },
      improvementOptions: [
        {
          id: "A",
          title: "쉐이드 라인업 확장",
          description: "더 밝은 톤 2개 추가 (Fair, Extra Fair) + 실제 피부톤 비교 영상",
          expectedEffect: "반품률 -12%p, CVR +8%",
          implementationPeriod: "4-6주",
          category: "제형/원료 개선",
          recommended: true,
        },
        {
          id: "B",
          title: "상세페이지 개선",
          description: "다양한 피부톤 모델 비포/애프터 + AR 가상 체험 기능",
          expectedEffect: "CTR +15%, 반품률 -7%p",
          implementationPeriod: "2-3주",
          category: "상세페이지/콘텐츠 개선",
          recommended: false,
        },
        {
          id: "C",
          title: "샘플 번들 제공",
          description: '3가지 쉐이드 미니 세트 ($6) - "내 톤 찾기" 패키지',
          expectedEffect: "신규 고객 +24%, 재구매율 +18%",
          implementationPeriod: "6-8주",
          category: "옵션/오퍼 개선",
          recommended: false,
        },
      ],
      basisData: "부정 언급 4.2K건 분석 · 반품률 18% · 베스트셀러 리뷰 패턴 기반",
    },
    {
      name: "Rare Beauty Soft Pinch Liquid Blush",
      priority: "중간 우선순위",
      priorityColor: "#F59E0B",
      sales: "124.5K",
      revenue: "$2.86M",
      returnRate: "8%",
      strength: {
        label: "✅ 강점 유지",
        text: "소량으로도 충분 (41%)",
      },
      improvement: {
        label: "⚠️ 개선 필요",
        text: "소량 포장/용량 불만 (28%)",
      },
      improvementOptions: [],
      basisData: "",
    },
    {
      name: "Maybelline Sky High Mascara",
      priority: "높음 우선순위",
      priorityColor: "#DC2626",
      sales: "156.3K",
      revenue: "$1.88M",
      returnRate: "31%",
      strength: {
        label: "✅ 강점 유지",
        text: "가성비 (62%)",
      },
      improvement: {
        label: "⚠️ 개선 필요",
        text: "뚜껑 누수 문제 (19%)",
      },
      improvementOptions: [],
      basisData: "",
    },
  ];

  return (
    <div
      className="bg-white rounded-[10px] border border-secondary-dark/20 w-full"
    >
      {/* Tabs */}
      <div className="flex border-b border-secondary-dark/20 relative">
        {tabs.map((tab, index) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              "flex items-center justify-center gap-2 transition-colors relative",
              activeTab === tab.id
                ? ""
                : "text-secondary-dark hover:bg-secondary-main"
            )}
            style={{
              width: '369.66px',
              height: '52px',
              padding: '16px 24px 0px',
              background: activeTab === tab.id
                ? (tab.id === "negative" ? 'rgba(220, 38, 38, 0.05)' : tab.id === "opportunity" ? 'rgba(16, 185, 129, 0.05)' : 'rgba(255, 255, 255, 0.05)')
                : 'transparent',
              borderBottom: activeTab === tab.id && tab.id === "negative"
                ? '2px solid #DC2626'
                : activeTab === tab.id && tab.id === "opportunity"
                  ? '2px solid #10B981'
                  : activeTab === tab.id && tab.id === "positive"
                    ? '2px solid #1F5795'
                    : 'none'
            }}
          >
            <div className="flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                {tab.id === "positive" && (
                  <>
                    <path d="M4.67 6.67L8 10L11.33 6.67" stroke={activeTab === tab.id ? "#1F5795" : "#7D7D7D"} strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M4.67 2.67L8 6L11.33 2.67" stroke={activeTab === tab.id ? "#1F5795" : "#7D7D7D"} strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round" />
                  </>
                )}
                {tab.id === "negative" && (
                  <>
                    <path d="M11.33 9.33L8 6L4.67 9.33" stroke={activeTab === tab.id ? "#DC2626" : "#7D7D7D"} strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M11.33 13.33L8 10L4.67 13.33" stroke={activeTab === tab.id ? "#DC2626" : "#7D7D7D"} strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round" />
                  </>
                )}
                {tab.id === "opportunity" && (
                  <>
                    <path d="M4 4L8 8L12 4" stroke={activeTab === tab.id ? "#10B981" : "#7D7D7D"} strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M6 12L8 14L10 12" stroke={activeTab === tab.id ? "#10B981" : "#7D7D7D"} strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M7.33 15.33L8 16L8.67 15.33" stroke={activeTab === tab.id ? "#10B981" : "#7D7D7D"} strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round" />
                  </>
                )}
              </svg>
              <span
                className="text-sm font-semibold text-center"
                style={{
                  fontSize: '14px',
                  lineHeight: '20px',
                  fontWeight: 600,
                  color: activeTab === tab.id ? tab.color : '#7D7D7D'
                }}
              >
                {tab.label}
              </span>
            </div>
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div style={{ padding: '33px', paddingTop: activeTab === "opportunity" ? '86px' : '53px' }}>
        {activeTab === "positive" && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {positiveDrivers.map((driver, index) => (
              <div key={index} className="space-y-4">
                <div className="bg-secondary-main border border-secondary-dark/20 rounded-md p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="text-lg font-semibold text-black">{driver.title}</h4>
                        <span className="px-2 py-0.5 bg-accent-success/10 text-accent-success text-xs font-semibold rounded">
                          {driver.category}
                        </span>
                      </div>
                      <p className="text-sm text-secondary-dark">{driver.mentioned}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-accent-success">{driver.positiveRate}</p>
                      <p className="text-xs text-secondary-dark">긍정 반응</p>
                    </div>
                  </div>
                  {driver.quotes.map((quote, qIndex) => (
                    <div
                      key={qIndex}
                      className="mt-3 p-2 bg-white border border-secondary-dark/10 rounded-md"
                    >
                      <p className="text-xs text-black">{quote}</p>
                    </div>
                  ))}
                </div>
                {/* Image Placeholder */}
                <div className="h-44 bg-secondary-main rounded-md" />
              </div>
            ))}
          </div>
        )}

        {activeTab === "negative" && (
          <div className="flex flex-col gap-4" style={{ width: '1045px' }}>
            {negativeDrivers.map((driver, index) => (
              <div
                key={index}
                className="flex items-start"
                style={{ width: '934px', height: '176px', gap: '32px' }}
              >
                {/* Left: Data Card */}
                <div
                  className="bg-secondary-main border border-secondary-dark/20 rounded-[10px] flex flex-col"
                  style={{
                    width: '480px',
                    height: '176px',
                    padding: '16px',
                    gap: '12px'
                  }}
                >
                  {/* Header */}
                  <div className="flex items-start justify-between" style={{ width: '448px', height: '48px' }}>
                    <div className="flex flex-col gap-1" style={{ width: '394.7px', height: '48px' }}>
                      <div className="flex items-center gap-2" style={{ width: '394.7px', height: '24px' }}>
                        <h4
                          className="text-black font-semibold"
                          style={{
                            fontSize: '18px',
                            lineHeight: '140%',
                            letterSpacing: '-0.01em',
                            fontWeight: 600
                          }}
                        >
                          {driver.title}
                        </h4>
                        <span
                          className="flex items-center justify-center"
                          style={{
                            padding: '4px 8px',
                            gap: '10px',
                            width: '57px',
                            height: '24px',
                            background: 'rgba(220, 38, 38, 0.1)',
                            borderRadius: '4px'
                          }}
                        >
                          <span
                            style={{
                              fontSize: '12px',
                              lineHeight: '16px',
                              fontWeight: 600,
                              color: '#DC2626'
                            }}
                          >
                            {driver.category}
                          </span>
                        </span>
                      </div>
                      <p
                        className="text-secondary-dark"
                        style={{
                          fontSize: '14px',
                          lineHeight: '140%',
                          fontWeight: 500
                        }}
                      >
                        {driver.mentioned}
                      </p>
                    </div>
                    {/* Percentage */}
                    <div className="flex flex-col" style={{ width: '53.3px', height: '48px' }}>
                      <p
                        className="text-right font-bold"
                        style={{
                          fontSize: '24px',
                          lineHeight: '32px',
                          letterSpacing: '-0.0896875px',
                          fontWeight: 700,
                          color: '#DC2626',
                          width: '54px',
                          height: '32px',
                          fontFamily: "'Inter', sans-serif"
                        }}
                      >
                        {driver.negativeRate}
                      </p>
                      <p
                        className="text-right text-secondary-dark"
                        style={{
                          fontSize: '12px',
                          lineHeight: '140%',
                          fontWeight: 500,
                          width: '48px',
                          height: '17px',
                          marginLeft: '6.2px'
                        }}
                      >
                        긍정 반응
                      </p>
                    </div>
                  </div>
                  {/* Quotes */}
                  <div className="flex flex-col gap-1">
                    {driver.quotes.map((quote, qIndex) => (
                      <div
                        key={qIndex}
                        className="bg-white border border-secondary-dark/10 rounded-[10px]"
                        style={{
                          width: '448px',
                          height: '32px',
                          padding: '8px',
                          gap: '4px'
                        }}
                      >
                        <p
                          className="text-black italic"
                          style={{
                            fontSize: '12px',
                            lineHeight: '16px',
                            letterSpacing: '-0.16px',
                            fontWeight: 400,
                            width: '346px',
                            height: '16px',
                            fontFamily: "'Inter', sans-serif"
                          }}
                        >
                          {quote}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Right: Image Placeholders */}
                <div
                  className="flex"
                  style={{ width: '422px', height: '176px', gap: '16px' }}
                >
                  {[0, 1, 2].map((imgIndex) => (
                    <div
                      key={imgIndex}
                      className="border border-secondary-dark/10 rounded"
                      style={{
                        width: '130px',
                        height: '176px',
                        backgroundImage: `
                          repeating-linear-gradient(
                            0deg,
                            #f5f5f5,
                            #f5f5f5 10px,
                            #e5e5e5 10px,
                            #e5e5e5 20px
                          ),
                          repeating-linear-gradient(
                            90deg,
                            #f5f5f5,
                            #f5f5f5 10px,
                            #e5e5e5 10px,
                            #e5e5e5 20px
                          )
                        `,
                        backgroundSize: '20px 20px'
                      }}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "opportunity" && (
          <div className="flex flex-col gap-4" style={{ width: '1045px' }}>
            {/* Info Box */}
            <div
              className="bg-yellow-50 border border-yellow-200 rounded-[10px] relative"
              style={{
                width: '1045px',
                height: '82px',
                background: '#FFFBEB',
                border: '1px solid #FDE68A'
              }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                style={{
                  position: 'absolute',
                  left: '17px',
                  top: '19px'
                }}
              >
                <path d="M10 2.5L15 7.5L10 12.5L5 7.5L10 2.5Z" stroke="#F59E0B" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <div
                className="flex flex-col gap-1"
                style={{
                  width: '377.17px',
                  height: '48px',
                  left: '49px',
                  top: '17px',
                  position: 'absolute'
                }}
              >
                <h4
                  className="text-black font-medium"
                  style={{
                    fontSize: '16px',
                    lineHeight: '24px',
                    letterSpacing: '-0.6325px',
                    fontWeight: 500,
                    width: '283px',
                    height: '24px',
                    fontFamily: "'Inter', sans-serif"
                  }}
                >
                  제품 기회 분석: 판매량 높음 + 특정 불만 존재
                </h4>
                <p
                  className="text-secondary-dark"
                  style={{
                    fontSize: '14px',
                    lineHeight: '20px',
                    letterSpacing: '-0.310391px',
                    fontWeight: 400,
                    width: '387px',
                    height: '20px',
                    fontFamily: "'Inter', sans-serif"
                  }}
                >
                  Positive Driver는 유지하되, Negative Driver를 제거하는 개선 전략
                </p>
              </div>
            </div>

            {/* Product Cards */}
            {productOpportunities.map((product, index) => (
              <ProductOpportunityCard key={index} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

