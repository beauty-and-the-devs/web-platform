"use client";

import { Ingredient } from "@/types/product";

interface KeyIngredientsProps {
  ingredients: Ingredient[];
}

export default function KeyIngredients({ ingredients }: KeyIngredientsProps) {
  return (
    <div className="bg-white rounded-[10px] border border-secondary-dark/20 p-8">
      <h3 className="text-lg font-semibold text-primary-main mb-6">
        주요 성분
      </h3>
      <div className="grid grid-cols-2 gap-4">
        {ingredients.map((ingredient) => (
          <div
            key={ingredient.id}
            className="p-6 bg-secondary-main rounded-[10px] border border-secondary-dark/20"
          >
            <div className="flex items-start justify-between mb-3">
              <h4 className="text-base font-semibold text-primary-main">
                {ingredient.name}
              </h4>
              {ingredient.percentage && (
                <span className="text-sm font-medium text-primary-light bg-primary-light/10 px-2 py-1 rounded">
                  {ingredient.percentage}
                </span>
              )}
            </div>
            <p className="text-sm text-secondary-dark mb-2">
              {ingredient.description}
            </p>
            <div className="flex items-center gap-2 mt-3">
              <span className="text-xs text-accent-success font-medium">
                ✓
              </span>
              <span className="text-xs text-secondary-dark">
                {ingredient.benefit}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


