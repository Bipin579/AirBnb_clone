import { Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import Modal from "./components/modals/Modal";
import RegisterModal from "./components/modals/RegisterModal";

export const metadata = {
  title: "AirBnb",
  description: "This a clone of Airbnb to enhance my skills.",
};
const font = Nunito({
  subsets: ["latin"],
});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <RegisterModal />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
