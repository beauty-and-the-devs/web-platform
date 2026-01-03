"use client";

import { useState } from "react";

interface FeedbackInputProps {
  onSubmit: (feedback: string) => void;
  onRegenerate: () => void;
  isLoading?: boolean;
}

const quickSuggestions = [
  "Make the hook more aggressive",
  "Add text overlays",
  "Increase pacing",
  "More product close-ups",
  "Add trending sound",
];

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

  const handleSuggestionClick = (suggestion: string) => {
    setFeedback(suggestion);
  };

  return (
    <div className="bg-white rounded-[10px] border border-secondary-dark/20 p-[25px]">
      <div className="flex items-center gap-3 mb-4">
        <input
          type="text"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          placeholder="Enter feedback to regenerate (e.g., 'Make the hook more aggressive')"
          className="flex-1 px-4 py-3 bg-secondary-main border border-secondary-dark/20 rounded-[10px] text-sm text-secondary-dark placeholder:text-secondary-dark focus:outline-none focus:ring-2 focus:ring-primary-light"
        />
        <button
          onClick={onRegenerate}
          disabled={isLoading}
          className="px-6 py-3 bg-primary-main text-white rounded-[10px] hover:bg-primary-main/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm font-medium flex items-center gap-2"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
          </svg>
          Regenerate Video
        </button>
      </div>

      {/* Quick Suggestions */}
      <div className="flex items-center gap-2 flex-wrap">
        <span className="text-xs text-secondary-dark">Quick suggestions:</span>
        {quickSuggestions.map((suggestion, index) => (
          <button
            key={index}
            onClick={() => handleSuggestionClick(suggestion)}
            className="px-3 py-1.5 bg-secondary-main border border-secondary-dark/20 rounded-[10px] text-xs font-medium text-secondary-dark hover:bg-secondary-dark/10 transition-colors"
          >
            {suggestion}
          </button>
        ))}
      </div>
    </div>
  );
}
