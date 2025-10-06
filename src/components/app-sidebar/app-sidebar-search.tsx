import { Contact, MessageCircle, Users } from "lucide-react"

import RegularDialog from "@/components/dialogs/regular-dialog"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import CommonPlaceholder from "../placeholders/common-placeholder"
import { AppSidebarItem } from "./app-sidebar-item"

function AppSidebarSearch() {
  return (
    <RegularDialog
      content={
        <form className="w-full space-y-5">
          <Input className="w-full" placeholder="Search for something..." type="search" />
          <Tabs defaultValue="people">
            <TabsList className="w-full">
              <TabsTrigger value="people">People</TabsTrigger>
              <TabsTrigger value="chats">Chats</TabsTrigger>
              <TabsTrigger value="groups">Groups</TabsTrigger>
            </TabsList>
            <TabsContent value="people">
              <CommonPlaceholder description="Find more people" icon={<Contact />} title="People" />
            </TabsContent>
            <TabsContent value="chats">
              <CommonPlaceholder description="Find conversations" icon={<MessageCircle />} title="Chats" />
            </TabsContent>
            <TabsContent value="groups">
              <CommonPlaceholder description="Find group chats" icon={<Users />} title="Groups" />
            </TabsContent>
          </Tabs>
        </form>
      }
      description="Search for people, chats, or groups."
      title="Search"
      trigger={<AppSidebarItem icon="Search" />}
    />
  )
}

export default AppSidebarSearch
