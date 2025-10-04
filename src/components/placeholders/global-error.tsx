import type { ErrorComponentProps } from "@tanstack/react-router"

import { Bug } from "lucide-react"

import { Alert, AlertDescription, AlertTitle } from "../ui/alert"
import { Button } from "../ui/button"
import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from "../ui/empty"

const reload = () => location.reload()

function GlobalErrorComponent({ error, reset }: ErrorComponentProps) {
  return (
    <Empty className="flex h-screen items-center justify-center">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <Bug />
        </EmptyMedia>
      </EmptyHeader>
      <EmptyTitle>Something went wrong!</EmptyTitle>
      <EmptyDescription>
        <Alert variant="destructive">
          <AlertTitle>{error.name}</AlertTitle>
          <AlertDescription className="max-w-96">{error.message}</AlertDescription>
        </Alert>
      </EmptyDescription>
      <EmptyContent className="flex-row">
        <Button className="grow" onClick={reload} variant="outline">
          Restart app
        </Button>
        <Button className="grow" onClick={reset} variant="default">
          Try again
        </Button>
      </EmptyContent>
    </Empty>
  )
}

export default GlobalErrorComponent
