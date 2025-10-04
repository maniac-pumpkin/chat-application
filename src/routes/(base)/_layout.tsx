import { createFileRoute, Outlet } from "@tanstack/react-router"

import AppSidebar from "@/components/app-sidebar"
import ChatListPanel from "@/components/chat-list-panel"

export const Route = createFileRoute("/(base)/_layout")({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="container flex h-full">
      <AppSidebar />
      <ChatListPanel />
      <div className="flex grow items-center justify-center">
        <Outlet />
      </div>
    </div>
  )
}
