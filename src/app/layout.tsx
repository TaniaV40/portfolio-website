import type { Metadata } from 'next';
import { Outfit, DM_Sans, JetBrains_Mono, Playfair_Display } from 'next/font/google';
import './globals.css';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  weight: ['400', '600', '700'],
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  weight: ['400', '500', '600', '700'],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400', '500'],
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  weight: ['400', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'Tania Vorster | AI Systems & Digital Product Portfolio',
  description: 'Competencies, AI tools, operational automations, and strategic frameworks designed by Tania Vorster.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.variable} ${dmSans.variable} ${jetbrainsMono.variable} ${playfair.variable} bg-[#FAF8FB] text-[#333333] font-sans antialiased min-h-screen flex flex-col`}
      >
        {children}
      </body>
    </html>
  );
}
