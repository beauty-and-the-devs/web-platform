"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { PackagingVariant as PackagingVariantType } from "@/types/product";

interface PackagingVariantsProps {
  variants: PackagingVariantType[];
  selectedVariantId?: string;
  onSelect?: (variantId: string) => void;
}

const colorMap: Record<string, string> = {
  "Pearl White": "#F8F9FA",
  "Rose Gold": "#E8D4CD",
  "Lavender Mist": "#E9D5FF",
  "Mint Cream": "#D1F4E8",
};

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
    <div className="bg-white rounded-[10px] border border-secondary-dark/20 p-[25px]">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-medium text-primary-main">
          Packaging Variants
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
      <div className="flex gap-2">
        {variants.map((variant) => {
          const isSelected = selected === variant.id;
          const color = colorMap[variant.name] || variant.color;
          return (
            <div key={variant.id} className="flex flex-col gap-2">
              <button
                onClick={() => handleSelect(variant.id)}
                className={cn(
                  "relative w-[110px] h-[110px] rounded-[10px] border-2 transition-all",
                  isSelected
                    ? "border-primary-light bg-[#F8F9FA]"
                    : "border-secondary-dark/20 bg-white"
                )}
                style={!isSelected ? { backgroundColor: color } : undefined}
              >
                {isSelected && (
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary-light rounded-[10px] flex items-center justify-center">
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
                        strokeWidth="1.75"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                )}
              </button>
              <p className="text-xs font-medium text-secondary-dark text-center leading-4 tracking-[-0.16px]">
                {variant.name}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
