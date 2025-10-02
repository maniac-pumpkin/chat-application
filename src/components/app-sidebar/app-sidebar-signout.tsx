import AlertDialog from "../dialogs/alert-dialog"
import { AppSidebarItem } from "./app-sidebar-item"

function AppSidebarSignOut() {
  return (
    <AlertDialog
      actionFn={alert}
      description="You will be signed out of this account."
      trigger={<AppSidebarItem icon="LogOut" />}
    />
  )
}

export default AppSidebarSignOut
