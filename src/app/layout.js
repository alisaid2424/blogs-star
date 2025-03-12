import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Blogs star",
  description:
    "blogs-star is a modern web application built using Next.js, designed to allow users to browse and interact with blogs while also displaying user data fetched from the JSONPlaceholder API. This platform combines a blogging interface with dynamic user profiles, integrating a user-friendly design with search engine optimization (SEO) features.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="min-h-[calc(100vh-96px)]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
