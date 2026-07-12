import Footer from "@/Components/Footer/Footer";
import Navbar from "@/Components/Navbar/Navbar";
import ThemeProvider from "@/Components/providers/ThemeProvider";
import { Toaster } from "sonner";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider>
      <Navbar />
      <main>{children}</main>
      <Footer />
      <Toaster richColors position="top-right" />
    </ThemeProvider>
  );
}