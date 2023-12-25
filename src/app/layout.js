import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/Nav/NavBar";
import Background from "@/components/Background";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ben's Portfolio",
  description: "A portfolio of a great software developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} dark`}>
        <Background>
          <NavBar>{children}</NavBar>
        </Background>
      </body>
    </html>
  );
}
