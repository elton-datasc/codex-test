import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Elton Guilherme | Data Engineer',
  description:
    'Professional resume website for Elton Guilherme, Data Engineer specialized in Cloud, BI, and AI applications.'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
