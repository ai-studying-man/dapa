import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LET'S DAPA",
  description:
    "방위사업청과 정부과천청사 관련 서비스를 로고, 자동 요약, 해시태그 중심의 카드로 큐레이션한 원페이지 랜딩",
  manifest: "/manifest.webmanifest",
  icons: {
    icon: "/app-icon.png",
    shortcut: "/app-icon.png",
    apple: "/app-icon.png",
  },
  appleWebApp: {
    capable: true,
    title: "LET'S DAPA",
    statusBarStyle: "default",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="h-full scroll-smooth antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
