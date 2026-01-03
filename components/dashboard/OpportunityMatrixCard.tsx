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
    <div 
      className="bg-white rounded-[10px] border border-secondary-dark/20 flex flex-col w-full"
      style={{
        padding: '33px 33px 1px',
        gap: '24px',
        minHeight: '885px'
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
            width: '195px',
            height: '27px'
          }}
        >
          Marketing Content Insights
        </h3>
      </div>

      {/* Matrix Chart Placeholder */}
      <div 
        className="relative bg-secondary-main rounded-md flex items-center justify-center w-full"
        style={{
          height: '332px',
          border: '0.953125px solid rgba(125, 125, 125, 0.2)',
          borderRadius: '9.53125px'
        }}
      >
        <div className="absolute inset-0" style={{ padding: '23.83px' }}>
          {/* Grid Container */}
          <div 
            className="absolute"
            style={{
              width: '497.61px',
              height: '257.34px',
              left: '23.83px',
              top: '23.83px'
            }}
          >
            {/* Grid Cells */}
            {[0, 1, 2, 3].map((row) => 
              [0, 1, 2, 3].map((col) => (
                <div
                  key={`${row}-${col}`}
                  className="absolute border-r border-b border-secondary-dark/10"
                  style={{
                    left: `${col * 124.4}px`,
                    top: `${row * 64.34}px`,
                    width: col === 3 ? '124.41px' : '124.4px',
                    height: '64.34px'
                  }}
                />
              ))
            )}
          </div>

          {/* High Efficiency Zone */}
          <div 
            className="absolute bg-primary-light/5 rounded-md"
            style={{
              width: '248.68px',
              height: '151.55px',
              left: '272.18px',
              top: '23.83px',
              borderRadius: '9.53125px'
            }}
          >
            <p 
              className="absolute text-primary-light font-medium"
              style={{
                fontSize: '11.4375px',
                lineHeight: '15px',
                letterSpacing: '-0.1525px',
                fontWeight: 500,
                left: '6.98px',
                top: '7.62px',
                width: '98px',
                height: '16px'
              }}
            >
              High Efficiency Zone
            </p>
          </div>

          {/* Data Points */}
          <div 
            className="absolute rounded-full"
            style={{
              width: '51.47px',
              height: '51.47px',
              left: '362.4px',
              top: '12.87px',
              background: 'linear-gradient(180deg, #1F5795 0%, #3B7BBF 100%)',
              opacity: 0.9,
              borderRadius: '15990800px'
            }}
          />
          <div 
            className="absolute rounded-full"
            style={{
              width: '45.75px',
              height: '45.75px',
              left: '385.16px',
              top: '23.44px',
              background: 'linear-gradient(180deg, #1F5795 0%, #3B7BBF 100%)',
              opacity: 0.9,
              borderRadius: '15990800px'
            }}
          />
          <div 
            className="absolute rounded-full"
            style={{
              width: '40.03px',
              height: '40.03px',
              left: '353.18px',
              top: '36.6px',
              background: 'linear-gradient(180deg, #1F5795 0%, #3B7BBF 100%)',
              opacity: 0.9,
              borderRadius: '15990800px'
            }}
          />
          <div 
            className="absolute rounded-full"
            style={{
              width: '34.31px',
              height: '34.31px',
              left: '331.17px',
              top: '54.89px',
              background: 'linear-gradient(180deg, #1F5795 0%, #3B7BBF 100%)',
              opacity: 0.9,
              borderRadius: '15990800px'
            }}
          />
          <div 
            className="absolute rounded-full"
            style={{
              width: '57.19px',
              height: '57.19px',
              left: '394.37px',
              top: '2.29px',
              background: 'linear-gradient(180deg, #1F5795 0%, #3B7BBF 100%)',
              opacity: 0.9,
              borderRadius: '15990800px'
            }}
          />

          {/* Axis Labels */}
          <p 
            className="absolute text-secondary-dark"
            style={{
              fontSize: '12px',
              lineHeight: '140%',
              left: '50%',
              transform: 'translateX(-50%)',
              bottom: '10px',
              width: '71px',
              height: '17px'
            }}
          >
            Viral Potential
          </p>
          <p 
            className="absolute text-secondary-dark text-center"
            style={{
              fontSize: '11.4375px',
              lineHeight: '15px',
              letterSpacing: '-0.1525px',
              fontWeight: 500,
              left: '10px',
              top: '50%',
              transform: 'translateY(-50%) rotate(-90deg)',
              transformOrigin: 'center',
              width: '84px',
              height: '16px'
            }}
          >
            Conversion Power
          </p>
        </div>
      </div>

      {/* Top 5 Recommended Content Formats */}
      <div className="w-full">
        <h4 
          className="text-secondary-dark uppercase font-medium mb-4"
          style={{
            fontSize: '12px',
            lineHeight: '16px',
            letterSpacing: '0.6px',
            fontWeight: 500,
            textTransform: 'uppercase'
          }}
        >
          Top 5 Recommended Content Formats
        </h4>
        <div className="space-y-3">
          {contentFormats.map((format, index) => (
            <div
              key={format.rank}
              className="flex items-center justify-between bg-secondary-main rounded-[10px] w-full"
              style={{
                padding: '0px 12px',
                height: '68px'
              }}
            >
              <div className="flex items-center gap-3 flex-1">
                <div 
                  className="bg-primary-light rounded-[10px] flex items-center justify-center text-white font-medium flex-shrink-0"
                  style={{
                    width: '24px',
                    height: '24px',
                    fontSize: '12px',
                    lineHeight: '16px',
                    letterSpacing: '-0.16px',
                    fontWeight: 500
                  }}
                >
                  {format.rank}
                </div>
                <div className="flex flex-col gap-1">
                  <p 
                    className="text-black font-medium"
                    style={{
                      fontSize: '16px',
                      lineHeight: '24px',
                      letterSpacing: '-0.16px',
                      fontWeight: 500
                    }}
                  >
                    {format.title}
                  </p>
                  <div 
                    className="flex items-center text-secondary-dark gap-3"
                    style={{
                      fontSize: '12px',
                      lineHeight: '16px',
                      letterSpacing: '-0.16px',
                      fontWeight: 500
                    }}
                  >
                    <span>{format.views}</span>
                    <span>•</span>
                    <span className={format.cvrColor}>{format.cvr}</span>
                  </div>
                </div>
              </div>
              <div 
                className="flex items-center gap-2 text-primary-light"
                style={{
                  gap: '8px',
                  fontSize: '12px',
                  lineHeight: '16px',
                  letterSpacing: '-0.16px',
                  fontWeight: 500
                }}
              >
                <span>Creation Guide</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ color: '#7D7D7D' }}>
                  <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

