import MaxwidthWrapper from "@/components/MaxwidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { ArrowDownToLine, CheckCircle, Leaf } from "lucide-react";
import { ReactElement } from "react";

type Perks = {
  name: string;
  Icon: any;
  description: string;
};
const perks: Perks[] = [
  {
    name: "Instant Delivery",
    Icon: ArrowDownToLine,
    description:
      "Get your assets delivered to your email in seconds and download them right away",
  },
  {
    name: "Guaranteed Quality",
    Icon: CheckCircle,
    description:
      "Every assets on our platform is verified by our team to ensure quality standard. Not Happy? We offer a 30-day refund guarantee",
  },
  {
    name: "For the Planet",
    Icon: Leaf,
    description:
      "We've pledged 1% of sales to the preservation and restoration of the natural environment",
  },
];

export default function Home() {
  return (
    <>
      <MaxwidthWrapper>
        {/* Hero section */}
        <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Your marketplace for high quality{" "}
            <span className="text-green-600">digital assets</span>
          </h1>
          <p className="mt-6 text-lg max-w-prose text-muted-foreground">
            Welcome to DigiMart Hippo.Every assets on our platform is verifiedby
            our team to ensure our highest quality standards
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link href={"/products"} className={buttonVariants()}>
              Browse Trending
            </Link>
            <Button variant={"ghost"}>Our quality promise &rarr;</Button>
          </div>
        </div>

        {/* TODO: List products */}
      </MaxwidthWrapper>

      {/* Feature section */}
      <section className="border-t border-gray-200 bg-gray-50">
        <MaxwidthWrapper className="py-20">
          {/* Perks */}
          <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-y-0">
            {perks.map((perk) => (
              <div
                className="text-center md:flex md:items-start md:text-left lg:block lg:text-center"
                key={perk.name}
              >
                {/* Icon */}
                <div className="md:flex-shrink-0 flex justify-center">
                  <div className="h-16 w-16 flex items-center justify-center rounded-full bg-green-100 text-green-900">
                    {<perk.Icon className="w-1/3 h-1/3" />}
                  </div>
                </div>
                {/* Text */}
                <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                  <h3 className="text-base font-medium text-gray-900">
                    {perk.name}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground">
                    {perk.description }
                  </p>
                </div>
              </div>
            ))}
          </div>
        </MaxwidthWrapper>
      </section>
    </>
  );
}
