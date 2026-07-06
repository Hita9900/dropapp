import { NextIntlClientProvider } from 'next-intl';
import { getLocale } from 'next-intl/server';
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LanguageSwitcher from '@/elements/LanguageSwitcher';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Drop",
  description: "dont make me do metadata now",
};

export default async function RootLayout({ children }) {
  const locale = await getLocale();
  const dir = locale.startsWith('fa') ? 'rtl' : 'ltr';

  return (
    <html
      dir={dir}
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <NextIntlClientProvider>
        <body className="min-h-full flex flex-col">
          <LanguageSwitcher/>
          {children}
        </body>
      </NextIntlClientProvider>
    </html>
  );
}
