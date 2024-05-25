import { SectionContainer } from "./section-container";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { ProductCard } from "@/components/product-card";
import { ArrowRight } from "lucide-react";

const products = [
  {
    title: "Pokémon Pickachu",
    price: 48.99,
    artist: "Dwarf Factory",
    src: "/pokemon.png",
  },
  {
    title: "Gnary Drakon",
    price: 45.99,
    artist: "Dwarf Factory",
    src: "https://keycapagency.com/cdn/shop/products/rong-7_540x.jpg?v=1658117509",
  },
  {
    title: "Sci-fi Whale Yellow",
    price: 44.99,
    artist: "Dwarf Factory",
    src: "https://keycapagency.com/cdn/shop/products/McWhale-Ecom1.jpg",
  },
  {
    title: "Hamburger Meal",
    price: 44.99,
    artist: "Dwarf Factory",
    src: "https://keycapagency.com/cdn/shop/products/fast-food-13-1_540x.png?v=1669803057",
  },
];

export const TrendingSection = () => {
  return (
    <SectionContainer>
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-bold">Featured</h1>
          <p className="text-lg text-muted-foreground">
            Handcrafted by artisans around the world
          </p>
        </div>
        <Link className={buttonVariants({ variant: "outline" })} href={"/"}>
          View all <ArrowRight className="h-4 ml-2" />
        </Link>
      </div>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products?.map((product, index) => {
          return (
            <ProductCard
              key={index + 1}
              title={product.title}
              price={product.price}
              artist={product.artist}
              src={product.src}
            />
          );
        })}
      </div>
    </SectionContainer>
  );
};
