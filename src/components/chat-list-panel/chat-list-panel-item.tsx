import { Pin, Trash2, UserLock } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
  ContextMenuSeparator,
} from "../ui/context-menu"
import { Item, ItemContent, ItemDescription, ItemMedia, ItemTitle } from "../ui/item"

function ChatListPanelItem() {
  return (
    <ContextMenu>
      <ContextMenuTrigger asChild>
        <Item className="hover:bg-accent cursor-pointer" role="listitem">
          <ItemMedia>
            <Avatar className="size-16">
              <AvatarImage src="https://github.com/evilrabbit.png" />
              <AvatarFallback>ER</AvatarFallback>
            </Avatar>
          </ItemMedia>
          <ItemContent>
            <ItemTitle className="line-clamp-1">Neon Dreams</ItemTitle>
            <ItemDescription>Midnight City Lights</ItemDescription>
          </ItemContent>
          <ItemContent className="flex-none text-center">
            <ItemDescription>3:45</ItemDescription>
          </ItemContent>
        </Item>
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem variant="default">
          <Pin />
          <span>Pin</span>
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem variant="destructive">
          <Trash2 />
          <span>Delete</span>
        </ContextMenuItem>
        <ContextMenuItem variant="destructive">
          <UserLock />
          <span>Block</span>
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  )
}

export default ChatListPanelItem
