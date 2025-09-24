import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/(base)/_layout/")({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/"!</div>
}
