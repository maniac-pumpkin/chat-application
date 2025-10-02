import RegularDialog from "@/components/dialogs/regular-dialog"
import { Input } from "@/components/ui/input"

import { AppSidebarItem } from "../app-sidebar-item"

function AppSidebarSearch() {
  return (
    <RegularDialog
      content={
        <form className="w-full space-y-5">
          <Input className="w-full" placeholder="Search for something..." type="search" />
        </form>
      }
      description="Search for people, groups, or calls."
      title="Search"
      trigger={<AppSidebarItem icon="Search" />}
    />
  )
}

export default AppSidebarSearch
