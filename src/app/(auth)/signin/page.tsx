import { Button } from "@/components/ui/button";
import { BiLogoGoogle, BiLogoFacebook } from "react-icons/bi";
import Link from "next/link";
import { BrandLogo } from "@/components/logo";
import { SignInForm } from "./_components/signin-form";

export default function SignInPage() {
  return (
    <main className="flex bg-background">
      <div className="hidden md:block relative w-full bg-accent">
        <div className="absolute container pt-6 bg-background/60 h-full">
          <BrandLogo className="h-8 w-fit fill-transparent mb-4" />
        </div>
        <img
          src="/img-2.jpg"
          alt="img"
          className="top-0 h-full w-full object-cover"
        />
      </div>
      <div className="container w-full h-screen flex justify-center items-center">
        <div className="max-w-sm w-full p-6 rounded-lg">
          <BrandLogo className="md:hidden h-8 w-fit fill-transparent mx-auto mb-4" />
          <h1 className="font-medium text-lg">Sign in</h1>
          <p className="text-sm text-muted-foreground mb-6">
            Enter your email, and we'll send you a code to your inbox. No need
            for passwords — like magic!
          </p>
          <SignInForm />
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
            No account?
            <span className="font-medium ml-1">
              <Link href={"/signup"}>Create one</Link>
            </span>
          </p>
        </div>
      </div>
    </main>
  );
}
