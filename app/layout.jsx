import "./globals.css";
import { Rubik } from "next/font/google";

// components
import Navbar from "./components/Navbar";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata = {
  title: "ISR is Great!",
  description: "Testing out new stuff",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        <Navbar />
        {children}
        <footer
          style={{ textAlign: "center", marginTop: "20px", fontSize: "14px" }}
        >
          MJ 2024
        </footer>
      </body>
    </html>
  );
}
