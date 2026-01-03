"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { PackagingVariant as PackagingVariantType } from "@/types/product";

interface PackagingVariantsProps {
  variants: PackagingVariantType[];
  selectedVariantId?: string;
  onSelect?: (variantId: string) => void;
}

export default function PackagingVariants({
  variants,
  selectedVariantId,
  onSelect,
}: PackagingVariantsProps) {
  const [selected, setSelected] = useState(selectedVariantId || variants[0]?.id);

  const handleSelect = (variantId: string) => {
    setSelected(variantId);
    onSelect?.(variantId);
  };

  return (
    <div className="bg-white rounded-[10px] border border-secondary-dark/20 p-8">
      <h3 className="text-lg font-semibold text-primary-main mb-6">
        패키징 변형
      </h3>
      <div className="grid grid-cols-2 gap-4">
        {variants.map((variant) => {
          const isSelected = selected === variant.id;
          return (
            <button
              key={variant.id}
              onClick={() => handleSelect(variant.id)}
              className={cn(
                "relative p-6 rounded-[10px] border-2 transition-all",
                isSelected
                  ? "border-primary-light bg-primary-light/5"
                  : "border-secondary-dark/20 hover:border-primary-light/50"
              )}
            >
              <div
                className="w-full h-24 rounded-md mb-3"
                style={{ backgroundColor: variant.color }}
              />
              <p className="text-sm font-medium text-primary-main text-center">
                {variant.name}
              </p>
              {isSelected && (
                <div className="absolute top-2 right-2 w-6 h-6 bg-primary-light rounded-full flex items-center justify-center">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    className="text-white"
                  >
                    <path
                      d="M11.375 3.5L5.25 9.625L2.625 7"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}


