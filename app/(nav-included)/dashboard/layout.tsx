import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

export default function DashboardRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <div className="flex  h-dvh w-full border-2 overflow-hidden">
        <AppSidebar />
        <main className="flex flex-col gap-6 w-full overflow-auto">
          <SidebarTrigger className="top-0 -left-2 text-primary-btn" />
          <div className="px-4 md:mx-12">{children}</div>
        </main>
      </div>
    </SidebarProvider>
  );
}
