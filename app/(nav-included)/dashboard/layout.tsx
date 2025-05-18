import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

export default function DashboardRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <div className="flex  h-dvh w-screen overflow-hidden">
        <AppSidebar />
        <main className="flex flex-col md:flex-row overflow-auto">
          <SidebarTrigger className="top-0 -left-2 text-primary-btn" />
          <div>{children}</div>
        </main>
      </div>
    </SidebarProvider>
  );
}
