import "./global.css";
import { RootProvider } from "fumadocs-ui/provider";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";

const inter = Inter({
  subsets: ["latin"],
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <head>
        <title>0.email</title>
        <link
          rel="icon"
          href="https://0.email/white-icon.svg"
          type="image/svg+xml"
        />
        <link
          rel="shortcut icon"
          href="https://0.email/white-icon.svg"
          type="image/svg+xml"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="0.email docs & content" />
      </head>
      <body className="flex flex-col min-h-screen">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
