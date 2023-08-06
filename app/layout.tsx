import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import Header from './components/Header'
import Footer from './components/Footer'

const poppins = Poppins({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-poppins'
})

export const metadata: Metadata = {
  title: 'CoinRank',
  description: 'A ranking app for the top 50 crypto coins.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={poppins.className}>
      <body className='relative w-full min-h-full font-font-poppins '>
        <Header />
          {children}
        <Footer />
      </body>
    </html>
  )
}
