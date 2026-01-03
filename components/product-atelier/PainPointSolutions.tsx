"use client";

import { PainPointSolution } from "@/types/product";

interface PainPointSolutionsProps {
  solutions: PainPointSolution[];
}

export default function PainPointSolutions({
  solutions,
}: PainPointSolutionsProps) {
  return (
    <div className="bg-white rounded-[10px] border border-secondary-dark/20 p-8">
      <h3 className="text-lg font-semibold text-primary-main mb-6">
        Pain-Point 솔루션
      </h3>
      <div className="space-y-4">
        {solutions.map((solution) => (
          <div
            key={solution.id}
            className="p-6 bg-secondary-main rounded-[10px] border border-secondary-dark/20"
          >
            <div className="flex items-start gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-medium text-accent-error bg-accent-error/10 px-2 py-1 rounded">
                    Pain Point
                  </span>
                  <span className="text-xs text-secondary-dark">
                    {solution.category}
                  </span>
                </div>
                <p className="text-sm font-medium text-primary-main mb-2">
                  {solution.painPoint}
                </p>
              </div>
              <div className="flex-shrink-0">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-primary-light"
                >
                  <path
                    d="M5 12H19M19 12L12 5M19 12L12 19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-medium text-accent-success bg-accent-success/10 px-2 py-1 rounded">
                    Solution
                  </span>
                </div>
                <p className="text-sm font-medium text-primary-main">
                  {solution.solution}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


