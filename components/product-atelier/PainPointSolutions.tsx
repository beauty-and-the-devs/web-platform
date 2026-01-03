"use client";

import { PainPointSolution } from "@/types/product";

interface PainPointSolutionsProps {
  solutions: PainPointSolution[];
}

export default function PainPointSolutions({
  solutions,
}: PainPointSolutionsProps) {
  return (
    <div className="bg-white rounded-[10px] border border-secondary-dark/20 p-[25px]">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-medium text-primary-main">
          Pain-Point Solutions
        </h3>
        <button className="w-7 h-7 rounded-[10px] flex items-center justify-center hover:bg-secondary-main transition-colors">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            className="text-secondary-dark"
          >
            <path
              d="M8 2V14M2 8H14"
              stroke="currentColor"
              strokeWidth="1.33"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>
      <div className="flex flex-col gap-4">
        {solutions.map((solution) => (
          <div key={solution.id} className="flex flex-col gap-4">
            {/* Pain Point */}
            <div className="p-4 bg-[#FEF2F2] border border-[#FEE2E2] rounded-[10px]">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <p className="text-xs font-medium text-accent-error uppercase tracking-[0.6px] mb-1">
                    Consumer Complaint
                  </p>
                  <p className="text-sm text-black leading-5 tracking-[-0.16px]">
                    {solution.painPoint}
                  </p>
                </div>
                {solution.severity && (
                  <div
                    className={`px-2.5 py-1.5 rounded-[10px] ${
                      solution.severity === "High"
                        ? "bg-accent-error"
                        : solution.severity === "Medium"
                        ? "bg-[#FCA5A5]"
                        : "bg-accent-warning/20"
                    }`}
                  >
                    <span
                      className={`text-xs font-medium leading-4 tracking-[-0.16px] ${
                        solution.severity === "High"
                          ? "text-white"
                          : solution.severity === "Medium"
                          ? "text-[#7F1D1D]"
                          : "text-accent-warning"
                      }`}
                    >
                      {solution.severity}
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Arrow */}
            <div className="flex justify-center">
              <div className="w-9 h-9 bg-white border-2 border-secondary-dark/20 rounded-full flex items-center justify-center">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="text-primary-light"
                >
                  <path
                    d="M8 4L8 12M12 8L4 8"
                    stroke="currentColor"
                    strokeWidth="1.33"
                    strokeLinecap="round"
                  />
                  <path
                    d="M12 8L8 4M12 8L8 12"
                    stroke="currentColor"
                    strokeWidth="1.33"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>

            {/* Solution */}
            <div className="p-4 bg-[#F0FDF4] border border-[#D1FAE5] rounded-[10px]">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <p className="text-xs font-medium text-accent-success uppercase tracking-[0.6px] mb-1">
                    Our Solution
                  </p>
                  <p className="text-sm text-black leading-5 tracking-[-0.16px]">
                    {solution.solution}
                  </p>
                </div>
                <div className="w-5 h-5 flex items-center justify-center flex-shrink-0">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    className="text-accent-success"
                  >
                    <path
                      d="M16.6667 5L7.5 14.1667L3.33337 10"
                      stroke="currentColor"
                      strokeWidth="1.67"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
