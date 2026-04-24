import { Playfair_Display, Inter, Cormorant_Garamond, Philosopher, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import FloralOverlay from '@/components/FloralOverlay';
import GoldSparkles from '@/components/GoldSparkles';
import FooterStrip from '@/components/FooterStrip';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
});

const philosopher = Philosopher({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-philosopher',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['300', '400', '500', '600'],
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant',
  display: 'swap',
  weight: ['300', '400', '600'],
  style: ['normal', 'italic'],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  display: 'swap',
});

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  viewportFit: 'cover',
};

export const metadata = {
  title: 'SSGK Films — Indian Wedding Photography',
  description: 'Framing timeless Indian stories. Premium wedding photography for your perfect union. Explore our portfolio of elegant Indian wedding photography.',
  keywords: 'Indian wedding photography, wedding photographer, ssgk films, bridal photography, traditional wedding',
  openGraph: {
    title: 'SSGK Films — Indian Wedding Photography',
    description: 'Framing timeless Indian stories. Premium wedding photography for your perfect union.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} ${cormorant.variable} ${philosopher.variable} ${plusJakartaSans.variable}`}>
      <body style={{ fontFamily: 'var(--font-plus-jakarta), sans-serif' }}>
        <Navbar />
        {children}
        <GoldSparkles />
        <FloralOverlay />
        <FooterStrip />
      </body>
    </html>
  );
}
