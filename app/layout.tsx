import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { SITE_NAME, SITE_URL } from "@/lib/site";

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
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Торты на заказ в Динской — Мастерская Елены Кунеевской",
    template: "%s — Мастерская Елены",
  },
  description:
    "Торты на заказ в станице Динской: на день рождения, свадьбу, детские и бенто. Натуральные сливки и свежие ягоды. Рейтинг 5.0 на Яндекс Картах. Заказ через WhatsApp.",
  openGraph: {
    type: "website",
    locale: "ru_RU",
    siteName: SITE_NAME,
  },
};
export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ru" className={`${heading.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
