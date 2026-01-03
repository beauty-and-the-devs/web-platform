"use client";

export default function ProductCards() {
  const products = [
    {
      brand: "LANEIGE",
      name: "Cream Skin Toner & Moisturizer",
      rating: 4.6,
      reviews: "12.4K",
      sales: "54,600",
      revenue: "$1,200,000",
      price: "$36",
      isBestseller: true,
    },
    {
      brand: "LANEIGE",
      name: "Glowy Makeup Serum",
      rating: 4.6,
      reviews: "12.4K",
      sales: "89.2K",
      revenue: "$1.26M",
      price: "$14",
      isBestseller: true,
    },
    {
      brand: "innisfree",
      name: "Jeju's Cherry Blossom Glow Jelly Cream",
      rating: 4.6,
      reviews: "12.4K",
      sales: "89.2K",
      revenue: "$1.26M",
      price: "$14",
      isBestseller: false,
    },
  ];

  return (
    <div className="space-y-4 w-full">
      <div className="grid grid-cols-3 gap-4">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white border border-secondary-dark/20 rounded-[10px] overflow-hidden hover:shadow-lg transition-shadow"
          >
            {/* Product Image */}
            <div className="relative h-48 bg-gradient-to-br from-secondary-main to-secondary-dark/10">
              {product.isBestseller && (
                <div className="absolute top-2 left-2 bg-primary-light px-2 py-1 rounded text-xs text-white font-medium">
                  #1 Bestseller
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="p-4 space-y-3">
              <div>
                <p className="text-xs font-semibold text-secondary-dark mb-1">{product.brand}</p>
                <h4 className="text-lg font-semibold text-black mb-2">{product.name}</h4>
                <div className="flex items-center gap-2">
                  <span className="text-accent-warning">⭐</span>
                  <span className="text-sm font-semibold text-black">{product.rating}</span>
                  <span className="text-xs text-secondary-dark">({product.reviews})</span>
                </div>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-secondary-main rounded p-2">
                  <p className="text-xs text-secondary-dark mb-1">판매량</p>
                  <p className="text-sm font-semibold text-primary-light">{product.sales}</p>
                </div>
                <div className="bg-secondary-main rounded p-2">
                  <p className="text-xs text-secondary-dark mb-1">총 매출</p>
                  <p className="text-sm font-semibold text-primary-light">{product.revenue}</p>
                </div>
              </div>

              {/* Price and CTA */}
              <div className="flex items-center justify-between pt-3 border-t border-secondary-dark/10">
                <span className="text-xl font-bold text-black">{product.price}</span>
                <button className="text-sm text-primary-light font-medium hover:underline">
                  상세 보기
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

