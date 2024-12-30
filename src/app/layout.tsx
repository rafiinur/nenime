import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Topbar from "@/components/Topbar";
import Sidebar from "@/components/Sidebar";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Nenime",
  description: "Website to explore the world of anime",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} antialiased font-montserrat text-base-content`}
      >
        <Topbar />
        <div className="flex">
          <Sidebar />
          <div className="min-h-screen w-full bg-base-200">{children}</div>
        </div>
      </body>
    </html>
  );
}
