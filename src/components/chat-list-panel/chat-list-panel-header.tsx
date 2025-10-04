import { Ellipsis, UserPen, Users, UserX } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { Button } from "../ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu"
import { Item, ItemActions, ItemContent, ItemDescription, ItemMedia, ItemTitle } from "../ui/item"

function ChatListPanelHeader() {
  return (
    <Item className="border-b-border rounded-none border-b-1">
      <ItemMedia>
        <Avatar className="size-16">
          <AvatarImage src="https://github.com/evilrabbit.png" />
          <AvatarFallback>ER</AvatarFallback>
        </Avatar>
      </ItemMedia>
      <ItemContent>
        <ItemTitle>Evil Rabbit</ItemTitle>
        <ItemDescription>@EvilRabbit</ItemDescription>
      </ItemContent>
      <ItemActions>
        <HeaderDropdownMenu />
      </ItemActions>
    </Item>
  )
}

function HeaderDropdownMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="icon" variant="ghost">
          <Ellipsis />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Profile options</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem variant="default">
          <Users />
          <span>Create a group</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem variant="default">
          <UserPen />
          <span>Edit profile</span>
        </DropdownMenuItem>
        <DropdownMenuItem variant="destructive">
          <UserX />
          <span>Delete account</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default ChatListPanelHeader
