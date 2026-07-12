import MobileSidebar from "@/Components/Dashboard/MobileSidebar";
import Sidebar from "@/Components/Dashboard/Sidebar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="min-h-screen bg-slate-100 dark:bg-slate-950">

      <MobileSidebar />

      <div className="mx-auto flex max-w-7xl">

        <Sidebar />

        <main className="flex-1 p-4 lg:p-8">
          {children}
        </main>

      </div>

    </section>
  );
}