import { createFileRoute } from "@tanstack/react-router"
import { PhoneCall } from "lucide-react"

import CommonPlaceholder from "@/components/placeholders/common-placeholder"

export const Route = createFileRoute("/(base)/_layout/calls")({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <CommonPlaceholder
        description="Click on a call history to make calls."
        icon={<PhoneCall />}
        title="Welcome to calls"
      />
    </>
  )
}
