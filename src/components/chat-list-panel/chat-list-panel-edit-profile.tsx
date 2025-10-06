import { UserPen } from "lucide-react"
import { useState } from "react"

import RegularDialog from "../dialogs/regular-dialog"
import ProfilePicInput from "../others/profile-pic-input"
import { Button } from "../ui/button"
import { DropdownMenuItem } from "../ui/dropdown-menu"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { Textarea } from "../ui/textarea"

function ChatListPanelEditProfile() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <RegularDialog
      content={
        <form className="w-full space-y-6">
          <ProfilePicInput name="picture" />
          <Label className="block space-y-2">
            <span className="block">Full name</span>
            <Input name="fullname" placeholder="ex: admin" required type="text" />
          </Label>
          <Label className="block space-y-2">
            <span className="block">Username</span>
            <Input name="username" placeholder="ex: admin" required type="text" />
          </Label>
          <Label className="block space-y-2">
            <span className="block">Bio</span>
            <Textarea name="bio" placeholder="Your biography here..." required />
          </Label>
          <Button className="w-full" type="submit">
            Save changes
          </Button>
        </form>
      }
      control={{ onOpenChange: setIsOpen, open: isOpen }}
      description="Edit your information below"
      title="Edit profile"
      trigger={
        <DropdownMenuItem onSelect={(e) => e.preventDefault()} variant="default">
          <UserPen />
          <span>Edit profile</span>
        </DropdownMenuItem>
      }
    />
  )
}

export default ChatListPanelEditProfile
