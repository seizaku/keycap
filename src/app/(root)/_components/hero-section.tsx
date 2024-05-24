import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <section className="w-full h-96 sm:h-[720px] overflow-hidden">
      <div className="relative h-full w-full flex items-center">
        <div className="absolute text-center w-full h-full flex flex-col justify-center bg-primary/80">
          <h1 className="font-extrabold text-3xl md:text-4xl lg:text-5xl text-primary-foreground">
            Beauty at <br /> Your Fingertips
          </h1>
          <p className="max-w-sm md:max-w-md mx-auto mt-6 text-primary-foreground">
            Elevate your typing experience with PBT keycaps from Sunzit.
            Redefine your typing sanctuary effortlessly.
          </p>
          <div className="flex gap-6 justify-center mt-6">
            <Button size={"lg"}>Explore Products</Button>
            <Button variant={"outline"} size={"lg"}>
              Custom Design
            </Button>
          </div>
        </div>
        <div className="w-full h-full">
          <img
            src="/hero.jpg"
            alt="hero-img"
            className="h-full w-full object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
};
