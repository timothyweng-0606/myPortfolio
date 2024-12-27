import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition"; 
import StairTransition from "@/components/StairTransition";


const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrainsMono",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"]
});

export const metadata = {
  title: "Timothy's Portfolio",
  description: "",
  icons: {
    icon: ["/favicon.ico"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jetbrainsMono.variable}>
        <Header/>
        <StairTransition/>
        <PageTransition>
          {children}
        </PageTransition>
      </body>
    </html>
  );
}

