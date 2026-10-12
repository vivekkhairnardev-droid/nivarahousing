import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/** Edit the steps here. This one really is a sequence, so numbering is meaningful. */
const STEPS = [
  {
    title: "Apply",
    text: "Share your details online or visit your nearest branch. A Nivara advisor gets in touch to guide you.",
  },
  {
    title: "We assess",
    text: "We look at your income the way you actually earn it, and check the property papers.",
  },
  {
    title: "Get your sanction",
    text: "See your loan amount, tenure and EMI in writing before you commit to anything.",
  },
  {
    title: "Receive funds",
    text: "Money is released for your plot, or in stages as your construction moves forward.",
  },
];

export function HowItWorks() {
  return (
    <section
      aria-labelledby="how-heading"
      className="bg-[#faf5f4] py-14 lg:py-[72px]"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-9 lg:grid-cols-[5fr_7fr] lg:items-start lg:gap-[72px]">
          {/* Left: heading stays in view while the steps scroll (top-28 provides clearance below sticky navbar) */}
          <div className="lg:sticky lg:top-28">
            <h2
              id="how-heading"
              className="mb-4 text-[clamp(1.875rem,3.6vw,2.875rem)] font-extrabold leading-[1.1] tracking-[-0.035em] text-balance text-foreground"
            >
              From application to keys, one step at a time
            </h2>
            <p className="mb-7 max-w-[30em] text-lg text-muted-foreground">
              A simple path with a real person guiding you through it.
            </p>
            <Link
              href="/apply"
              className={cn(buttonVariants(), "inline-flex h-auto rounded-full px-7 py-4 text-base font-bold")}
            >
              Start your application
            </Link>
            <p className="mt-4 max-w-[30em] text-[13px] text-muted-foreground">
              Documents needed vary by loan type. Your Nivara advisor will confirm the list for you.
            </p>
          </div>

          {/* Right: numbered steps */}
          <ol className="divide-y divide-black/10 border-y border-black/10">
            {STEPS.map((step, i) => (
              <li
                key={step.title}
                className="grid grid-cols-[60px_1fr] gap-3 py-7 sm:grid-cols-[84px_1fr] sm:py-[30px]"
              >
                <span
                  aria-hidden
                  className="text-[40px] font-extrabold leading-none tracking-[-0.05em] text-primary sm:text-[52px]"
                >
                  {i + 1}
                </span>
                <div>
                  <h3 className="mb-1.5 mt-0.5 text-[22px] font-bold tracking-tight text-foreground">
                    {step.title}
                  </h3>
                  <p className="max-w-[34em] text-muted-foreground">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}