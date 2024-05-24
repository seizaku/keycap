import { SectionContainer } from "./section-container";
import Image from "next/image";
import Link from "next/link";
import { ProductCard } from "@/components/product-card";

const products = [
  {
    title: "Pokémon Pickachu",
    price: 48.99,
    artist: "Dwarf Factory",
    src: "https://keycapagency.com/cdn/shop/products/Pokemon-Ecom-8_540x.png?v=1661702773",
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
];

export const TrendingSection = () => {
  return (
    <SectionContainer>
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-bold">Trending Keycaps</h1>
          <p className="text-xl text-muted-foreground">
            Explore products from around the world
          </p>
        </div>
        <Link
          className="underline text-muted-foreground hover:text-foreground"
          href={"/"}
        >
          View all
        </Link>
      </div>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
