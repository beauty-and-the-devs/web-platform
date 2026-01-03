"use client";

import { useState } from "react";
import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";
import ProductImageDisplay from "@/components/product-atelier/ProductImageDisplay";
import PackagingVariants from "@/components/product-atelier/PackagingVariants";
import TextureProfile from "@/components/product-atelier/TextureProfile";
import ProductInformationCard from "@/components/product-atelier/ProductInformationCard";
import KeyIngredients from "@/components/product-atelier/KeyIngredients";
import PainPointSolutions from "@/components/product-atelier/PainPointSolutions";
import ProductClaims from "@/components/product-atelier/ProductClaims";
import { ProductData } from "@/types/product";

// 샘플 데이터
const initialProductData: ProductData = {
  id: "1",
  name: "Hydro-Glow Serum",
  description: "The ultimate hydration booster for radiant, glass-skin glow",
  packagingVariants: [
    {
      id: "1",
      name: "Pearl White",
      color: "#F8F9FA",
    },
    {
      id: "2",
      name: "Rose Gold",
      color: "#E8D4CD",
    },
    {
      id: "3",
      name: "Lavender Mist",
      color: "#E9D5FF",
    },
    {
      id: "4",
      name: "Mint Cream",
      color: "#D1F4E8",
    },
  ],
  textureProfiles: [
    {
      id: "1",
      name: "Watery",
      description: "Light absorption",
      icon: "💧",
    },
    {
      id: "2",
      name: "Gel-Type",
      description: "Fresh & cooling",
      icon: "🧪",
    },
    {
      id: "3",
      name: "Serum",
      description: "Concentrated essence",
      icon: "✨",
    },
  ],
  keyIngredients: [
    {
      id: "1",
      name: "Niacinamide",
      description: "Active",
      benefit: "Active",
      percentage: "5%",
    },
    {
      id: "2",
      name: "Cica Extract",
      description: "Soothing",
      benefit: "Soothing",
    },
    {
      id: "3",
      name: "Hyaluronic Acid",
      description: "Hydration",
      benefit: "Hydration",
    },
    {
      id: "4",
      name: "Peptide Complex",
      description: "Anti-Aging",
      benefit: "Anti-Aging",
    },
  ],
  painPointSolutions: [
    {
      id: "1",
      painPoint: "Sticky after application",
      solution: "Fast-absorbing lightweight gel formula",
      category: "Texture",
      severity: "High",
    },
    {
      id: "2",
      painPoint: "Takes too long to see results",
      solution: "Visible radiance within 7 days",
      category: "Efficacy",
      severity: "High",
    },
    {
      id: "3",
      painPoint: "Irritating on sensitive skin",
      solution: "Dermatologist-tested, hypoallergenic",
      category: "Sensitivity",
      severity: "Medium",
    },
  ],
  claims: [
    "Clinically Tested",
    "Vegan",
    "Cruelty-Free",
    "Fragrance-Free",
    "Non-Comedogenic",
    "Dermatologist Approved",
    "Refillable Packaging",
    "Carbon Neutral",
  ],
  targetMarket: "Gen-Z & Millennials",
  pricePoint: "$42 - $48",
  skinType: "All Types",
  launchTimeline: "Q3 2026",
  productTags: ["30ml", "Premium Glass", "Refillable"],
};

export default function ProductAtelierPage() {
  const [productData, setProductData] = useState<ProductData>(initialProductData);
  const [selectedPackaging, setSelectedPackaging] = useState(
    productData.packagingVariants[0]?.id
  );
  const [selectedTexture, setSelectedTexture] = useState(
    productData.textureProfiles[1]?.id // Gel-Type is default
  );

  const handleNameChange = (name: string) => {
    setProductData({ ...productData, name });
  };

  const handleDescriptionChange = (description: string) => {
    setProductData({ ...productData, description });
  };

  const handleAddClaim = (claim: string) => {
    if (!productData.claims.includes(claim)) {
      setProductData({
        ...productData,
        claims: [...productData.claims, claim],
      });
    }
  };

  const handleRemoveClaim = (claim: string) => {
    setProductData({
      ...productData,
      claims: productData.claims.filter((c) => c !== claim),
    });
  };

  return (
    <div className="min-h-screen bg-background-paper">
      <Sidebar />
      <Header />
      <main className="ml-[280px] mt-16">
        <div className="w-[1111px] mx-auto py-5 px-10">
          {/* Page Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  className="text-primary-light"
                >
                  <path
                    d="M10 2L10 18M2 10L18 10"
                    stroke="currentColor"
                    strokeWidth="1.67"
                    strokeLinecap="round"
                  />
                  <path
                    d="M10 2L6 6L10 10L14 6L10 2"
                    stroke="currentColor"
                    strokeWidth="1.67"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10 10L6 14L10 18L14 14L10 10"
                    stroke="currentColor"
                    strokeWidth="1.67"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p className="text-xs font-semibold text-primary-light uppercase tracking-[0.6px]">
                  AI-Generated Product Concept
                </p>
              </div>
              <h1 className="text-2xl font-medium text-primary-main leading-9 tracking-[-0.48px]">
                New Product Development
              </h1>
            </div>
            <div className="flex items-center gap-3">
              <button className="px-4 py-2 bg-white border border-secondary-dark/20 rounded-[10px] flex items-center gap-2 hover:bg-secondary-main transition-colors">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="text-black"
                >
                  <path
                    d="M8 2V14M2 8H14"
                    stroke="currentColor"
                    strokeWidth="1.33"
                    strokeLinecap="round"
                  />
                </svg>
                <span className="text-sm font-medium text-black leading-5 tracking-[-0.16px]">
                  Edit Concept
                </span>
              </button>
              <button className="px-6 py-2 bg-primary-light text-white rounded-[10px] flex items-center gap-2 hover:bg-primary-light/90 transition-colors">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="text-white"
                >
                  <path
                    d="M12 8L8 4M12 8L8 12M12 8L4 8"
                    stroke="currentColor"
                    strokeWidth="1.33"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="text-sm font-medium text-white leading-5 tracking-[-0.16px]">
                  Generate Marketing Video
                </span>
              </button>
            </div>
          </div>

          <div className="flex gap-6">
            {/* Left Column - Product Image & Variants */}
            <div className="w-[539.5px] flex flex-col gap-6">
              <ProductImageDisplay
                imageUrl={productData.imageUrl}
                productName={productData.name}
                productTags={productData.productTags}
              />
              <PackagingVariants
                variants={productData.packagingVariants}
                selectedVariantId={selectedPackaging}
                onSelect={setSelectedPackaging}
              />
              <TextureProfile
                profiles={productData.textureProfiles}
                selectedProfileId={selectedTexture}
                onSelect={setSelectedTexture}
              />
            </div>

            {/* Right Column - Product Info & Details */}
            <div className="w-[539.5px] flex flex-col gap-6">
              <ProductInformationCard
                name={productData.name}
                description={productData.description}
                targetMarket={productData.targetMarket}
                pricePoint={productData.pricePoint}
                skinType={productData.skinType}
                launchTimeline={productData.launchTimeline}
                onNameChange={handleNameChange}
                onDescriptionChange={handleDescriptionChange}
                editable={true}
              />
              <KeyIngredients ingredients={productData.keyIngredients} />
              <PainPointSolutions solutions={productData.painPointSolutions} />
              <ProductClaims
                claims={productData.claims}
                onAddClaim={handleAddClaim}
                onRemoveClaim={handleRemoveClaim}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
