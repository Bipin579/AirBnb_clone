import {Nunito} from "next/font/google"
import './globals.css';
import Navbar from "./components/navbar/Navbar";


export const metadata = {
  title: 'AirBnb',
  description: 'This a clone of Airbnb to enhance my skills.',
}
const font = Nunito({
  subsets:["latin"],
})
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar />
        {children}</body>
    </html>
  )
}
