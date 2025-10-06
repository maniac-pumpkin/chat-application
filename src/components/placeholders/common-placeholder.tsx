import type { ReactNode } from "react"

import { Empty, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from "../ui/empty"

type PropsType = {
  description: string
  icon: ReactNode
  title: string
}

function CommonPlaceholder({ description, icon, title }: PropsType) {
  return (
    <Empty>
      <EmptyHeader>
        <EmptyMedia variant="icon">{icon}</EmptyMedia>
      </EmptyHeader>
      <EmptyTitle>{title}</EmptyTitle>
      <EmptyDescription>{description}</EmptyDescription>
    </Empty>
  )
}

export default CommonPlaceholder
