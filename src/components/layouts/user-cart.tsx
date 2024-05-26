import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";

export const UserCart = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant={"outline"} size={"icon"}>
          <ShoppingCart className="h-4 w-4" />
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-sm">
        <SheetHeader>
          <SheetTitle>Cart</SheetTitle>
          <SheetDescription>
            Manage your items here. Review, update quantities, or remove
            products before checkout.
          </SheetDescription>
        </SheetHeader>
        <div className="flex flex-col items-center justify-center h-1/2 text-muted-foreground">
          <ShoppingCart className="h-12 w-12 mb-2" />
          <h1 className="text-xl font-medium">Your cart is empty</h1>
          <Link href={""} className="text-sm hover:underline">
            Add items to your cart to checkout
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
};
