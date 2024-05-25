import { SectionContainer } from "./section-container";
import { Package, Headset, ShieldCheck } from "lucide-react";

export type promotions = typeof promotions;
const promotions = [
  {
    title: "Fast and Free Delivery",
    description: "Free delivery for all keycap orders",
    icon: <Package className="h-12 w-12 mb-4" />,
  },
  {
    title: "24/7 Customer Support",
    description: "Free delivery for all keycap orders",
    icon: <Headset className="h-12 w-12 mb-4" />,
  },
  {
    title: "Money Back Guarantee",
    description: "We return money within 30 days",
    icon: <ShieldCheck className="h-12 w-12 mb-4" />,
  },
];

export const ServicePromotion = () => {
  return (
    <SectionContainer className="border border-dashed rounded mb-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-24 sm:gap-0 sm:divide-x">
        {promotions.map((item) => {
          return (
            <div
              key={item.title}
              className="flex flex-col justify-center items-center"
            >
              {item.icon}
              <h3 className="font-medium text-lg">{item.title}</h3>
              <p className="text-muted-foreground text-sm">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </SectionContainer>
  );
};
