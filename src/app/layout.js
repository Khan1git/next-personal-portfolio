import { Inter } from "next/font/google";
import "./globals.css";
import Menu from "@/components/Menu";
import CustomCursor from "@/components/CustomCursor";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Peronsal PortFolio Webiste",
  description: "portfolio website using nextjs ",
};

export default function RootLayout({ children, }) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <Menu />
          <CustomCursor />
          {children}
      </body>
    </html>
  );
}
