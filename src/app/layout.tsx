import '../styles/globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gradient-to-br from-sky-300 via-sky-200 to-white">
        {children}
      </body>
    </html>
  )
}
