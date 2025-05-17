import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex gap-12 h-screen w-screen overflow-hidden">
        <SidebarProvider>
          <AppSidebar />
          <main className="flex justify-start  gap-12  overflow-auto">
            <SidebarTrigger className=" top-0 -left-2 text-orange-500" />
            {children}
          </main>
        </SidebarProvider>
      </body>
    </html>
  );
}
