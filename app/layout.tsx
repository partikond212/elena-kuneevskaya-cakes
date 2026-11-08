import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const heading = localFont({
  variable: "--font-heading",
  src: [
    {
      path: "./fonts/cormorant-garamond-v21-cyrillic_latin-500.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/cormorant-garamond-v21-cyrillic_latin-600italic.woff2",
      weight: "600",
      style: "italic",
    },
    {
      path: "./fonts/cormorant-garamond-v21-cyrillic_latin-600.woff2",
      weight: "600",
      style: "normal",
    },
  ],
});

const body = localFont({
  variable: "--font-body",
  src: [
    {
      path: "./fonts/manrope-v23-cyrillic_latin-500.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/manrope-v23-cyrillic_latin-regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/manrope-v23-cyrillic_latin-600.woff2",
      weight: "600",
      style: "normal",
    },
  ],
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
