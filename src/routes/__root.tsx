import { createRootRoute, type ErrorComponentProps, Outlet } from "@tanstack/react-router"

import { ThemeProvider } from "@/components/theme-provider"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"

export const Route = createRootRoute({
  component: RootComponent,
  errorComponent: ErrorComponent,
})

function ErrorComponent({ error, reset }: ErrorComponentProps) {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <section className="gap flex h-screen flex-col items-center justify-center gap-y-5">
        <h1 className="text-2xl">Something went wrong!</h1>
        <Alert className="flex max-w-96 flex-col items-center">
          <AlertTitle>{error.name}</AlertTitle>
          <AlertDescription>{error.message}</AlertDescription>
        </Alert>
        <Button onClick={reset}>Try again</Button>
      </section>
    </ThemeProvider>
  )
}

function RootComponent() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Outlet />
    </ThemeProvider>
  )
}
