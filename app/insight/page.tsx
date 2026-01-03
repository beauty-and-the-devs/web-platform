"use client";

import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";
import TrendSignalCard from "@/components/dashboard/TrendSignalCard";
import FileUploadCard from "@/components/dashboard/FileUploadCard";
import InsightGenerationCards from "@/components/dashboard/InsightGenerationCards";
import OpportunityMatrixCard from "@/components/dashboard/OpportunityMatrixCard";
import TikTokTrendsCard from "@/components/dashboard/TikTokTrendsCard";
import InfluencersCard from "@/components/dashboard/InfluencersCard";
import ProductCards from "@/components/dashboard/ProductCards";
import VOCSection from "@/components/dashboard/VOCSection";

export default function InsightPage() {
  return (
    <div className="min-h-screen" style={{ background: "#F5F5F5" }}>
      <Sidebar />
      <Header />
      <main className="ml-[280px] pt-16 min-h-screen">
        <div className="max-w-[1200px] w-full p-8 space-y-6">
          {/* File Upload Card */}
          <FileUploadCard />

          {/* Insight Generation Cards */}
          <InsightGenerationCards />

          {/* Trend Signal Card */}
          <TrendSignalCard />

          {/* Trending Now Section */}
          <div className="flex items-center gap-2 mt-6">
            <span className="text-primary-light text-xl">🔥</span>
            <h2 className="text-xl font-semibold text-primary-light uppercase tracking-wide">
              Trending Now
            </h2>
          </div>

          {/* Opportunity Matrix and TikTok Trends */}
          <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-6">
            <OpportunityMatrixCard />
            <TikTokTrendsCard />
          </div>

          {/* Product Cards */}
          <ProductCards />

          {/* Influencers Card */}
          <InfluencersCard />

          {/* VOC Section Header */}
          <div className="flex items-center gap-2 mt-6">
            <span className="text-primary-light text-xl">📊</span>
            <h2 className="text-xl font-semibold text-primary-light uppercase tracking-wide">
              VOC
            </h2>
          </div>

          {/* VOC Section */}
          <VOCSection />
        </div>
      </main>
    </div>
  );
}

