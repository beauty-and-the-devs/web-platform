"use client";

interface ProductInformationCardProps {
  name: string;
  description: string;
  targetMarket?: string;
  pricePoint?: string;
  skinType?: string;
  launchTimeline?: string;
  onNameChange?: (name: string) => void;
  onDescriptionChange?: (description: string) => void;
  editable?: boolean;
}

export default function ProductInformationCard({
  name,
  description,
  targetMarket = "Gen-Z & Millennials",
  pricePoint = "$42 - $48",
  skinType = "All Types",
  launchTimeline = "Q3 2026",
  onNameChange,
  onDescriptionChange,
  editable = false,
}: ProductInformationCardProps) {
  return (
    <div 
      className="rounded-[10px] border border-secondary-dark/20 p-[33px] relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #FFFFFF 0%, #F5F5F5 100%)",
      }}
    >
      <div className="relative z-10 flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <h2 className="text-[30px] font-semibold text-primary-main leading-[36px] tracking-[-0.6px]">
                {name}
              </h2>
              {editable && (
                <button className="w-7 h-7 rounded-[10px] flex items-center justify-center hover:bg-white/50 transition-colors">
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
              )}
            </div>
            <p className="text-base text-secondary-dark leading-6 tracking-[-0.16px]">
              {description}
            </p>
          </div>
        </div>

        <div className="pt-4 border-t border-secondary-dark/20">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-1">
              <p className="text-xs text-secondary-dark leading-4 tracking-[-0.16px]">
                Target Market
              </p>
              <p className="text-base font-medium text-black leading-6 tracking-[-0.16px]">
                {targetMarket}
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-xs text-secondary-dark leading-4 tracking-[-0.16px]">
                Price Point
              </p>
              <p className="text-base font-medium text-black leading-6 tracking-[-0.16px]">
                {pricePoint}
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-xs text-secondary-dark leading-4 tracking-[-0.16px]">
                Skin Type
              </p>
              <p className="text-base font-medium text-black leading-6 tracking-[-0.16px]">
                {skinType}
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-xs text-secondary-dark leading-4 tracking-[-0.16px]">
                Launch Timeline
              </p>
              <p className="text-base font-medium text-black leading-6 tracking-[-0.16px]">
                {launchTimeline}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
