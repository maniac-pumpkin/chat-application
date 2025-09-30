import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(base)/_layout/groups')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/(base)/_layout/groups"!</div>
}
