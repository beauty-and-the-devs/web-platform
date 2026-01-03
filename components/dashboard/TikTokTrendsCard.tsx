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
    <div 
      className="bg-white rounded-[10px] border border-secondary-dark/20 flex flex-col w-full"
      style={{
        padding: '33px 33px 1px',
        gap: '24px',
        minHeight: '885px'
      }}
    >
      <div className="flex flex-col gap-1">
        <h3 
          className="text-primary-main font-medium"
          style={{
            fontSize: '18px',
            lineHeight: '27px',
            letterSpacing: '-0.36px',
            fontWeight: 500
          }}
        >
          TikTok Shop Key Trends
        </h3>
        <p 
          className="text-secondary-dark"
          style={{
            fontSize: '14px',
            lineHeight: '20px',
            letterSpacing: '-0.16px',
            fontWeight: 500
          }}
        >
          US Makeup Market Core Insights
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {trends.map((trend) => (
          <div
            key={trend.rank}
            className="flex items-start bg-secondary-main border border-secondary-dark/10 rounded-[10px] w-full"
            style={{
              padding: '16px',
              gap: '16px',
              minHeight: '82px'
            }}
          >
            <div 
              className="bg-primary-light rounded-[10px] flex items-center justify-center text-white font-medium flex-shrink-0"
              style={{
                width: '40px',
                height: '40px',
                fontSize: '14px',
                lineHeight: '20px',
                letterSpacing: '-0.16px',
                fontWeight: 500
              }}
            >
              {trend.rank}
            </div>
            <div className="flex-1 flex flex-col gap-1">
              <div className="flex items-center justify-between">
                <h4 
                  className="text-black font-medium"
                  style={{
                    fontSize: '16px',
                    lineHeight: '24px',
                    letterSpacing: '-0.32px',
                    fontWeight: 500
                  }}
                >
                  {trend.title}
                </h4>
                <span 
                  className="text-primary-light font-medium"
                  style={{
                    fontSize: '18px',
                    lineHeight: '28px',
                    letterSpacing: '-0.16px',
                    fontWeight: 500
                  }}
                >
                  {trend.growth}
                </span>
              </div>
              <p 
                className="text-secondary-dark"
                style={{
                  fontSize: '12px',
                  lineHeight: '16px',
                  letterSpacing: '-0.16px',
                  fontWeight: 500
                }}
              >
                {trend.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

