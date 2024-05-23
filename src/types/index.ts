




export interface NavItem {
  title: string,
  href?: string,
  active?: boolean,
  disabled?: boolean,
  label?: string,
  description?: string,
}


export interface NavItemWithChildren extends NavItem {
  items?: NavItemWithChildren[]
}

export type MainNavItem = NavItemWithChildren
export type SidebarNavItem = NavItemWithChildren
