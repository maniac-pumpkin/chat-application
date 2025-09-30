import { createFileRoute, Outlet } from "@tanstack/react-router"

import AppSidebar from "@/components/app-sidebar"

export const Route = createFileRoute("/(base)/_layout")({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="container h-full w-full">
      <AppSidebar />
      <Outlet />
    </div>
  )
}
