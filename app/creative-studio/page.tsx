"use client";

import { useState } from "react";
import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";
import PlotStructureEditor from "@/components/creative-studio/PlotStructureEditor";
import VideoPreview from "@/components/creative-studio/VideoPreview";
import GeneratedVariations from "@/components/creative-studio/GeneratedVariations";
import GenerationReport from "@/components/creative-studio/GenerationReport";
import FeedbackInput from "@/components/creative-studio/FeedbackInput";
import {
  VideoGenerationData,
  PlotSection,
  VideoVariation,
  GenerationReport as GenerationReportType,
} from "@/types/video";

// 샘플 데이터
const initialPlotStructure: PlotSection[] = [
  {
    id: "1",
    type: "HOOK",
    title: "이 세럼 하나면 끝!",
    duration: "0-3s",
    content: "강렬한 첫 인상으로 시선 집중",
    order: 0,
  },
  {
    id: "2",
    type: "PROBLEM",
    title: "건조하고 칙칙한 피부 고민",
    duration: "3-6s",
    content: "피부 고민을 공감대 형성",
    order: 1,
  },
  {
    id: "3",
    type: "DEMO",
    title: "제품 사용 데모",
    duration: "6-12s",
    content: "실제 사용 모습과 효과 시연",
    order: 2,
  },
  {
    id: "4",
    type: "CTA",
    title: "지금 바로 구매하세요!",
    duration: "12-15s",
    content: "구매 유도 및 행동 촉구",
    order: 3,
  },
];

const initialVariations: VideoVariation[] = [
  {
    id: "var-1",
    style: "Review Style",
    duration: 15,
    isSelected: true,
  },
  {
    id: "var-2",
    style: "ASMR Style",
    duration: 18,
  },
  {
    id: "var-3",
    style: "Drama Style",
    duration: 20,
  },
];

const initialReport: GenerationReportType = {
  fidelityScore: 87,
  targetAudience: "20-30대 여성, 뷰티 관심층",
  estimatedEngagement: {
    views: "12.5K",
    likes: "1.2K",
    shares: "340",
  },
  generationTime: "2분 34초",
  model: "GPT-4 Vision + Stable Diffusion",
};

export default function CreativeStudioPage() {
  const [plotStructure, setPlotStructure] = useState<PlotSection[]>(initialPlotStructure);
  const [variations, setVariations] = useState<VideoVariation[]>(initialVariations);
  const [selectedVariationId, setSelectedVariationId] = useState<string>("var-1");
  const [report, setReport] = useState<GenerationReportType>(initialReport);
  const [isGenerating, setIsGenerating] = useState(false);

  const selectedVariation = variations.find((v) => v.id === selectedVariationId);

  const handleGenerate = () => {
    setIsGenerating(true);
    // 실제로는 API 호출
    setTimeout(() => {
      setIsGenerating(false);
      // 생성 완료 후 상태 업데이트
    }, 3000);
  };

  const handleRegenerate = () => {
    setIsGenerating(true);
    // 재생성 로직
    setTimeout(() => {
      setIsGenerating(false);
    }, 3000);
  };

  const handleFeedbackSubmit = (feedback: string) => {
    console.log("Feedback submitted:", feedback);
    // 피드백 처리 로직
  };

  const handleExport = () => {
    console.log("Export video");
    // 비디오 다운로드 로직
  };

  const handleExportToTikTok = () => {
    console.log("Export to TikTok");
    // TikTok 업로드 로직
  };

  return (
    <div className="min-h-screen bg-background-paper">
      <Sidebar />
      <Header />
      <main className="ml-[280px] mt-16">
        <div className="max-w-[1600px] mx-auto py-8 px-6">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-primary-main mb-2">
              Creative Studio
            </h1>
            <p className="text-secondary-dark">
              AI 기반 비디오 생성 스튜디오로 TikTok 콘텐츠를 만들어보세요
            </p>
          </div>

          <div className="grid grid-cols-12 gap-6">
            {/* Left Column - Plot Structure & Variations */}
            <div className="col-span-5 space-y-6">
              <PlotStructureEditor
                sections={plotStructure}
                onSectionsChange={setPlotStructure}
              />
              <GeneratedVariations
                variations={variations}
                selectedVariationId={selectedVariationId}
                onSelectVariation={setSelectedVariationId}
              />
            </div>

            {/* Center Column - Video Preview */}
            <div className="col-span-4">
              <VideoPreview
                videoUrl={selectedVariation?.videoUrl}
                thumbnailUrl={selectedVariation?.thumbnailUrl}
                duration={selectedVariation?.duration}
                onExport={handleExport}
                onExportToTikTok={handleExportToTikTok}
              />
            </div>

            {/* Right Column - Report & Feedback */}
            <div className="col-span-3 space-y-6">
              <GenerationReport report={report} />
              <FeedbackInput
                onSubmit={handleFeedbackSubmit}
                onRegenerate={handleRegenerate}
                isLoading={isGenerating}
              />
            </div>
          </div>

          {/* Generate Button */}
          <div className="mt-8 flex justify-center">
            <button
              onClick={handleGenerate}
              disabled={isGenerating}
              className="px-8 py-3 bg-primary-light text-white rounded-[10px] hover:bg-primary-light/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-base font-medium"
            >
              {isGenerating ? "비디오 생성 중..." : "비디오 생성하기"}
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

