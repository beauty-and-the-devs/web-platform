"use client";

import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";

export default function InsightPage() {
  return (
    <div className="min-h-screen bg-background-default">
      <Sidebar />
      <Header />
      <main className="ml-60 mt-16 p-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-primary-main mb-8">Insight Lab</h1>
          <p className="text-secondary-dark">Insight 페이지 내용이 여기에 표시됩니다.</p>
        </div>
      </main>
    </div>
  );
}

