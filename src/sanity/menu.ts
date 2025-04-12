// src/sanity/menu.ts

// Base properties shared by all menu items
export type MenuItemBase = {
  id: number;
  title: string;
  newTab: boolean;
};

// Menu items that are simple links (no submenu)
export type MenuItemWithPath = MenuItemBase & {
  path: string; // Path is required
  submenu?: never; // No submenu allowed
};

// Menu items that contain a submenu (no direct path)
export type MenuItemWithSubmenu = MenuItemBase & {
  path?: never; // No path allowed
  submenu: MenuItemWithPath[]; // Submenu contains MenuItemWithPath items
};

// Union type representing either a link or a submenu
export type MenuItem = MenuItemWithPath | MenuItemWithSubmenu;

// Type Guard Function
export function isMenuItemWithPath(item: MenuItem): item is MenuItemWithPath {
  return (item as MenuItemWithPath).path !== undefined;
}
