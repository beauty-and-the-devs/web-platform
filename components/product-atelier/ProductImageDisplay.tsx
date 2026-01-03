"use client";

import { useState } from "react";

interface ProductImageDisplayProps {
  imageUrl?: string;
  productName: string;
  onImageChange?: (url: string) => void;
}

export default function ProductImageDisplay({
  imageUrl,
  productName,
  onImageChange,
}: ProductImageDisplayProps) {
  const [currentImage, setCurrentImage] = useState<string | null>(imageUrl || null);

  return (
    <div className="bg-white rounded-[10px] border border-secondary-dark/20 p-8">
      <h3 className="text-lg font-semibold text-primary-main mb-6">
        제품 이미지
      </h3>
      <div className="relative w-full aspect-square max-w-[400px] mx-auto bg-secondary-main rounded-[10px] overflow-hidden">
        {currentImage ? (
          <img
            src={currentImage}
            alt={productName}
            className="w-full h-full object-contain"
            onError={() => {
              setCurrentImage(null);
            }}
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center gap-3">
            <div className="w-16 h-16 rounded-full bg-primary-light/10 flex items-center justify-center">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                className="text-primary-light"
              >
                <path
                  d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7 10L12 15L17 10"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 15V3"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <p className="text-sm text-secondary-dark">이미지를 업로드하세요</p>
          </div>
        )}
      </div>
      <div className="mt-6 flex justify-center">
        <label className="cursor-pointer px-6 py-3 bg-primary-light text-white rounded-[10px] hover:bg-primary-light/90 transition-colors">
          <span className="text-sm font-medium">이미지 업로드</span>
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) {
                const url = URL.createObjectURL(file);
                setCurrentImage(url);
                onImageChange?.(url);
              }
            }}
          />
        </label>
      </div>
    </div>
  );
}

