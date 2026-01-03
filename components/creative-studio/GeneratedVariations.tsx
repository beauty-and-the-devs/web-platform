"use client";

import { VideoVariation } from "@/types/video";

interface GeneratedVariationsProps {
  variations: VideoVariation[];
  selectedVariationId?: string;
  onSelectVariation: (id: string) => void;
}

const styleLabels: Record<string, string> = {
  "Review Style": "리뷰 스타일",
  "ASMR Style": "ASMR 스타일",
  "Drama Style": "드라마 스타일",
};

export default function GeneratedVariations({
  variations,
  selectedVariationId,
  onSelectVariation,
}: GeneratedVariationsProps) {
  return (
    <div className="bg-white rounded-[10px] border border-secondary-dark/20 p-6">
      <h2 className="text-xl font-semibold text-primary-main mb-4">
        Generated Variations
      </h2>
      <p className="text-sm text-secondary-dark mb-6">
        생성된 비디오 변형을 선택하세요
      </p>

      <div className="grid grid-cols-3 gap-4">
        {variations.map((variation) => {
          const isSelected = variation.id === selectedVariationId;
          return (
            <button
              key={variation.id}
              onClick={() => onSelectVariation(variation.id)}
              className={`relative aspect-[9/16] rounded-lg overflow-hidden border-2 transition-all ${
                isSelected
                  ? "border-primary-light ring-2 ring-primary-light/30"
                  : "border-secondary-dark/20 hover:border-primary-light/50"
              }`}
            >
              {variation.thumbnailUrl ? (
                <img
                  src={variation.thumbnailUrl}
                  alt={variation.style}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-secondary-main flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl mb-2">🎬</div>
                    <p className="text-xs text-secondary-dark">
                      {styleLabels[variation.style] || variation.style}
                    </p>
                  </div>
                </div>
              )}

              {/* Duration Badge */}
              <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                {Math.floor(variation.duration)}s
              </div>

              {/* Selected Indicator */}
              {isSelected && (
                <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-primary-light flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                </div>
              )}

              {/* Style Label */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                <p className="text-white text-sm font-medium">
                  {styleLabels[variation.style] || variation.style}
                </p>
              </div>
            </button>
          );
        })}
      </div>

      {variations.length === 0 && (
        <div className="text-center py-12 text-secondary-dark">
          <p className="text-sm">생성된 변형이 없습니다</p>
          <p className="text-xs mt-2">비디오를 생성하면 여기에 표시됩니다</p>
        </div>
      )}
    </div>
  );
}

