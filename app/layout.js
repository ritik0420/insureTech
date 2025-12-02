import './globals.css'

export const metadata = {
  title: 'InsureTech Skills',
  description: 'Professional IT training and certification courses',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

