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
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                try {
                  var saved = localStorage.getItem('theme');
                  var systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  var useDark = saved ? saved === 'dark' : systemDark;
                  document.documentElement.classList.toggle('dark', useDark);
                } catch (e) {}
              })();
            `
          }}
        />
        {children}
      </body>
    </html>
  );
}
