"use client";

import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background-paper">
      <Sidebar />
      <Header />
      <main className="ml-[280px] mt-16">
        <div className="w-[1111px] py-8">
          <div className="bg-white rounded-[10px] border border-secondary-dark/20 p-8">
            <h1 className="text-3xl font-bold text-primary-main mb-4">Dashboard</h1>
            <p className="text-secondary-dark mb-8">
              전체적인 개요와 주요 지표를 확인하세요.
            </p>
            
            {/* 간단한 대시보드 카드들 */}
            <div className="grid grid-cols-3 gap-6">
              <div className="bg-secondary-main rounded-[10px] p-6">
                <h3 className="text-sm text-secondary-dark mb-2">총 트렌드</h3>
                <p className="text-3xl font-bold text-primary-main">24</p>
                <p className="text-xs text-primary-light mt-2">+12% 증가</p>
              </div>
              
              <div className="bg-secondary-main rounded-[10px] p-6">
                <h3 className="text-sm text-secondary-dark mb-2">활성 인플루언서</h3>
                <p className="text-3xl font-bold text-primary-main">156</p>
                <p className="text-xs text-primary-light mt-2">+8% 증가</p>
              </div>
              
              <div className="bg-secondary-main rounded-[10px] p-6">
                <h3 className="text-sm text-secondary-dark mb-2">총 매출</h3>
                <p className="text-3xl font-bold text-primary-main">$2.4M</p>
                <p className="text-xs text-accent-success mt-2">+15% 증가</p>
              </div>
            </div>

            {/* 빠른 액션 */}
            <div className="mt-8">
              <h2 className="text-xl font-semibold text-primary-main mb-4">빠른 액션</h2>
              <div className="grid grid-cols-2 gap-4">
                <a
                  href="/insight"
                  className="bg-white border-2 border-primary-light rounded-[10px] p-6 hover:bg-primary-light/5 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-primary-main mb-2">
                    Insight Lab 보기
                  </h3>
                  <p className="text-sm text-secondary-dark">
                    트렌드 분석 및 인사이트 확인
                  </p>
                </a>
                
                <a
                  href="/product-atelier"
                  className="bg-white border-2 border-primary-light rounded-[10px] p-6 hover:bg-primary-light/5 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-primary-main mb-2">
                    Product Atelier
                  </h3>
                  <p className="text-sm text-secondary-dark">
                    AI 기반 제품 개발 도구
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

