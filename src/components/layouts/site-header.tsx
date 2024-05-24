import { siteConfig } from "@/config/site-config";
import { MobileNav } from "@/components/layouts/mobile-nav";
import { MainNav } from "@/components/layouts/main-nav";
import { Button } from "@/components/ui/button";
import { BrandLogo } from "@/components/logo";
import { BiSearch, BiCart } from "react-icons/bi";

export const SiteHeader = () => {
  const user = false;

  return (
    <header className="sticky z-20 top-0 w-full h-16 border-b bg-background flex items-center">
      <div className="pr-4 sm:container flex items-center justify-between w-full">
        <div className="flex items-center gap-6">
          <MobileNav items={siteConfig.mainNav} />
          <BrandLogo className="h-8 hidden sm:block w-fit" />
          <MainNav items={siteConfig.mainNav} />
        </div>
        <div className="flex items-center gap-2">
          <Button variant={"outline"} size={"icon"}>
            <BiSearch className="h-5 w-5" />
          </Button>
          <Button variant={"outline"} size={"icon"}>
            <BiCart className="h-5 w-5" />
          </Button>
          <Button size={"sm"}>Sign In</Button>
        </div>
      </div>
    </header>
  );
};
