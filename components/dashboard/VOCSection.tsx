"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

type TabType = "positive" | "negative" | "opportunity";

export default function VOCSection() {
  const [activeTab, setActiveTab] = useState<TabType>("positive");

  const tabs = [
    { id: "positive" as TabType, label: "Positive Drivers", icon: "📈" },
    { id: "negative" as TabType, label: "Negative Drivers", icon: "📉" },
    { id: "opportunity" as TabType, label: "Product Opportunity", icon: "💡" },
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

  return (
    <div className="bg-white rounded-[10px] border border-secondary-dark/20 w-full">
      {/* Tabs */}
      <div className="flex border-b border-secondary-dark/20">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              "flex-1 px-6 py-4 flex items-center justify-center gap-2 transition-colors",
              activeTab === tab.id
                ? "bg-primary-light text-white"
                : "text-secondary-dark hover:bg-secondary-main"
            )}
          >
            <span>{tab.icon}</span>
            <span className="text-sm font-semibold">{tab.label}</span>
            {activeTab === tab.id && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-light" />
            )}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="p-8">
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
          <div className="text-center py-12 text-secondary-dark">
            Negative Drivers 데이터를 표시합니다.
          </div>
        )}

        {activeTab === "opportunity" && (
          <div className="text-center py-12 text-secondary-dark">
            Product Opportunity 데이터를 표시합니다.
          </div>
        )}
      </div>
    </div>
  );
}

