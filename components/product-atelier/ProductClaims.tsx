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
  const commonClaims = [
    "Clinically Tested",
    "Vegan",
    "Cruelty-Free",
    "Hypoallergenic",
    "Dermatologist Recommended",
    "Paraben-Free",
    "Fragrance-Free",
  ];

  return (
    <div className="bg-white rounded-[10px] border border-secondary-dark/20 p-8">
      <h3 className="text-lg font-semibold text-primary-main mb-6">
        제품 특징
      </h3>
      <div className="flex flex-wrap gap-2 mb-6">
        {claims.map((claim, index) => (
          <div
            key={index}
            className="flex items-center gap-2 px-4 py-2 bg-primary-light/10 border border-primary-light/20 rounded-[10px]"
          >
            <span className="text-sm font-medium text-primary-main">
              {claim}
            </span>
            {onRemoveClaim && (
              <button
                onClick={() => onRemoveClaim(claim)}
                className="text-primary-light hover:text-primary-main transition-colors"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="text-current"
                >
                  <path
                    d="M12 4L4 12M4 4L12 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            )}
          </div>
        ))}
      </div>
      {onAddClaim && (
        <div>
          <p className="text-sm text-secondary-dark mb-3">
            일반적인 특징 추가:
          </p>
          <div className="flex flex-wrap gap-2">
            {commonClaims
              .filter((claim) => !claims.includes(claim))
              .map((claim) => (
                <button
                  key={claim}
                  onClick={() => onAddClaim(claim)}
                  className="px-4 py-2 bg-secondary-main border border-secondary-dark/20 rounded-[10px] text-sm text-secondary-dark hover:bg-primary-light/10 hover:border-primary-light/20 hover:text-primary-main transition-colors"
                >
                  + {claim}
                </button>
              ))}
          </div>
        </div>
      )}
    </div>
  );
}


