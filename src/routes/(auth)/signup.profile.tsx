import { createFileRoute } from "@tanstack/react-router"
import { type FormEvent } from "react"

import ClientAuthForm from "@/components/others/client-auth-form"
import ProfilePicInput from "@/components/others/profile-pic-input"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { fileToBase64 } from "@/lib/utils"

export const Route = createFileRoute("/(auth)/signup/profile")({
  component: RouteComponent,
})

function RouteComponent() {
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    const data = new FormData(e.currentTarget)
    const payload = {
      fullname: String(data.get("username") || ""),
      password: String(data.get("bio") || ""),
      profilePic: data.get("picture") as File | null,
    }

    console.log(payload)

    if (payload.profilePic) {
      const base64Img = await fileToBase64(payload.profilePic)
      console.log(base64Img)
    }
  }

  return (
    <ClientAuthForm
      footer={{ linkHref: "/signup", linkText: "Sign up page", text: "Go back to" }}
      header={{ description: "Tell us more about yourself", title: "Complete your profile" }}
      submitBtnText="Sign up"
      submitFn={handleSubmit}
    >
      <ProfilePicInput name="picture" />
      <Label className="block space-y-2">
        <span className="block">Username</span>
        <Input name="username" placeholder="ex: admin" required type="text" />
      </Label>
      <Label className="block space-y-2">
        <span className="block">Bio</span>
        <Textarea name="bio" placeholder="Your biography here..." required />
      </Label>
    </ClientAuthForm>
  )
}
