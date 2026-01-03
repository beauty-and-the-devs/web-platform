"use client";

import { GenerationReport } from "@/types/video";

interface GenerationReportProps {
  report: GenerationReport;
}

export default function GenerationReport({ report }: GenerationReportProps) {
  return (
    <div className="bg-white rounded-[10px] border border-secondary-dark/20 p-[25px]">
      <h3 className="text-lg font-medium text-primary-main mb-4">
        Generation Report
      </h3>

      <div className="space-y-4">
        {/* Fidelity Score */}
        <div className="bg-[#F0FDF4] border border-[#D1FAE5] rounded-[10px] p-[17px]">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-secondary-dark">Fidelity Score</span>
            <div className="bg-[#16A34A] px-2 py-1 rounded flex items-center gap-1.5">
              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
              </svg>
              <span className="text-xs font-semibold text-white">{report.fidelityScore}%</span>
            </div>
          </div>
          <div className="w-full h-2 bg-white rounded-full overflow-hidden">
            <div
              className="h-full bg-[#16A34A] rounded-full transition-all"
              style={{ width: `${report.fidelityScore}%` }}
            />
          </div>
        </div>

        {/* Target Audience */}
        <div>
          <span className="text-sm text-secondary-dark block mb-2">
            Target Audience
          </span>
          <div className="flex flex-wrap gap-2">
            {report.targetAudience.map((audience, index) => (
              <span
                key={index}
                className="px-3 py-1.5 bg-primary-light/10 border border-primary-light/20 rounded-[10px] text-xs font-medium text-primary-light"
              >
                {audience}
              </span>
            ))}
          </div>
        </div>

        {/* Est. Engagement & Views */}
        <div className="pt-4 border-t border-secondary-dark/20 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm text-secondary-dark">Est. Engagement</span>
            <span className="text-sm font-semibold text-primary-dark">
              {report.estimatedEngagement}%
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-secondary-dark">Est. Views (24h)</span>
            <span className="text-sm font-semibold text-primary-dark">
              {report.estimatedViews24h}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-secondary-dark">Optimal Post Time</span>
            <span className="text-sm font-semibold text-primary-dark">
              {report.optimalPostTime}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
