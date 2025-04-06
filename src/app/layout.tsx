import { Bangers, Fredoka } from 'next/font/google';
import './globals.css'
import type { Metadata } from 'next'

const bangers = Bangers({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

const fredoka = Fredoka({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'LINDER',
  description: 'LINDER - Trova la tua anima gemella',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <main className={`${fredoka.className}`}>
          {children}
        </main>
      </body>
    </html>
  )
} 