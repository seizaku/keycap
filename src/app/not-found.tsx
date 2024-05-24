import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { SiteHeader } from "@/components/layouts/site-header";
import { Footer } from "@/components/layouts/footer";
export default function Home() {
  return (
    <main className="h-screen">
      <SiteHeader />
      <div className="container mx-auto flex flex-col justify-center items-center h-full">
        <h1 className="text-8xl font-bold">404</h1>
        <h2 className="text-4xl font-medium">{`Something's Missing`}</h2>
        <p className="text-lg text-muted-foreground mt-4 text-center">
          This page might still be under construction.
        </p>
        <Link href={"/"} className={buttonVariants({ className: "mt-4" })}>
          Back to Homepage
        </Link>
      </div>
      <Footer />
    </main>
  );
}
