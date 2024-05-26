import { siteConfig } from "@/config/site-config";
import { MobileNav } from "@/components/layouts/mobile-nav";
import { MainNav } from "@/components/layouts/main-nav";
import { Button, buttonVariants } from "@/components/ui/button";
import { BrandLogo } from "@/components/logo";
import { Search } from "lucide-react";
import { UserCart } from "@/components/layouts/user-cart";
import Link from "next/link";

export const SiteHeader = () => {
  const user = false;

  return (
    <header className="sticky z-20 top-0 w-full h-16 border-b bg-background flex items-center">
      <div className="pr-4 sm:container flex items-center justify-between w-full">
        <div className="flex items-center gap-6">
          <MobileNav items={siteConfig.mainNav} />
          <BrandLogo className="h-8 hidden sm:block w-fit fill-background" />
          <MainNav items={siteConfig.mainNav} />
        </div>
        <div className="flex items-center gap-2">
          <Button variant={"outline"} size={"icon"}>
            <Search className="h-4 w-4" />
          </Button>
          <UserCart />
          {!user && (
            <Link href={"/signin"} className={buttonVariants({ size: "sm" })}>
              Sign In
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};
