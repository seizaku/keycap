import { Button } from "@/components/ui/button";
import { BiLogoGoogle, BiLogoFacebook } from "react-icons/bi";
import Link from "next/link";
import { BrandLogo } from "@/components/logo";
import { SignUpForm } from "./_components/signup-form";
import Image from "next/image";

export default function SignUpPage() {
  return (
    <main className="flex bg-background">
      <div className="hidden md:block relative w-full bg-accent">
        <div className="absolute container pt-6 bg-background/60 h-full">
          <BrandLogo className="h-8 w-fit fill-transparent mb-4" />
        </div>
        <Image
          src="/img-2.jpg"
          alt="img"
          className="top-0 h-full w-full object-cover"
        />
      </div>
      <div className="container w-full h-screen flex justify-center items-center">
        <div className="max-w-sm w-full p-6 rounded-lg">
          <BrandLogo className="md:hidden h-8 w-fit fill-transparent mx-auto mb-4" />
          <h1 className="font-medium text-lg">Sign up</h1>
          <p className="text-sm text-muted-foreground mb-6">
            {`Enter your email, and we'll send you a code to your inbox. No need
            for passwords — like magic!`}
          </p>
          <SignUpForm />
          <div className="relative my-4">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t"></span>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div>
          <div className="my-2 grid grid-cols-1 gap-2">
            <Button variant={"outline"} className="w-full">
              <BiLogoGoogle className="text-foreground mr-2" /> Google
            </Button>
            <Button variant={"outline"} className="w-full">
              <BiLogoFacebook className="text-foreground mr-2" /> Facebook
            </Button>
          </div>
          <p className="text-sm text-center">
            Have an account?
            <span className="font-medium ml-1">
              <Link href={"/signin"}>Sign in</Link>
            </span>
          </p>
        </div>
      </div>
    </main>
  );
}
