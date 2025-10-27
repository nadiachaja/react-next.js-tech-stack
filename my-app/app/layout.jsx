export default function DashboardLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>React/Next.js</title>
      </head>
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}