import { createFileRoute } from "@tanstack/react-router"
import { type FormEvent } from "react"

import ClientAuthForm from "@/components/others/client-auth-form"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export const Route = createFileRoute("/(auth)/signup/")({
  component: RouteComponent,
})

function RouteComponent() {
  const navigate = Route.useNavigate()

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    const data = new FormData(e.currentTarget)
    const payload = {
      fullname: String(data.get("fullname") || ""),
      password: String(data.get("password") || ""),
      repass: String(data.get("repass") || ""),
    }

    console.log(payload)

    navigate({ to: "/signup/profile" })
  }

  return (
    <ClientAuthForm
      footer={{ linkHref: "/signin", linkText: "Sign in", text: "Already have an account?" }}
      header={{
        description: "Enter your full name and choose a password below to create an account",
        title: "Create your account",
      }}
      submitBtnText="Next step"
      submitFn={handleSubmit}
    >
      <Label className="block space-y-2">
        <span className="block">Full name</span>
        <Input name="fullname" placeholder="ex: admin" required type="text" />
      </Label>
      <Label className="block space-y-2">
        <span className="block">Password</span>
        <Input name="password" placeholder="ex: 12345" required type="password" />
      </Label>
      <Label className="block space-y-2">
        <span className="block">Confirm password</span>
        <Input name="repass" placeholder="ex: 12345" required type="password" />
      </Label>
    </ClientAuthForm>
  )
}
