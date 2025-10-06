import { createFileRoute } from "@tanstack/react-router"
import { MessageCircle } from "lucide-react"

import CommonPlaceholder from "@/components/placeholders/common-placeholder"

export const Route = createFileRoute("/(base)/_layout/")({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <CommonPlaceholder
        description="Select a conversation to start messaging."
        icon={<MessageCircle />}
        title="Welcome to chat"
      />
    </>
  )
}
