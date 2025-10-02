import { useTheme } from "../others/theme-provider"
import { AppSidebarItem } from "./app-sidebar-item"

function AppSidebarThemeToggle() {
  const { setTheme, theme } = useTheme()

  const switchTheme = () => (theme === "dark" ? setTheme("light") : setTheme("dark"))

  return <AppSidebarItem icon={theme === "dark" ? "Sun" : "Moon"} onClick={switchTheme} />
}

export default AppSidebarThemeToggle
