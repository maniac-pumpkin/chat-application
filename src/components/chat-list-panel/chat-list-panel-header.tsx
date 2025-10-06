import { Ellipsis } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { Button } from "../ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu"
import { Item, ItemActions, ItemContent, ItemDescription, ItemMedia, ItemTitle } from "../ui/item"
import ChatListPanelCreateGroup from "./chat-list-panel-create-group"
import ChatListPanelDeleteAcc from "./chat-list-panel-delete-acc"
import ChatListPanelEditProfile from "./chat-list-panel-edit-profile"

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
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button size="icon" variant="ghost">
              <Ellipsis />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Profile options</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <ChatListPanelCreateGroup />
            <DropdownMenuSeparator />
            <ChatListPanelEditProfile />
            <ChatListPanelDeleteAcc />
          </DropdownMenuContent>
        </DropdownMenu>
      </ItemActions>
    </Item>
  )
}

export default ChatListPanelHeader
