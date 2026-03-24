import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Likhil Chandra — DevOps Engineer",
  description: "DevOps & Full Stack Portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
      </head>
      <body className="min-h-full text-white bg-[#020204] overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}