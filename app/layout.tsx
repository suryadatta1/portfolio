import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Surya Datta - Backend Lead | Node.js & Cloud Expert',
  description: 'Backend Lead specializing in scalable infrastructure, healthcare tech, and cloud architecture. Expert in Node.js, AWS, Terraform, and microservices.',
  icons: {
    icon: '/favicon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} crt-flicker`}>
        <div className="scanline" />
        {children}
      </body>
    </html>
  )
}


