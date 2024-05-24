import { BrandLogo } from "@/components/logo";
import { siteConfig } from "@/config/site-config";
import { Input } from "@/components/ui/input";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { SendHorizonalIcon } from "lucide-react";
import { ModeToggle } from "@/components/theme-mode-switch";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

export const Footer = () => {
  return (
    <footer className="py-6 border-t">
      <div className="container">
        <div className="flex flex-col lg:flex-row justify-between gap-24">
          <BrandLogo className="h-8 w-fit fill-background col-span-3 lg:col-span-1" />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-24 justify-between">
            {siteConfig.footer.map((footer_item) => {
              return (
                <ul
                  key={footer_item.category}
                  className="flex flex-col gap-4 text-muted-foreground"
                >
                  <li className="font-medium text-foreground">
                    {footer_item.category}
                  </li>
                  {footer_item.items.map((item) => {
                    return (
                      <li key={item.title}>
                        <a
                          href={`${item.href}`}
                          className="hover:text-foreground"
                        >
                          {item.title}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              );
            })}
          </div>
          <form action="">
            <p className="text-lg font-medium mb-4">
              Subscribe to our newsletter
            </p>
            <div className="relative w-fit">
              <Input
                type="email"
                placeholder="seizaku.dev@gmail.com"
                className="pr-12 w-64"
              />
              <Button size={"icon"} className="absolute top-1 right-1 h-7 w-7">
                <SendHorizonalIcon className="h-3" />
              </Button>
            </div>
          </form>
        </div>
        <div className="mt-6 flex items-center justify-between">
          <p className="text-muted-foreground">
            Built by <span className="font-medium">Seizaku.</span>
          </p>
          <div className="flex gap-4 items-cente">
            <Link
              href={siteConfig.social_links.github}
              className={buttonVariants({ size: "icon", variant: "ghost" })}
            >
              <GitHubLogoIcon />
            </Link>
            <ModeToggle />
          </div>
        </div>
      </div>
    </footer>
  );
};
