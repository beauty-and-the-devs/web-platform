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
  description:
    "수분과 영양을 동시에 공급하는 하이드로 글로우 세럼으로, 피부에 즉각적인 촉촉함과 자연스러운 광채를 선사합니다.",
  packagingVariants: [
    {
      id: "1",
      name: "Pearl White",
      color: "#F5F5F5",
    },
    {
      id: "2",
      name: "Rose Gold",
      color: "#E8B4A0",
    },
    {
      id: "3",
      name: "Lavender Mist",
      color: "#D4C4E8",
    },
    {
      id: "4",
      name: "Mint Cream",
      color: "#C4E8D4",
    },
  ],
  textureProfiles: [
    {
      id: "1",
      name: "Watery",
      description: "가벼운 수성 텍스처로 빠르게 흡수됩니다",
      icon: "💧",
    },
    {
      id: "2",
      name: "Gel-Type",
      description: "젤 형태로 끈적임 없이 촉촉함을 유지합니다",
      icon: "🧪",
    },
    {
      id: "3",
      name: "Serum",
      description: "고농축 세럼으로 집중 케어를 제공합니다",
      icon: "✨",
    },
  ],
  keyIngredients: [
    {
      id: "1",
      name: "Niacinamide",
      description: "피부 톤 개선과 모공 관리에 효과적",
      benefit: "피부 톤 균일화",
      percentage: "5%",
    },
    {
      id: "2",
      name: "Cica Extract",
      description: "진정 및 보습 효과",
      benefit: "진정 및 보습",
      percentage: "3%",
    },
    {
      id: "3",
      name: "Hyaluronic Acid",
      description: "강력한 수분 공급",
      benefit: "수분 공급",
      percentage: "2%",
    },
    {
      id: "4",
      name: "Peptide Complex",
      description: "탄력 개선 및 주름 완화",
      benefit: "탄력 개선",
      percentage: "1%",
    },
  ],
  painPointSolutions: [
    {
      id: "1",
      painPoint: "건조하고 칙칙한 피부",
      solution: "하이알루론산과 나이아신아마이드로 즉각적인 수분 공급 및 톤 개선",
      category: "피부 톤",
    },
    {
      id: "2",
      painPoint: "모공과 여드름",
      solution: "나이아신아마이드로 모공 관리 및 피부 진정",
      category: "모공 관리",
    },
    {
      id: "3",
      painPoint: "탄력 저하와 주름",
      solution: "펩타이드 복합체로 탄력 개선 및 주름 완화",
      category: "안티에이징",
    },
  ],
  claims: ["Clinically Tested", "Vegan", "Cruelty-Free"],
};

export default function ProductAtelierPage() {
  const [productData, setProductData] = useState<ProductData>(initialProductData);
  const [selectedPackaging, setSelectedPackaging] = useState(
    productData.packagingVariants[0]?.id
  );
  const [selectedTexture, setSelectedTexture] = useState(
    productData.textureProfiles[0]?.id
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
        <div className="max-w-[1400px] mx-auto py-8 px-6">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-primary-main mb-2">
              Product Atelier
            </h1>
            <p className="text-secondary-dark">
              AI 기반 제품 개발 도구로 제품 컨셉을 생성하고 관리하세요
            </p>
          </div>

          <div className="grid grid-cols-12 gap-6">
            {/* Left Column - Product Image & Variants */}
            <div className="col-span-5 space-y-6">
              <ProductImageDisplay
                imageUrl={productData.imageUrl}
                productName={productData.name}
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
            <div className="col-span-7 space-y-6">
              <ProductInformationCard
                name={productData.name}
                description={productData.description}
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

          {/* Action Buttons */}
          <div className="mt-8 flex justify-end gap-4">
            <button className="px-6 py-3 border border-secondary-dark/20 rounded-[10px] text-primary-main hover:bg-secondary-main transition-colors">
              저장
            </button>
            <button className="px-6 py-3 bg-primary-light text-white rounded-[10px] hover:bg-primary-light/90 transition-colors">
              AI로 제품 생성
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

