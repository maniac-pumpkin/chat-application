import { Separator } from "../ui/separator"
import { AppSidebarLinkItem } from "./app-sidebar-item"

function AppSidebar() {
  return (
    <ul className="bg-sidebar flex h-full w-24 flex-col items-center gap-y-1 pt-6">
      <AppSidebarLinkItem icon="MessageCircle" path="/" />
      <AppSidebarLinkItem icon="Users" path="/groups" />
      <AppSidebarLinkItem icon="PhoneCall" path="/calls" />
      <Separator className="my-6" />

      {/* <li className="hover:bg-sidebar-accent flex size-16 cursor-pointer items-center justify-center rounded-sm transition-all">
        <Search className="text-sidebar-foreground" />
      </li>
      <li className="hover:bg-sidebar-accent flex size-16 cursor-pointer items-center justify-center rounded-sm transition-all">
        <Moon className="text-sidebar-foreground" />
      </li>
      <div className="mt-auto flex h-24 w-full flex-col items-center justify-center">
        <li className="hover:bg-sidebar-accent flex size-16 cursor-pointer items-center justify-center rounded-sm transition-all">
          <LogOut className="text-sidebar-foreground" />
        </li>
      </div>  */}
    </ul>
  )
}

export default AppSidebar
