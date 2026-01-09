import "../../styles/index.css"


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head>
        {/* Google Fonts */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&family=Poppins:wght@100..900&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
