
import './globals.css';



export const metadata = {
  title: `Bhawana & Lalit's Wedding | December 11, 2025`,
  description: 'Join us for the wedding celebration of Bhawaba and Lalit on December 11, 2025 in Bikaner',
  viewport: 'width=device-width, initial-scale=1.0',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Playfair+Display:ital@1&family=Noto+Sans+Devanagari:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}
