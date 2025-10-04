import { createRootRoute, Outlet } from "@tanstack/react-router"

import GlobalErrorComponent from "@/components/placeholders/global-error"
import GlobalNotFoundComponent from "@/components/placeholders/global-not-found"
import GlobalPendingComponent from "@/components/placeholders/global-pending"

export const Route = createRootRoute({
  component: RootComponent,
  errorComponent: GlobalErrorComponent,
  notFoundComponent: GlobalNotFoundComponent,
  pendingComponent: GlobalPendingComponent,
})

function RootComponent() {
  return (
    <div className="flex h-screen items-center justify-center">
      <Outlet />
    </div>
  )
}
