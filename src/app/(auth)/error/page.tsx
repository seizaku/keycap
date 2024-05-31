import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function ErrorPage() {
  return (
    <main className="h-screen">
      <div className="container mx-auto flex flex-col justify-center items-center h-full">
        <h1 className="text-8xl font-bold">An error has occured.</h1>
        <h2 className="text-4xl font-medium">{`Something's Missing`}</h2>
        <p className="text-lg text-muted-foreground mt-4 text-center">
          Please try again later.
        </p>
        <Link href={"/"} className={buttonVariants({ className: "mt-4" })}>
          Back to Homepage
        </Link>
      </div>
    </main>
  );
}
