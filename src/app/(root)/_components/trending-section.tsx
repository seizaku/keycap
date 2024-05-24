import { SectionContainer } from "./section-container";
import Image from "next/image";
import Link from "next/link";
import { ProductCard } from "@/components/product-card";

const products = [
  {
    title: "Terrarium Easter Dream",
    price: 56.99,
    artist: "Matoko Sensei",
    src: "https://m.media-amazon.com/images/I/61HpcYg0vWL._AC_UF1000,1000_QL80_.jpg",
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
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
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
