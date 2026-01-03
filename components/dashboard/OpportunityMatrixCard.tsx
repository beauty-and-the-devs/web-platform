"use client";

export default function OpportunityMatrixCard() {
  const contentFormats = [
    {
      rank: 1,
      title: "Get Ready With Me (GRWM)",
      views: "Avg. 2.4M",
      cvr: "CVR 14.2%",
      cvrColor: "text-accent-success",
    },
    {
      rank: 2,
      title: "Before & After Transformation",
      views: "Avg. 3.1M",
      cvr: "CVR 16.8%",
      cvrColor: "text-accent-success",
    },
    {
      rank: 3,
      title: "Product Comparison/Dupe Finder",
      views: "Avg. 1.8M",
      cvr: "CVR 18.4%",
      cvrColor: "text-accent-success",
    },
    {
      rank: 4,
      title: "Problem-Solving Tutorial",
      views: "Avg. 1.2M",
      cvr: "CVR 13.6%",
      cvrColor: "text-accent-success",
    },
    {
      rank: 5,
      title: "TikTok Made Me Buy It",
      views: "Avg. 4.5M",
      cvr: "CVR 22.1%",
      cvrColor: "text-accent-success",
    },
  ];

  return (
    <div className="bg-white rounded-[10px] border border-secondary-dark/20 w-full">
      <div className="p-8 pb-1">
        <h3 className="text-lg font-medium text-primary-main mb-6 leading-[1.5] tracking-[-0.02em]">
          Marketing Content Insights
        </h3>

      {/* Matrix Chart Placeholder */}
      <div className="relative h-80 bg-secondary-main rounded-md mb-6 flex items-center justify-center">
        <div className="absolute inset-0 p-4">
          {/* Grid Lines */}
          <div className="absolute inset-0 border border-secondary-dark/10 rounded-md" />
          <div className="absolute top-1/2 left-0 right-0 h-px bg-secondary-dark/10" />
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-secondary-dark/10" />
          
          {/* High Efficiency Zone */}
          <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-primary-light/10 rounded-md border-2 border-primary-light/30" />
          <p className="absolute top-1/4 left-1/4 text-xs text-primary-light font-medium p-2">
            High Efficiency Zone
          </p>

          {/* Axis Labels */}
          <p className="absolute bottom-2 left-1/2 -translate-x-1/2 text-xs text-secondary-dark">
            Viral Potential
          </p>
          <p className="absolute left-2 top-1/2 -translate-y-1/2 -rotate-90 text-xs text-secondary-dark">
            Conversion Power
          </p>
        </div>
        <p className="text-sm text-secondary-dark z-10">Matrix Chart</p>
      </div>

      {/* Top 5 Recommended Content Formats */}
      <div className="mt-6" style={{ height: '400px' }}>
        <h4 className="text-xs font-medium text-secondary-dark uppercase tracking-[0.05em] mb-4 leading-[1.33]">
          Top 5 Recommended Content Formats
        </h4>
        <div className="space-y-3">
          {contentFormats.map((format) => (
            <div
              key={format.rank}
              className="flex items-center justify-between px-3 py-0 bg-secondary-main rounded-[10px] hover:bg-secondary-dark/10 transition-colors h-[68px]"
            >
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-primary-light rounded-[10px] flex items-center justify-center text-white text-xs font-medium flex-shrink-0">
                  {format.rank}
                </div>
                <div>
                  <p className="text-base font-medium text-black leading-6 tracking-[-0.01em]">{format.title}</p>
                  <div className="flex items-center gap-3 text-xs text-secondary-dark leading-[1.33] tracking-[-0.013em]">
                    <span>{format.views}</span>
                    <span>•</span>
                    <span className={format.cvrColor}>{format.cvr}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 text-xs text-primary-light leading-[1.33] tracking-[-0.013em]">
                <span>Creation Guide</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-secondary-dark">
                  <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </div>
  );
}

