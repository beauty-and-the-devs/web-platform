"use client";

import { VideoVariation } from "@/types/video";

interface GeneratedVariationsProps {
  variations: VideoVariation[];
  selectedVariationId?: string;
  onSelectVariation: (id: string) => void;
}

export default function GeneratedVariations({
  variations,
  selectedVariationId,
  onSelectVariation,
}: GeneratedVariationsProps) {
  return (
    <div className="bg-white rounded-[10px] border border-secondary-dark/20 p-[25px]">
      <h3 className="text-lg font-medium text-primary-main mb-4">
        Generated Variations
      </h3>

      <div className="space-y-3">
        {variations.map((variation) => {
          const isSelected = variation.id === selectedVariationId;
          return (
            <button
              key={variation.id}
              onClick={() => onSelectVariation(variation.id)}
              className={`relative w-full rounded-[10px] overflow-hidden transition-all ${
                isSelected
                  ? "ring-2 ring-primary-light ring-offset-2"
                  : "border border-secondary-dark/20 hover:border-primary-light/50"
              }`}
            >
              {/* Thumbnail */}
              <div className="w-full h-[372px] bg-secondary-main relative">
                {variation.thumbnailUrl ? (
                  <img
                    src={variation.thumbnailUrl}
                    alt={variation.style}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl mb-2">🎬</div>
                    </div>
                  </div>
                )}

                {/* Selected Badge */}
                {isSelected && (
                  <div className="absolute top-2 right-2 bg-primary-light px-2 py-1 rounded text-xs font-medium text-white">
                    Selected
                  </div>
                )}
              </div>

              {/* Style Label */}
              <div className="bg-white px-3 py-3">
                <p className="text-sm font-medium text-primary-dark">
                  {variation.style}
                </p>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
