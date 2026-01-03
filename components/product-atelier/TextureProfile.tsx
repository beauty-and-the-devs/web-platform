"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { TextureProfile as TextureProfileType } from "@/types/product";

interface TextureProfileProps {
  profiles: TextureProfileType[];
  selectedProfileId?: string;
  onSelect?: (profileId: string) => void;
}

export default function TextureProfile({
  profiles,
  selectedProfileId,
  onSelect,
}: TextureProfileProps) {
  const [selected, setSelected] = useState(
    selectedProfileId || profiles[0]?.id
  );

  const handleSelect = (profileId: string) => {
    setSelected(profileId);
    onSelect?.(profileId);
  };

  return (
    <div className="bg-white rounded-[10px] border border-secondary-dark/20 p-8">
      <h3 className="text-lg font-semibold text-primary-main mb-6">
        텍스처 프로필
      </h3>
      <div className="space-y-3">
        {profiles.map((profile) => {
          const isSelected = selected === profile.id;
          return (
            <button
              key={profile.id}
              onClick={() => handleSelect(profile.id)}
              className={cn(
                "w-full p-4 rounded-[10px] border-2 text-left transition-all",
                isSelected
                  ? "border-primary-light bg-primary-light/5"
                  : "border-secondary-dark/20 hover:border-primary-light/50"
              )}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {profile.icon && (
                    <span className="text-2xl">{profile.icon}</span>
                  )}
                  <div>
                    <p className="text-base font-medium text-primary-main">
                      {profile.name}
                    </p>
                    <p className="text-sm text-secondary-dark mt-1">
                      {profile.description}
                    </p>
                  </div>
                </div>
                {isSelected && (
                  <div className="w-5 h-5 bg-primary-light rounded-full flex items-center justify-center">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      className="text-white"
                    >
                      <path
                        d="M9.75 3L4.5 8.25L2.25 6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                )}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

