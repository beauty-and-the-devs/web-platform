"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { TextureProfile as TextureProfileType } from "@/types/product";

interface TextureProfileProps {
  profiles: TextureProfileType[];
  selectedProfileId?: string;
  onSelect?: (profileId: string) => void;
}

const textureGradients: Record<string, string> = {
  "Watery": "linear-gradient(135deg, #DBEAFE 0%, #EFF6FF 100%)",
  "Gel-Type": "linear-gradient(135deg, rgba(31, 87, 149, 0.2) 0%, rgba(31, 87, 149, 0.05) 100%)",
  "Serum": "linear-gradient(135deg, #FCE7F3 0%, #FDF2F8 100%)",
};

const textureDescriptions: Record<string, string> = {
  "Watery": "Light absorption",
  "Gel-Type": "Fresh & cooling",
  "Serum": "Concentrated essence",
};

export default function TextureProfile({
  profiles,
  selectedProfileId,
  onSelect,
}: TextureProfileProps) {
  const [selected, setSelected] = useState(
    selectedProfileId || profiles[1]?.id // Gel-Type is default
  );

  const handleSelect = (profileId: string) => {
    setSelected(profileId);
    onSelect?.(profileId);
  };

  return (
    <div className="bg-white rounded-[10px] border border-secondary-dark/20 p-[25px]">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-medium text-primary-main">
          Texture Profile
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
      <div className="flex gap-6">
        {profiles.map((profile) => {
          const isSelected = selected === profile.id;
          const gradient = textureGradients[profile.name] || textureGradients["Watery"];
          const description = textureDescriptions[profile.name] || profile.description;
          
          return (
            <div key={profile.id} className="flex flex-col gap-3 flex-1">
              <button
                onClick={() => handleSelect(profile.id)}
                className={cn(
                  "relative w-full h-[147px] rounded-[10px] border transition-all",
                  isSelected
                    ? "border-4 border-primary-light shadow-[0_0_0_2px_#FFFFFF]"
                    : "border border-secondary-dark/20"
                )}
                style={{
                  background: gradient,
                }}
              >
                {/* Blur effect */}
                <div
                  className="absolute w-16 h-16 rounded-full blur-[24px]"
                  style={{
                    left: "calc(50% - 32px)",
                    top: "calc(50% - 32px)",
                    backgroundColor: isSelected ? "rgba(31, 87, 149, 0.4)" : "#BEDBFF",
                  }}
                />
              </button>
              <p className="text-sm font-medium text-black text-center leading-5 tracking-[-0.16px]">
                {profile.name}
              </p>
              <p className="text-xs text-secondary-dark text-center leading-4 tracking-[-0.16px]">
                {description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
