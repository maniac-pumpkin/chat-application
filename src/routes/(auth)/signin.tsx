import { createFileRoute } from "@tanstack/react-router"
import { type FormEvent } from "react"

import ClientAuthForm from "@/components/others/client-auth-form"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export const Route = createFileRoute("/(auth)/signin")({
  component: RouteComponent,
})

function RouteComponent() {
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    const data = new FormData(e.currentTarget)
    const payload = {
      password: String(data.get("password") || ""),
      username: String(data.get("username") || ""),
    }

    console.log(payload)
  }

  return (
    <ClientAuthForm
      footer={{ linkHref: "/signup", linkText: "Sign up", text: "Don't have an account?" }}
      header={{
        description: "Enter your username and password below to sign into your account",
        title: "Sign into your account",
      }}
      submitBtnText="Sign in"
      submitFn={handleSubmit}
    >
      <Label className="block space-y-2">
        <span className="block">Username</span>
        <Input name="username" placeholder="ex: admin" required type="text" />
      </Label>
      <Label className="block space-y-2">
        <span className="block">Password</span>
        <Input name="password" placeholder="ex: 12345" required type="password" />
      </Label>
    </ClientAuthForm>
  )
}
