export const SectionContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <section className="py-24 container mx-auto">{children}</section>;
};
