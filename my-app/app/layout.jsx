  import Header from '../components/Header';
  import './globals.css';

export default function DashboardLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>React/Next.js</title>
      </head>
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  )
}