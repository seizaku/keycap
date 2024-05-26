import { useForm } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const SignInForm = () => {
  return (
    <form action="" className="w-full space-y-4">
      <div className="grid gap-1.5">
        <Label>Email</Label>
        <Input type="email" placeholder="seizaku.dev@gmail.com" />
      </div>
      <Button className="w-full">Sign in</Button>
    </form>
  );
};
