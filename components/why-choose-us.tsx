"use client";

import React from "react";
import { CheckCircle, ShieldCheck, Clock, UserCheck, FileText, Buildings } from "@phosphor-icons/react";

const reasons = [
  {
    title: "Easy Approval",
    description: "Hassle-free and fast sanction processes designed to respect your valuable time.",
    icon: CheckCircle,
  },
  {
    title: "Competitive Rates",
    description: "Affordable home loan interest rates starting from 9.50%* p.a. with zero hidden fees.",
    icon: Buildings,
  },
  {
    title: "Doorstep Assistance",
    description: "Our dedicated relationship managers visit you directly for all paperwork and verification.",
    icon: UserCheck,
  },
  {
    title: "Minimal Paperwork",
    description: "Transparent evaluation criteria accommodating self-employed and informal income proofs.",
    icon: FileText,
  },
  {
    title: "Quick Disbursement",
    description: "Timely release of funds aligned with builder demands or construction milestones.",
    icon: Clock,
  },
  {
    title: "Dedicated Support",
    description: "Single point of contact for customer servicing, account statements, and tax certificates.",
    icon: ShieldCheck,
  },
];

export function WhyChooseUs() {
  return (
    <section className="bg-zinc-50 border-b border-zinc-200 py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-10 sm:mb-12">
          <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">
            Why Choose Us
          </p>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900">
            Why Choose Nivara?
          </h2>
          <p className="mt-2 text-sm sm:text-base text-zinc-600 leading-relaxed">
            We are committed to making homeownership accessible, transparent, and affordable for every aspiring family.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <div
                key={reason.title}
                className="bg-white p-6 rounded-lg border border-zinc-200"
              >
                <div className="w-10 h-10 rounded-md bg-[#17365D]/10 text-[#17365D] flex items-center justify-center mb-4">
                  <Icon size={20} weight="bold" />
                </div>
                <h3 className="font-heading text-base font-bold text-zinc-900">
                  {reason.title}
                </h3>
                <p className="mt-2 text-sm text-zinc-600 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Regulatory & Institutional Trust Strip */}
        <div className="mt-10 p-5 rounded-lg bg-white border border-zinc-200 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
          <div className="p-2 border-b sm:border-b-0 sm:border-r border-zinc-200">
            <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider block">
              Regulatory Registration
            </span>
            <span className="font-heading text-sm font-bold text-zinc-900 mt-1 block">
              NHB Registered Housing Finance Company
            </span>
          </div>

          <div className="p-2 border-b sm:border-b-0 sm:border-r border-zinc-200">
            <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider block">
              Information Security
            </span>
            <span className="font-heading text-sm font-bold text-zinc-900 mt-1 block">
              ISO/IEC 27001:2022 Certified
            </span>
          </div>

          <div className="p-2">
            <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider block">
              Credit Rating
            </span>
            <span className="font-heading text-sm font-bold text-zinc-900 mt-1 block">
              A-; Stable (ICRA)
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
