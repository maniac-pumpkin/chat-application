import { createFileRoute, Outlet } from "@tanstack/react-router"

export const Route = createFileRoute("/(base)/_layout")({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      <p>Sup my children. I'm your daddy.</p>
      <Outlet />
    </div>
  )
}
