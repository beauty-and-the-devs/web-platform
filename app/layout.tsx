import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AMOREPACIFIC - 웹 플랫폼",
  description: "트렌드 분석 및 제품 개발 플랫폼",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}

