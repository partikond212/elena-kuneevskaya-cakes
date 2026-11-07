import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const heading = Cormorant_Garamond({
  variable: "--font-heading",
  subsets: ["cyrillic", "latin"],
  weight: ["500", "600"],
  style: ["normal", "italic"],
});

const body = Manrope({
  variable: "--font-body",
  subsets: ["cyrillic", "latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Торты на заказ в Динской — Мастерская Елены",
  description:
    "Сайт-визитка Елены Кунеевской.Вкусные торты,красивый дизайн,лучшее для клиента",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ru" className={`${heading.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
