import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="container mx-auto flex flex-col justify-center items-center h-screen">
        <h1 className="text-8xl font-bold">404</h1>
        <h2 className="text-4xl font-medium">{`Something's Missing`}</h2>
        <p className="text-lg text-muted-foreground mt-4 text-center">
          Sorry, we can't find that page. You'll find lots to explore on the
          home page.
        </p>
        <Link href={"/"} className={buttonVariants({ className: "mt-4" })}>
          Back to Homepage
        </Link>
      </div>
    </main>
  );
}
