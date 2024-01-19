import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
// import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Гастробар MaxBakery: еда на вынос, супы, горячие блюда, выпечка, десерты, салаты | Магазины кулинарии во всех районах Москв',
  description: 'Еда на вынос: супы, горячие блюда, выпечка, десерты, салаты. Вкусно позавтракать, купить обед в офис и ужин с собой недорого. Магазины кулинарии MaxBakery есть во всех районах Москвы',
  keywords:'салаты оптом в Москве, салаты оптом от производителя, готовые сэндвичи, готовые торты, готовые горячая кулинария, домашняя выпечка, пироги оптом от производителя'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
