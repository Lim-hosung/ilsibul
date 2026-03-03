import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Breadcrumb } from '@/components/layout/Breadcrumb';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: {
    default: 'A1 Special Steel | Global Advanced Materials',
    template: '%s | A1 Special Steel',
  },
  description: 'Global leader in specialized steel manufacturing, providing premium materials and forging solutions for critical industries worldwide.',
  keywords: ['Special Steel', 'Open Die Forging', 'Nuclear Materials', 'Die Forging', 'Industrial Materials', 'A1 Steel'],
  authors: [{ name: 'A1 Special Steel' }],
  creator: 'A1 Special Steel',
  publisher: 'A1 Special Steel',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://a1specialsteel.example.com',
    title: 'A1 Special Steel | Global Advanced Materials',
    description: 'Global leader in specialized steel manufacturing, providing premium materials and forging solutions.',
    siteName: 'A1 Special Steel',
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-background font-sans antialiased flex flex-col pt-20">
        <Header />
        <main className="flex-grow flex flex-col">
          <Breadcrumb />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
