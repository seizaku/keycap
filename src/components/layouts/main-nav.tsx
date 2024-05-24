"use client";

import * as React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { MainNavItem, NavItem, NavItemWithChildren } from "@/types";
import { Button } from "@/components/ui/button";
import { BrandLogo } from "@/components/logo";
import { siteConfig } from "@/config/site-config";

interface MainNavProps {
  items: MainNavItem[];
}

export const MainNav = ({ items }: MainNavProps) => {
  return (
    <nav className="hidden sm:flex items-center">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Shop</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <a
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      href={siteConfig.url}
                    >
                      <BrandLogo className="fill-background" />
                      <div className="mb-2 mt-4 text-lg font-medium">
                        {siteConfig.name}
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        {siteConfig.description}
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <ListItem href="/products" title="Products">
                  All the products we have to offer
                </ListItem>
                <ListItem href="/custom" title="Custom Keycap">
                  Have a custom design? We make it for you.
                </ListItem>
                <ListItem href="/blogs" title="Blog">
                  Read our latest blog posts.
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          {items?.map((item, index) => {
            return (
              <NavigationMenuItem key={`menu-item-${index + 1}`}>
                {!item.items ? (
                  <Link href={`${item.href}`} legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      {item.title}
                    </NavigationMenuLink>
                  </Link>
                ) : (
                  <>
                    <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                        {item.items.map((item: MainNavItem, index) => (
                          <ListItem
                            key={index}
                            title={item.title}
                            href={item.href}
                          >
                            {item.description}
                          </ListItem>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </>
                )}
              </NavigationMenuItem>
            );
          })}
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
};

export interface ListItem extends MainNavItem {
  children: React.ReactNode;
}

export const ListItem = ({ title, href, children }: ListItem) => {
  return (
    <li key={title}>
      <NavigationMenuLink asChild>
        <Link
          href={`${href}`}
          className={
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
          }
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
};
