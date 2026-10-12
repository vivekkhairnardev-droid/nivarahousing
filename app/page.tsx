import { Hero } from "@/components/hero";
import { ImpactStats } from "@/components/impact-stats";
import { LoanProducts } from "@/components/loan-products";
import { WhyChooseUs } from "@/components/why-choose-us";
import { HowItWorks } from "@/components/how-it-works";
import { Testimonials } from "@/components/testimonials";
import { CtaBanner } from "@/components/cta-banner";
import { IsoCertificationDialog } from "@/components/iso-dialog";
import { HeroSlider } from "@/components/hero-slider";
import { LoanOptions } from "@/components/loan-options";
import { WhyNivara } from "@/components/why-nivara";

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      {/* <Hero /> */}
      <HeroSlider />
      <LoanOptions />
      <HowItWorks />
      <WhyNivara />
      <ImpactStats />
      <LoanProducts />
      <Testimonials />
      <WhyChooseUs />
      <CtaBanner />
      <IsoCertificationDialog />
    </div>
  );
}
