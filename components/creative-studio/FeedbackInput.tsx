"use client";

import { useState } from "react";

interface FeedbackInputProps {
  onSubmit: (feedback: string) => void;
  onRegenerate: () => void;
  isLoading?: boolean;
}

export default function FeedbackInput({
  onSubmit,
  onRegenerate,
  isLoading = false,
}: FeedbackInputProps) {
  const [feedback, setFeedback] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (feedback.trim()) {
      onSubmit(feedback);
      setFeedback("");
    }
  };

  return (
    <div className="bg-white rounded-[10px] border border-secondary-dark/20 p-6">
      <h2 className="text-xl font-semibold text-primary-main mb-4">
        Feedback & Regenerate
      </h2>
      <p className="text-sm text-secondary-dark mb-4">
        피드백을 입력하고 비디오를 재생성하세요
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <textarea
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          placeholder="예: 더 밝은 조명으로 변경해주세요, 배경 음악을 추가해주세요..."
          className="w-full px-4 py-3 border border-secondary-dark/20 rounded-[10px] text-sm focus:outline-none focus:ring-2 focus:ring-primary-light resize-none"
          rows={4}
        />

        <div className="flex items-center gap-3">
          <button
            type="submit"
            disabled={!feedback.trim() || isLoading}
            className="px-6 py-2 bg-primary-light text-white rounded-[10px] hover:bg-primary-light/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm font-medium"
          >
            {isLoading ? "처리 중..." : "피드백 제출"}
          </button>
          <button
            type="button"
            onClick={onRegenerate}
            disabled={isLoading}
            className="px-6 py-2 border border-secondary-dark/20 text-primary-main rounded-[10px] hover:bg-secondary-main transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm font-medium"
          >
            {isLoading ? "생성 중..." : "재생성"}
          </button>
        </div>
      </form>
    </div>
  );
}

