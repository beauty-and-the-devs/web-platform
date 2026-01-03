"use client";

import { useState, useRef } from "react";

interface VideoPreviewProps {
  videoUrl?: string;
  thumbnailUrl?: string;
  duration?: number;
  onExport?: () => void;
  onExportToTikTok?: () => void;
}

export default function VideoPreview({
  videoUrl,
  thumbnailUrl,
  duration = 15,
  onExport,
  onExportToTikTok,
}: VideoPreviewProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(4);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseFloat(e.target.value);
    if (videoRef.current) {
      videoRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const progressPercentage = (currentTime / duration) * 100;

  return (
    <div className="bg-background-dark rounded-[10px] overflow-hidden">
      {/* Video Container - TikTok Style */}
      <div className="relative flex items-center justify-center p-3">
        <div 
          className="relative rounded-[48px] p-3 shadow-2xl"
          style={{
            background: "linear-gradient(180deg, #374151 0%, #1F2937 100%)",
          }}
        >
          <div className="w-[296px] h-[544px] bg-black rounded-[40px] relative overflow-hidden">
            {videoUrl ? (
              <video
                ref={videoRef}
                src={videoUrl}
                className="w-full h-full object-cover"
                onTimeUpdate={handleTimeUpdate}
                onEnded={() => setIsPlaying(false)}
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center relative">
                {/* Video Content Overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <h2 className="text-[30px] font-bold text-white text-center mb-1 drop-shadow-lg">
                    Glass Skin
                  </h2>
                  <p className="text-xl text-white text-center drop-shadow-lg">
                    in 3 Seconds
                  </p>
                </div>

                {/* Top Progress Bars */}
                <div className="absolute top-3 left-3 right-3 flex gap-1">
                  {[0, 1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="flex-1 h-0.5 rounded-full bg-white/30 overflow-hidden"
                    >
                      <div
                        className={`h-full bg-white rounded-full ${
                          i < Math.floor(progressPercentage / 25) ? "" : ""
                        }`}
                        style={{
                          width: i < Math.floor(progressPercentage / 25) ? "100%" : 
                                 i === Math.floor(progressPercentage / 25) ? `${(progressPercentage % 25) * 4}%` : "0%"
                        }}
                      />
                    </div>
                  ))}
                </div>

                {/* Play Button Overlay */}
                {!isPlaying && (
                  <button
                    onClick={handlePlayPause}
                    className="absolute inset-0 flex items-center justify-center bg-black/20"
                  >
                    <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center">
                      <svg
                        className="w-8 h-8 text-black ml-1"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="p-4 bg-[#2D2D2D] border-t border-white/10">
        {/* Timeline Scrubber */}
        <div className="mb-4">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs text-white/60 font-normal">
              {formatTime(currentTime)}
            </span>
            <div className="flex-1 h-1.5 bg-secondary-dark/30 rounded-full overflow-hidden">
              <div
                className="h-full bg-primary-light rounded-full"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
            <span className="text-xs text-white/60 font-normal">
              {formatTime(duration)}
            </span>
          </div>
        </div>

        {/* Control Buttons */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={handlePlayPause}
              className="w-10 h-10 bg-primary-light rounded-[10px] flex items-center justify-center text-white hover:bg-primary-light/90 transition-colors"
            >
              {isPlaying ? (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                </svg>
              ) : (
                <svg className="w-5 h-5 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              )}
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onExport}
              className="px-4 py-2 bg-[#3D3D3D] hover:bg-[#4D4D4D] text-white rounded-[10px] text-sm font-medium transition-colors flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download
            </button>
            <button
              onClick={onExportToTikTok}
              className="px-4 py-2 bg-primary-light hover:bg-primary-light/90 text-white rounded-[10px] text-sm font-medium transition-colors flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7.41a7.16 7.16 0 004.39 1.38 7.12 7.12 0 004.38-1.38v-3.4a19.14 19.14 0 01-4.04-.57z"/>
              </svg>
              Export to TikTok
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
