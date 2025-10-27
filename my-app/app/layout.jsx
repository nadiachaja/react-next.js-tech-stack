  import Header from '../components/Header';

export default function DashboardLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>React/Next.js</title>
      </head>
      <body>
        <header>
        <Header />
        </header>
        <main>{children}</main>
      </body>
    </html>
  )
}