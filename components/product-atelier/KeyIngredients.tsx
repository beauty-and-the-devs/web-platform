"use client";

import { Ingredient } from "@/types/product";

interface KeyIngredientsProps {
  ingredients: Ingredient[];
}

const ingredientIcons: Record<string, JSX.Element> = {
  "Niacinamide": (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M10 2L10 18M2 10L18 10" stroke="#1F5795" strokeWidth="1.25" strokeLinecap="round"/>
      <path d="M7 7L13 13M13 7L7 13" stroke="#1F5795" strokeWidth="1.25" strokeLinecap="round"/>
    </svg>
  ),
  "Cica Extract": (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M10 4L10 16M4 10L16 10" stroke="#1F5795" strokeWidth="1.25" strokeLinecap="round"/>
      <path d="M6 6L14 14M14 6L6 14" stroke="#1F5795" strokeWidth="1.25" strokeLinecap="round"/>
    </svg>
  ),
  "Hyaluronic Acid": (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M10 2L10 18M2 10L18 10" stroke="#1F5795" strokeWidth="1.25" strokeLinecap="round"/>
      <path d="M10 2L6 6L10 10L14 6L10 2" stroke="#1F5795" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10 10L6 14L10 18L14 14L10 10" stroke="#1F5795" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  "Peptide Complex": (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M10 2L10 18M2 10L18 10" stroke="#1F5795" strokeWidth="1.25" strokeLinecap="round"/>
      <path d="M10 2L6 6L10 10L14 6L10 2" stroke="#1F5795" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10 10L6 14L10 18L14 14L10 10" stroke="#1F5795" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="10" cy="10" r="2" fill="#1F5795"/>
    </svg>
  ),
};

const benefitLabels: Record<string, string> = {
  "Niacinamide": "Active",
  "Cica Extract": "Soothing",
  "Hyaluronic Acid": "Hydration",
  "Peptide Complex": "Anti-Aging",
};

export default function KeyIngredients({ ingredients }: KeyIngredientsProps) {
  return (
    <div className="bg-white rounded-[10px] border border-secondary-dark/20 p-[25px]">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-medium text-primary-main">
          Key Ingredients
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
      <div className="grid grid-cols-2 gap-3">
        {ingredients.map((ingredient) => (
          <div
            key={ingredient.id}
            className="flex items-center gap-3 px-3 py-3 bg-secondary-main border border-secondary-dark/10 rounded-[10px]"
          >
            <div className="w-10 h-10 bg-primary-light/10 rounded-[10px] flex items-center justify-center flex-shrink-0">
              {ingredientIcons[ingredient.name] || (
                <div className="w-5 h-5 bg-primary-light/20 rounded" />
              )}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-black leading-5 tracking-[-0.16px] truncate">
                {ingredient.name} {ingredient.percentage}
              </p>
              <p className="text-xs text-secondary-dark leading-4 tracking-[-0.16px]">
                {benefitLabels[ingredient.name] || ingredient.benefit}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
