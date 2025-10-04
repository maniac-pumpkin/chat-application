import type { ComponentPropsWithoutRef } from "react"

import { Link, useLocation } from "@tanstack/react-router"
import { icons } from "lucide-react"

import { cn } from "@/lib/utils"

type IconType = { icon: keyof typeof icons }

type ItemPropsType = ComponentPropsWithoutRef<"li"> & IconType

type LinkItemPropsType = IconType & { path: string }

export function AppSidebarItem({ icon, ...props }: ItemPropsType) {
  const IconComponent = icons[icon]

  return (
    <li
      className="hover:bg-sidebar-accent border-border flex size-16 cursor-pointer items-center justify-center rounded-sm hover:border-1"
      {...props}
    >
      <IconComponent className="text-sidebar-foreground" />
    </li>
  )
}

export function AppSidebarLinkItem({ icon, path }: LinkItemPropsType) {
  const currentPath = useLocation()

  const IconComponent = icons[icon]

  return (
    <Link to={path}>
      <li
        className={cn(
          "hover:bg-sidebar-accent border-border flex size-16 cursor-pointer items-center justify-center rounded-sm hover:border-1",
          path === currentPath.pathname && "bg-sidebar-accent border-border border-1",
        )}
      >
        <IconComponent className="text-sidebar-foreground" />
      </li>
    </Link>
  )
}
