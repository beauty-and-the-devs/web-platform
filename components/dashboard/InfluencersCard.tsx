"use client";

export default function InfluencersCard() {
  const influencers = [
    {
      username: "@mikayla",
      followers: "14.8M",
      category: "Honest Reviews",
      avgViews: "2.4M",
      engagement: "94%",
      engagementWidth: "94%",
    },
    {
      username: "@glamzilla",
      followers: "8.2M",
      category: "Tutorials",
      avgViews: "1.8M",
      engagement: "89%",
      engagementWidth: "89%",
    },
    {
      username: "@skinbae",
      followers: "4.1M",
      category: "Clean Beauty",
      avgViews: "980K",
      engagement: "92%",
      engagementWidth: "92%",
    },
    {
      username: "@makeupbymario",
      followers: "1.2M",
      category: "Professional MUA",
      avgViews: "420K",
      engagement: "87%",
      engagementWidth: "87%",
    },
  ];

  return (
    <div className="bg-white rounded-[10px] border border-secondary-dark/20 w-full">
      <div className="p-8 pb-1">
        <h3 className="text-lg font-medium text-primary-main mb-6 leading-[1.5] tracking-[-0.02em]">
          Influencer Insights
        </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {influencers.map((influencer, index) => (
          <div
            key={index}
            className="bg-secondary-main border border-secondary-dark/20 rounded-md p-5 hover:shadow-md transition-shadow"
          >
            {/* Header */}
            <div className="mb-4">
              <h4 className="text-base font-medium text-black text-center mb-2">
                {influencer.username}
              </h4>
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="text-secondary-dark">👥</span>
                <span className="text-sm text-secondary-dark">{influencer.followers}</span>
              </div>
              <div className="flex justify-center">
                <span className="px-2 py-1 bg-primary-light/10 border border-primary-light/20 rounded-md text-xs text-primary-light">
                  {influencer.category}
                </span>
              </div>
            </div>

            {/* Metrics */}
            <div className="space-y-3">
              <div className="bg-white rounded-md p-2">
                <p className="text-xs text-secondary-dark mb-1">Avg. Views</p>
                <p className="text-base font-medium text-black">{influencer.avgViews}</p>
              </div>
              <div>
                <div className="flex items-center justify-between mb-1">
                  <p className="text-xs text-secondary-dark">Engagement</p>
                  <p className="text-xs font-medium text-primary-light">{influencer.engagement}</p>
                </div>
                <div className="h-1.5 bg-white rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary-light rounded-full"
                    style={{ width: influencer.engagementWidth }}
                  />
                </div>
              </div>
            </div>

            {/* Profile Image Placeholder */}
            <div className="mt-4 flex justify-center">
              <div className="w-20 h-20 bg-gradient-to-br from-primary-light to-primary-main rounded-md flex items-center justify-center text-white text-2xl font-bold">
                {influencer.username[1].toUpperCase()}
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
}

