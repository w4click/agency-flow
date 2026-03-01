import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'AgencyFlow',
  description: 'Gestão de Projetos para Agência',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt">
      <body>{children}</body>
    </html>
  );
}
