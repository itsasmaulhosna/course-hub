import "./globals.css";
import Navbar from "@/Components/Navbar/Navbar";
import ThemeProvider from "@/Components/providers/ThemeProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen">
        <ThemeProvider>
          <Navbar isLoggedIn={false} />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}