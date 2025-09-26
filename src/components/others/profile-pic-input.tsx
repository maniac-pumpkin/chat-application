import { Camera, Pencil } from "lucide-react"
import { type ChangeEvent, useRef, useState } from "react"

import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { Input } from "../ui/input"

function ProfilePicInput({ name }: { name: string }) {
  const [preview, setPreview] = useState<string | undefined>(undefined)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    const previewUrl = URL.createObjectURL(file)

    setPreview(previewUrl)
  }

  const handleClick = () => fileInputRef.current?.click()

  return (
    <div className="flex justify-center">
      <div className="relative cursor-pointer" onClick={handleClick}>
        <Avatar className="border-border size-32 border-4">
          <AvatarImage src={preview} />
          <AvatarFallback>
            <Camera size={32} />
          </AvatarFallback>
        </Avatar>
        <div className="bg-secondary border-border absolute right-0 bottom-0 rounded-full border-2 p-2">
          <Pencil size={16} />
        </div>
      </div>
      <Input
        accept="image/*"
        aria-label="Upload avatar image"
        className="hidden"
        name={name}
        onChange={handleFileChange}
        ref={fileInputRef}
        type="file"
      />
    </div>
  )
}

export default ProfilePicInput
