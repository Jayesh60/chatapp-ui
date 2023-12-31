import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Chatapp - Jayesh Wadhe",
  description: "Create by Jayesh Wadhe",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-black">
      <body className={`${inter.className} h-screen no-scrollbar`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
