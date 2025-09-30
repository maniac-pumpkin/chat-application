import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/(base)/_layout/calls")({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/(base)/_layout/calls"!</div>
}
