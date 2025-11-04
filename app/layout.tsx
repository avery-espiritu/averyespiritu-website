import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Avery Espiritu - Software Engineer & CS Student',
  description: 'Portfolio website of Avery Espiritu, a Brown University Computer Science student passionate about AI for good and ethical technology.',
  keywords: ['Software Engineer', 'Computer Science', 'Brown University', 'AI', 'Ethical Technology'],
  authors: [{ name: 'Avery Espiritu' }],
  openGraph: {
    title: 'Avery Espiritu - Software Engineer & CS Student',
    description: 'Portfolio website showcasing my work in software engineering, teaching, and research.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

