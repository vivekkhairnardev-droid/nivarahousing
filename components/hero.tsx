"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="bg-white border-b border-zinc-200 py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Heading, Description, and Actions */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-zinc-900 leading-[1.25]">
              Build Your Home with Confidence
            </h1>

            <p className="mt-4 text-base sm:text-lg text-zinc-600 leading-relaxed max-w-2xl">
              Get financing for your residential plot and home construction with flexible loan options and convenient disbursements.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3.5 sm:gap-4">
              <Link
                href="/loans/home-loan"
                className="inline-flex items-center justify-center h-11 sm:h-12 px-6 rounded-md bg-primary text-primary-foreground font-medium text-sm sm:text-base hover:bg-primary/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                Explore Home Loans
              </Link>

              <Link
                href="/calculators/emi-calculator"
                className="inline-flex items-center justify-center h-11 sm:h-12 px-6 rounded-md bg-white border border-zinc-300 text-zinc-800 font-medium text-sm sm:text-base hover:bg-zinc-50 hover:border-zinc-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:ring-offset-2"
              >
                Calculate EMI
              </Link>
            </div>
          </div>

          {/* Right Column: Clean, Unobstructed House Photograph */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden border border-zinc-200 bg-zinc-100">
              <Image
                src="/hero-construction.jpg"
                alt="Residential home financed by Nivara Housing Finance"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
