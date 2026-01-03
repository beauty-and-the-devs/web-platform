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
  PlotSection,
  VideoVariation,
  GenerationReport as GenerationReportType,
} from "@/types/video";

// 샘플 데이터 - Figma 디자인에 맞춤
const initialPlotStructure: PlotSection[] = [
  {
    id: "1",
    type: "HOOK",
    title: "HOOK",
    duration: "0-3s",
    content: "Extreme close-up of water drop texture",
    order: 0,
    contentType: "Visual",
  },
  {
    id: "2",
    type: "PROBLEM",
    title: "PROBLEM",
    duration: "3-6s",
    content: "'Dry skin ruining your makeup?'",
    order: 1,
    contentType: "Text",
  },
  {
    id: "3",
    type: "DEMO",
    title: "DEMO",
    duration: "6-13s",
    content: "Instant absorption test",
    order: 2,
    contentType: "Visual",
  },
  {
    id: "4",
    type: "CTA",
    title: "CTA",
    duration: "13-15s",
    content: "Click yellow basket",
    order: 3,
    contentType: "Text",
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
  fidelityScore: 98,
  targetAudience: ["Gen-Z", "Dry Skin"],
  estimatedEngagement: 14.2,
  estimatedViews24h: "124K",
  optimalPostTime: "8PM EST",
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
        <div className="w-[1111px] py-8 px-10">
          {/* Header */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-1">
              <svg className="w-5 h-5 text-primary-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              <span className="text-xs font-semibold text-primary-light uppercase tracking-wider">
                AI VIDEO STUDIO
              </span>
            </div>
            <h1 className="text-2xl font-medium text-primary-main">
              Creative Studio
            </h1>
          </div>

          <div className="grid grid-cols-12 gap-6">
            {/* Left Column - Plot Structure */}
            <div className="col-span-3">
              <PlotStructureEditor
                sections={plotStructure}
                onSectionsChange={setPlotStructure}
              />
            </div>

            {/* Center Column - Video Preview */}
            <div className="col-span-5">
              <VideoPreview
                videoUrl={selectedVariation?.videoUrl}
                thumbnailUrl={selectedVariation?.thumbnailUrl}
                duration={selectedVariation?.duration}
                onExport={handleExport}
                onExportToTikTok={handleExportToTikTok}
              />
            </div>

            {/* Right Column - Variations & Report */}
            <div className="col-span-4 space-y-6">
              <GeneratedVariations
                variations={variations}
                selectedVariationId={selectedVariationId}
                onSelectVariation={setSelectedVariationId}
              />
              <GenerationReport report={report} />
            </div>
          </div>

          {/* Feedback Input - Full Width */}
          <div className="mt-6">
            <FeedbackInput
              onSubmit={handleFeedbackSubmit}
              onRegenerate={handleRegenerate}
              isLoading={isGenerating}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
