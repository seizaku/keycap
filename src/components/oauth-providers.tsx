import { Button } from "@/components/ui/button";
import { BiLogoGoogle, BiLogoFacebook } from "react-icons/bi";

export const OAuthProviders = () => {
  return (
    <div className="my-2 grid grid-cols-1 gap-2">
      <Button variant={"outline"} className="w-full">
        <BiLogoGoogle className="text-foreground mr-2" /> Google
      </Button>
      <Button variant={"outline"} className="w-full">
        <BiLogoFacebook className="text-foreground mr-2" /> Facebook
      </Button>
    </div>
  );
};
