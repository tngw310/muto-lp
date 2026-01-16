import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "武藤雄大 | 国民民主党 千葉6区（松戸市）",
  description:
    "届かない声を、届ける。0歳児の父。記者出身。現場から政治へ。国民民主党 千葉6区（松戸市）総支部長 武藤雄大の公式サイト。",
  keywords: ["武藤雄大", "国民民主党", "千葉6区", "松戸市", "衆議院"],
  openGraph: {
    title: "武藤雄大 | 国民民主党 千葉6区（松戸市）",
    description: "届かない声を、届ける。0歳児の父。記者出身。現場から政治へ。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "武藤雄大 | 国民民主党 千葉6区（松戸市）",
    description: "届かない声を、届ける。0歳児の父。記者出身。現場から政治へ。",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${notoSansJP.variable} antialiased`}>{children}</body>
    </html>
  );
}
