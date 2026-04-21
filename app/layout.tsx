import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'The Glycation Reversal Protocol',
  description: 'Why your expensive skincare isn't working (and what actually does)',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
