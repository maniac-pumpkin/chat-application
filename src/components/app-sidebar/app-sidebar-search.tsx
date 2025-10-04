import RegularDialog from "@/components/dialogs/regular-dialog"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { AppSidebarItem } from "./app-sidebar-item"

function AppSidebarSearch() {
  return (
    <RegularDialog
      content={
        <form className="w-full space-y-5">
          <Input className="w-full" placeholder="Search for something..." type="search" />
          <Tabs defaultValue="people">
            <TabsList className="w-full">
              <TabsTrigger value="people">Account</TabsTrigger>
              <TabsTrigger value="chats">Chats</TabsTrigger>
              <TabsTrigger value="groups">Groups</TabsTrigger>
            </TabsList>
            <TabsContent value="people">Account.</TabsContent>
            <TabsContent value="chats">Chats.</TabsContent>
            <TabsContent value="groups">Groups.</TabsContent>
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
