import { Montserrat } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets:["latin"]
})

export const metadata = {
  title: "Rafi Hasan",
  description: "This is rafi hasan portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} antialiased`}
      >
        {children}
        <Toaster/>
      </body>
    </html>
  );
}
