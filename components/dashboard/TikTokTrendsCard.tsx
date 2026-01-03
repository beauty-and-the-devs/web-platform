"use client";

export default function TikTokTrendsCard() {
  const trends = [
    {
      rank: 1,
      title: "No-Makeup Makeup",
      growth: "+847%",
      description: "Natural makeup trend surge",
    },
    {
      rank: 2,
      title: "Multi-Use Products",
      growth: "73%",
      description: "Buyers prefer versatile products",
    },
    {
      rank: 3,
      title: "15-Second Short Form",
      growth: "+420%",
      description: "Short videos drive higher conversion",
    },
    {
      rank: 4,
      title: "Dupe Culture",
      growth: "$8.2M",
      description: "Affordable alternatives monthly revenue",
    },
  ];

  return (
    <div className="bg-white rounded-[10px] border border-secondary-dark/20 w-full">
      <div className="p-8 pb-1">
        <div className="mb-6">
          <h3 className="text-lg font-medium text-primary-main mb-1 leading-[1.5] tracking-[-0.02em]">
            TikTok Shop Key Trends
          </h3>
          <p className="text-sm text-secondary-dark leading-[1.43] tracking-[-0.011em]">
            US Makeup Market Core Insights
          </p>
        </div>

        <div className="space-y-4" style={{ height: '376px' }}>
          {trends.map((trend) => (
            <div
              key={trend.rank}
              className="flex items-start gap-4 p-4 pt-0 bg-secondary-main border border-secondary-dark/10 rounded-[10px]"
            >
              <div className="w-10 h-10 bg-primary-light rounded-[10px] flex items-center justify-center text-white text-sm font-medium flex-shrink-0">
                {trend.rank}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="text-base font-medium text-black leading-6 tracking-[-0.02em]">{trend.title}</h4>
                  <span className="text-lg font-medium text-primary-light leading-[1.56] tracking-[-0.009em]">{trend.growth}</span>
                </div>
                <p className="text-xs text-secondary-dark leading-[1.33] tracking-[-0.013em]">{trend.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

