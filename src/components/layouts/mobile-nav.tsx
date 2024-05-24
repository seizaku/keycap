"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { MenuIcon } from "lucide-react";
import { BrandLogo } from "@/components/logo";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BiMenuAltRight } from "react-icons/bi";

import { SidebarNavItem } from "@/types";
import Link from "next/link";

interface SideNavProps {
  items: SidebarNavItem[];
}

export const MobileNav = ({ items }: SideNavProps) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="block sm:hidden" variant={"link"}>
          <BiMenuAltRight className="h-7 w-7 rotate-180" />
        </Button>
      </SheetTrigger>
      <SheetContent side={"left"} className="text-sm">
        <SheetHeader>
          <SheetTitle>
            <BrandLogo className="h-8 w-fit fill-background" />
          </SheetTitle>
        </SheetHeader>
        <Accordion type="single" collapsible className="w-full mt-4">
          <AccordionItem value={`item-0`}>
            <AccordionTrigger>Shop</AccordionTrigger>
            <AccordionContent>
              <ul>
                <li className="py-1.5">
                  <Link
                    className="pl-2 text-muted-foreground hover:text-foreground"
                    href={`/`}
                  >
                    Home
                  </Link>
                </li>
                <li className="py-1.5">
                  <Link
                    className="pl-2 text-muted-foreground hover:text-foreground"
                    href={`/products`}
                  >
                    Products
                  </Link>
                </li>
                <li className="py-1.5">
                  <Link
                    className="pl-2 text-muted-foreground hover:text-foreground"
                    href={`/custom`}
                  >
                    Custom Keycap
                  </Link>
                </li>
                <li className="py-1.5">
                  <Link
                    className="pl-2 text-muted-foreground hover:text-foreground"
                    href={`/blog`}
                  >
                    Blog
                  </Link>
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          {items?.map((item, index) => {
            if (!item.items) {
              return (
                <AccordionItem
                  key={`item-${index + 1}`}
                  value={`item-${index + 1}`}
                  className="py-4"
                >
                  <Link
                    className="hover:underline font-medium"
                    href={`${item.href}`}
                  >
                    {item.title}
                  </Link>
                </AccordionItem>
              );
            }
            return (
              <AccordionItem
                key={`item-${index + 1}`}
                value={`item-${index + 1}`}
              >
                <AccordionTrigger>{item.title}</AccordionTrigger>
                <AccordionContent>
                  <ul>
                    {item.items.map((item, index) => {
                      return (
                        <li key={index} className="py-1.5">
                          <Link
                            className="pl-2 text-muted-foreground hover:text-foreground"
                            href={`${item.href}`}
                          >
                            {item.title}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </SheetContent>
    </Sheet>
  );
};
