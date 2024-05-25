import Image from "next/image";
import Link from "next/link";

export interface ProductCard {
  title: string;
  price: number;
  artist: string;
  src: string;
}

export const ProductCard = ({ title, price, artist, src }: ProductCard) => {
  return (
    <Link href="" className="h-96 w-full mb-12">
      <div className="relative h-full w-full bg-muted flex justify-center items-center rounded overflow-hidden">
        <Image
          fill
          alt="image"
          className="object-cover transition-all hover:scale-110 ease-in-out rounded"
          src={src}
        />
      </div>
      <div className="mt-2">
        <span className="font-medium">{title}</span>
        <div className="flex justify-between items-center">
          <span className="text-muted-foreground text-sm">By {artist}</span>
          <span className="font-bold">${price}</span>
        </div>
      </div>
    </Link>
  );
};
