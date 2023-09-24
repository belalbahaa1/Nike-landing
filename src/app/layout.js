import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "./sections/Footer";
import Nav from "./components/Nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nike",
  description: "nike project loading page",
  icon: "./favicon.ico",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
