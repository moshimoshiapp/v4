import type { Metadata } from 'next'
import './globals.css'


export const metadata: Metadata = {
  title: 'Moshi Moshi App',
  description: 'Phone Sex Operators for Therapuetic Sexy Talk',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
      <div className='h-screen'>
        {children}
      </div>
      </body>
    </html>
  )
}