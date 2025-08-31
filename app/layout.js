import { Outfit, Ovo, Geist_Mono } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-outfit",
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-ovo",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata = {
  title: "Ali-Portfolio",
  description: "Frontend",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body
        className={`${outfit.variable} ${ovo.variable} ${geistMono.variable} dark:bg-darkTheme dark:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
