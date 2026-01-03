"use client";

export default function TrendSignalCard() {
  return (
    <div 
      className="bg-white rounded-[10px] border border-secondary-dark/20 relative overflow-hidden w-full"
      style={{
        minHeight: '466px'
      }}
    >
      {/* Background Blur Effect */}
      <div 
        className="absolute rounded-full"
        style={{
          left: '475.66px',
          top: '1px',
          width: '256px',
          height: '256px',
          background: 'rgba(31, 87, 149, 0.05)',
          filter: 'blur(64px)',
          borderRadius: '16777200px'
        }}
      />

      <div className="relative z-10 p-9">
        {/* Header */}
        <div className="flex items-start justify-between mb-7">
          <div className="flex flex-col gap-1">
            <h2 
              className="text-primary-main font-semibold"
              style={{
                fontSize: '36px',
                lineHeight: '40px',
                letterSpacing: '-0.72px',
                fontWeight: 600
              }}
            >
              Glass Skin
            </h2>
            <p 
              className="text-secondary-dark"
              style={{
                fontSize: '14px',
                lineHeight: '20px',
                letterSpacing: '-0.16px',
                fontWeight: 500
              }}
            >
              #CleanGirlAesthetic · #NaturalGlow
            </p>
          </div>
          <div 
            className="flex items-center gap-2 bg-primary-light/10 border border-primary-light/20 rounded-[10px]"
            style={{
              padding: '0px 16px',
              gap: '8px',
              width: '118.02px',
              height: '42px'
            }}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ color: '#1F5795' }}>
              <path d="M1.67 5.83L8.33 5.83M13.33 5.83L16.67 5.83M13.33 5.83L8.33 5.83M8.33 5.83L1.67 5.83" stroke="currentColor" strokeWidth="1.67" strokeLinecap="round"/>
              <path d="M13.33 5.83L16.67 5.83M16.67 5.83L16.67 10.83M16.67 10.83L13.33 10.83" stroke="currentColor" strokeWidth="1.67" strokeLinecap="round"/>
            </svg>
            <span 
              className="text-primary-light font-medium"
              style={{
                fontSize: '16px',
                lineHeight: '24px',
                width: '56px',
                height: '24px'
              }}
            >
              +847%
            </span>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-4 gap-9 mb-8">
          <div className="flex flex-col gap-1">
            <p 
              className="text-secondary-dark"
              style={{
                fontSize: '14px',
                lineHeight: '20px',
                letterSpacing: '-0.16px',
                fontWeight: 500
              }}
            >
              멘션률?
            </p>
            <p 
              className="text-black font-medium"
              style={{
                fontSize: '24px',
                lineHeight: '32px',
                letterSpacing: '-0.16px',
                fontWeight: 500
              }}
            >
              124.8M
            </p>
            <p 
              className="text-primary-light"
              style={{
                fontSize: '12px',
                lineHeight: '16px',
                letterSpacing: '-0.16px',
                fontWeight: 500
              }}
            >
              +847% vs last month
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <p 
              className="text-secondary-dark"
              style={{
                fontSize: '14px',
                lineHeight: '20px',
                letterSpacing: '-0.16px',
                fontWeight: 500
              }}
            >
              Total GMV
            </p>
            <p 
              className="text-black font-medium"
              style={{
                fontSize: '24px',
                lineHeight: '32px',
                letterSpacing: '-0.16px',
                fontWeight: 500
              }}
            >
              $4.2M
            </p>
            <p 
              className="text-primary-light"
              style={{
                fontSize: '12px',
                lineHeight: '16px',
                letterSpacing: '-0.16px',
                fontWeight: 500
              }}
            >
              Last 30 days
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <p 
              className="text-secondary-dark"
              style={{
                fontSize: '14px',
                lineHeight: '20px',
                letterSpacing: '-0.16px',
                fontWeight: 500
              }}
            >
              Avg. Sale Price
            </p>
            <p 
              className="text-black font-medium"
              style={{
                fontSize: '24px',
                lineHeight: '32px',
                letterSpacing: '-0.16px',
                fontWeight: 500
              }}
            >
              $28.50
            </p>
            <p 
              className="text-accent-success"
              style={{
                fontSize: '12px',
                lineHeight: '16px',
                letterSpacing: '-0.16px',
                fontWeight: 500
              }}
            >
              High willingness to pay
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <p 
              className="text-secondary-dark"
              style={{
                fontSize: '14px',
                lineHeight: '20px',
                letterSpacing: '-0.16px',
                fontWeight: 500
              }}
            >
              Avg. Conversion Rate
            </p>
            <p 
              className="text-black font-medium"
              style={{
                fontSize: '24px',
                lineHeight: '32px',
                letterSpacing: '-0.16px',
                fontWeight: 500
              }}
            >
              12.4%
            </p>
            <p 
              className="text-primary-light"
              style={{
                fontSize: '12px',
                lineHeight: '16px',
                letterSpacing: '-0.16px',
                fontWeight: 500
              }}
            >
              +8.1% vs avg
            </p>
          </div>
        </div>

        {/* Surface Chart Placeholder */}
        <div 
          className="bg-secondary-main rounded-md mb-6 flex items-center justify-center"
          style={{
            width: '100%',
            height: '128px'
          }}
        >
          <p className="text-sm text-secondary-dark">Surface Chart</p>
        </div>

        {/* Related Keywords */}
        <div className="flex flex-wrap gap-2">
          {["관련키워드1", "관련키워드2", "관련키워드3", "관련키워드4", "관련키워드5", "관련키워드6"].map(
            (keyword, index) => (
              <span
                key={index}
                className="bg-secondary-main border border-secondary-dark/20 rounded-[10px] text-secondary-dark flex items-center justify-center"
                style={{
                  padding: '8px',
                  gap: '10px',
                  width: '77px',
                  height: '32px',
                  fontSize: '12px',
                  lineHeight: '16px',
                  letterSpacing: '-0.16px',
                  fontWeight: 500
                }}
              >
                {keyword}
              </span>
            )
          )}
        </div>
      </div>
    </div>
  );
}

