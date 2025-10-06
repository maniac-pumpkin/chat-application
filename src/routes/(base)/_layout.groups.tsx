import { createFileRoute } from "@tanstack/react-router"
import { Users } from "lucide-react"

import CommonPlaceholder from "@/components/placeholders/common-placeholder"

export const Route = createFileRoute("/(base)/_layout/groups")({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <CommonPlaceholder
        description="Select a conversation to start group chatting."
        icon={<Users />}
        title="Welcome to group chat"
      />
    </>
  )
}
