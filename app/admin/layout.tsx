import { SidebarProvider, SidebarTrigger, SidebarInset } from "@/components/ui/sidebar";
import { AppSidebar } from "./components/app-sidebar";
import { Separator } from "@/components/ui/separator";
import { Toaster } from "sonner";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-14 items-center gap-2 border-b px-4">
          <SidebarTrigger />
          <Separator orientation="vertical" className="h-4" />
          <span className="text-sm font-medium text-muted-foreground">
            Panel Admin
          </span>
        </header>
        <main className="flex-1 p-4 md:p-6">
          {children}
          <Toaster richColors position="top-right" />
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}