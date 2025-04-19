import { Inter } from 'next/font/google'
import './globals.css';

const inter = Inter({ subsets: ['latin'],display:'swap' })

export const metadata = {
  title: `Bhawana & Lalit's Wedding | December 11, 2025`,
  description: 'Join us for the wedding celebration of Bhawaba and Lalit on December 11, 2025 in Bikaner',
  viewport: 'width=device-width, initial-scale=1.0',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
