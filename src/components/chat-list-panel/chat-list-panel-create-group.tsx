import { Users } from "lucide-react"

import { DropdownMenuItem } from "../ui/dropdown-menu"

function ChatListPanelCreateGroup() {
  return (
    <DropdownMenuItem variant="default">
      <Users />
      <span>Create a group</span>
    </DropdownMenuItem>
  )
}

export default ChatListPanelCreateGroup
