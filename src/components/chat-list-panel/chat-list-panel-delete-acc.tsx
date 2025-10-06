import { UserX } from "lucide-react"

import AlertDialog from "../dialogs/alert-dialog"
import { DropdownMenuItem } from "../ui/dropdown-menu"

function ChatListPanelDeleteAcc() {
  return (
    <AlertDialog
      actionFn={alert}
      description="You're about to delete your account. Remember, this action cannot be undone."
      trigger={
        <DropdownMenuItem onSelect={(e) => e.preventDefault()} variant="destructive">
          <UserX />
          <span>Delete account</span>
        </DropdownMenuItem>
      }
    />
  )
}

export default ChatListPanelDeleteAcc
