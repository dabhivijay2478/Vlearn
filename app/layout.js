
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "V learn",
  description: "Created by Vlearn",
  icons: {
    icon: '../public/favicon.ico'
  }
};
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          {/* <Footer /> */}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
