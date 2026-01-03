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
  const [currentTime, setCurrentTime] = useState(0);
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
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div className="bg-background-dark rounded-[10px] overflow-hidden">
      {/* Video Container - TikTok Style */}
      <div className="relative aspect-[9/16] bg-black flex items-center justify-center">
        {videoUrl ? (
          <video
            ref={videoRef}
            src={videoUrl}
            className="w-full h-full object-contain"
            onTimeUpdate={handleTimeUpdate}
            onEnded={() => setIsPlaying(false)}
          />
        ) : (
          <div className="text-white/50 text-center">
            <div className="text-6xl mb-4">🎬</div>
            <p className="text-sm">비디오를 생성하세요</p>
          </div>
        )}

        {/* Play/Pause Overlay */}
        {!isPlaying && videoUrl && (
          <button
            onClick={handlePlayPause}
            className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/20 transition-colors"
          >
            <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center">
              <svg
                className="w-8 h-8 text-primary-main ml-1"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </button>
        )}
      </div>

      {/* Controls */}
      <div className="p-4 bg-background-dark border-t border-white/10">
        {/* Timeline Scrubber */}
        <div className="mb-4">
          <input
            type="range"
            min="0"
            max={duration}
            step="0.1"
            value={currentTime}
            onChange={handleSeek}
            className="w-full h-1 bg-white/20 rounded-lg appearance-none cursor-pointer accent-primary-light"
          />
          <div className="flex justify-between text-xs text-white/60 mt-1">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>

        {/* Control Buttons */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={handlePlayPause}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
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
            <span className="text-sm text-white/80">{formatTime(currentTime)}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onExport}
              className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded text-sm transition-colors"
            >
              다운로드
            </button>
            <button
              onClick={onExportToTikTok}
              className="px-4 py-2 bg-primary-light hover:bg-primary-light/90 text-white rounded text-sm transition-colors"
            >
              TikTok에 업로드
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

