"use client";

export default function TrendSignalCard() {
  return (
    <div className="bg-white rounded-[10px] border border-secondary-dark/20 relative overflow-hidden w-full">
      {/* Background Blur Effect */}
      <div 
        className="absolute rounded-full blur-[128px] opacity-50"
        style={{
          left: 'calc(50% - 128px)',
          top: '0px',
          width: '256px',
          height: '256px',
          background: 'rgba(31, 87, 149, 0.05)',
        }}
      />

      <div className="relative z-10 p-9">
        {/* Header */}
        <div className="flex items-start justify-between mb-7 gap-4">
          <div>
            <h2 className="text-[36px] font-semibold text-primary-main mb-1 leading-[1.11] tracking-[-0.02em]">
              Glass Skin
            </h2>
            <p className="text-sm text-secondary-dark leading-[1.43] tracking-[-0.011em]">
              #CleanGirlAesthetic · #NaturalGlow
            </p>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-primary-light/10 border border-primary-light/20 rounded-[10px] h-[42px]">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-primary-light">
              <path d="M1.67 5.83L8.33 5.83M13.33 5.83L16.67 5.83M13.33 5.83L8.33 5.83M8.33 5.83L1.67 5.83" stroke="currentColor" strokeWidth="1.67" strokeLinecap="round"/>
              <path d="M13.33 5.83L16.67 5.83M16.67 5.83L16.67 10.83M16.67 10.83L13.33 10.83" stroke="currentColor" strokeWidth="1.67" strokeLinecap="round"/>
            </svg>
            <span className="text-base font-medium text-primary-light leading-6">+847%</span>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-4 gap-6 mb-8">
          <div>
            <p className="text-sm text-secondary-dark mb-1 leading-[1.43] tracking-[-0.011em]">멘션률?</p>
            <p className="text-2xl font-medium text-black mb-1 leading-[1.33] tracking-[-0.007em]">124.8M</p>
            <p className="text-xs text-primary-light leading-[1.33] tracking-[-0.013em]">+847% vs last month</p>
          </div>
          <div>
            <p className="text-sm text-secondary-dark mb-1 leading-[1.43] tracking-[-0.011em]">Total GMV</p>
            <p className="text-2xl font-medium text-black mb-1 leading-[1.33] tracking-[-0.007em]">$4.2M</p>
            <p className="text-xs text-primary-light leading-[1.33] tracking-[-0.013em]">Last 30 days</p>
          </div>
          <div>
            <p className="text-sm text-secondary-dark mb-1 leading-[1.43] tracking-[-0.011em]">Avg. Sale Price</p>
            <p className="text-2xl font-medium text-black mb-1 leading-[1.33] tracking-[-0.007em]">$28.50</p>
            <p className="text-xs text-accent-success leading-[1.33] tracking-[-0.013em]">High willingness to pay</p>
          </div>
          <div>
            <p className="text-sm text-secondary-dark mb-1 leading-[1.43] tracking-[-0.011em]">Avg. Conversion Rate</p>
            <p className="text-2xl font-medium text-black mb-1 leading-[1.33] tracking-[-0.007em]">12.4%</p>
            <p className="text-xs text-primary-light leading-[1.33] tracking-[-0.013em]">+8.1% vs avg</p>
          </div>
        </div>

        {/* Surface Chart Placeholder */}
        <div className="h-32 w-full bg-secondary-main rounded-md mb-6 flex items-center justify-center">
          <p className="text-sm text-secondary-dark">Surface Chart</p>
        </div>

        {/* Related Keywords */}
        <div className="flex flex-wrap gap-2">
          {["관련키워드1", "관련키워드2", "관련키워드3", "관련키워드4", "관련키워드5", "관련키워드6"].map(
            (keyword, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-secondary-main border border-secondary-dark/20 rounded-[10px] text-xs text-secondary-dark leading-[1.33] tracking-[-0.013em]"
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

