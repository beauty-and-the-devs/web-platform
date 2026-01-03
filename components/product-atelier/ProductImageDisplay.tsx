"use client";

import { useState } from "react";

interface ProductImageDisplayProps {
  imageUrl?: string;
  productName: string;
  onImageChange?: (url: string) => void;
  productTags?: string[];
}

export default function ProductImageDisplay({
  imageUrl,
  productName,
  onImageChange,
  productTags = ["30ml", "Premium Glass", "Refillable"],
}: ProductImageDisplayProps) {
  const [currentImage, setCurrentImage] = useState<string | null>(imageUrl || null);

  return (
    <div className="bg-white rounded-[10px] border border-secondary-dark/20 p-[25px] relative overflow-hidden">
      {/* Gradient Background */}
      <div 
        className="absolute inset-0 rounded-[10px]"
        style={{
          background: "linear-gradient(135deg, #F5F5F5 0%, #FFFFFF 50%, rgba(31, 87, 149, 0.05) 100%)",
        }}
      />
      
      <div className="relative z-10 flex flex-col gap-8">
        {/* Image Container */}
        <div className="relative w-full aspect-square max-w-[441px] mx-auto rounded-[10px] overflow-hidden">
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

        {/* Product Tags */}
        <div className="flex justify-center items-center gap-2">
          {productTags.map((tag, index) => (
            <div
              key={index}
              className="px-[17px] py-[13px] bg-white/80 border border-secondary-dark/20 rounded-[10px]"
            >
              <span className="text-sm font-medium text-black leading-5 tracking-[-0.16px]">
                {tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
