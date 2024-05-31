"use client";

import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";
import { ReactNode, useEffect } from "react";
import { Loader2 } from "lucide-react";

interface SubmitButton {
  className?: string;
  children: ReactNode;
  pendingText?: string;
}

export const SubmitButton = ({
  className,
  children,
  pendingText,
}: SubmitButton) => {
  const { pending } = useFormStatus();

  useEffect(() => {
    console.log(pending);
  }, []);

  return (
    <Button className={className} type="submit">
      {pending ? (
        <>
          <Loader2 className="h-4 animate-spin" />{" "}
          {pendingText ? pendingText : "Submitting..."}
        </>
      ) : (
        children
      )}
    </Button>
  );
};
