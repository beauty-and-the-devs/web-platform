"use client";

import { GenerationReport } from "@/types/video";

interface GenerationReportProps {
  report: GenerationReport;
}

export default function GenerationReport({ report }: GenerationReportProps) {
  const getFidelityColor = (score: number) => {
    if (score >= 80) return "text-accent-success";
    if (score >= 60) return "text-accent-warning";
    return "text-accent-error";
  };

  const getFidelityBgColor = (score: number) => {
    if (score >= 80) return "bg-accent-success";
    if (score >= 60) return "bg-accent-warning";
    return "bg-accent-error";
  };

  return (
    <div className="bg-white rounded-[10px] border border-secondary-dark/20 p-6">
      <h2 className="text-xl font-semibold text-primary-main mb-4">
        Generation Report
      </h2>

      <div className="space-y-6">
        {/* Fidelity Score */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-secondary-dark">
              Fidelity Score
            </span>
            <span className={`text-lg font-bold ${getFidelityColor(report.fidelityScore)}`}>
              {report.fidelityScore}%
            </span>
          </div>
          <div className="w-full h-2 bg-secondary-main rounded-full overflow-hidden">
            <div
              className={`h-full ${getFidelityBgColor(report.fidelityScore)} transition-all`}
              style={{ width: `${report.fidelityScore}%` }}
            />
          </div>
        </div>

        {/* Target Audience */}
        <div>
          <span className="text-sm font-medium text-secondary-dark block mb-2">
            Target Audience
          </span>
          <div className="px-3 py-2 bg-secondary-main rounded text-sm text-primary-main">
            {report.targetAudience}
          </div>
        </div>

        {/* Estimated Engagement */}
        <div>
          <span className="text-sm font-medium text-secondary-dark block mb-3">
            Est. Engagement
          </span>
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-secondary-main rounded p-3">
              <div className="text-xs text-secondary-dark mb-1">Views</div>
              <div className="text-lg font-semibold text-primary-main">
                {report.estimatedEngagement.views}
              </div>
            </div>
            <div className="bg-secondary-main rounded p-3">
              <div className="text-xs text-secondary-dark mb-1">Likes</div>
              <div className="text-lg font-semibold text-primary-main">
                {report.estimatedEngagement.likes}
              </div>
            </div>
            <div className="bg-secondary-main rounded p-3">
              <div className="text-xs text-secondary-dark mb-1">Shares</div>
              <div className="text-lg font-semibold text-primary-main">
                {report.estimatedEngagement.shares}
              </div>
            </div>
          </div>
        </div>

        {/* Generation Info */}
        <div className="pt-4 border-t border-secondary-dark/20">
          <div className="flex items-center justify-between text-xs text-secondary-dark">
            <span>Generation Time</span>
            <span className="font-medium">{report.generationTime}</span>
          </div>
          <div className="flex items-center justify-between text-xs text-secondary-dark mt-2">
            <span>Model</span>
            <span className="font-medium">{report.model}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

