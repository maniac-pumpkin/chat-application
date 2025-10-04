import { Separator } from "../ui/separator"
import { AppSidebarLinkItem } from "./app-sidebar-item"
import AppSidebarSearch from "./app-sidebar-search"
import AppSidebarSignOut from "./app-sidebar-signout"
import AppSidebarThemeToggle from "./app-sidebar-theme"

function AppSidebar() {
  return (
    <ul className="bg-sidebar flex h-full w-24 flex-col items-center gap-y-1 pt-6">
      <AppSidebarLinkItem icon="MessageCircle" path="/" />
      <AppSidebarLinkItem icon="Users" path="/groups" />
      <AppSidebarLinkItem icon="PhoneCall" path="/calls" />
      <Separator className="my-6" />
      <AppSidebarSearch />
      <AppSidebarThemeToggle />
      <div className="mt-auto flex w-full flex-col items-center justify-center pb-4">
        <Separator className="mb-4" />
        <AppSidebarSignOut />
      </div>
    </ul>
  )
}

export default AppSidebar
