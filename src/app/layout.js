import './globals.css'
export const metadata = {
  title: 'React QR Scanner Demo',
  description: 'React QR Scanner Demo',
};

export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
