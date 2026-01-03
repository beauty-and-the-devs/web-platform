"use client";

export default function InsightGenerationCards() {
  const cards = [
    {
      isHighlighted: true,
      badge: "Glass Skin",
      growth: "+847%",
      hashtags: ["#Glow", "#Vitamin C"],
      views: "2.7M views",
      engagement: "6.1% eng.",
    },
    {
      isHighlighted: false,
      badge: "Glass Skin",
      growth: "+42%",
      hashtags: ["#Glow", "#Vitamin C"],
      views: "2.7M views",
      engagement: "6.1% eng.",
    },
    {
      isHighlighted: false,
      badge: "Glass Skin",
      growth: "+42%",
      hashtags: ["#Glow", "#Vitamin C"],
      views: "2.7M views",
      engagement: "6.1% eng.",
    },
    {
      isHighlighted: false,
      badge: "Glass Skin",
      growth: "+42%",
      hashtags: ["#Glow", "#Vitamin C"],
      views: "2.7M views",
      engagement: "6.1% eng.",
    },
  ];

  return (
    <div className="grid grid-cols-4 gap-3">
      {cards.map((card, index) => (
        <div
          key={index}
          className={`rounded-md border p-3 ${
            card.isHighlighted
              ? "bg-gradient-to-br from-white to-secondary-main/30 border-primary-light border-2"
              : "bg-white border-secondary-dark/20"
          }`}
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-3">
            <span className="px-2 py-0.5 bg-secondary-main border border-transparent rounded-xl text-xs font-semibold text-primary-main">
              {card.badge}
            </span>
            <div className="flex items-center gap-1">
              <span className="text-accent-success">📈</span>
              <span className="text-xs font-medium text-accent-success">{card.growth}</span>
            </div>
          </div>

          {/* Image Placeholder */}
          <div className="w-12 h-12 bg-secondary-main rounded mb-3" />

          {/* Hashtags */}
          <div className="flex flex-wrap gap-1 mb-2">
            {card.hashtags.map((tag, tagIndex) => (
              <span key={tagIndex} className="text-xs text-secondary-dark">
                {tag}
              </span>
            ))}
          </div>

          {/* Stats */}
          <div className="flex items-center gap-3 text-xs text-secondary-dark">
            <span>{card.views}</span>
            <span>{card.engagement}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

