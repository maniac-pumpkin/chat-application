import { Link } from "@tanstack/react-router"
import { LoaderCircle } from "lucide-react"
import { type FormEvent, type PropsWithChildren, useState } from "react"

import { Button } from "../ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card"

type PropsType = PropsWithChildren & {
  footer: { linkHref: string; linkText: string; text: string }
  header: { description: string; title: string }
  submitBtnText: string
  submitFn: (e: FormEvent<HTMLFormElement>) => Promise<void>
}

function ClientAuthForm({ children, footer, header, submitBtnText, submitFn }: PropsType) {
  const [pending, setPending] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setPending(true)
    await submitFn(e)
    setPending(false)
  }

  return (
    <form onSubmit={handleSubmit}>
      <Card className="w-full sm:w-96">
        <CardHeader>
          <CardTitle>{header.title}</CardTitle>
          <CardDescription>{header.description}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {children}
          <Button className="w-full" disabled={pending} type="submit">
            <span>{submitBtnText}</span>
            {pending && <LoaderCircle className="animate-spin" />}
          </Button>
        </CardContent>
        <CardFooter className="text-sm font-normal">
          <span>{footer.text}</span>
          <Link to={footer.linkHref}>
            <Button variant="link">{footer.linkText}</Button>
          </Link>
        </CardFooter>
      </Card>
    </form>
  )
}

export default ClientAuthForm
