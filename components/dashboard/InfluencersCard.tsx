"use client";

export default function InfluencersCard() {
  const influencer = {
    username: "@mikayla",
    followers: "14.8M",
    category: "Honest Reviews",
    avgViews: "2.4M",
    engagement: "94%",
    engagementWidth: "94%",
  };

  return (
    <div 
      className="bg-white rounded-[10px] border border-secondary-dark/20 flex flex-col w-full"
      style={{
        padding: '33px 33px 1px',
        gap: '24px',
        minHeight: '659px'
      }}
    >
      <div>
        <h3 
          className="text-primary-main font-medium"
          style={{
            fontSize: '18px',
            lineHeight: '27px',
            letterSpacing: '-0.36px',
            fontWeight: 500,
            width: '135px',
            height: '27px'
          }}
        >
          Influencer Insights
        </h3>
      </div>

      <div className="w-full">
        {/* Main Influencer Card */}
        <div 
          className="bg-secondary-main border border-secondary-dark/20 rounded-[10px] p-5 flex flex-col items-center"
          style={{
            width: '249.25px',
            minHeight: '440px'
          }}
        >
          {/* Profile Image */}
          <div 
            className="rounded-full mb-4"
            style={{
              width: '80px',
              height: '80px',
              background: 'rgba(255, 255, 255, 1)'
            }}
          />

          {/* Username */}
          <h4 
            className="text-black font-medium text-center mb-2"
            style={{
              fontSize: '16px',
              lineHeight: '24px',
              letterSpacing: '-0.32px',
              fontWeight: 500
            }}
          >
            {influencer.username}
          </h4>

          {/* Followers */}
          <div className="flex items-center justify-center gap-2 mb-2">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ color: '#7D7D7D' }}>
              <path d="M1.17 4.08L5.83 4.08M9.17 4.08L11.67 4.08M9.17 4.08L5.83 4.08M5.83 4.08L1.17 4.08" stroke="currentColor" strokeWidth="1.17" strokeLinecap="round"/>
              <path d="M9.17 4.08L11.67 4.08M11.67 4.08L11.67 7.58M11.67 7.58L9.17 7.58" stroke="currentColor" strokeWidth="1.17" strokeLinecap="round"/>
            </svg>
            <span 
              className="text-secondary-dark text-center"
              style={{
                fontSize: '14px',
                lineHeight: '20px',
                letterSpacing: '-0.16px',
                fontWeight: 500
              }}
            >
              {influencer.followers}
            </span>
          </div>

          {/* Category Badge */}
          <div 
            className="flex items-center justify-center mb-6"
            style={{
              padding: '2px 8px',
              background: 'rgba(31, 87, 149, 0.1)',
              borderRadius: '10px'
            }}
          >
            <span 
              className="text-primary-light text-center"
              style={{
                fontSize: '12px',
                lineHeight: '16px',
                letterSpacing: '-0.16px',
                fontWeight: 500
              }}
            >
              {influencer.category}
            </span>
          </div>

          {/* Metrics */}
          <div className="w-full space-y-3">
            {/* Avg Views */}
            <div 
              className="bg-white rounded-[10px] flex items-center justify-between px-2"
              style={{
                height: '36px'
              }}
            >
              <span 
                className="text-secondary-dark"
                style={{
                  fontSize: '12px',
                  lineHeight: '16px',
                  letterSpacing: '-0.16px',
                  fontWeight: 500
                }}
              >
                Avg. Views
              </span>
              <span 
                className="text-black font-medium"
                style={{
                  fontSize: '14px',
                  lineHeight: '20px',
                  letterSpacing: '-0.16px',
                  fontWeight: 500
                }}
              >
                {influencer.avgViews}
              </span>
            </div>

            {/* Engagement */}
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center justify-between">
                <span 
                  className="text-secondary-dark"
                  style={{
                    fontSize: '12px',
                    lineHeight: '16px',
                    letterSpacing: '-0.16px',
                    fontWeight: 500
                  }}
                >
                  Engagement
                </span>
                <span 
                  className="text-primary-light font-medium"
                  style={{
                    fontSize: '12px',
                    lineHeight: '16px',
                    letterSpacing: '-0.16px',
                    fontWeight: 500
                  }}
                >
                  {influencer.engagement}
                </span>
              </div>
              <div 
                className="bg-white rounded-[10px] overflow-hidden"
                style={{
                  width: '100%',
                  height: '6px'
                }}
              >
                <div
                  className="bg-primary-light rounded-[10px] h-full"
                  style={{ 
                    width: influencer.engagementWidth
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

