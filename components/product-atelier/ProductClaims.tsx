"use client";

interface ProductClaimsProps {
  claims: string[];
  onAddClaim?: (claim: string) => void;
  onRemoveClaim?: (claim: string) => void;
}

export default function ProductClaims({
  claims,
  onAddClaim,
  onRemoveClaim,
}: ProductClaimsProps) {
  return (
    <div className="bg-white rounded-[10px] border border-secondary-dark/20 p-[25px]">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-medium text-primary-main">
          Product Claims
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
      <div className="flex flex-wrap gap-2">
        {claims.map((claim, index) => (
          <div
            key={index}
            className="px-[13px] py-[9px] bg-secondary-main border border-secondary-dark/20 rounded-[10px]"
          >
            <span className="text-sm font-medium text-black leading-5 tracking-[-0.16px]">
              {claim}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
