import './globals.css'
import { Montserrat } from 'next/font/google'

const inter = Montserrat({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700'],
})

export const metadata = {
  title: 'Feildrix Liemdra',
  description: 'Personal Website',
  icon: {
    url: '/favicon.ico',
    href: '/favicon.ico',
  },
}

export default function RootLayout({ children }) {
  return (

    <html lang='en'>
      <head>
        <link rel="fav icon" href="/images/favicon.ico" type="image/x-icon" sizes='any' />
      </head>

      <body className={inter.className}>{children}</body>
    </html>
  )
}
