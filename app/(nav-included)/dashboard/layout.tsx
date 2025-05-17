import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

export default function DashboardRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <div className="flex gap-12 h-screen w-screen overflow-hidden">
        <AppSidebar />
        <main className="flex justify-start gap-12 overflow-auto">
          <SidebarTrigger className="top-0 -left-2 text-orange-500" />
          {children}
        </main>
      </div>
    </SidebarProvider>
  );
}
