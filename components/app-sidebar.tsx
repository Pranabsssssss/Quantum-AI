import * as React from "react"
import Link from "next/link"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import { ThreadList } from "./assistant-ui/thread-list"

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props} className="bg-black/50">
      <SidebarHeader className="border-0 p-3">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
                <Link href="/" className="hover:opacity-80 transition-opacity">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-black text-red-600">
  <span className="text-sm font-semibold">Q</span>
</div>

                  <div className="flex flex-col gap-0.5 leading-none">
                    <span className="font-semibold text-sm">Quantum AI</span>
                    <span className="text-xs text-muted-foreground">by Team Quantum</span>
                  </div>
                </Link>
              </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent className="px-2">
        <ThreadList />
      </SidebarContent>
      
      <SidebarRail />
    </Sidebar>
  )
}
