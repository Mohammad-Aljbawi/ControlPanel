import { navItems } from "./navigation"

export function getPageConfig(pathname: string) {
  return navItems.find((item) => item.href === pathname)
}