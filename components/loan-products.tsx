"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, House, Buildings, ShieldCheck, CurrencyInr, ArrowsLeftRight, Wrench } from "@phosphor-icons/react";

const products = [
  {
    title: "Home Loan for Purchase",
    description: "Finance for ready-to-move or under-construction apartments and independent houses.",
    href: "/loans/home-loan",
    icon: House,
    highlight: "Up to 25 Years Tenure",
  },
  {
    title: "Loan for Construction",
    description: "Milestone-based staged disbursements to construct your house on an owned residential plot.",
    href: "/loans/construction-loan",
    icon: Buildings,
    highlight: "Milestone Disbursals",
  },
  {
    title: "Composite Home Loan",
    description: "Combined funding facility to acquire a residential plot and build your home.",
    href: "/loans/plot-construction",
    icon: ShieldCheck,
    highlight: "Plot + Construction",
  },
  {
    title: "Loan Against Property",
    description: "Unlock liquidity against existing residential or commercial property for business or personal needs.",
    href: "/loans/loan-against-property",
    icon: CurrencyInr,
    highlight: "High Loan Value",
  },
  {
    title: "Balance Transfer & Top-Up",
    description: "Transfer your existing loan to Nivara for lower EMIs, better terms, and additional top-up funds.",
    href: "/loans/balance-transfer",
    icon: ArrowsLeftRight,
    highlight: "Lower Monthly EMI",
  },
  {
    title: "Home Improvement & Extension",
    description: "Financing to renovate, expand, add additional floors, or upgrade your existing property.",
    href: "/loans/renovation-loan",
    icon: Wrench,
    highlight: "Quick Approval",
  },
];

export function LoanProducts() {
  return (
    <section className="bg-white border-b border-zinc-200 py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-10 sm:mb-12">
          <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">
            Loan Products
          </p>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900">
            Comprehensive Housing Solutions
          </h2>
          <p className="mt-2 text-sm sm:text-base text-zinc-600 leading-relaxed">
            Tailored loan products crafted for salaried, self-employed, and informal income segments with minimal documentation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => {
            const Icon = product.icon;
            return (
              <div
                key={product.title}
                className="bg-white p-6 rounded-lg border border-zinc-200 hover:border-zinc-300 transition-colors flex flex-col justify-between group"
              >
                <div>
                  <div className="w-10 h-10 rounded-md bg-zinc-100 text-zinc-800 flex items-center justify-center mb-4">
                    <Icon size={20} />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-zinc-900">
                    {product.title}
                  </h3>
                  <p className="mt-2 text-sm text-zinc-600 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-zinc-100 flex items-center justify-between">
                  <span className="text-xs font-medium text-zinc-500">
                    {product.highlight}
                  </span>
                  <Link
                    href={product.href}
                    className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline group-hover:translate-x-0.5 transition-transform"
                  >
                    <span>Apply</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default LoanProducts;
