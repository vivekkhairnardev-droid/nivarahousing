"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, MapPin } from "@phosphor-icons/react";

export function CtaBanner() {
  return (
    <section className="bg-[#17365D] text-white py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
            Start Building Your Future with Nivara
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-300 max-w-2xl mx-auto leading-relaxed">
            Get in touch with our housing finance specialists today for doorstep evaluation, or visit your nearest branch across 119+ locations.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/loans/home-loan"
              className="inline-flex items-center justify-center gap-2 h-11 sm:h-12 px-6 rounded-md bg-[#D60000] text-white font-medium text-sm sm:text-base hover:bg-[#b80000] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#D60000]"
            >
              <span>Apply for Home Loan</span>
              <ArrowRight size={16} />
            </Link>

            <Link
              href="/locate-branch"
              className="inline-flex items-center justify-center gap-2 h-11 sm:h-12 px-6 rounded-md bg-white/10 hover:bg-white/15 border border-white/20 text-white font-medium text-sm sm:text-base transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white"
            >
              <MapPin size={16} />
              <span>Locate Nearest Branch</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CtaBanner;
