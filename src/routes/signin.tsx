import { createFileRoute, Link } from "@tanstack/react-router"
import { LoaderCircle } from "lucide-react"
import { type FormEvent, useState } from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export const Route = createFileRoute("/signin")({
  component: RouteComponent,
})

function RouteComponent() {
  const [pending, setPending] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setPending(true)

    const data = new FormData(e.currentTarget)
    const payload = {
      password: String(data.get("password") || ""),
      username: String(data.get("username") || ""),
    }

    console.log(payload)

    setPending(false)
  }

  return (
    <form onSubmit={handleSubmit}>
      <Card className="w-96">
        <CardHeader>
          <CardTitle>Sign into your account</CardTitle>
          <CardDescription>Enter your username and password below to sign into your account</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <Label className="block space-y-2">
            <span className="block">Username</span>
            <Input name="username" placeholder="ex: admin" required type="text" />
          </Label>
          <Label className="block space-y-2">
            <span className="block">Password</span>
            <Input name="password" placeholder="ex: 12345" required type="password" />
          </Label>
          <Button className="w-full" disabled={pending} type="submit">
            <span>Signin</span>
            {pending && <LoaderCircle className="animate-spin" />}
          </Button>
        </CardContent>
        <CardFooter className="text-sm font-normal">
          <span>Don't have an account?</span>
          <Link to="/signup">
            <Button variant="link">Sign up</Button>
          </Link>
        </CardFooter>
      </Card>
    </form>
  )
}
