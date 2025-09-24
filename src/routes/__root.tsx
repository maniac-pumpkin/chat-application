import { createRootRoute, type ErrorComponentProps, Outlet } from "@tanstack/react-router"

import { ThemeProvider } from "@/components/others/theme-provider"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"

export const Route = createRootRoute({
  component: RootComponent,
  errorComponent: ErrorComponent,
  notFoundComponent: NotFoundComponent,
  pendingComponent: PendingComponent,
})

function ErrorComponent({ error, reset }: ErrorComponentProps) {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <section className="flex h-screen flex-col items-center justify-center gap-y-5">
        <h1 className="text-2xl">Something went wrong!</h1>
        <Alert className="flex max-w-96 flex-col items-center" variant="destructive">
          <AlertTitle>{error.name}</AlertTitle>
          <AlertDescription>{error.message}</AlertDescription>
        </Alert>
        <Button onClick={reset}>Try again</Button>
      </section>
    </ThemeProvider>
  )
}

function NotFoundComponent() {
  const navigate = Route.useNavigate()

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <section className="flex h-screen flex-col items-center justify-center gap-y-5">
        <h1 className="text-2xl">404 - Page not found.</h1>
        <Alert className="max-w-96">
          <AlertTitle>What you can do:</AlertTitle>
          <AlertDescription>
            Check the URL for any typos, go back to the home page, or use the search feature to find what you're looking
            for.
          </AlertDescription>
        </Alert>
        <Button onClick={() => navigate({ to: "/" })}>Go back to home</Button>
      </section>
    </ThemeProvider>
  )
}

function PendingComponent() {
  return <p>Loading</p>
}

function RootComponent() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Outlet />
    </ThemeProvider>
  )
}
