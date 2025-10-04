import { useNavigate } from "@tanstack/react-router"
import { StickyNote } from "lucide-react"

import { Alert, AlertDescription, AlertTitle } from "../ui/alert"
import { Button } from "../ui/button"
import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from "../ui/empty"

function GlobalNotFoundComponent() {
  const navigate = useNavigate()

  return (
    <Empty className="flex h-screen items-center justify-center">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <StickyNote />
        </EmptyMedia>
      </EmptyHeader>
      <EmptyTitle>404 - Page not found</EmptyTitle>
      <EmptyDescription>
        <Alert variant="default">
          <AlertTitle>What you can do:</AlertTitle>
          <AlertDescription className="max-w-96">
            Check the URL for any typos, go back to the home page, or use the search feature to find what you're looking
            for.
          </AlertDescription>
        </Alert>
      </EmptyDescription>
      <EmptyContent>
        <Button onClick={() => navigate({ to: "/" })}>Go back to home</Button>
      </EmptyContent>
    </Empty>
  )
}

export default GlobalNotFoundComponent
