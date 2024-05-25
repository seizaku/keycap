import { cn } from "@/lib/utils";

export const SectionContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <section className={cn("py-24 container mx-auto", className)}>
      {children}
    </section>
  );
};
