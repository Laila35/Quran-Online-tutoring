// src/app/layout.jsx
import { Inter } from "next/font/google";
import WhatsappFloating from "../components/WhatsappFloating";
import NotificationComponent from "../components/notify";
import { GoogleTagManager } from "@next/third-parties/google";
import "./globals.css";
import TawkTo from "../components/TawkChat";
import Footer from "../components/Footer";
import { ToastProvider } from "../components/ToastProvider";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <GoogleTagManager gtmId="GTM-NB8PQTP" />
      </head>
      <body className={inter.className}>
        {children}
        <ToastProvider />
        <TawkTo />
        <WhatsappFloating />
        <Footer />
        <NotificationComponent />
      </body>
    </html>
  );
}
